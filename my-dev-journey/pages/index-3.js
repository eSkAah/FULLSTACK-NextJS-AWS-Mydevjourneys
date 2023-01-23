import Link from "next/link";
import Layout from "../components/layout/Layout";
import Brand from "../components/slider/Brand";
import Typewriter from 'typewriter-effect';

export default function Home() {
    return (
        <>
            <Layout>
                <div className="banner banner-home3 bg-gray-850">
                    <div className="container">
                        <div className="row align-items-start">
                            <div className="col-xl-1" />
                            <div className="col-xl-10 col-lg-12">
                                <div className="row">
                                    <div className="col-lg-6 pt-100"><span className="text-sm-bold color-gray-600 wow animate__animated animate__fadeInUp">Hello Everyone!</span>
                                        <h1 className="color-gray-50 mt-20 mb-20 wow animate__animated animate__fadeInUp">I’m
                                            {/* <Link className="typewrite color-linear" href="#" data-period={3000} data-type="[ &quot;Brian Clark&quot;, &quot;Designer&quot;, &quot;Creator&quot; ]" /> */}
                                            <Typewriter
                                                options={{
                                                    wrapperClassName: "typewrite color-linear",
                                                    strings: ['Brian Clark', 'Designer', 'Creator'],
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
                                        <div className="box-subscriber mt-40 mb-50 wow animate__animated animate__fadeInUp">
                                            <div className="inner-subscriber bg-gray-800">
                                                <form className="d-flex" action="#">
                                                    <input className="input-sybscriber" type="text" placeholder="Type your email address" />
                                                    <button className="btn btn-linear btn-arrow-right">Subscribe<i className="fi-rr-arrow-small-right" /></button>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="box-socials"><Link className="bg-gray-800 hover-up" href="#"><span className="fb" /></Link><Link className="bg-gray-800 hover-up" href="#"><span className="inst" /></Link><Link className="bg-gray-800 hover-up" href="#"><span className="snap" /></Link><Link className="bg-gray-800 hover-up" href="#"><span className="tw" /></Link></div>
                                    </div>
                                    <div className="col-lg-6 text-center">
                                        <div className="banner-img no-bg">
                                            <div className="banner-1 shape-1"><img src="assets/imgs/page/homepage3/banner-1.jpg" alt="Genz" /></div>
                                            <div className="banner-2 shape-2"><img src="assets/imgs/page/homepage3/banner-2.jpg" alt="Genz" /></div>
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
                                <div className="mt-70 mb-50">
                                    <h2 className="color-linear mb-10 wow animate__animated animate__fadeInUp">Featured Articles</h2>
                                    <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp">Discover the most outstanding articles in all topics</p>
                                    <div className="row mt-70">
                                        <div className="col-lg-4">
                                            <div className="card-style-1 hover-up mb-30 wow animate__animated animate__fadeIn" data-wow-delay=".0s">
                                                <div className="card-image"><Link className="post-type" href="/blog-archive" /><Link className="link-post" href="/single-sidebar"><img src="assets/imgs/page/homepage3/news1.png" alt="Genz" />
                                                    <div className="card-info card-bg-2">
                                                        <div className="info-bottom mb-15">
                                                            <h4 className="color-white mb-15">Aenean Auctor Wisi Et Urna Aliquam Erat</h4>
                                                            <div className="box-author"><img src="assets/imgs/page/homepage3/author.jpg" alt="Genz" />
                                                                <div className="author-info">
                                                                    <h6 className="mr-15 color-gray-700">Thomson</h6><span className="color-gray-700 text-sm">25 April 2022</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="card-style-1 hover-up mb-30 wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                                <div className="card-image"><Link className="post-type post-image" href="/blog-archive" /><Link className="link-post" href="/single-sidebar"><img src="assets/imgs/page/homepage3/news2.png" alt="Genz" />
                                                    <div className="card-info card-bg-2">
                                                        <div className="info-bottom mb-15">
                                                            <h4 className="color-white mb-15">The Best Cities to Travel Alone in the USA</h4>
                                                            <div className="box-author"><img src="assets/imgs/page/homepage3/author.jpg" alt="Genz" />
                                                                <div className="author-info">
                                                                    <h6 className="mr-15 color-gray-700">Thomson</h6><span className="color-gray-700 text-sm">25 April 2022</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="card-style-1 hover-up mb-30 wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                                <div className="card-image"><Link className="post-type post-audio" href="/blog-archive" /><Link className="link-post" href="/single-sidebar"><img src="assets/imgs/page/homepage3/news3.png" alt="Genz" />
                                                    <div className="card-info card-bg-2">
                                                        <div className="info-bottom mb-15">
                                                            <h4 className="color-white mb-15">Rodrigues Island: When I Found a Paradise</h4>
                                                            <div className="box-author"><img src="assets/imgs/page/homepage3/author.jpg" alt="Genz" />
                                                                <div className="author-info">
                                                                    <h6 className="mr-15 color-gray-700">Thomson</h6><span className="color-gray-700 text-sm">25 April 2022</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="card-style-1 hover-up mb-30 wow animate__animated animate__fadeIn" data-wow-delay=".0s">
                                                <div className="card-image"><Link className="post-type post-image" href="/blog-archive" /><Link className="link-post" href="/single-sidebar"><img src="assets/imgs/page/homepage3/news4.png" alt="Genz" />
                                                    <div className="card-info card-bg-2">
                                                        <div className="info-bottom mb-15">
                                                            <h4 className="color-white mb-15">5 five places must visit in turkey to relax</h4>
                                                            <div className="box-author"><img src="assets/imgs/page/homepage3/author.jpg" alt="Genz" />
                                                                <div className="author-info">
                                                                    <h6 className="mr-15 color-gray-700">Thomson</h6><span className="color-gray-700 text-sm">25 April 2022</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="card-style-1 hover-up mb-30 wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                                <div className="card-image"><Link className="post-type" href="/blog-archive" /><Link className="link-post" href="/single-sidebar"><img src="assets/imgs/page/homepage3/news5.png" alt="Genz" />
                                                    <div className="card-info card-bg-2">
                                                        <div className="info-bottom mb-15">
                                                            <h4 className="color-white mb-15">Enjoy My Favourite Molten Chocolate Cake</h4>
                                                            <div className="box-author"><img src="assets/imgs/page/homepage3/author.jpg" alt="Genz" />
                                                                <div className="author-info">
                                                                    <h6 className="mr-15 color-gray-700">Thomson</h6><span className="color-gray-700 text-sm">25 April 2022</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="card-style-1 hover-up mb-30 wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                                <div className="card-image"><Link className="post-type post-audio" href="/blog-archive" /><Link className="link-post" href="/single-sidebar"><img src="assets/imgs/page/homepage3/news6.png" alt="Genz" />
                                                    <div className="card-info card-bg-2">
                                                        <div className="info-bottom mb-15">
                                                            <h4 className="color-white mb-15">North Dakota Learns From Norway</h4>
                                                            <div className="box-author"><img src="assets/imgs/page/homepage3/author.jpg" alt="Genz" />
                                                                <div className="author-info">
                                                                    <h6 className="mr-15 color-gray-700">Thomson</h6><span className="color-gray-700 text-sm">25 April 2022</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div></Link>
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
                                <div className="row mt-70">
                                    <div className="col-lg-12">
                                        <h2 className="color-linear d-inline-block mb-10 wow animate__animated animate__fadeInUp">Recent posts</h2>
                                        <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp">Don't miss the latest trends</p>
                                        <div className="box-list-posts mt-70">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="card-list-posts card-list-posts-small wow animate__animated animate__fadeIn">
                                                        <div className="card-image hover-up"><Link href="/single-sidebar"><img src="assets/imgs/page/homepage3/img7.jpg" alt="Genz" /></Link></div>
                                                        <div className="card-info"><Link href="/single-sidebar">
                                                            <h5 className="mb-15 color-white">How to Grow Your Business on Instagram in 2022</h5></Link>
                                                            <p className="color-gray-500">Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far</p>
                                                            <div className="row mt-20">
                                                                <div className="col-12"><span className="calendar-icon color-gray-700 text-sm mr-25">29 May 2022</span><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="card-list-posts card-list-posts-small wow animate__animated animate__fadeIn">
                                                        <div className="card-image hover-up"><Link href="/single-sidebar"><img src="assets/imgs/page/homepage3/img8.jpg" alt="Genz" /></Link></div>
                                                        <div className="card-info"><Link href="/single-sidebar">
                                                            <h5 className="mb-15 color-white">Helpful Tips for Working from Home as a Freelancer</h5></Link>
                                                            <p className="color-gray-500">Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far</p>
                                                            <div className="row mt-20">
                                                                <div className="col-12"><span className="calendar-icon color-gray-700 text-sm mr-25">29 May 2022</span><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="card-list-posts card-list-posts-small wow animate__animated animate__fadeIn">
                                                        <div className="card-image hover-up"><Link href="/single-sidebar"><img src="assets/imgs/page/homepage3/img9.jpg" alt="Genz" /></Link></div>
                                                        <div className="card-info"><Link href="/single-sidebar">
                                                            <h5 className="mb-15 color-white">The 6 Best Celebration Ideas for Virtual Teams</h5></Link>
                                                            <p className="color-gray-500">Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far</p>
                                                            <div className="row mt-20">
                                                                <div className="col-12"><span className="calendar-icon color-gray-700 text-sm mr-25">29 May 2022</span><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="card-list-posts card-list-posts-small wow animate__animated animate__fadeIn">
                                                        <div className="card-image hover-up"><Link href="/single-sidebar"><img src="assets/imgs/page/homepage3/img10.jpg" alt="Genz" /></Link></div>
                                                        <div className="card-info"><Link href="/single-sidebar">
                                                            <h5 className="mb-15 color-white">Influencer Marketing: Basics and Examples</h5></Link>
                                                            <p className="color-gray-500">Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far</p>
                                                            <div className="row mt-20">
                                                                <div className="col-12"><span className="calendar-icon color-gray-700 text-sm mr-25">29 May 2022</span><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="card-list-posts card-list-posts-small wow animate__animated animate__fadeIn">
                                                        <div className="card-image hover-up"><Link href="/single-sidebar"><img src="assets/imgs/page/homepage3/img11.jpg" alt="Genz" /></Link></div>
                                                        <div className="card-info"><Link href="/single-sidebar">
                                                            <h5 className="mb-15 color-white">How to Create Banner Ads That Stand Out From the Crowd</h5></Link>
                                                            <p className="color-gray-500">Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far</p>
                                                            <div className="row mt-20">
                                                                <div className="col-12"><span className="calendar-icon color-gray-700 text-sm mr-25">29 May 2022</span><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="card-list-posts card-list-posts-small wow animate__animated animate__fadeIn">
                                                        <div className="card-image hover-up"><Link href="/single-sidebar"><img src="assets/imgs/page/homepage3/img12.jpg" alt="Genz" /></Link></div>
                                                        <div className="card-info"><Link href="/single-sidebar">
                                                            <h5 className="mb-15 color-white">Best Practices for Communication with Your Virtual Team</h5></Link>
                                                            <p className="color-gray-500">Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far</p>
                                                            <div className="row mt-20">
                                                                <div className="col-12"><span className="calendar-icon color-gray-700 text-sm mr-25">29 May 2022</span><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-start mb-80"><Link className="btn btn-linear btn-load-more wow animate__animated animate__zoomIn" href="#">Show More Posts<i className="fi-rr-arrow-small-right" /></Link></div>
                                    </div>
                                </div>
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