import "./menu.css";
function MenuHamburguesa({ isOpen, setIsOpen }) {
  return (
    <div
      className={`nav_toggle ${isOpen && "open"}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default MenuHamburguesa;
