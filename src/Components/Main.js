import React from "react";
import Product from "./Product";
import data from "../Data";

const Main = ({onAdd}) => {
  return (
    <main className="block col-2">
      <h2>Products</h2>
      <div className="row">
        {data.map((pd) => (
          <Product key={pd.id} pd={pd} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  );
};

export default Main;
