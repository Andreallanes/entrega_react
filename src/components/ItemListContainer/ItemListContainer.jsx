import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";

import "./ItemListContainer.css"

export const ItemListContainer = ({titulo}) => {
    const [products, setProducts] = useState ([]);

    useEffect (() => {
        fetch ("/data/products.json")
            .then ((res) => {
                if (!res.ok) {
                    throw new Error ("Hubo un problema al busacar productos");
                }
                return res.json();
            })
            .then ((data) => {
                setProducts(data);
            })
            .catch ((err) => {
                console.log (err);
            });
    }, []);

    return (
        <section>
            <h1>{titulo}</h1> 
            <div class="contenedor">
                <ItemList lista ={products}/>
            </div>
        </section>
    );
};