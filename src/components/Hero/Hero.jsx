import "./Hero.css";
import factory from "../../assets/factory.jpg";

function Hero() {


  return (

    <section
      id="hero"
      className="hero"
    >

      <img
        src={factory}
        alt="Factory"
        className="hero-image"
      />

      <div className="hero-overlay">

        <h1>
          SMART TEXTILE
          <span> FACTORY</span>
        </h1>
        <p>

          Monitor Production,
          Track Materials,
          Manage Machines and
          Optimize Factory
          Operations Efficiently

        </p>
      </div>

    </section>

  );
}

export default Hero;