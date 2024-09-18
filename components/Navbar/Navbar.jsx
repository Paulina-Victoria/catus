import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CarWidget.jsx"

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to='/'>
                <h3>Catus</h3>
            </Link>
            
            <div className="Categories">
                <NavLink to={`/category/pack`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Packs</NavLink>
                <NavLink to={`/category/producto`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Productos</NavLink>
                <NavLink to={`/category/servicio`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Servicios</NavLink>
            </div>
            <CartWidget/>
        </nav>
    )

}
export default NavBar;