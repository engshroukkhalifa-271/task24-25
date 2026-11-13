import "./index.css"
import logo from "../../assets/images/logo-hostig.png"

const Navbar = () => {
  return (
    <nav>
      <div className="container">

      <a href="" className="logo">
        <img src={logo} alt="logo" />
      </a>
      <ul>
        <li>
            <a href="#">Home</a>

        </li>
        <li>
            <a href="#">Pages</a>
            
        </li>
        <li>
            <a href="#">Contact</a>
            
        </li>
      </ul>
      </div>
    </nav>
  )
}

export default Navbar
