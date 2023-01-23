import Link from 'next/link';
import React from 'react';
import { useState, useEffect } from "react";

const Header = ({ handleOpen, handleRemove, openClass }) => {
    const [scroll, setScroll] = useState(0)
    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => setToggled(!isToggled);
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })
    return (
        <>
            <header className={scroll ? "header sticky-bar bg-gray-900 stick" : "header sticky-bar bg-gray-900"}>
                <div className="container">
                    <div className="main-header">
                        <div className="header-logo"><Link className="d-flex" href="/"><img alt="GenZ" src="/assets/imgs/template/logo.svg" /></Link></div>
                        <div className="header-nav">
                            <nav className="nav-main-menu d-none d-xl-block">
                                <ul className="main-menu">
                                    <li className="color-gray-500"><Link className="active" href="/">Home</Link></li>
                                    <li><Link className="color-gray-500" href="/page-portfolio">Portfolio</Link></li>
                                    <li><Link className="color-gray-500" href="/page-about">About me</Link></li>
                                    <li><Link className="color-gray-500" href="/portfolio-details">Hire</Link></li>
                                    {/*<li className="has-children"><Link class="color-gray-500" href="/page-about">About Me</Link>*/}
                                    {/*    <ul className="sub-menu">*/}

                                    {/*    </ul>*/}
                                    {/*</li>*/}
                                    {/*<li className="has-children"><Link className="color-gray-500" href="#">Category</Link>*/}
                                    {/*    <ul className="sub-menu two-col">*/}
                                    {/*        <li><Link className="color-gray-500" href="/blog-archive">Blog Category 1</Link></li>*/}
                                    {/*        <li><Link className="color-gray-500" href="/blog-archive-2">Blog Category 2</Link></li>*/}
                                    {/*        <li><Link className="color-gray-500" href="/blog-archive-3">Blog Category 3</Link></li>*/}
                                    {/*        <li><Link className="color-gray-500" href="/blog-archive-4">Blog Category 4</Link></li>*/}
                                    {/*        <li><Link className="color-gray-500" href="/blog-archive-5">Blog Category 5</Link></li>*/}
                                    {/*    </ul>*/}
                                    {/*</li>*/}
                                    {/*<li className="has-children"><Link className="color-gray-500" href="#">Single Post</Link>*/}
                                    {/*    <ul className="sub-menu two-col">*/}
                                    {/*        <li><Link className="color-gray-500" href="/single-sidebar">Blog Single 1</Link></li>*/}
                                    {/*        <li><Link className="color-gray-500" href="/single-no-sidebar">Blog Single 2</Link></li>*/}
                                    {/*        <li><Link className="color-gray-500" href="/single-center">Blog Single 3</Link></li>*/}
                                    {/*    </ul>*/}
                                    {/*</li>*/}
                                    {/*<li className="has-children"><Link className="color-gray-500" href="#">Pages</Link>*/}
                                    {/*    <ul className="sub-menu two-col">*/}
                                    {/*        <li><Link className="color-gray-500" href="/page-about">About</Link></li>*/}
                                    {/*        <li><Link className="color-gray-500" href="/page-author">Author posts</Link></li>*/}
                                    {/*        <li><Link className="color-gray-500" href="/page-contact">Contact</Link></li>*/}
                                    {/*        <li><Link className="color-gray-500" href="/page-search">Search results</Link></li>*/}
                                    {/*        <li><Link className="color-gray-500" href="/page-login">Login</Link></li>*/}
                                    {/*        <li><Link className="color-gray-500" href="/page-signup">Signup</Link></li>*/}
                                    {/*        <li><Link className="color-gray-500" href="/page-404">Page 404</Link></li>*/}
                                    {/*    </ul>*/}
                                    {/*</li>*/}
                                    <li><Link className="color-gray-500" href="/page-contact">Contact</Link></li>
                                </ul>
                            </nav>
                            <div className={`burger-icon burger-icon-white ${openClass && "burger-close"}`}
                                onClick={() => { handleOpen(); handleRemove() }}>
                                <span className="burger-icon-top" />
                                <span className="burger-icon-mid" />
                                <span className="burger-icon-bottom" />
                            </div>
                        </div>
                        {/*TODO : Subscribe & SearchBar*/}
                        <div className="header-right text-end">
                            {/*<Link className="btn btn-search" href="#" onClick={toggleTrueFalse} />*/}
                            <div className={isToggled ? "form-search p-20 d-block" : " form-search p-20 d-none"}>
                                {/*<form action="#">*/}
                                {/*    <input className="form-control" type="text" placeholder="Search" />*/}
                                {/*    <input className="btn-search-2" />*/}
                                {/*</form>*/}
                                {/*<div className="popular-keywords text-start mt-20">*/}
                                {/*    <p className="mb-10 color-white">Popular tags:</p>*/}
                                {/*    <Link className="color-gray-600 mr-10 font-xs" href="#"># Travel,</Link>*/}
                                {/*    <Link className="color-gray-600 mr-10 font-xs" href="#"># Tech,</Link>*/}
                                {/*    <Link className="color-gray-600 mr-10 font-xs" href="#"># Movie</Link>*/}
                                {/*    <Link className="color-gray-600 mr-10 font-xs" href="#"># Lifestyle</Link>*/}
                                {/*    <Link className="color-gray-600 mr-10 font-xs" href="#"># Sport</Link>*/}
                                {/*</div>*/}
                            </div><Link className="btn btn-linear d-none d-sm-inline-block hover-up hover-shadow" href="/page-login">Subscribe</Link>
                        </div>
                    </div>
                </div>
            </header>

        </>
    );
};

export default Header;