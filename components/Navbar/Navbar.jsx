import CartWidget from "../CartWidget/CarWidget.jsx"

const NavBar = () => {
    return (
        <nav>
            <h3>Catus</h3>
            <div>
                <button>Pack Básico</button>
                <button>Pack Intermedio</button>
                <button>Pack Premium</button>
            </div>
            <CartWidget/>
        </nav>
    )

}
export default NavBar;