import { useState, useEffect } from "react";
import ItemList from "./ItemList";


function ItemListContainer() {
    const [productos, setProductos] = useState([])
    useEffect ( () => {
        setTimeout( () => {
            fetch ('data/products.json')
                .then(resp => resp.json())
                .then(data => setProductos(data))
        },2000)
    })

    return (
        <section className="bg-light-100 pt-32 min-h-screen pb-32">
            <div className="container mx-auto bg-light-100 flex flex-col items-start gap-16">
                <div className="w-full flex justify-between items-center">
                    <h1 className="text-3xl text-blue-900 font-medium">Catálogo de productos</h1>
                    <a className="text-xl text-sky-100 font-normal hover:text-sky" href="/">Ver más</a>
                </div>
                <ItemList productos={productos} />
            </div>
        </section>
    );
}

export default ItemListContainer;