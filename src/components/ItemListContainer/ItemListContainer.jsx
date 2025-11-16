import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";

import "./ItemListContainer.css"
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/products";

export const ItemListContainer = ({titulo}) => {
    const [products, setProducts] = useState ([]);
    const { category } = useParams();

    useEffect (() => {
        getProducts(category)
            .then((data) => setProducts(data) )
            .catch ((err) => {
                console.log (err);
            });
    }, [category]);

    return (
        <section>
            <h1>{titulo}</h1> 
            <div className="contenedor">
                <ItemList lista ={products}/>
            </div>
        </section>
    );
};