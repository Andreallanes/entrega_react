import { Nav } from "../Nav/Nav";
import "./Header.css";

export const Header = () => {
    return (
        <header>
            <div class="contenedor">
                <img class="logo" src={"/images/logo-tienda.jpg"} alt={"Mi tienda"} />
                <Nav/>
            </div>
        </header>
    );
};
