import Link from "next/link";
import Layout from "../components/layout/Layout";
import Brand from "../components/slider/Brand";

export default function Home() {
    return (
        <>
            <Layout>
                <div className="banner banner-home4 bg-gray-850">
                    <div className="container">
                        <div className="row align-items-start">
                            <div className="col-xl-1" />
                            <div className="col-xl-10 col-lg-12">
                                <div className="pt-20">
                                    <div className="box-banner-4">
                                        <div className="banner-image"><img src="assets/imgs/page/homepage4/banner.png" alt="Genz" /></div>
                                        <div className="banner-info"><span className="text-sm-bold color-gray-600">Hello Everyone!</span>
                                            <h3 className="color-linear d-inline-block mt-10 mb-15">I'm Steven, a lover of technology, business and experiencing new things</h3>
                                            <div className="box-socials"><Link className="bg-gray-800 hover-up" href="#"><span className="fb" /></Link><Link className="bg-gray-800 hover-up" href="#"><span className="inst" /></Link><Link className="bg-gray-800 hover-up" href="#"><span className="snap" /></Link><Link className="bg-gray-800 hover-up" href="#"><span className="tw" /></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cover-home3">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-1" />
                            <div className="col-xl-10 col-lg-12">
                                <div className="row mt-90 mb-50">
                                    <div className="col-lg-12">
                                        <div className="box-list-posts">
                                            <div className="row">
                                                <div className="col-lg-7">
                                                    <div className="card-blog-1 card-blog-2 hover-up wow animate__animated animate__fadeIn" data-wow-delay={0}>
                                                        <div className="card-image mb-20"><Link className="post-type" href="#" /><Link href="/single-sidebar"><img src="assets/imgs/page/homepage4/news1.png" alt="Genz" /></Link></div>
                                                        <div className="card-info"><Link href="/single-sidebar">
                                                            <h4 className="color-white mt-30">I work best when my space is filled with inspiration</h4></Link>
                                                            <p className="mt-25 text-lg color-gray-700">Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far</p>
                                                            <div className="row align-items-center mt-45">
                                                                <div className="col-7">
                                                                    <div className="box-author"><img src="assets/imgs/page/homepage1/author.jpg" alt="Genz" />
                                                                        <div className="author-info">
                                                                            <h6 className="color-gray-700">Joseph</h6><span className="color-gray-700 text-sm">25 April 2022</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-5 text-end"><Link className="readmore color-gray-500 text-sm" href="/single-sidebar"><span>Read more</span></Link></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-5">
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="card-list-posts card-list-posts-small mb-30 wow animate__animated animate__fadeIn" data-wow-delay="0.1s">
                                                                <div className="card-image hover-up"><Link href="/single-sidebar"><img src="assets/imgs/page/homepage4/img1.png" alt="Genz" /></Link></div>
                                                                <div className="card-info"><Link className="btn btn-tag bg-gray-800 hover-up mb-10 text-xs" href="/blog-archive">Working Tips</Link><Link href="/single-sidebar">
                                                                    <h5 className="mb-10 color-white">10 States At Risk of Rural Hospital Closures</h5></Link>
                                                                    <div className="row mt-10">
                                                                        <div className="col-12"><span className="calendar-icon color-gray-700 text-sm mr-20">29 May 2022</span><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="card-list-posts card-list-posts-small mb-30 wow animate__animated animate__fadeIn" data-wow-delay="0.2s">
                                                                <div className="card-image hover-up"><Link href="/single-sidebar"><img src="assets/imgs/page/homepage4/img2.png" alt="Genz" /></Link></div>
                                                                <div className="card-info"><Link className="btn btn-tag bg-gray-800 hover-up mb-10 text-xs" href="/blog-archive">Working Tips</Link><Link href="/single-sidebar">
                                                                    <h5 className="mb-10 color-white">U.S. Interventions in Latin America, in Photos</h5></Link>
                                                                    <div className="row mt-10">
                                                                        <div className="col-12"><span className="calendar-icon color-gray-700 text-sm mr-20">29 May 2022</span><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="card-list-posts card-list-posts-small mb-30 wow animate__animated animate__fadeIn" data-wow-delay="0.3s">
                                                                <div className="card-image hover-up"><Link href="/single-sidebar"><img src="assets/imgs/page/homepage4/img3.png" alt="Genz" /></Link></div>
                                                                <div className="card-info"><Link className="btn btn-tag bg-gray-800 hover-up mb-10 text-xs" href="/blog-archive">Working Tips</Link><Link href="/single-sidebar">
                                                                    <h5 className="mb-10 color-white">2019 Best Cars for the Money</h5></Link>
                                                                    <div className="row mt-10">
                                                                        <div className="col-12"><span className="calendar-icon color-gray-700 text-sm mr-20">29 May 2022</span><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="card-list-posts card-list-posts-small mb-30 wow animate__animated animate__fadeIn" data-wow-delay="0.4s">
                                                                <div className="card-image hover-up"><Link href="/single-sidebar"><img src="assets/imgs/page/homepage4/img4.png" alt="Genz" /></Link></div>
                                                                <div className="card-info"><Link className="btn btn-tag bg-gray-800 hover-up mb-10 text-xs" href="/blog-archive">Working Tips</Link><Link href="/single-sidebar">
                                                                    <h5 className="mb-10 color-white">How to View Breast Cancer Survival Rates</h5></Link>
                                                                    <div className="row mt-10">
                                                                        <div className="col-12"><span className="calendar-icon color-gray-700 text-sm mr-20">29 May 2022</span><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h2 className="color-linear d-inline-block mb-10 wow animate__animated animate__fadeInUp">Popular Tags</h2>
                                <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp">Most searched keywords</p>
                                <div className="row mt-70 mb-50">
                                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                        <div className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeIn" data-wow-delay="0s">
                                            <div className="card-image"><Link href="/blog-archive"><img src="assets/imgs/page/homepage1/tag1.png" alt="Genz" /></Link></div>
                                            <div className="card-info"><Link className="color-gray-500" href="/blog-archive">Travel</Link></div>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                        <div className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeIn" data-wow-delay="0.1s">
                                            <div className="card-image"><Link href="/blog-archive"><img src="assets/imgs/page/homepage1/tag2.png" alt="Genz" /></Link></div>
                                            <div className="card-info"><Link className="color-gray-500" href="/blog-archive"> Culture</Link></div>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                        <div className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeIn" data-wow-delay="0.2s">
                                            <div className="card-image"><Link href="/blog-archive"><img src="assets/imgs/page/homepage1/tag3.png" alt="Genz" /></Link></div>
                                            <div className="card-info"><Link className="color-gray-500" href="/blog-archive">Lifestyle</Link></div>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                        <div className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeIn" data-wow-delay="0.3s">
                                            <div className="card-image"><Link href="/blog-archive"><img src="assets/imgs/page/homepage1/tag4.png" alt="Genz" /></Link></div>
                                            <div className="card-info"><Link className="color-gray-500" href="/blog-archive">Fashion</Link></div>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                        <div className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeIn" data-wow-delay="0.4s">
                                            <div className="card-image"><Link href="/blog-archive"><img src="assets/imgs/page/homepage1/tag5.png" alt="Genz" /></Link></div>
                                            <div className="card-info"><Link className="color-gray-500" href="/blog-archive">Food</Link></div>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                        <div className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeIn" data-wow-delay="0.5s">
                                            <div className="card-image"><Link href="/blog-archive"><img src="assets/imgs/page/homepage1/tag6.png" alt="Genz" /></Link></div>
                                            <div className="card-info"><Link className="color-gray-500" href="/blog-archive">Space</Link></div>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                        <div className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeIn" data-wow-delay="0.1s">
                                            <div className="card-image"><Link href="/blog-archive"><img src="assets/imgs/page/homepage1/tag7.png" alt="Genz" /></Link></div>
                                            <div className="card-info"><Link className="color-gray-500" href="/blog-archive">Animal</Link></div>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                        <div className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeIn" data-wow-delay="0.2s">
                                            <div className="card-image"><Link href="/blog-archive"><img src="assets/imgs/page/homepage1/tag8.png" alt="Genz" /></Link></div>
                                            <div className="card-info"><Link className="color-gray-500" href="/blog-archive">Minimal</Link></div>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                        <div className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeIn" data-wow-delay="0.3s">
                                            <div className="card-image"><Link href="/blog-archive"><img src="assets/imgs/page/homepage1/tag9.png" alt="Genz" /></Link></div>
                                            <div className="card-info"><Link className="color-gray-500" href="/blog-archive">Interior</Link></div>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                        <div className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeIn" data-wow-delay="0.4s">
                                            <div className="card-image"><Link href="/blog-archive"><img src="assets/imgs/page/homepage1/tag10.png" alt="Genz" /></Link></div>
                                            <div className="card-info"><Link className="color-gray-500" href="/blog-archive">Plant</Link></div>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                        <div className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeIn" data-wow-delay="0.5s">
                                            <div className="card-image"><Link href="/blog-archive"><img src="assets/imgs/page/homepage1/tag11.png" alt="Genz" /></Link></div>
                                            <div className="card-info"><Link className="color-gray-500" href="/blog-archive">Nature</Link></div>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                        <div className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeIn" data-wow-delay="0.6s">
                                            <div className="card-image"><Link href="/blog-archive"><img src="assets/imgs/page/homepage1/tag12.png" alt="Genz" /></Link></div>
                                            <div className="card-info"><Link className="color-gray-500" href="/blog-archive">Business</Link></div>
                                        </div>
                                    </div>
                                </div>
                                <h2 className="color-linear d-inline-block mb-10 wow animate__animated animate__fadeInUp">Editor's picked</h2>
                                <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp">Featured and highly rated articles</p>
                                <div className="row mt-70">
                                    <div className="col-lg-6 wow animate__animated animate__fadeIn">
                                        <div className="card-blog-1 hover-up">
                                            <div className="card-image mb-20"><Link className="post-type" href="/blog-archive" /><Link href="/single-sidebar"><img src="assets/imgs/page/homepage1/news2.png" alt="Genz" /></Link></div>
                                            <div className="card-info">
                                                <div className="row">
                                                    <div className="col-7"><Link className="color-gray-700 text-sm" href="/blog-archive"> #Travel</Link><Link className="color-gray-700 text-sm" href="/blog-archive"> #Lifestyle</Link>
                                                    </div>
                                                    <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                </div><Link href="/single-sidebar">
                                                    <h4 className="color-white mt-20"> Self-observation is the first step of inner unfolding</h4></Link>
                                                <div className="row align-items-center mt-25">
                                                    <div className="col-7">
                                                        <div className="box-author"><img src="assets/imgs/page/homepage1/author.png" alt="Genz" />
                                                            <div className="author-info">
                                                                <h6 className="color-gray-700">Joseph</h6><span className="color-gray-700 text-sm">25 Nov 2022</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-5 text-end"><Link className="readmore color-gray-500 text-sm" href="/single-sidebar"><span>Read more</span></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                        <div className="card-blog-1 hover-up">
                                            <div className="card-image mb-20"><Link className="post-type" href="/blog-archive" /><Link href="/single-sidebar"><img src="assets/imgs/page/homepage1/news1.png" alt="Genz" /></Link></div>
                                            <div className="card-info">
                                                <div className="row">
                                                    <div className="col-7"><Link className="color-gray-700 text-sm" href="/blog-archive"> #Design</Link><Link className="color-gray-700 text-sm" href="/blog-archive"> #Movie</Link>
                                                    </div>
                                                    <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">6 mins read</span></div>
                                                </div><Link href="/single-sidebar">
                                                    <h4 className="color-white mt-20"> Self-observation is the first step of inner unfolding</h4></Link>
                                                <div className="row align-items-center mt-25">
                                                    <div className="col-7">
                                                        <div className="box-author"><img src="assets/imgs/page/homepage1/author2.png" alt="Genz" />
                                                            <div className="author-info">
                                                                <h6 className="color-gray-700">Joseph</h6><span className="color-gray-700 text-sm">27 Sep 2022</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-5 text-end"><Link className="readmore color-gray-500 text-sm" href="/single-sidebar"><span>Read more</span></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                        <div className="card-blog-1 hover-up">
                                            <div className="card-image mb-20"><Link className="post-type" href="/blog-archive" /><Link href="/single-sidebar"><img src="assets/imgs/page/homepage1/news3.png" alt="Genz" /></Link></div>
                                            <div className="card-info">
                                                <div className="row">
                                                    <div className="col-7"><Link className="color-gray-700 text-sm" href="/blog-archive"> #Design</Link><Link className="color-gray-700 text-sm" href="/blog-archive"> #Movie</Link>
                                                    </div>
                                                    <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">6 mins read</span></div>
                                                </div><Link href="/single-sidebar">
                                                    <h5 className="color-white mt-20"> Self-observation is the first step of inner unfolding</h5></Link>
                                                <div className="row align-items-center mt-25">
                                                    <div className="col-7">
                                                        <div className="box-author"><img src="assets/imgs/page/homepage1/author3.png" alt="Genz" />
                                                            <div className="author-info">
                                                                <h6 className="color-gray-700">Joseph</h6><span className="color-gray-700 text-sm">27 Sep 2022</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-5 text-end"><Link className="readmore color-gray-500 text-sm" href="/single-sidebar"><span>Read more</span></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                        <div className="card-blog-1 hover-up">
                                            <div className="card-image mb-20"><Link className="post-type" href="/blog-archive" /><Link href="/single-sidebar"><img src="assets/imgs/page/homepage1/news4.png" alt="Genz" /></Link></div>
                                            <div className="card-info">
                                                <div className="row">
                                                    <div className="col-7"><Link className="color-gray-700 text-sm" href="/blog-archive"> #Design</Link><Link className="color-gray-700 text-sm" href="/blog-archive"> #Movie</Link>
                                                    </div>
                                                    <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">6 mins read</span></div>
                                                </div><Link href="/single-sidebar">
                                                    <h5 className="color-white mt-20"> Self-observation is the first step of inner unfolding</h5></Link>
                                                <div className="row align-items-center mt-25">
                                                    <div className="col-7">
                                                        <div className="box-author"><img src="assets/imgs/page/homepage1/author4.png" alt="Genz" />
                                                            <div className="author-info">
                                                                <h6 className="color-gray-700">Joseph</h6><span className="color-gray-700 text-sm">27 Sep 2022</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-5 text-end"><Link className="readmore color-gray-500 text-sm" href="/single-sidebar"><span>Read more</span></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                        <div className="card-blog-1 hover-up">
                                            <div className="card-image mb-20"><Link className="post-type" href="/blog-archive" /><Link href="/single-sidebar"><img src="assets/imgs/page/homepage1/news5.png" alt="Genz" /></Link></div>
                                            <div className="card-info">
                                                <div className="row">
                                                    <div className="col-7"><Link className="color-gray-700 text-sm" href="/blog-archive"> #Design</Link><Link className="color-gray-700 text-sm" href="/blog-archive"> #Movie</Link>
                                                    </div>
                                                    <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">6 mins read</span></div>
                                                </div><Link href="/single-sidebar">
                                                    <h5 className="color-white mt-20"> Self-observation is the first step of inner unfolding</h5></Link>
                                                <div className="row align-items-center mt-25">
                                                    <div className="col-7">
                                                        <div className="box-author"><img src="assets/imgs/page/homepage1/author5.png" alt="Genz" />
                                                            <div className="author-info">
                                                                <h6 className="color-gray-700">Joseph</h6><span className="color-gray-700 text-sm">27 Sep 2022</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-5 text-end"><Link className="readmore color-gray-500 text-sm" href="/single-sidebar"><span>Read more</span></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mb-50"><Link href="#" className="btn btn-linear btn-load-more wow animate__animated animate__zoomIn">
                                    Show More Posts
                                    <i className="fi-rr-arrow-small-right" /></Link></div>
                                <div className="text-center mb-80 mt-50 wow animate__animated animate__pulse"><img src="assets/imgs/page/homepage4/banner-3.png" alt="Genz" /></div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="box-sidebar bg-gray-850 border-gray-800">
                                                    <div className="head-sidebar">
                                                        <h5 className="line-bottom">Popular Posts</h5>
                                                    </div>
                                                    <div className="content-sidebar">
                                                        <div className="list-posts">
                                                            <div className="item-post wow animate__animated animate__fadeIn">
                                                                <div className="image-post"><Link href="/single-sidebar"><img src="assets/imgs/page/homepage1/img-post.jpg" alt="Genz" /></Link></div>
                                                                <div className="info-post border-gray-800"><Link href="/single-sidebar">
                                                                    <h6 className="color-white">Creating is a privilege but it’s also a gift</h6></Link><span className="color-gray-700">15 mins read</span>
                                                                    <ul className="d-inline-block">
                                                                        <li className="color-gray-700">15 April 2022</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="item-post wow animate__animated animate__fadeIn">
                                                                <div className="image-post"><Link href="/single-sidebar"><img src="assets/imgs/page/homepage1/img-post2.jpg" alt="Genz" /></Link></div>
                                                                <div className="info-post border-gray-800"><Link href="/single-sidebar">
                                                                    <h6 className="color-white">Being unique is better than being perfect</h6></Link><span className="color-gray-700">15 mins read</span>
                                                                    <ul className="d-inline-block">
                                                                        <li className="color-gray-700">15 April 2022</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="item-post wow animate__animated animate__fadeIn">
                                                                <div className="image-post"><Link href="/single-sidebar"><img src="assets/imgs/page/homepage1/img-post3.jpg" alt="Genz" /></Link></div>
                                                                <div className="info-post border-gray-800"><Link href="/single-sidebar">
                                                                    <h6 className="color-white">Every day, in every city and town across the country</h6></Link><span className="color-gray-700">15 mins read</span>
                                                                    <ul className="d-inline-block">
                                                                        <li className="color-gray-700">15 April 2022</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="item-post wow animate__animated animate__fadeIn">
                                                                <div className="image-post"><Link href="/single-sidebar"><img src="assets/imgs/page/homepage1/img-post4.jpg" alt="Genz" /></Link></div>
                                                                <div className="info-post border-gray-800"><Link href="/single-sidebar">
                                                                    <h6 className="color-white">Your voice, your mind, your story, your vision</h6></Link><span className="color-gray-700">15 mins read</span>
                                                                    <ul className="d-inline-block">
                                                                        <li className="color-gray-700">15 April 2022</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="box-sidebar bg-gray-850 border-gray-800">
                                                    <div className="head-sidebar wow animate__animated animate__fadeIn">
                                                        <h5 className="line-bottom">Last Comment</h5>
                                                    </div>
                                                    <div className="content-sidebar">
                                                        <div className="list-comments">
                                                            <div className="item-comment border-gray-800 wow animate__animated animate__fadeIn">
                                                                <p className="color-gray-500 mb-20">“ Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner “</p>
                                                                <div className="box-author-small"><img src="assets/imgs/page/homepage1/author6.png" alt="Genz" />
                                                                    <div className="author-info"><span className="d-block color-gray-700 text-sm">Jane Cooper</span><span className="color-gray-700 text-xs">15 April 2022</span></div>
                                                                </div>
                                                            </div>
                                                            <div className="item-comment border-gray-800 wow animate__animated animate__fadeIn">
                                                                <p className="color-gray-500 mb-20">“ Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner “</p>
                                                                <div className="box-author-small"><img src="assets/imgs/page/homepage1/author7.png" alt="Genz" />
                                                                    <div className="author-info"><span className="d-block color-gray-700 text-sm">Katen Doe</span><span className="color-gray-700 text-xs">15 April 2022</span></div>
                                                                </div>
                                                            </div>
                                                            <div className="item-comment border-gray-800 wow animate__animated animate__fadeIn">
                                                                <p className="color-gray-500 mb-20">“ Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner “</p>
                                                                <div className="box-author-small"><img src="assets/imgs/page/homepage1/author8.png" alt="Genz" />
                                                                    <div className="author-info"><span className="d-block color-gray-700 text-sm">Barbara Cartland</span><span className="color-gray-700 text-xs">15 April 2022</span></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="box-sidebar bg-gray-850 border-gray-800">
                                                    <div className="head-sidebar"><Link href="/"><img src="assets/imgs/template/logo.svg" alt="Genz" /></Link>
                                                        <h6 className="color-gray-700">Follow us on instagram</h6>
                                                    </div>
                                                    <div className="content-sidebar">
                                                        <div className="row mt-30 mb-10">
                                                            <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn"><Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery.png" alt="Genz" /></Link></div>
                                                            <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn"><Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery2.png" alt="Genz" /></Link></div>
                                                            <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn"><Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery3.png" alt="Genz" /></Link></div>
                                                            <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn"><Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery4.png" alt="Genz" /></Link></div>
                                                            <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn"><Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery5.png" alt="Genz" /></Link></div>
                                                            <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn"><Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery6.png" alt="Genz" /></Link></div>
                                                            <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn"><Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery7.png" alt="Genz" /></Link></div>
                                                            <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn"><Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery8.png" alt="Genz" /></Link></div>
                                                            <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn"><Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery9.png" alt="Genz" /></Link></div>
                                                            <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn"><Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery7.png" alt="Genz" /></Link></div>
                                                            <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn"><Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery8.png" alt="Genz" /></Link></div>
                                                            <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn"><Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery9.png" alt="Genz" /></Link></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
                                                <Brand />
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