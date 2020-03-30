import React from 'react';

const Bought = props => {
    return (
        <div className="display-bought-shop-product-carousel">
            <div className="display-bought-shop-product-carousel-mini">
                <button className="display-bought-shop-product-button">
                    {props.category === "Nintendo Switch" && <img className="display-bought-shop-product-image" src="https://bb-clone.s3-us-west-1.amazonaws.com/general/p_also_bought_nintendo_switch.png" />}
                    {props.category === "PlayStation 4" && <img className="display-bought-shop-product-image" src="https://bb-clone.s3-us-west-1.amazonaws.com/general/p_also_bought_ps4.png" />}
                </button>
            </div>
        </div>
    )
}

export default Bought;
