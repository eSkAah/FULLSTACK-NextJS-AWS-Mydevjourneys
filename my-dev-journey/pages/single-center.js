import Link from "next/link";
import Layout from "../components/layout/Layout";

export default function Home() {
    return (
        <>
            <Layout>
                <div className="cover-home3">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-1" />
                            <div className="col-xl-10 col-lg-12">
                                <div className="pt-30 border-bottom border-gray-800 pb-20">
                                    <div className="box-breadcrumbs">
                                        <ul className="breadcrumb">
                                            <li>
                                                <Link className="home" href="/index">Home</Link></li>
                                            <li>
                                                <Link href="/blog-archive">Blog</Link></li>
                                            <li><span>Digital Design That Will Help You Start Your Business</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row mt-50 align-items-end">
                                    <div className="col-lg-8 m-auto text-center">
                                        <h2 className="color-linear">Digital Design That Will Help You Start Your Business</h2>
                                    </div>
                                </div>
                                <div className="row mt-30">
                                    <div className="col-lg-12">
                                        <div className="image-detail mb-30"><img className="bdrd16" src="assets/imgs/page/single/img6.jpg" alt="Genz" /></div>
                                    </div>
                                    <div className="col-lg-8 m-auto">
                                        <div className="row mb-40">
                                            <div className="col-md-6 mb-10">
                                                <div className="box-author"><img src="assets/imgs/page/about/author2.png" alt="Genz" />
                                                    <div className="author-info">
                                                        <h6 className="color-gray-700">William Randolph</h6><span className="color-gray-700 text-sm mr-30">25 April 2022</span><span className="color-gray-700 text-sm">3 mins to read</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 text-start text-md-end">
                                                <div className="d-inline-block pt-10">
                                                    <div className="d-flex align-item-center">
                                                        <h6 className="d-inline-block color-gray-500 mr-10">Share</h6>
                                                        <Link className="icon-media icon-fb" href="#" />
                                                        <Link className="icon-media icon-tw" href="#" />
                                                        <Link className="icon-media icon-printest" href="#"></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-detail border-gray-800">
                                            <p className="text-xl color-gray-500">The fancy moon going in little artist painting. Thirty days of lavender in the dreamy light inside. Other perfect oh plants, for and again. I’ve honey feeling. Caring dreamland projects noteworthy than minimal, their it oh pretty feeling may. Include pink be.</p>
                                            <div className="mt-30 mb-20"><img className="img-bdrd-16" src="assets/imgs/page/single/img.jpg" alt="Genz" /></div>
                                            <p className="text-lg color-gray-500 mb-50">Tortor placerat bibendum consequat sapien, facilisi facilisi pellentesque morbi. Id conse ctetur ut vitae a massa a. Lacus ut bibendum sollicitudin fusce sociis mi. Dictum volutpat praesent ornare accumsan elit venenatis. Congue sodales nunc quis ultricies odio porta. Egestas mauris placerat leo phasellu s ut sit.</p>
                                            <h3 className="color-white mb-30">Use your headings</h3>
                                            <p className="text-lg color-gray-500">Thirty there &amp; time wear across days, make inside on these you. Can young a really, roses blog small of song their dreamy life pretty? Because really duo living to noteworthy bloom bell. Transform clean daydreaming cute twenty process rooms cool. White white dreamy dramatically place everything although. Place out apartment afternoon whimsical kinder, little romantic joy we flowers handmade. Thirty she a studio of she whimsical projects, afternoon effect going an floated maybe.</p>
                                            <div className="bg-gray-850 box-quote">
                                                <h3 className="color-gray-500">Blandit consequat feugiat sed dapibus lorem diam nibh venenatis sodales pulvinar augue adipiscing turpis nulla sit tincidunt non lacus sit amet et white dreamy dramatically place.</h3>
                                                <div className="d-inline-block mt-40">
                                                    <div className="box-author"><img src="assets/imgs/page/about/author2.png" alt="Genz" />
                                                        <div className="author-info">
                                                            <h6 className="color-gray-700">Ronald Richards</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <h4 className="color-white mt-40 mb-30">Smaller heading</h4>
                                            <div className="row">
                                                <div className="col-lg-8 mb-30">
                                                    <p className="text-lg color-gray-500 mb-40">Thirty there &amp; time wear across days, make inside on these you. Can young a really, roses blog small of song their dreamy life pretty? Because really duo living to noteworthy bloom bell. Transform clean daydreaming cute twenty process rooms cool. White white dreamy dramatically place everything although.</p>
                                                    <p className="text-lg color-gray-500">White white dreamy dramatically place everything although. Place out apartment afternoon whimsical kinder, little romantic joy we flowers handmade. Thirty she a studio of she whimsical projects, afternoon effect going an floated maybe.</p>
                                                </div>
                                                <div className="col-lg-4"><img className="img-bdrd-16 mb-30" src="assets/imgs/page/single/img2.jpg" alt="Genz" /></div>
                                            </div>
                                            <p className="text-lg color-gray-500">Tortor placerat bibendum consequat sapien, facilisi facilisi pellentesque morbi. Id consectetur ut vitae a massa a. Lacus ut bibendum sollicitudin fusce sociis mi. Dictum volutpat praesent ornare accumsan elit venenatis. Congue sodales nunc quis ultricies odio porta. Egestas mauris placerat leo phasellus ut sit.</p>
                                            <div className="row mt-50">
                                                <div className="col-lg-6 gallery-left"><img className="img-bdrd-16 mb-30" src="assets/imgs/page/single/img3.jpg" alt="Genz" /></div>
                                                <div className="col-lg-6 gallery-right"><img className="img-bdrd-16 mb-20" src="assets/imgs/page/single/img4.jpg" alt="Genz" /><img className="img-bdrd-16" src="assets/imgs/page/single/img5.jpg" alt="Genz" /></div>
                                            </div>
                                            <p className="text-center text-lg color-gray-500">furniture in your house</p>
                                            <h3 className="color-white mt-50 mb-30">Use your headings</h3>
                                            <p className="text-lg color-gray-500">Thirty there &amp; time wear across days, make inside on these you. Can young a really, roses blog small of song their dreamy life pretty? Because really duo living to noteworthy bloom bell. Transform clean daydreaming cute twenty process rooms cool. White white dreamy dramatically place everything although. Place out apartment afternoon whimsical kinder, little romantic joy we flowers handmade. Thirty she a studio of she whimsical projects, afternoon effect going an floated maybe.</p>
                                        </div>
                                        <div className="box-tags">
                                            <Link className="btn btn-tags bg-gray-850 border-gray-800 mr-10 hover-up" href="/blog-archive">#Nature</Link>
                                            <Link className="btn btn-tags bg-gray-850 border-gray-800 mr-10 hover-up" href="/blog-archive">#Beauty</Link>
                                            <Link className="btn btn-tags bg-gray-850 border-gray-800 mr-10 hover-up" href="/blog-archive">#Travel Tips</Link>
                                            <Link className="btn btn-tags bg-gray-850 border-gray-800 hover-up" href="/blog-archive">#House</Link></div>
                                        <div className="box-comments border-gray-800">
                                            <h3 className="text-heading-2 color-gray-300">Comments</h3>
                                            <div className="list-comments-single">
                                                <div className="item-comment">
                                                    <div className="comment-left">
                                                        <div className="box-author mb-20"><img src="assets/imgs/page/single/author.png" alt="Genz" />
                                                            <div className="author-info">
                                                                <h6 className="color-gray-700">Robert Fox</h6><span className="color-gray-700 text-sm mr-30">August 25, 2022</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="comment-right">
                                                        <div className="text-comment text-xl color-gray-500 bg-gray-850 border-gray-800">White white dreamy drama tically place everything although. Place out apartment afternoon whimsical kinder, little romantic joy we flowers handmade.</div>
                                                    </div>
                                                </div>
                                                <div className="item-comment">
                                                    <div className="comment-left">
                                                        <div className="box-author mb-20"><img src="assets/imgs/page/single/author2.png" alt="Genz" />
                                                            <div className="author-info">
                                                                <h6 className="color-gray-700">Jenny Wilson</h6><span className="color-gray-700 text-sm mr-30">August 25, 2022</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="comment-right">
                                                        <div className="text-comment text-xl color-gray-500 bg-gray-850 border-gray-800">White white dreamy drama tically place everything although. Place out apartment afternoon whimsical kinder, little romantic joy we flowers handmade.</div>
                                                    </div>
                                                </div>
                                                <div className="item-comment item-comment-sub">
                                                    <div className="comment-left">
                                                        <div className="box-author mb-20"><img src="assets/imgs/page/single/author3.png" alt="Genz" />
                                                            <div className="author-info">
                                                                <h6 className="color-gray-700">Eleanor Pena</h6><span className="color-gray-700 text-sm mr-30">August 25, 2022</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="comment-right">
                                                        <div className="text-comment text-xl color-gray-500 bg-gray-850 border-gray-800">White white dreamy drama tically place everything although. Place out apartment afternoon whimsical kinder, little romantic joy we flowers handmade.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="box-form-comments mb-50">
                                            <h4 className="text-heading-4 color-gray-300 mb-40">Leave a comment</h4>
                                            <div className="box-forms">
                                                <form action="#">
                                                    <textarea className="form-control bg-gray-850 border-gray-800 bdrd16 color-gray-500" name="comment" rows={5} placeholder="Write a comment" defaultValue={""} />
                                                    <div className="row mt-20">
                                                        <div className="col-sm-6 mb-20">
                                                            <input className="cb-agree" type="checkbox" />
                                                            <p className="text-sm color-gray-500 pl-25">Save my name, email, and website in this browser for the next time I comment.</p>
                                                        </div>
                                                        <div className="col-sm-6 text-end">
                                                            <Link className="btn btn-linear" href="#">Post Comment</Link></div>
                                                    </div>
                                                </form>
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