import {RemovalPolicy, Stack, StackProps} from "aws-cdk-lib";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as route53 from "aws-cdk-lib/aws-route53";
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as targets from 'aws-cdk-lib/aws-route53-targets';
import {BucketDeployment, Source} from "aws-cdk-lib/aws-s3-deployment";
import {Construct} from "constructs";
import {Domain} from "./domain";

interface MyDevJourneyStackProps extends StackProps {
    readonly appId: string;
    readonly domainName: string;
    readonly hostedZoneDomain: string;
}

export class MyDevJourneyStack extends Stack {
    readonly domain: Domain;
    readonly appBucket: s3.Bucket;

    constructor(scope: Construct, id: string, props: MyDevJourneyStackProps) {
        super(scope, id, props);

        // Define domain with Domain Class
        this.domain = new Domain(this, "Domain", {
            domainName: props.domainName,
            hostedZoneDomain: props.hostedZoneDomain,
        });

        const hostedZone = route53.HostedZone.fromLookup(this, "HostedZone", {
            domainName: this.domain.hostedZoneDomain,
        });

        this.appBucket = new s3.Bucket(this, "MyDevJourneysBucket", {
            cors: [
                {
                    allowedMethods: [
                        s3.HttpMethods.GET,
                        s3.HttpMethods.PUT,
                        s3.HttpMethods.HEAD,
                        s3.HttpMethods.POST,
                    ],
                    allowedOrigins: ["*"],
                    allowedHeaders: ["*"],
                },
            ],
            websiteIndexDocument: "index.html",
            websiteErrorDocument: "index.html",
            publicReadAccess: true,
        });

        const distribution = new cloudfront.CloudFrontWebDistribution(this, "cloudfront", {
            originConfigs: [
                {
                    s3OriginSource: {
                        s3BucketSource: this.appBucket,
                    },
                    behaviors: [
                        {
                            isDefaultBehavior: true,
                            allowedMethods: cloudfront.CloudFrontAllowedMethods.ALL,
                        }
                    ],
                },
            ],
            viewerCertificate: cloudfront.ViewerCertificate.fromAcmCertificate(
                this.domain.wildcardCertificate,
                {
                    aliases: [this.domain.domainName],
                    securityPolicy: cloudfront.SecurityPolicyProtocol.TLS_V1_2_2018,
                    sslMethod: cloudfront.SSLMethod.SNI,
                }),
            defaultRootObject: "index.html",
            errorConfigurations: [
                {
                    errorCode: 404,
                    responseCode: 200,
                    responsePagePath: "/index.html",
                }
            ],
        })

        new route53.ARecord(this, "A", {
            zone: hostedZone,
            recordName: props.domainName,
            target: route53.RecordTarget.fromAlias(new targets.CloudFrontTarget(distribution)),
        });

        const frontEndPath = __dirname + "/../../out";
        new BucketDeployment(this, "MyDevJourneyBlog", {
            sources: [Source.asset(frontEndPath)],
            destinationBucket: this.appBucket,
        });


    }
}