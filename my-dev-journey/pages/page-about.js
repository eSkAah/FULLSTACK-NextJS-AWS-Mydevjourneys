import Link from "next/link";
import Accordion from "../components/elements/Accordion";
import PortfolioFilter from "../components/elements/PortfolioFilter";
import Layout from "../components/layout/Layout";
import Brand from "../components/slider/Brand";
import Testimonial from "../components/slider/Testimonial";
import Typewriter from 'typewriter-effect';

export default function Home() {
    return (
        <>
            <Layout>
                <div className="cover-home1">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-1" />
                            <div className="col-xl-10 col-lg-12">
                                <div className="banner">
                                    <div className="row align-items-end">
                                        <div className="col-lg-6 mb-4 pt-100"><span className="text-sm-bold color-gray-600 wow animate__animated animate__fadeInUp">Hello Everyone!</span>
                                            <h1 className="color-gray-50 mt-20 mb-20 wow animate__animated animate__fadeInUp">I’m
                                                {/* <Link className="typewrite color-linear" href="#" data-period={3000} data-type="[ &quot;Brian Clark&quot;, &quot;Designer&quot;, &quot;Creator&quot; ]" /> */}
                                                <Typewriter
                                                    options={{
                                                        wrapperClassName: "typewrite color-linear",
                                                        strings: ['Allan Breuil', 'Developer'],
                                                        autoStart: true,
                                                        loop: true,
                                                    }}
                                                />
                                            </h1>
                                            <div className="row">
                                                <div className="col-lg-9">
                                                    <p className="text-base color-gray-600 wow animate__animated animate__fadeInUp">I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>
                                                </div>
                                            </div>
                                            {/*<div className="box-subscriber mt-40 mb-50 wow animate__animated animate__fadeInUp">*/}
                                            {/*    <div className="inner-subscriber bg-gray-800">*/}
                                            {/*        <form className="d-flex" action="#">*/}
                                            {/*            <input className="input-sybscriber" type="text" placeholder="Type your email address" />*/}
                                            {/*            <button className="btn btn-linear btn-arrow-right">Subscribe<i className="fi-rr-arrow-small-right" /></button>*/}
                                            {/*        </form>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                        </div>
                                        <div className="col-lg-6 text-center">
                                            <div className="banner-img position-relative wow animate__animated animate__fadeIn"><img src="assets/imgs/page/homepage1/me-short.png" alt="Genz" />
                                                <div className="pattern-1"><img src="assets/imgs/template/pattern-1.svg" alt="Genz" /></div>
                                                <div className="pattern-2"><img src="assets/imgs/template/pattern-2.svg" alt="Genz" /></div>
                                                <div className="pattern-3"><img src="assets/imgs/template/pattern-3.svg" alt="Genz" /></div>
                                                <div className="pattern-4"><img src="assets/imgs/template/pattern-4.svg" alt="Genz" /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-features mt-4 bg-gray-850 border-gray-800">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 mb-50 wow animate__animated animate__fadeIn" data-wow-delay="0s"><span className="item-icon bg-gray-950 icon-motion" />
                                            <h5 className="color-white mb-15">Motion &amp;<br />Web Graphy</h5>
                                            <p className="text-base color-gray-700">NetTracking" is a very powerful Web 2.0 site search engine allows you to find  email allerts</p>
                                        </div>
                                        <div className="col-lg-4 col-md-6 mb-50 wow animate__animated animate__fadeIn" data-wow-delay="0.1s"><span className="item-icon bg-gray-950 icon-ui" />
                                            <h5 className="color-white mb-15">UI/Ux<br />Consultancy</h5>
                                            <p className="text-base color-gray-700">NetTracking" is a very powerful Web 2.0 site search engine allows you to find  email allerts</p>
                                        </div>
                                        <div className="col-lg-4 col-md-6 mb-50 wow animate__animated animate__fadeIn" data-wow-delay="0.2s"><span className="item-icon bg-gray-950 icon-branding" />
                                            <h5 className="color-white mb-15">Branding<br />&amp; Design</h5>
                                            <p className="text-base color-gray-700">NetTracking" is a very powerful Web 2.0 site search engine allows you to find  email allerts</p>
                                        </div>
                                        <div className="col-lg-4 col-md-6 mb-50 wow animate__animated animate__fadeIn" data-wow-delay="0s"><span className="item-icon bg-gray-950 icon-product" />
                                            <h5 className="color-white mb-15">Product<br />Photography</h5>
                                            <p className="text-base color-gray-700">NetTracking" is a very powerful Web 2.0 site search engine allows you to find  email allerts</p>
                                        </div>
                                        <div className="col-lg-4 col-md-6 mb-50 wow animate__animated animate__fadeIn" data-wow-delay="0.1s"><span className="item-icon bg-gray-950 icon-key" />
                                            <h5 className="color-white mb-15">Key Seo<br />Optimization</h5>
                                            <p className="text-base color-gray-700">NetTracking" is a very powerful Web 2.0 site search engine allows you to find  email allerts</p>
                                        </div>
                                        <div className="col-lg-4 col-md-6 mb-50 wow animate__animated animate__fadeIn" data-wow-delay="0.2s"><span className="item-icon bg-gray-950 icon-social" />
                                            <h5 className="color-white mb-15">Social<br />Management</h5>
                                            <p className="text-base color-gray-700">NetTracking" is a very powerful Web 2.0 site search engine allows you to find  email allerts</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-70 mb-50">
                                    <h2 className="color-linear d-inline-block mb-20 wow animate__animated animate__fadeInUp">My Latest Projects</h2>
                                    <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp">The convention is the main event of the year for professionals in<br className="d-none d-lg-block" />the world of design and architecture.</p>
                                </div>


                                <PortfolioFilter col={4} />


                                <div className="text-center mt-30 mb-50">
                                    <h2 className="color-linear d-inline-block mb-10 wow animate__animated animate__fadeInUp">
                                        The best work solution,<br />for the best price.</h2>
                                </div>
                                <div className="row mt-50 mb-30">
                                    <div className="col-lg-4 wow animate__animated animate__fadeIn" data-wow-delay=".0s">
                                        <div className="card-pricing border-gray-800 bg-gray-850 mb-30">
                                            <div className="card-pricing-top border-gray-800">
                                                <h3 className="color-white mb-10">Free</h3>
                                                <p className="text-lg color-gray-500 mb-15">Best for personal use</p>
                                                <p className="text-base color-gray-500 mb-30">Get started without creadit card or payment method</p><Link className="btn btn-border-linear" href="#">Try for free</Link><Link className="btn btn-link-more" href="#">Learn more</Link>
                                            </div>
                                            <div className="card-pricing-bottom">
                                                <h6 className="color-white mb-25">What you get:</h6>
                                                <ul className="list-checked">
                                                    <li>Unlimited Storage</li>
                                                    <li>Unlimited Members</li>
                                                    <li>Two-Factor Authentication</li>
                                                    <li>Collaborative Docs</li>
                                                    <li>Unlimited Storage</li>
                                                    <li>Sprint Management</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                        <div className="card-pricing border-gray-800 bg-gray-850 mb-30">
                                            <label className="lbl-success text-base color-gray-900">Popular</label>
                                            <div className="card-pricing-top border-gray-800">
                                                <h3 className="color-white mb-10">Business</h3>
                                                <p className="text-lg color-gray-500 mb-15">Best for personal use</p>
                                                <p className="text-base color-gray-500 mb-30">Get started without creadit card or payment method</p><Link className="btn btn-border-linear" href="#">Get started</Link><Link className="btn btn-link-more" href="#">Learn more</Link>
                                            </div>
                                            <div className="card-pricing-bottom">
                                                <h6 className="color-white mb-25">What you get:</h6>
                                                <ul className="list-checked">
                                                    <li>Unlimited Storage</li>
                                                    <li>Unlimited Members</li>
                                                    <li>Two-Factor Authentication</li>
                                                    <li>Collaborative Docs</li>
                                                    <li>Unlimited Storage</li>
                                                    <li>Sprint Management</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 wow animate__animated animate__fadeIn" data-wow-delay=".4s">
                                        <div className="card-pricing border-gray-800 bg-gray-850 mb-30">
                                            <label className="lbl-danger text-base color-gray-900">Premium</label>
                                            <div className="card-pricing-top border-gray-800">
                                                <h3 className="color-white mb-10">Enterprise</h3>
                                                <p className="text-lg color-gray-500 mb-15">Best for personal use</p>
                                                <p className="text-base color-gray-500 mb-30">Get started without creadit card or payment method</p><Link className="btn btn-border-linear" href="#">Get started</Link><Link className="btn btn-link-more" href="#">Learn more</Link>
                                            </div>
                                            <div className="card-pricing-bottom">
                                                <h6 className="color-white mb-25">What you get:</h6>
                                                <ul className="list-checked">
                                                    <li>Unlimited Storage</li>
                                                    <li>Unlimited Members</li>
                                                    <li>Two-Factor Authentication</li>
                                                    <li>Collaborative Docs</li>
                                                    <li>Unlimited Storage</li>
                                                    <li>Sprint Management</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-30">
                                    <h2 className="color-linear d-inline-block mb-10 wow animate__animated animate__fadeInUp" data-wow-delay=".0s">FAQs</h2>
                                </div>
                                <div className="box-faqs mb-70">
                                    <Accordion />
                                </div>
                                <div className="text-center mt-70 mb-50">
                                    <h2 className="color-linear d-inline-block mb-10 wow animate__animated animate__fadeInUp">Testimonials</h2>
                                    <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp">Nettracking is a B2B marketing software for telecommunications industry.</p>
                                </div>
                                <div className="box-testimonials mb-150animate__fadeIn mb-100">
                                    <div className="box-swiper">
                                        <Testimonial />
                                    </div>
                                </div>
                                <div className="row align-items-end mt-30">
                                    <div className="col-lg-9 wow animate__animated animate__fadeIn">
                                        <h3 className="color-linear">Content publishing cooperation<br className="d-none d-lg-block" />with my partners</h3>
                                    </div>
                                    <div className="col-lg-3 text-lg-end mt-15 hover-up wow animate__animated animate__fadeIn" data-wow-delay="0.2s"><Link className="link-brand-1" href="#">Learn More</Link></div>
                                </div>
                                <div className="list-logos mt-50 mb-30">
                                    <div className="container">
                                        <div className="row">
                                            <div className="swiper-container swiper-group-1">
                                                <div className="swiper-wrapper wow animate__animated animate__fadeIn">
                                                    <Brand />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}