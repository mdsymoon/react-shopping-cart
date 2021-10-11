import React from 'react';

const Product = ({pd , onAdd}) => {
    return (
        <div>
            <img className="small" src={pd.image} alt=''/>
            <h3>{pd.name}</h3>
            <h3><small>${pd.price}</small></h3>
            <div>
                <button onClick={() => onAdd(pd)} >Add to cart</button>
            </div>
        </div>
    );
};

export default Product;