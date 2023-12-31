import React, {useContext} from "react";
import { NavLink, Outlet } from "react-router-dom";
import ShoppingButton from "../components/ShoppingButton/ShoppingButton";
import { ShoppingCardContext } from "../context/ShoppingCardContext";

const RootLayout = () => {
    const { stateValue } = useContext(ShoppingCardContext);
    return (
        <div className="root-layout">
            <header>
                <nav>
                    <h1>My Manga Store</h1>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="MangaList">MangaList</NavLink>
                    <NavLink to="Login">Login</NavLink>
                    <NavLink to="About">About</NavLink>
                    <NavLink to="Help">Help</NavLink>
                    <NavLink to="Basket"><ShoppingButton itemNum={stateValue}/></NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout;