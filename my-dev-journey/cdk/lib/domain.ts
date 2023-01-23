import * as cdk from "aws-cdk-lib";
import * as route53 from "aws-cdk-lib/aws-route53";
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as apiGateway from "aws-cdk-lib/aws-apigateway";
import * as route53Targets from "aws-cdk-lib/aws-route53-targets";
import * as route53Patterns from "aws-cdk-lib/aws-route53-patterns";
import {Construct} from "constructs";

interface DomainProps {
    domainName: string;
    hostedZoneDomain: string;
}

export class Domain extends Construct {
    readonly hostedZone: route53.IHostedZone;
    readonly wildcardCertificate: acm.DnsValidatedCertificate;
    readonly apiDomainName: apiGateway.DomainName;
    readonly domainName: string;
    readonly hostedZoneDomain: string;

    constructor(scope: Construct, id: string, props: DomainProps) {
        super(scope, id);

        this.domainName = props.domainName; // mydevjourneys.com
        this.hostedZoneDomain = props.hostedZoneDomain;// mydevjourneys.com

        this.hostedZone = route53.HostedZone.fromLookup(this, "HostedZone", {
            domainName: this.hostedZoneDomain,
        });

        this.wildcardCertificate = new acm.DnsValidatedCertificate(this, "WildcardCertificate", {
            domainName: `*.${this.domainName}`,
            subjectAlternativeNames: [this.domainName],
            hostedZone: this.hostedZone,
            region: "us-east-1", // Cloudfront only checks this region for certificates.
        });
        (
            this.wildcardCertificate.node.findChild("CertificateRequestorResource") as cdk.CustomResource
        ).applyRemovalPolicy(cdk.RemovalPolicy.RETAIN);

        // new route53Patterns.HttpsRedirect(this, "NonWwwToWww", {
        //   recordNames: [this.domainName],
        //   targetDomain: `www.${this.domainName}`,
        //   zone: this.hostedZone,
        //   certificate: this.wildcardCertificate,
        // });

        this.apiDomainName = new apiGateway.DomainName(this, "ApiDomainName", {
            domainName: `api.${this.domainName}`,
            certificate: this.wildcardCertificate,
            endpointType: apiGateway.EndpointType.EDGE,
        });

        new route53.ARecord(this, "ApiDomainAliasRecord", {
            recordName: `api.${this.domainName}`,
            zone: this.hostedZone,
            target: route53.RecordTarget.fromAlias(
                new route53Targets.ApiGatewayDomain(this.apiDomainName)
            ),
        });
    }
}
