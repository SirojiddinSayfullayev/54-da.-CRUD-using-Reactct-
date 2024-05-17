import React, { useRef, useState } from "react";
import "./app.css";

function App() {
  console.log("Component rendered !!!");
  const nameRef = useRef();
  const priceRef = useRef();
  const descRef = useRef();

  const [modal, setModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [products, setProducts] = useState([
    {
      name: "Olma",
      price: 12000,
      desc: "Shirin olma",
    },
  ]);

  const createElem = (e) => {
    e.preventDefault();

    let newProduct = [...products];

    newProduct.push({
      name: nameRef.current.value,
      price: priceRef.current.value,
      desc: descRef.current.value,
    });

    setProducts(newProduct);
  };

  const deleteElem = (ind) => {
    let newProduct = [...products];
    newProduct.splice(ind, 1);

    setProducts(newProduct);
  };

  const showElem = (item) => {
    setModal(true);
    setSelectedItem(item);
  };

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <div className={`modal ${!modal && "modal-close"}`}>
        <div className="modal-content">
          <div className="modal-content-header">
            Modal
            <button onClick={() => setModal(false)}>X</button>
          </div>
          {selectedItem && (
            <div>
              <h1>{selectedItem.name}</h1>
              <h1>{selectedItem.price}</h1>
              <h1>{selectedItem.desc}</h1>
            </div>
          )}
        </div>
      </div>

      <form onSubmit={createElem}>
        <input ref={nameRef} type="text" placeholder="ProductName" />
        <input ref={priceRef} type="number" placeholder="Price" />
        <input ref={descRef} type="text" placeholder="Describtion" />
        <button type="submit">Qo'shish</button>
      </form>

      <table border={1} style={{ margin: "0 auto", marginTop: "30px" }}>
        <thead>
          <th>Id</th>
          <th>Nomi</th>
          <th>Narxi</th>
          <th>Izox</th>
          <th>Amallar</th>
        </thead>
        <tbody>
          {products.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.desc}</td>
                <td>
                  <button onClick={() => showElem(item)}>Ko'rish</button>{" "}
                  <button onClick={() => deleteElem(index)}>O'chirish</button>{" "}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
