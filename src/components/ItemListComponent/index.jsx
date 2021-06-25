import Item from "../Item";
import "./style.scss";

export const ItemListComponent = ({ productos }) => {
  return (
    <div>
      <div className="container">
        {productos.map((element, index) => {
          return (
            <span key={index}>
              <Item
                title={element.title}
                initial={1}
                stock={10}
                img={element.img}
                price={element.price}
              />
            </span>
          );
        })}
      </div>
    </div>
  );
};
