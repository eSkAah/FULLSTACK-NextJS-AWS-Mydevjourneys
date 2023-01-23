import React from 'react';
import PortfolioFilter from '../components/elements/PortfolioFilter';
import Layout from '../components/layout/Layout';
import Brand from '../components/slider/Brand';
import Testimonial from '../components/slider/Testimonial';

const Portfolio2 = () => {
    return (
        <>
            <Layout>
                <div className="cover-home1">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-1" />
                            <div className="col-xl-10 col-lg-12">
                                <div className="text-center mt-70 mb-50">
                                    <h2 className="color-linear d-inline-block mb-20 wow animate__animated animate__fadeInUp">My
                                        Latest Projects</h2>
                                    <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp">The convention is
                                        the main event of the year for professionals in<br className="d-none d-lg-block" />the world
                                        of design and architecture.</p>
                                </div>
                                <PortfolioFilter col={6} show={6} />
                                <nav className="mb-50">
                                    <ul className="pagination">
                                        <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".0s"><a className="page-link page-prev" href="#"><i className="fi-rr-arrow-small-left" /></a>
                                        </li>
                                        <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".1s"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".2s"><a className="page-link active" href="#">2</a></li>
                                        <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".3s"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".4s"><a className="page-link" href="#">...</a></li>
                                        <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".5s"><a className="page-link page-next" href="#"><i className="fi-rr-arrow-small-right" /></a>
                                        </li>
                                    </ul>
                                </nav>
                                <div className="text-center mt-70 mb-50">
                                    <h2 className="color-linear d-inline-block mb-20 wow animate__animated animate__fadeInUp">My
                                        Services</h2>
                                    <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp">With many years of
                                        experience in the field of Digital Marketing,<br className="d-none d-lg-block" />I am
                                        confident to bring you many outstanding values.</p>
                                </div>
                                <div className="box-features bg-gray-850 border-gray-800">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 mb-50 wow animate__animated animate__fadeIn" data-wow-delay="0s"><span className="item-icon bg-gray-950 icon-motion" />
                                            <h5 className="color-white mb-15">Motion &amp;<br />Web Graphy</h5>
                                            <p className="text-base color-gray-700">NetTracking" is a very powerful Web 2.0 site
                                                search engine allows you to find email allerts</p>
                                        </div>
                                        <div className="col-lg-4 col-md-6 mb-50 wow animate__animated animate__fadeIn" data-wow-delay="0.1s"><span className="item-icon bg-gray-950 icon-ui" />
                                            <h5 className="color-white mb-15">UI/Ux<br />Consultancy</h5>
                                            <p className="text-base color-gray-700">NetTracking" is a very powerful Web 2.0 site
                                                search engine allows you to find email allerts</p>
                                        </div>
                                        <div className="col-lg-4 col-md-6 mb-50 wow animate__animated animate__fadeIn" data-wow-delay="0.2s"><span className="item-icon bg-gray-950 icon-branding" />
                                            <h5 className="color-white mb-15">Branding<br />&amp; Design</h5>
                                            <p className="text-base color-gray-700">NetTracking" is a very powerful Web 2.0 site
                                                search engine allows you to find email allerts</p>
                                        </div>
                                        <div className="col-lg-4 col-md-6 mb-50 wow animate__animated animate__fadeIn" data-wow-delay="0s"><span className="item-icon bg-gray-950 icon-product" />
                                            <h5 className="color-white mb-15">Product<br />Photography</h5>
                                            <p className="text-base color-gray-700">NetTracking" is a very powerful Web 2.0 site
                                                search engine allows you to find email allerts</p>
                                        </div>
                                        <div className="col-lg-4 col-md-6 mb-50 wow animate__animated animate__fadeIn" data-wow-delay="0.1s"><span className="item-icon bg-gray-950 icon-key" />
                                            <h5 className="color-white mb-15">Key Seo<br />Optimization</h5>
                                            <p className="text-base color-gray-700">NetTracking" is a very powerful Web 2.0 site
                                                search engine allows you to find email allerts</p>
                                        </div>
                                        <div className="col-lg-4 col-md-6 mb-50 wow animate__animated animate__fadeIn" data-wow-delay="0.2s"><span className="item-icon bg-gray-950 icon-social" />
                                            <h5 className="color-white mb-15">Social<br />Management</h5>
                                            <p className="text-base color-gray-700">NetTracking" is a very powerful Web 2.0 site
                                                search engine allows you to find email allerts</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-70 mb-50">
                                    <h2 className="color-linear d-inline-block mb-10 wow animate__animated animate__fadeInUp">
                                        Testimonials</h2>
                                    <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp">Nettracking is a
                                        B2B marketing software for telecommunications industry.</p>
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
                                    <div className="col-lg-3 text-lg-end mt-15 hover-up wow animate__animated animate__fadeIn" data-wow-delay="0.2s"><a className="link-brand-1" href="#">Learn More</a></div>
                                </div>
                                <div className="list-logos mt-50 mb-30">
                                    <div className="container">
                                        <div className="row">
                                            <div className="swiper-container swiper-group-1">
                                                <Brand col={6} show={6} />
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
    );
};

export default Portfolio2;