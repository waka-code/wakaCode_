import React from "react";
import '../styles/menu.css'
function MenuHamburguesa() {
  return (
      <div>
        <input type="checkbox" id="menu_checkbox" />
        <label for="menu_checkbox">
          <div></div>
          <div></div>
          <div></div>
        </label>
      </div>
  );
}

export default MenuHamburguesa;
