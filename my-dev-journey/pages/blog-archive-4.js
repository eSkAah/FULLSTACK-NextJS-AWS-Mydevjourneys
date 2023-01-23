import Link from "next/link";
import Layout from "../components/layout/Layout";
import data from "../util/blogData";

export default function Home() {
    return (
        <>
            <Layout>
                <div className="cover-home3">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-1" />
                            <div className="col-xl-10 col-lg-12">
                                <div className="row align-items-end mt-50">
                                    <div className="col-lg-7 mb-20">
                                        <div className="d-inline-block position-relative">
                                            <h1 className="color-white mb-20 color-linear wow animate__animated animate__fadeIn">Technology</h1><span className="btn btn-linear-small btn-number-arts">36 articles</span>
                                        </div>
                                        <p className="color-gray-500 text-base wow animate__animated animate__fadeIn">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis nisi sed turpis vulputate viverra. Morbi ligula elit, hendrerit non nisl tincidunt, sodales consequat magna.</p>
                                    </div>
                                    <div className="col-lg-5 mb-20 text-start text-lg-end">
                                        <div className="box-breadcrumbs wow animate__animated animate__fadeIn">
                                            <ul className="breadcrumb">
                                                <li><Link className="home" href="/">Home</Link></li>
                                                <li><Link href="/blog-archive">Blog</Link></li>
                                                <li><span>Technology</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="border-bottom border-gray-800 mt-10 mb-30" />
                                    </div>
                                </div>
                                <div className="mt-50 mb-50">
                                    <div className="row mt-50 mb-10">
                                        {data.slice(0, 6).map((item, i) => (
                                            <div className="col-lg-6">
                                                <div className="card-blog-1 hover-up wow animate__animated animate__fadeIn">
                                                    <div className="card-image mb-20">
                                                        <Link className="post-type" href="#" />
                                                        <Link href={`/blog/${item.id}`}>
                                                            {/* <img src="assets/imgs/page/technology/news1.png" alt="Genz" /> */}
                                                            <img src={`assets/imgs/page/technology/${item.img}`} alt="Genz" />
                                                        </Link>
                                                    </div>
                                                    <div className="card-info">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                <Link className="color-gray-700 text-sm" href="/blog-archive">#Travel</Link>
                                                                <Link className="color-gray-700 text-sm" href="/blog-archive">#Lifestyle</Link>
                                                            </div>
                                                            <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                        </div><Link href={`/blog/${item.id}`}>
                                                            <h4 className="color-white mt-20">{item.title}</h4></Link>
                                                        <p className="color-gray-500 mt-15">Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far</p>
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
                                        ))}
                                        {/* <div className="col-lg-6">
                                            <div className="card-blog-1 hover-up wow animate__animated animate__fadeIn">
                                                <div className="card-image mb-20"><Link className="post-type" href="#" /><Link href="/single-sidebar"><img src="assets/imgs/page/technology/news2.png" alt="Genz" /></Link></div>
                                                <div className="card-info">
                                                    <div className="row">
                                                        <div className="col-7"><Link className="color-gray-700 text-sm" href="/blog-archive">#Travel</Link><Link className="color-gray-700 text-sm" href="/blog-archive">#Lifestyle</Link></div>
                                                        <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                    </div><Link href="/single-sidebar">
                                                        <h4 className="color-white mt-20">Ready To Go Home After The Sunset View? </h4></Link>
                                                    <p className="color-gray-500 mt-15">Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far</p>
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
                                            <div className="card-blog-1 hover-up wow animate__animated animate__fadeIn">
                                                <div className="card-image mb-20"><Link className="post-type" href="#" /><Link href="/single-sidebar"><img src="assets/imgs/page/technology/news3.png" alt="Genz" /></Link></div>
                                                <div className="card-info">
                                                    <div className="row">
                                                        <div className="col-7"><Link className="color-gray-700 text-sm" href="/blog-archive">#Travel</Link><Link className="color-gray-700 text-sm" href="/blog-archive">#Lifestyle</Link></div>
                                                        <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                    </div><Link href="/single-sidebar">
                                                        <h4 className="color-white mt-20">Ready To Go Home After The Sunset View? </h4></Link>
                                                    <p className="color-gray-500 mt-15">Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far</p>
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
                                            <div className="card-blog-1 hover-up wow animate__animated animate__fadeIn">
                                                <div className="card-image mb-20"><Link className="post-type" href="#" /><Link href="/single-sidebar"><img src="assets/imgs/page/technology/news4.png" alt="Genz" /></Link></div>
                                                <div className="card-info">
                                                    <div className="row">
                                                        <div className="col-7"><Link className="color-gray-700 text-sm" href="/blog-archive">#Travel</Link><Link className="color-gray-700 text-sm" href="/blog-archive">#Lifestyle</Link></div>
                                                        <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                    </div><Link href="/single-sidebar">
                                                        <h4 className="color-white mt-20">Ready To Go Home After The Sunset View? </h4></Link>
                                                    <p className="color-gray-500 mt-15">Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far</p>
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
                                            <div className="card-blog-1 hover-up wow animate__animated animate__fadeIn">
                                                <div className="card-image mb-20"><Link className="post-type" href="#" /><Link href="/single-sidebar"><img src="assets/imgs/page/travel-tip/news9.png" alt="Genz" /></Link></div>
                                                <div className="card-info">
                                                    <div className="row">
                                                        <div className="col-7"><Link className="color-gray-700 text-sm" href="/blog-archive">#Travel</Link><Link className="color-gray-700 text-sm" href="/blog-archive">#Lifestyle</Link></div>
                                                        <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                    </div><Link href="/single-sidebar">
                                                        <h4 className="color-white mt-20">Ready To Go Home After The Sunset View? </h4></Link>
                                                    <p className="color-gray-500 mt-15">Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far</p>
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
                                            <div className="card-blog-1 hover-up wow animate__animated animate__fadeIn">
                                                <div className="card-image mb-20"><Link className="post-type" href="#" /><Link href="/single-sidebar"><img src="assets/imgs/page/travel-tip/news12.png" alt="Genz" /></Link></div>
                                                <div className="card-info">
                                                    <div className="row">
                                                        <div className="col-7"><Link className="color-gray-700 text-sm" href="/blog-archive">#Travel</Link><Link className="color-gray-700 text-sm" href="/blog-archive">#Lifestyle</Link></div>
                                                        <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                    </div><Link href="/single-sidebar">
                                                        <h4 className="color-white mt-20">Ready To Go Home After The Sunset View? </h4></Link>
                                                    <p className="color-gray-500 mt-15">Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far</p>
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
                                            <div className="card-blog-1 hover-up wow animate__animated animate__fadeIn">
                                                <div className="card-image mb-20"><Link className="post-type" href="#" /><Link href="/single-sidebar"><img src="assets/imgs/page/travel-tip/news2.png" alt="Genz" /></Link></div>
                                                <div className="card-info">
                                                    <div className="row">
                                                        <div className="col-7"><Link className="color-gray-700 text-sm" href="/blog-archive">#Travel</Link><Link className="color-gray-700 text-sm" href="/blog-archive">#Lifestyle</Link></div>
                                                        <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                    </div><Link href="/single-sidebar">
                                                        <h4 className="color-white mt-20">Ready To Go Home After The Sunset View? </h4></Link>
                                                    <p className="color-gray-500 mt-15">Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far</p>
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
                                            <div className="card-blog-1 hover-up wow animate__animated animate__fadeIn">
                                                <div className="card-image mb-20"><Link className="post-type" href="#" /><Link href="/single-sidebar"><img src="assets/imgs/page/technology/news5.png" alt="Genz" /></Link></div>
                                                <div className="card-info">
                                                    <div className="row">
                                                        <div className="col-7"><Link className="color-gray-700 text-sm" href="/blog-archive">#Travel</Link><Link className="color-gray-700 text-sm" href="/blog-archive">#Lifestyle</Link></div>
                                                        <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                    </div><Link href="/single-sidebar">
                                                        <h4 className="color-white mt-20">Ready To Go Home After The Sunset View? </h4></Link>
                                                    <p className="color-gray-500 mt-15">Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far</p>
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
                                        </div> */}
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
                                <div className="mb-70" />
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
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}