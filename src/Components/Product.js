import React from 'react';

const Product = ({pd , onAdd}) => {
    return (
        <div>
            <img className="small" src={pd.image} alt=''/>
            <h3>{pd.name}</h3>
            <div>${pd.price}</div>
            <div>
                <button onClick={() => onAdd(pd)} >Add to cart</button>
            </div>
        </div>
    );
};

export default Product;