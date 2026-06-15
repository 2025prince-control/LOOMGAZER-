import "./MarketValueSorter.css";
import { useState } from "react";
import marketData from "../../data/marketData";

function MarketValueSorter() {

  const [materials, setMaterials] =
    useState(marketData);

  const sortHighToLow = () => {

    const sorted = [...materials].sort(
      (a, b) => b.value - a.value
    );

    setMaterials(sorted);
  };

  const sortLowToHigh = () => {

    const sorted = [...materials].sort(
      (a, b) => a.value - b.value
    );

    setMaterials(sorted);
  };

  return (

    <section
      className="market-section"
      id="market"
    >

      <div className="market-heading-wrapper">
        <h2 className="market-heading">
          Market Value Sorter
        </h2>
      </div>

      <p className="market-desc">
        Sort Textile Materials By Current Market Value
      </p>

      <div className="market-buttons">

        <button
          onClick={sortHighToLow}
        >
          High To Low
        </button>

        <button
          onClick={sortLowToHigh}
        >
          Low To High
        </button>

      </div>

      <div className="market-grid">

        {materials.map(
          (item, index) => (

            <div
              className="market-card"
              key={item.id}
            >

              <img
                src={item.image}
                alt={item.material}
                className="market-img"
              />

              <div
                className="market-content"
              >

                <div
                  className="rank-badge"
                >
                  Rank #{index + 1}
                </div>

                <h3>
                  {item.material}
                </h3>

                <p
                  className="market-price"
                >
                  ₹{item.value} / kg
                </p>

                <p
                  className="market-info"
                >
                  {item.description}
                </p>

              </div>

            </div>

          ))}

      </div>

    </section>

  );
}

export default MarketValueSorter;