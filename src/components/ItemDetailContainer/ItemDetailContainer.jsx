import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";

import "./ItemDetailContainer.css"
import { getProductsById } from "../../services/products";

export const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({});

    const { id } = useParams();

    useEffect(() => {
        getProductsById (id)
            .then ((data) => setDetail (data))
            .catch ((error) => {
                console.log (error);
            });        
    }, [id]);

    return (
        <main>
                {Object.keys(detail).length ? (
                    <ItemDetail detail = {detail} />
                ) : (
                    <p>Cargando ...</p>            
                )}
        </main>
    );
};