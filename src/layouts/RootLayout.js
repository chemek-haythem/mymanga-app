import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <div className="root-layout">
            <header>
                <nav>
                    <h1>My Manga Store</h1>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="MangaList">MangaList</NavLink>
                    <NavLink to="Login">Login</NavLink>
                    <NavLink to="Basket">Basket</NavLink>
                    <NavLink to="About">About</NavLink>
                    <NavLink to="Help">Help</NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout;