import Link from "next/link";
import Layout from "../components/layout/Layout";

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
                                <div className="mt-50">
                                    <h2 className="color-linear d-inline-block mb-10">Posted by Steven</h2>
                                    <p className="text-lg color-gray-500">Exclusive author</p>
                                    <div className="row mt-50 mb-10">
                                        <div className="col-lg-6">
                                            <div className="card-blog-1 border-gray-800 bg-gray-850 hover-up">
                                                <div className="card-image mb-20"><Link className="post-type" href="#" /><Link href="/single-sidebar"><img src="assets/imgs/page/travel-tip/news1.png" alt="Genz" /></Link></div>
                                                <div className="card-info">
                                                    <div className="row">
                                                        <div className="col-7"><Link className="color-gray-700 text-sm" href="/blog-archive"># Travel</Link><Link className="color-gray-700 text-sm" href="/blog-archive"># Lifestyle</Link></div>
                                                        <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                    </div><Link href="/single-sidebar">
                                                        <h4 className="color-white mt-20">Self-observation is the first step of inner unfolding</h4></Link>
                                                    <div className="row align-items-center mt-25">
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
                                        <div className="col-lg-6">
                                            <div className="card-blog-1 border-gray-800 bg-gray-850 hover-up">
                                                <div className="card-image mb-20"><Link className="post-type" href="#" /><Link href="/single-sidebar"><img src="assets/imgs/page/travel-tip/news2.png" alt="Genz" /></Link></div>
                                                <div className="card-info">
                                                    <div className="row">
                                                        <div className="col-7"><Link className="color-gray-700 text-sm" href="/blog-archive"># Travel</Link><Link className="color-gray-700 text-sm" href="/blog-archive"># Lifestyle</Link></div>
                                                        <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                    </div><Link href="/single-sidebar">
                                                        <h4 className="color-white mt-20">Your Light Is About To Stop Being Relevant</h4></Link>
                                                    <div className="row align-items-center mt-25">
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
                                        <div className="col-lg-4">
                                            <div className="card-blog-1 border-gray-800 bg-gray-850 hover-up">
                                                <div className="card-image mb-20"><Link className="post-type" href="#" /><Link href="/single-sidebar"><img src="assets/imgs/page/travel-tip/news3.png" alt="Genz" /></Link></div>
                                                <div className="card-info">
                                                    <div className="row">
                                                        <div className="col-7"><Link className="color-gray-700 text-sm" href="/blog-archive"># Travel</Link></div>
                                                        <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                    </div><Link href="/single-sidebar">
                                                        <h5 className="color-white mt-20">16 Unheard Ways To Achieve Greater Walker</h5></Link>
                                                    <div className="row align-items-center mt-25">
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
                                        <div className="col-lg-4">
                                            <div className="card-blog-1 border-gray-800 bg-gray-850 hover-up">
                                                <div className="card-image mb-20"><Link className="post-type" href="#" /><Link href="/single-sidebar"><img src="assets/imgs/page/travel-tip/news4.png" alt="Genz" /></Link></div>
                                                <div className="card-info">
                                                    <div className="row">
                                                        <div className="col-7"><Link className="color-gray-700 text-sm" href="/blog-archive"># Travel</Link></div>
                                                        <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                    </div><Link href="/single-sidebar">
                                                        <h5 className="color-white mt-20">Master The Art Of Nature With These 7 Tips</h5></Link>
                                                    <div className="row align-items-center mt-25">
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
                                        <div className="col-lg-4">
                                            <div className="card-blog-1 border-gray-800 bg-gray-850 hover-up">
                                                <div className="card-image mb-20"><Link className="post-type" href="#" /><Link href="/single-sidebar"><img src="assets/imgs/page/travel-tip/news5.png" alt="Genz" /></Link></div>
                                                <div className="card-info">
                                                    <div className="row">
                                                        <div className="col-7"><Link className="color-gray-700 text-sm" href="/blog-archive"># Travel</Link></div>
                                                        <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                    </div><Link href="/single-sidebar">
                                                        <h5 className="color-white mt-20">Master The Art Of Nature With These 7 Tips</h5></Link>
                                                    <div className="row align-items-center mt-25">
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
                                        <div className="col-lg-4">
                                            <div className="card-blog-1 border-gray-800 bg-gray-850 hover-up">
                                                <div className="card-image mb-20"><Link className="post-type" href="#" /><Link href="/single-sidebar"><img src="assets/imgs/page/travel-tip/news6.png" alt="Genz" /></Link></div>
                                                <div className="card-info">
                                                    <div className="row">
                                                        <div className="col-7"><Link className="color-gray-700 text-sm" href="/blog-archive"># Travel</Link></div>
                                                        <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                    </div><Link href="/single-sidebar">
                                                        <h5 className="color-white mt-20">16 Unheard Ways To Achieve Greater Walker</h5></Link>
                                                    <div className="row align-items-center mt-25">
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
                                        <div className="col-lg-4">
                                            <div className="card-blog-1 border-gray-800 bg-gray-850 hover-up">
                                                <div className="card-image mb-20"><Link className="post-type" href="#" /><Link href="/single-sidebar"><img src="assets/imgs/page/travel-tip/news7.png" alt="Genz" /></Link></div>
                                                <div className="card-info">
                                                    <div className="row">
                                                        <div className="col-7"><Link className="color-gray-700 text-sm" href="/blog-archive"># Travel</Link></div>
                                                        <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                    </div><Link href="/single-sidebar">
                                                        <h5 className="color-white mt-20">Master The Art Of Nature With These 7 Tips</h5></Link>
                                                    <div className="row align-items-center mt-25">
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
                                        <div className="col-lg-4">
                                            <div className="card-blog-1 border-gray-800 bg-gray-850 hover-up">
                                                <div className="card-image mb-20"><Link className="post-type" href="#" /><Link href="/single-sidebar"><img src="assets/imgs/page/travel-tip/news8.png" alt="Genz" /></Link></div>
                                                <div className="card-info">
                                                    <div className="row">
                                                        <div className="col-7"><Link className="color-gray-700 text-sm" href="/blog-archive"># Travel</Link></div>
                                                        <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                    </div><Link href="/single-sidebar">
                                                        <h5 className="color-white mt-20">Master The Art Of Nature With These 7 Tips</h5></Link>
                                                    <div className="row align-items-center mt-25">
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
                                        <div className="col-lg-4">
                                            <div className="card-blog-1 border-gray-800 bg-gray-850 hover-up">
                                                <div className="card-image mb-20"><Link className="post-type" href="#" /><Link href="/single-sidebar"><img src="assets/imgs/page/travel-tip/news9.png" alt="Genz" /></Link></div>
                                                <div className="card-info">
                                                    <div className="row">
                                                        <div className="col-7"><Link className="color-gray-700 text-sm" href="/blog-archive"># Travel</Link></div>
                                                        <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                    </div><Link href="/single-sidebar">
                                                        <h5 className="color-white mt-20">Your Light Is About To Stop Being Relevant</h5></Link>
                                                    <div className="row align-items-center mt-25">
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
                                        <div className="col-lg-4">
                                            <div className="card-blog-1 border-gray-800 bg-gray-850 hover-up">
                                                <div className="card-image mb-20"><Link className="post-type" href="#" /><Link href="/single-sidebar"><img src="assets/imgs/page/travel-tip/news10.png" alt="Genz" /></Link></div>
                                                <div className="card-info">
                                                    <div className="row">
                                                        <div className="col-7"><Link className="color-gray-700 text-sm" href="/blog-archive"># Travel</Link></div>
                                                        <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                    </div><Link href="/single-sidebar">
                                                        <h5 className="color-white mt-20">Your Light Is About To Stop Being Relevant</h5></Link>
                                                    <div className="row align-items-center mt-25">
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
                                        <div className="col-lg-4">
                                            <div className="card-blog-1 border-gray-800 bg-gray-850 hover-up">
                                                <div className="card-image mb-20"><Link className="post-type" href="#" /><Link href="/single-sidebar"><img src="assets/imgs/page/travel-tip/news11.png" alt="Genz" /></Link></div>
                                                <div className="card-info">
                                                    <div className="row">
                                                        <div className="col-7"><Link className="color-gray-700 text-sm" href="/blog-archive"># Travel</Link></div>
                                                        <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                    </div><Link href="/single-sidebar">
                                                        <h5 className="color-white mt-20">Your Light Is About To Stop Being Relevant</h5></Link>
                                                    <div className="row align-items-center mt-25">
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
                                        <div className="col-lg-4">
                                            <div className="card-blog-1 border-gray-800 bg-gray-850 hover-up">
                                                <div className="card-image mb-20"><Link className="post-type" href="#" /><Link href="/single-sidebar"><img src="assets/imgs/page/travel-tip/news12.png" alt="Genz" /></Link></div>
                                                <div className="card-info">
                                                    <div className="row">
                                                        <div className="col-7"><Link className="color-gray-700 text-sm" href="/blog-archive"># Travel</Link></div>
                                                        <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                    </div><Link href="/single-sidebar">
                                                        <h5 className="color-white mt-20">Your Light Is About To Stop Being Relevant</h5></Link>
                                                    <div className="row align-items-center mt-25">
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
                                        <div className="col-lg-4">
                                            <div className="card-blog-1 border-gray-800 bg-gray-850 hover-up">
                                                <div className="card-image mb-20"><Link className="post-type" href="#" /><Link href="/single-sidebar"><img src="assets/imgs/page/travel-tip/news13.png" alt="Genz" /></Link></div>
                                                <div className="card-info">
                                                    <div className="row">
                                                        <div className="col-7"><Link className="color-gray-700 text-sm" href="/blog-archive"># Travel</Link></div>
                                                        <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                    </div><Link href="/single-sidebar">
                                                        <h5 className="color-white mt-20">Your Light Is About To Stop Being Relevant</h5></Link>
                                                    <div className="row align-items-center mt-25">
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
                                        <div className="col-lg-4">
                                            <div className="card-blog-1 border-gray-800 bg-gray-850 hover-up">
                                                <div className="card-image mb-20"><Link className="post-type" href="#" /><Link href="/single-sidebar"><img src="assets/imgs/page/travel-tip/news14.png" alt="Genz" /></Link></div>
                                                <div className="card-info">
                                                    <div className="row">
                                                        <div className="col-7"><Link className="color-gray-700 text-sm" href="/blog-archive"># Travel</Link></div>
                                                        <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                    </div><Link href="/single-sidebar">
                                                        <h5 className="color-white mt-20">Your Light Is About To Stop Being Relevant</h5></Link>
                                                    <div className="row align-items-center mt-25">
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
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>

        </>
    )
}