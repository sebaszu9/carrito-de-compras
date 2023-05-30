import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import img from "../../img/banner.png";
import "./styles2.scss";

const Products = () => {
  /* Traemos del context la funcion para agregar un producto */
  const { addItemToCart, products } = useContext(CartContext);

  return (
    <div className="container">
      
      <div className="banner">
        <img src={img} alt="" />
      </div>

      <h1 className="title">Nuevos Productos</h1>

      <div className="product-grid">
      {products &&
        products.map((product, i) => (
        <div className="product-grid__item">
            <div className="product-grid__imagen">
                <img src={product.img} alt={product.name} />
            </div>

            <div className="product-grid__info">
                <p className="product-grid__name">{product.name}</p>
                <p className="product-grid__price">${product.price}</p>
                
                {!product.inCart ? (
                  <a href="#" className="product-grid__btn btn-default" data-btn-action="add-btn-cart" onClick={() => addItemToCart(product)} >Agregar al carrito</a>
                ) : (
                  <a href="#" className="product-grid__btn btn-default" data-btn-action="add-btn-cart" >En el carrito</a>
                )}

            </div>

        </div>
      ))}
      </div>
    </div>
  );
};

export default Products;
