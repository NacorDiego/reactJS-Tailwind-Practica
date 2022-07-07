import Item from "./Item";

function ItemList({ ruta, productos }) {
    return (
        <div className="w-full flex justify-start flex-wrap items-start gap-16">
            {productos.map(
                i => <Item ruta={ruta} key={i.id} id={i.id} marca={i.marca} modelo={i.modelo} stock={i.stock} precio={i.precio} img={i.img} />
            )}
        </div>
    );
}

export default ItemList;