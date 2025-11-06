import { Link } from "react-router-dom";
import { Nav } from "../Nav/Nav";
import "./Header.css";

export const Header = () => {
    return (
        <header>
            <div className="contenedor">
                <Link to={"/"}><img className="logo" src={"/images/logo-tienda.jpg"} alt={"Mi tienda"} /></Link>
                <Nav/>
            </div>
        </header>
    );
};
