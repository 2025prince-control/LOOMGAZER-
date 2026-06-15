import "./Navbar.css";

function Navbar() {

  return (

    <nav className="navbar">

      <div className="logo">
        LOOMGAZER
      </div>

      <ul className="nav-links">

        <li>
          <a href="#hero">Home</a>
        </li>

        <li>
          <a href="#materials">Materials</a>
        </li>

        <li>
          <a href="#machines">Machines</a>
        </li>


        <li>
          <a href="#queue">Queue</a>
        </li>

        <li>
          <a href="#equipment">
            Equipment
          </a>
        </li>
        <li>
          <a href="#undo">Undo</a>
        </li>



        <li>
          <a href="#market">Market</a>
        </li>

        <li>
          <a href="#factory-map">
            Factory Map
          </a>
        </li>

        <li>
          <a href="#planner">
            Planner
          </a>
        </li>

        <li>
          <a href="#power">
            Power
          </a>
        </li>

      </ul>

    </nav>

  );
}

export default Navbar;