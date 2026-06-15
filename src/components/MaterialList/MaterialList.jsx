import "./MaterialList.css";
import { useState } from "react";
import materialsData from "../../data/materialsData";

import cotton from "../../assets/cotton.jpg";
import silk from "../../assets/silk.jpg";
import denim from "../../assets/denim.jpg";
import rayon from "../../assets/rayon.jpg";
import linen from "../../assets/linen.jpg";
import polyester from "../../assets/polyester.jpg";

function MaterialList() {

  const [search, setSearch] = useState("");

  const filteredData = materialsData.filter((item) =>
    item.material.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="materials" className="material-section">

      <div className="heading-wrapper">
        <h2 className="section-heading">
          Material Quality List
        </h2>
      </div>

      <div className="material-cards">

        <div className="material-card">
          <img src={cotton} alt="Cotton" />
          <div className="card-content">
            <h3>Cotton</h3>
            <p>
              Soft, breathable and highly durable fabric ideal for daily wear and large-scale textile production.
            </p>
          </div>
        </div>

        <div className="material-card">
          <img src={silk} alt="Silk" />
          <div className="card-content">
            <h3>Silk</h3>
            <p>
              Premium luxury fabric known for its smooth texture, shine and elegant appearance.
            </p>
          </div>
        </div>

        <div className="material-card">
          <img src={denim} alt="Denim" />
          <div className="card-content">
            <h3>Denim</h3>
            <p>
              Strong and rugged cotton fabric widely used in jeans and industrial garments.
            </p>
          </div>
        </div>

        <div className="material-card">
          <img src={rayon} alt="Rayon" />
          <div className="card-content">
            <h3>Rayon</h3>
            <p>
              Lightweight semi-synthetic fabric offering comfort and excellent draping properties.
            </p>
          </div>
        </div>

        <div className="material-card">
          <img src={linen} alt="Linen" />
          <div className="card-content">
            <h3>Linen</h3>
            <p>
              Natural fabric with high breathability and durability, perfect for warm climates.
            </p>
          </div>
        </div>

        <div className="material-card">
          <img src={polyester} alt="Polyester" />
          <div className="card-content">
            <h3>Polyester</h3>
            <p>
              Wrinkle-resistant synthetic fabric widely used for modern industrial textile production.
            </p>
          </div>
        </div>

      </div>


      <input
        type="text"
        placeholder="Search Material..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />

      <div className="table-wrapper">

        <table>
          <thead>
            <tr>
              <th>Batch ID</th>
              <th>Material</th>
              <th>Quality</th>
              <th>GSM</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {filteredData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.material}</td>
                <td>{item.quality}</td>
                <td>{item.gsm}</td>
                <td className={item.status.toLowerCase()}>
                  {item.status}
                </td>
              </tr>
            ))}

          </tbody>
        </table>

      </div>

    </section>
  );
}

export default MaterialList;