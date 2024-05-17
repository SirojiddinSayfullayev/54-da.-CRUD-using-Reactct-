import React, { Component } from "react";

class ClassComp extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="ProductName" />
          <input type="number" placeholder="Price" />
          <input type="text" placeholder="Describtion" />
          <button type="submit">Qo'shish</button>
        </form>
      </div>
    );
  }
}

export default ClassComp;
