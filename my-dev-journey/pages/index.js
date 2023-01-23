import Link from "next/link";
import Layout from "../components/layout/Layout";
import HotTopic from "../components/slider/HotTopic";
import Typewriter from 'typewriter-effect';
import {useState} from "react";

export default function Home() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

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
                                        <div className="col-lg-6 pt-100"><span className="text-sm-bold color-gray-600 wow animate__animated animate__fadeInUp">Hello
                                            Everyone!</span>
                                            <h1 className="color-gray-50 mt-20 mb-20 wow animate__animated animate__fadeInUp">I’m
                                                {/* <Link className="typewrite color-linear" href="#" data-period={3000} data-type="[ &quot;Brian Clark&quot;, &quot;Designer&quot;, &quot;Creator&quot; ]" /> */}
                                                <Typewriter
                                                    options={{
                                                        wrapperClassName:"typewrite color-linear",
                                                        strings: ['Allan Breuil', 'Developer'],
                                                        autoStart: true,
                                                        loop: true,
                                                    }}
                                                />
                                            </h1>
                                            <div className="row">
                                                <div className="col-lg-9">
                                                    <p className="text-base color-gray-600 wow animate__animated animate__fadeInUp">
                                                        Hi to all code enthusiasts!<br/> I am a fullstack developer specialized in ReactJS, NodeJS and AWS.
                                                        This blog aims to share my development experiences,
                                                        list my solutions and discuss basic concepts. You will also find examples of my web creations.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="box-subscriber mt-40 mb-50 wow animate__animated animate__fadeInUp">
                                                <div className="inner-subscriber bg-gray-800">
                                                    <form className="d-flex" onSubmit={handleSubmit}>
                                                        <input
                                                            className="input-sybscriber"
                                                            type="text"
                                                            placeholder="Type your email address"
                                                            onChange={(value) => setEmail(value.target.value)}
                                                        />
                                                        <button type="submit" className="btn btn-linear btn-arrow-right">Subscribe<i className="fi-rr-arrow-small-right" /></button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 text-center">
                                            <div className="banner-img position-relative wow animate__animated animate__fadeIn"><img src="assets/imgs/page/homepage1/me-short.png" alt="profile_picture" />
                                                <div className="pattern-1"><img src="assets/imgs/template/pattern-1.svg" alt="Genz" />
                                                </div>
                                                <div className="pattern-2"><img src="assets/imgs/template/pattern-2.svg" alt="Genz" />
                                                </div>
                                                <div className="pattern-3"><img src="assets/imgs/template/pattern-3.svg" alt="Genz" />
                                                </div>
                                                <div className="pattern-4"><img src="assets/imgs/template/pattern-4.svg" alt="Genz" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*HOT TOPICS LIST*/}
                                {/*<div className="mb-70">*/}
                                {/*    <div className="box-topics border-gray-800 bg-gray-850">*/}
                                {/*        <HotTopic />*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                <h2 className="color-linear d-inline-block mb-10 wow animate__animated animate__fadeInUp">Editor's
                                    picked</h2>
                                <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp">Featured and highly
                                    rated articles</p>
                                <div className="row mt-70">
                                    <div className="col-lg-6 wow animate__animated animate__fadeIn">
                                        <div className="card-blog-1 hover-up">
                                            <div className="card-image mb-20"><Link className="post-type" href="/blog-archive" /><Link href="/single-sidebar"><img src="assets/imgs/page/homepage1/news2.png" alt="Genz" /></Link></div>
                                            <div className="card-info">
                                                <div className="row">
                                                    <div className="col-7"><Link className="color-gray-700 text-sm" href="/blog-archive"> #Travel</Link><Link className="color-gray-700 text-sm" href="/blog-archive">
                                                        #Lifestyle</Link>
                                                    </div>
                                                    <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3
                                                        mins read</span></div>
                                                </div><Link href="/single-sidebar">
                                                    <h4 className="color-white mt-20"> Self-observation is the first step of inner
                                                        unfolding</h4>
                                                </Link>
                                                <div className="row align-items-center mt-25">
                                                    <div className="col-7">
                                                        <div className="box-author"><img src="assets/imgs/page/homepage1/me.png" alt="Genz" />
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
                                                    <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">6
                                                        mins read</span></div>
                                                </div><Link href="/single-sidebar">
                                                    <h4 className="color-white mt-20"> Self-observation is the first step of inner
                                                        unfolding</h4>
                                                </Link>
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
                                                    <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">6
                                                        mins read</span></div>
                                                </div><Link href="/single-sidebar">
                                                    <h5 className="color-white mt-20"> Self-observation is the first step of inner
                                                        unfolding</h5>
                                                </Link>
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
                                                    <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">6
                                                        mins read</span></div>
                                                </div><Link href="/single-sidebar">
                                                    <h5 className="color-white mt-20"> Self-observation is the first step of inner
                                                        unfolding</h5>
                                                </Link>
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
                                                    <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">6
                                                        mins read</span></div>
                                                </div><Link href="/single-sidebar">
                                                    <h5 className="color-white mt-20"> Self-observation is the first step of inner
                                                        unfolding</h5>
                                                </Link>
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
                                <h2 className="color-linear d-inline-block mb-10 wow animate__animated animate__fadeInUp">Popular
                                    Tags</h2>
                                <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp">Most searched keywords
                                </p>
                                <div className="row mt-70 mb-50">
                                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                        <div className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeIn" data-wow-delay="0s">
                                            <div className="card-image"><Link href="/blog-archive"><img src="assets/imgs/page/homepage1/tag1.png" alt="Genz" /></Link></div>
                                            <div className="card-info"><Link className="color-gray-500" href="/blog-archive">Travel</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                        <div className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeIn" data-wow-delay="0.1s">
                                            <div className="card-image"><Link href="/blog-archive"><img src="assets/imgs/page/homepage1/tag2.png" alt="Genz" /></Link></div>
                                            <div className="card-info"><Link className="color-gray-500" href="/blog-archive">
                                                Culture</Link></div>
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
                                            <div className="card-info"><Link className="color-gray-500" href="/blog-archive">Food</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                        <div className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeIn" data-wow-delay="0.5s">
                                            <div className="card-image"><Link href="/blog-archive"><img src="assets/imgs/page/homepage1/tag6.png" alt="Genz" /></Link></div>
                                            <div className="card-info"><Link className="color-gray-500" href="/blog-archive">Space</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                        <div className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeIn" data-wow-delay="0.1s">
                                            <div className="card-image"><Link href="/blog-archive"><img src="assets/imgs/page/homepage1/tag7.png" alt="Genz" /></Link></div>
                                            <div className="card-info"><Link className="color-gray-500" href="/blog-archive">Animal</Link>
                                            </div>
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
                                            <div className="card-info"><Link className="color-gray-500" href="/blog-archive">Plant</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                        <div className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeIn" data-wow-delay="0.5s">
                                            <div className="card-image"><Link href="/blog-archive"><img src="assets/imgs/page/homepage1/tag11.png" alt="Genz" /></Link></div>
                                            <div className="card-info"><Link className="color-gray-500" href="/blog-archive">Nature</Link>
                                            </div>
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
                                    <div className="col-lg-8">
                                        <h2 className="color-linear d-inline-block mb-10">Recent posts</h2>
                                        <p className="text-lg color-gray-500">Don't miss the latest trends</p>
                                        <div className="box-list-posts mt-70">
                                            <div className="card-list-posts wow animate__animated animate__fadeIn">
                                                <div className="card-image hover-up"><Link href="/single-sidebar"><img src="assets/imgs/page/homepage1/img-news-1.jpg" alt="Genz" /></Link>
                                                </div>
                                                <div className="card-info"><Link className="btn btn-tag bg-gray-800 hover-up" href="/blog-archive">Working Tips</Link><Link href="/single-sidebar">
                                                    <h4 className="mt-15 mb-20 color-white">Helpful Tips for Working from Home
                                                        as a Freelancer</h4>
                                                </Link>
                                                    <p className="color-gray-500">Gosh jaguar ostrich quail one excited dear hello
                                                        and bound and the and bland moral misheard roadrunner flapped lynx far
                                                        that and jeepers giggled far and far</p>
                                                    <div className="row mt-20">
                                                        <div className="col-7"><Link className="color-gray-700 text-sm mr-15" href="/blog-archive"># Travel</Link><Link className="color-gray-700 text-sm" href="/blog-archive">#
                                                            Lifestyle</Link></div>
                                                        <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-list-posts wow animate__animated animate__fadeIn">
                                                <div className="card-image hover-up"><Link href="/single-sidebar"><img src="assets/imgs/page/homepage1/img-news-2.jpg" alt="Genz" /></Link>
                                                </div>
                                                <div className="card-info"><Link className="btn btn-tag bg-gray-800 hover-up" href="/blog-archive">Working Tips</Link><Link href="/single-sidebar">
                                                    <h4 className="mt-15 mb-20 color-white">Helpful Tips for Working from Home
                                                        as a Freelancer</h4>
                                                </Link>
                                                    <p className="color-gray-500">Gosh jaguar ostrich quail one excited dear hello
                                                        and bound and the and bland moral misheard roadrunner flapped lynx far
                                                        that and jeepers giggled far and far</p>
                                                    <div className="row mt-20">
                                                        <div className="col-7"><Link className="color-gray-700 text-sm mr-15" href="/blog-archive"># Travel</Link><Link className="color-gray-700 text-sm" href="/blog-archive">#
                                                            Lifestyle</Link></div>
                                                        <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-list-posts wow animate__animated animate__fadeIn">
                                                <div className="card-image hover-up"><Link href="/single-sidebar"><img src="assets/imgs/page/homepage1/img-news-3.jpg" alt="Genz" /></Link>
                                                </div>
                                                <div className="card-info"><Link className="btn btn-tag bg-gray-800 hover-up" href="/blog-archive">Working Tips</Link><Link href="/single-sidebar">
                                                    <h4 className="mt-15 mb-20 color-white">Helpful Tips for Working from Home
                                                        as a Freelancer</h4>
                                                </Link>
                                                    <p className="color-gray-500">Gosh jaguar ostrich quail one excited dear hello
                                                        and bound and the and bland moral misheard roadrunner flapped lynx far
                                                        that and jeepers giggled far and far</p>
                                                    <div className="row mt-20">
                                                        <div className="col-7"><Link className="color-gray-700 text-sm mr-15" href="/blog-archive"># Travel</Link><Link className="color-gray-700 text-sm" href="/blog-archive">#
                                                            Lifestyle</Link></div>
                                                        <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-list-posts wow animate__animated animate__fadeIn">
                                                <div className="card-image hover-up"><Link href="/single-sidebar"><img src="assets/imgs/page/homepage1/img-news-4.jpg" alt="Genz" /></Link>
                                                </div>
                                                <div className="card-info"><Link className="btn btn-tag bg-gray-800 hover-up" href="/blog-archive">Working Tips</Link><Link href="/single-sidebar">
                                                    <h4 className="mt-15 mb-20 color-white">Helpful Tips for Working from Home
                                                        as a Freelancer</h4>
                                                </Link>
                                                    <p className="color-gray-500">Gosh jaguar ostrich quail one excited dear hello
                                                        and bound and the and bland moral misheard roadrunner flapped lynx far
                                                        that and jeepers giggled far and far</p>
                                                    <div className="row mt-20">
                                                        <div className="col-7"><Link className="color-gray-700 text-sm mr-15" href="/blog-archive"># Travel</Link><Link className="color-gray-700 text-sm" href="/blog-archive">#
                                                            Lifestyle</Link></div>
                                                        <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-list-posts wow animate__animated animate__fadeIn">
                                                <div className="card-image hover-up"><Link href="/single-sidebar"><img src="assets/imgs/page/homepage1/img-news-5.jpg" alt="Genz" /></Link>
                                                </div>
                                                <div className="card-info"><Link className="btn btn-tag bg-gray-800 hover-up" href="/blog-archive">Working Tips</Link><Link href="/single-sidebar">
                                                    <h4 className="mt-15 mb-20 color-white">Helpful Tips for Working from Home
                                                        as a Freelancer</h4>
                                                </Link>
                                                    <p className="color-gray-500">Gosh jaguar ostrich quail one excited dear hello
                                                        and bound and the and bland moral misheard roadrunner flapped lynx far
                                                        that and jeepers giggled far and far</p>
                                                    <div className="row mt-20">
                                                        <div className="col-7"><Link className="color-gray-700 text-sm mr-15" href="/blog-archive"># Travel</Link><Link className="color-gray-700 text-sm" href="/blog-archive">#
                                                            Lifestyle</Link></div>
                                                        <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <nav className="mb-50">
                                            <ul className="pagination">
                                                <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".0s"><Link className="page-link page-prev" href="#"><i className="fi-rr-arrow-small-left" /></Link></li>
                                                <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".1s"><Link className="page-link" href="#">1</Link></li>
                                                <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".2s"><Link className="page-link active" href="#">2</Link></li>
                                                <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".3s"><Link className="page-link" href="#">3</Link></li>
                                                <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".4s"><Link className="page-link" href="#">...</Link></li>
                                                <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".5s"><Link className="page-link page-next" href="#"><i className="fi-rr-arrow-small-right" /></Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="sidebar">
                                            <div className="box-sidebar bg-gray-850 border-gray-800">
                                                <div className="head-sidebar wow animate__animated animate__fadeIn">
                                                    <h5 className="line-bottom">Popular Posts</h5>
                                                </div>
                                                <div className="content-sidebar">
                                                    <div className="list-posts">
                                                        <div className="item-post wow animate__animated animate__fadeIn">
                                                            <div className="image-post"><Link href="/single-sidebar"><img src="assets/imgs/page/homepage1/img-post.jpg" alt="Genz" /></Link></div>
                                                            <div className="info-post border-gray-800"><Link href="/single-sidebar">
                                                                <h6 className="color-white">Creating is a privilege but it’s
                                                                    also a gift</h6>
                                                            </Link><span className="color-gray-700">15 mins read</span>
                                                                <ul className="d-inline-block">
                                                                    <li className="color-gray-700">15 April 2022</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="item-post wow animate__animated animate__fadeIn">
                                                            <div className="image-post"><Link href="/single-sidebar"><img src="assets/imgs/page/homepage1/img-post2.jpg" alt="Genz" /></Link></div>
                                                            <div className="info-post border-gray-800"><Link href="/single-sidebar">
                                                                <h6 className="color-white">Being unique is better than being
                                                                    perfect</h6>
                                                            </Link><span className="color-gray-700">15 mins read</span>
                                                                <ul className="d-inline-block">
                                                                    <li className="color-gray-700">15 April 2022</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="item-post wow animate__animated animate__fadeIn">
                                                            <div className="image-post"><Link href="/single-sidebar"><img src="assets/imgs/page/homepage1/img-post3.jpg" alt="Genz" /></Link></div>
                                                            <div className="info-post border-gray-800"><Link href="/single-sidebar">
                                                                <h6 className="color-white">Every day, in every city and town
                                                                    across the country</h6>
                                                            </Link><span className="color-gray-700">15 mins read</span>
                                                                <ul className="d-inline-block">
                                                                    <li className="color-gray-700">15 April 2022</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="item-post wow animate__animated animate__fadeIn">
                                                            <div className="image-post"><Link href="/single-sidebar"><img src="assets/imgs/page/homepage1/img-post4.jpg" alt="Genz" /></Link></div>
                                                            <div className="info-post border-gray-800"><Link href="/single-sidebar">
                                                                <h6 className="color-white">Your voice, your mind, your story,
                                                                    your vision</h6>
                                                            </Link><span className="color-gray-700">15 mins read</span>
                                                                <ul className="d-inline-block">
                                                                    <li className="color-gray-700">15 April 2022</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="item-post wow animate__animated animate__fadeIn">
                                                            <div className="image-post"><Link href="/single-sidebar"><img src="assets/imgs/page/homepage1/img-post4.jpg" alt="Genz" /></Link></div>
                                                            <div className="info-post border-gray-800"><Link href="/single-sidebar">
                                                                <h6 className="color-white">Your voice, your mind, your story,
                                                                    your vision</h6>
                                                            </Link><span className="color-gray-700">15 mins read</span>
                                                                <ul className="d-inline-block">
                                                                    <li className="color-gray-700">15 April 2022</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box-sidebar bg-gray-850 border-gray-800">
                                                <div className="head-sidebar wow animate__animated animate__fadeIn">
                                                    <h5 className="line-bottom">Last Comment</h5>
                                                </div>
                                                <div className="content-sidebar">
                                                    <div className="list-comments">
                                                        <div className="item-comment border-gray-800 wow animate__animated animate__fadeIn">
                                                            <p className="color-gray-500 mb-20">“ Gosh jaguar ostrich quail one
                                                                excited dear hello and bound and the and bland moral misheard
                                                                roadrunner “</p>
                                                            <div className="box-author-small"><img src="assets/imgs/page/homepage1/author6.png" alt="Genz" />
                                                                <div className="author-info"><span className="d-block color-gray-700 text-sm">Jane
                                                                    Cooper</span><span className="color-gray-700 text-xs">15
                                                                        April 2022</span></div>
                                                            </div>
                                                        </div>
                                                        <div className="item-comment border-gray-800 wow animate__animated animate__fadeIn">
                                                            <p className="color-gray-500 mb-20">“ Gosh jaguar ostrich quail one
                                                                excited dear hello and bound and the and bland moral misheard
                                                                roadrunner “</p>
                                                            <div className="box-author-small"><img src="assets/imgs/page/homepage1/author7.png" alt="Genz" />
                                                                <div className="author-info"><span className="d-block color-gray-700 text-sm">Katen
                                                                    Doe</span><span className="color-gray-700 text-xs">15 April
                                                                        2022</span></div>
                                                            </div>
                                                        </div>
                                                        <div className="item-comment border-gray-800 wow animate__animated animate__fadeIn">
                                                            <p className="color-gray-500 mb-20">“ Gosh jaguar ostrich quail one
                                                                excited dear hello and bound and the and bland moral misheard
                                                                roadrunner “</p>
                                                            <div className="box-author-small"><img src="assets/imgs/page/homepage1/author8.png" alt="Genz" />
                                                                <div className="author-info"><span className="d-block color-gray-700 text-sm">Barbara
                                                                    Cartland</span><span className="color-gray-700 text-xs">15
                                                                        April 2022</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box-sidebar bg-gray-850 border-gray-800">
                                                <div className="head-sidebar"><Link href="/"><img src="assets/imgs/template/logo.svg" alt="Genz" /></Link>
                                                    <h6 className="color-gray-700">Follow us on instagram</h6>
                                                </div>
                                                <div className="content-sidebar">
                                                    <div className="row mt-30 mb-10">
                                                        <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                                            <Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery.png" alt="Genz" /></Link>
                                                        </div>
                                                        <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                                            <Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery2.png" alt="Genz" /></Link>
                                                        </div>
                                                        <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                                            <Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery3.png" alt="Genz" /></Link>
                                                        </div>
                                                        <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                                            <Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery4.png" alt="Genz" /></Link>
                                                        </div>
                                                        <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                                            <Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery5.png" alt="Genz" /></Link>
                                                        </div>
                                                        <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                                            <Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery6.png" alt="Genz" /></Link>
                                                        </div>
                                                        <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                                            <Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery7.png" alt="Genz" /></Link>
                                                        </div>
                                                        <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                                            <Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery8.png" alt="Genz" /></Link>
                                                        </div>
                                                        <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                                            <Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery9.png" alt="Genz" /></Link>
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
                </div>
            </Layout>
        </>
    )
}
