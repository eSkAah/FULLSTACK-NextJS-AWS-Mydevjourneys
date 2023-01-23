import Link from "next/link";
import Layout from "../components/layout/Layout";
import data from "../util/healthy";

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
                                            <h1 className="color-white mb-20 color-linear wow animate__animated animate__fadeIn">
                                                Healthy</h1><span className="btn btn-linear-small btn-number-arts">36
                                                    articles</span>
                                        </div>
                                        <p className="color-gray-500 text-base wow animate__animated animate__fadeIn">Lorem ipsum
                                            dolor sit amet, consectetur adipiscing elit. Nulla convallis nisi sed turpis
                                            vulputate viverra. Morbi ligula elit, hendrerit non nisl tincidunt, sodales
                                            consequat magna.</p>
                                    </div>
                                    <div className="col-lg-5 mb-20 text-start text-lg-end">
                                        <div className="box-breadcrumbs wow animate__animated animate__fadeIn">
                                            <ul className="breadcrumb">
                                                <li><Link className="home" href="/">Home</Link></li>
                                                <li><Link href="/blog-archive">Blog</Link></li>
                                                <li><span>Healthy</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="border-bottom border-gray-800 mt-10 mb-30" />
                                    </div>
                                </div>
                                <div className="box-list-posts mt-40">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <div className="card-blog-1 card-blog-2 hover-up wow animate__animated animate__fadeIn">
                                                <div className="card-image mb-20"><Link className="post-type" href="#" /><Link href="/single-sidebar"><img src="assets/imgs/page/homepage4/img5.jpg" alt="Genz" /></Link></div>
                                                <div className="card-info"><Link href="/single-sidebar">
                                                    <h4 className="color-white mt-30">I work best when my space is filled with
                                                        inspiration</h4>
                                                </Link>
                                                    <p className="mt-25 text-lg color-gray-700">Gosh jaguar ostrich quail one
                                                        excited dear hello and bound and the and bland moral misheard roadrunner
                                                        flapped lynx far that and jeepers giggled far and far</p>
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
                                            <div className="box-list-posts mt-30">
                                                {data.slice(0, 5).map((item, i) => (
                                                    <div className="card-list-posts wow animate__animated animate__fadeIn">
                                                        <div className="card-image hover-up"><Link href={`/blog/${item.id}`} ><img src={`/assets/imgs/page/healthy/${item.img}`} alt="Genz" /></Link></div>
                                                        <div className="card-info"><Link className="btn btn-tag bg-gray-800 hover-up" href="/blog-archive">{item.category}</Link><Link href={`/blog/${item.id}`} >
                                                            <h4 className="mt-15 mb-20 color-white">{item.title}</h4>
                                                        </Link>
                                                            <p className="color-gray-500">Gosh jaguar ostrich quail one excited dear
                                                                hello and bound and the and bland moral misheard roadrunner flapped
                                                                lynx far that and jeepers giggled far and far</p>
                                                            <div className="row mt-20">
                                                                <div className="col-7"><Link className="color-gray-700 text-sm mr-15" href="/blog-archive"># Travel</Link><Link className="color-gray-700 text-sm" href="/blog-archive">#
                                                                    Lifestyle</Link></div>
                                                                <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
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
                                                    <div className="head-sidebar">
                                                        <h5 className="line-bottom">Categories</h5>
                                                    </div>
                                                    <div className="content-sidebar">
                                                        <div className="list-cats">
                                                            <div className="item-cats border-gray-800 wow animate__animated animate__fadeIn">
                                                                <div className="cat-left">
                                                                    <div className="image-cat"><Link href="/blog-archive"><img src="assets/imgs/page/healthy/cat1.png" alt="Genz" /></Link></div>
                                                                    <div className="info-cat"><Link className="color-gray-500 text-xl" href="/blog-archive">Travel Tips</Link></div>
                                                                </div>
                                                                <div className="cat-right"><Link className="btn btn-small text-sm color-gray-500 bg-gray-800" href="/blog-archive">36
                                                                    posts</Link></div>
                                                            </div>
                                                            <div className="item-cats border-gray-800 wow animate__animated animate__fadeIn">
                                                                <div className="cat-left">
                                                                    <div className="image-cat"><Link href="/blog-archive-2"><img src="assets/imgs/page/healthy/cat2.png" alt="Genz" /></Link></div>
                                                                    <div className="info-cat"><Link className="color-gray-500 text-xl" href="/blog-archive-2">Technology</Link></div>
                                                                </div>
                                                                <div className="cat-right"><Link className="btn btn-small text-sm color-gray-500 bg-gray-800" href="/blog-archive-2">14
                                                                    posts</Link></div>
                                                            </div>
                                                            <div className="item-cats border-gray-800 wow animate__animated animate__fadeIn">
                                                                <div className="cat-left">
                                                                    <div className="image-cat"><Link href="/blog-archive-3"><img src="assets/imgs/page/healthy/cat3.png" alt="Genz" /></Link></div>
                                                                    <div className="info-cat"><Link className="color-gray-500 text-xl" href="/blog-archive-3">Business</Link></div>
                                                                </div>
                                                                <div className="cat-right"><Link className="btn btn-small text-sm color-gray-500 bg-gray-800" href="/blog-archive-3">87
                                                                    posts</Link></div>
                                                            </div>
                                                            <div className="item-cats border-gray-800 wow animate__animated animate__fadeIn">
                                                                <div className="cat-left">
                                                                    <div className="image-cat"><Link href="/blog-archive-4"><img src="assets/imgs/page/healthy/cat4.png" alt="Genz" /></Link></div>
                                                                    <div className="info-cat"><Link className="color-gray-500 text-xl" href="/blog-archive-4">Food</Link></div>
                                                                </div>
                                                                <div className="cat-right"><Link className="btn btn-small text-sm color-gray-500 bg-gray-800" href="/blog-archive-4">125
                                                                    posts</Link></div>
                                                            </div>
                                                            <div className="item-cats border-gray-800 wow animate__animated animate__fadeIn">
                                                                <div className="cat-left">
                                                                    <div className="image-cat"><Link href="/blog-archive-5"><img src="assets/imgs/page/healthy/cat5.png" alt="Genz" /></Link></div>
                                                                    <div className="info-cat"><Link className="color-gray-500 text-xl" href="/blog-archive-5">Lifestyle</Link></div>
                                                                </div>
                                                                <div className="cat-right"><Link className="btn btn-small text-sm color-gray-500 bg-gray-800" href="/blog-archive-5">6
                                                                    posts</Link></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
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
                                                                    <h6 className="color-white">Being unique is better than
                                                                        being perfect</h6>
                                                                </Link><span className="color-gray-700">15 mins read</span>
                                                                    <ul className="d-inline-block">
                                                                        <li className="color-gray-700">15 April 2022</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="item-post wow animate__animated animate__fadeIn">
                                                                <div className="image-post"><Link href="/single-sidebar"><img src="assets/imgs/page/homepage1/img-post3.jpg" alt="Genz" /></Link></div>
                                                                <div className="info-post border-gray-800"><Link href="/single-sidebar">
                                                                    <h6 className="color-white">Every day, in every city and
                                                                        town across the country</h6>
                                                                </Link><span className="color-gray-700">15 mins read</span>
                                                                    <ul className="d-inline-block">
                                                                        <li className="color-gray-700">15 April 2022</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="item-post wow animate__animated animate__fadeIn">
                                                                <div className="image-post"><Link href="/single-sidebar"><img src="assets/imgs/page/homepage1/img-post4.jpg" alt="Genz" /></Link></div>
                                                                <div className="info-post border-gray-800"><Link href="/single-sidebar">
                                                                    <h6 className="color-white">Your voice, your mind, your
                                                                        story, your vision</h6>
                                                                </Link><span className="color-gray-700">15 mins read</span>
                                                                    <ul className="d-inline-block">
                                                                        <li className="color-gray-700">15 April 2022</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="item-post wow animate__animated animate__fadeIn">
                                                                <div className="image-post"><Link href="/single-sidebar"><img src="assets/imgs/page/homepage1/img-post4.jpg" alt="Genz" /></Link></div>
                                                                <div className="info-post border-gray-800"><Link href="/single-sidebar">
                                                                    <h6 className="color-white">Your voice, your mind, your
                                                                        story, your vision</h6>
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
                                                                    excited dear hello and bound and the and bland moral
                                                                    misheard roadrunner “</p>
                                                                <div className="box-author-small"><img src="assets/imgs/page/homepage1/author6.png" alt="Genz" />
                                                                    <div className="author-info"><span className="d-block color-gray-700 text-sm">Jane
                                                                        Cooper</span><span className="color-gray-700 text-xs">15
                                                                            April 2022</span></div>
                                                                </div>
                                                            </div>
                                                            <div className="item-comment border-gray-800 wow animate__animated animate__fadeIn">
                                                                <p className="color-gray-500 mb-20">“ Gosh jaguar ostrich quail one
                                                                    excited dear hello and bound and the and bland moral
                                                                    misheard roadrunner “</p>
                                                                <div className="box-author-small"><img src="assets/imgs/page/homepage1/author7.png" alt="Genz" />
                                                                    <div className="author-info"><span className="d-block color-gray-700 text-sm">Katen
                                                                        Doe</span><span className="color-gray-700 text-xs">15
                                                                            April 2022</span></div>
                                                                </div>
                                                            </div>
                                                            <div className="item-comment border-gray-800 wow animate__animated animate__fadeIn">
                                                                <p className="color-gray-500 mb-20">“ Gosh jaguar ostrich quail one
                                                                    excited dear hello and bound and the and bland moral
                                                                    misheard roadrunner “</p>
                                                                <div className="box-author-small"><img src="assets/imgs/page/homepage1/author8.png" alt="Genz" />
                                                                    <div className="author-info"><span className="d-block color-gray-700 text-sm">Barbara
                                                                        Cartland</span><span className="color-gray-700 text-xs">15 April 2022</span>
                                                                    </div>
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
                                                                <Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery.png" alt="Genz" /></Link></div>
                                                            <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                                                <Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery2.png" alt="Genz" /></Link></div>
                                                            <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                                                <Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery3.png" alt="Genz" /></Link></div>
                                                            <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                                                <Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery4.png" alt="Genz" /></Link></div>
                                                            <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                                                <Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery5.png" alt="Genz" /></Link></div>
                                                            <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                                                <Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery6.png" alt="Genz" /></Link></div>
                                                            <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                                                <Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery7.png" alt="Genz" /></Link></div>
                                                            <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                                                <Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery8.png" alt="Genz" /></Link></div>
                                                            <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                                                <Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery9.png" alt="Genz" /></Link></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-10" />
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
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}