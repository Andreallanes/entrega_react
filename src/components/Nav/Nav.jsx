import { useCartContext } from "../../context/CartContext/useCartContext";
import "./Nav.css";
import { Link } from "react-router-dom";


export const Nav = () => {

    const { getTotalItems } = useCartContext();

    return (
        <nav className="contenedor_nav">
            <ul>
                <li>
                    <Link to={"/"}>Inicio</Link>
                </li>
                <li>
                    <Link to={"/category/dama"}>Dama</Link>
                </li>
                <li>
                    <Link to={"/category/girl"}>Niña</Link>
                </li>
                <li>
                    <Link to={"/category/boy"}>Niño</Link>
                </li>
                <li>
                    <Link to={"/carrito"}>Carrito</Link>
                   {getTotalItems() > 0 && (
                        <span className="in-cart">{getTotalItems()}</span>
                   )}
                </li>
            </ul>
        </nav>
    );
};