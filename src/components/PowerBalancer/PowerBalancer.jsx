import "./PowerBalancer.css";
import { useState } from "react";
import powerData from "../../data/powerData";

function PowerBalancer() {

  const [balancedData, setBalancedData] =
    useState([]);

  const balanceLoad = () => {

    setBalancedData(powerData);

  };

  return (

    <section
      className="power-section"
      id="power"
    >

      <h2 className="power-heading">
        Power Load Balancer
      </h2>

      <p className="power-desc">
        Smart energy optimization system
        that analyzes machine load,
        improves efficiency and reduces
        power wastage across the textile plant.
      </p>

      <div className="power-overview">

        <div className="overview-card">
          <h4>Total Machines</h4>
          <span>5</span>
        </div>

        <div className="overview-card">
          <h4>Total Load</h4>
          <span>185 kW</span>
        </div>

        <div className="overview-card">
          <h4>Peak Usage</h4>
          <span>60 kW</span>
        </div>

        <div className="overview-card">
          <h4>System Health</h4>
          <span>92%</span>
        </div>

      </div>

      <div className="power-grid">

        {powerData.map((item) => (

          <div
            key={item.id}
            className="power-card"
          >

            <img
              src={item.image}
              alt={item.machine}
            />

            <div className="card-content">

              <h3>
                {item.machine}
              </h3>

              <p>
                Current Load
              </p>

              <span>
                {item.currentLoad}
                {" "}
                kW
              </span>

            </div>

          </div>

        ))}

      </div>

      <button
        className="balance-btn"
        onClick={balanceLoad}
      >
        Optimize Power Distribution
      </button>

      {balancedData.length > 0 && (

        <div className="result-box">

          <div className="result-header">

            <h3>
              ⚡ Optimized Power Allocation
            </h3>

            <div className="summary-stats">

              <div className="stat-card">
                <h4>Machines</h4>
                <span>5</span>
              </div>

              <div className="stat-card">
                <h4>Total Load</h4>
                <span>185 kW</span>
              </div>

              <div className="stat-card">
                <h4>Energy Saved</h4>
                <span>28 kW</span>
              </div>

              <div className="stat-card">
                <h4>Efficiency</h4>
                <span>92%</span>
              </div>

            </div>

          </div>

          {balancedData.map((item) => (

            <div
              key={item.id}
              className="result-card"
            >

              <img
                src={item.image}
                alt={item.machine}
                className="result-img"
              />

              <div className="result-info">

                <div className="machine-top">

                  <h4>
                    {item.machine}
                  </h4>

                  <span
                    className={`status-badge ${item.status === "Critical"
                      ? "critical"
                      : item.status === "Overloaded"
                        ? "overload"
                        : item.status === "Underutilized"
                          ? "under"
                          : "balanced"
                      }`}
                  >
                    {item.status}
                  </span>

                </div>

                <p>
                  📍 Zone:
                  {" "}
                  {item.zone}
                </p>

                <p>
                  🎯 Priority:
                  {" "}
                  {item.priority}
                </p>

                <div className="load-section">

                  <div className="load-item">

                    <label>
                      Current Load
                    </label>

                    <div className="load-bar">

                      <div
                        className="load-fill current"
                        style={{
                          width:
                            `${item.currentLoad}%`
                        }}
                      />

                    </div>

                    <span>
                      {item.currentLoad}
                      {" "}
                      kW
                    </span>

                  </div>

                  <div className="load-item">

                    <label>
                      Optimal Load
                    </label>

                    <div className="load-bar">

                      <div
                        className="load-fill optimal"
                        style={{
                          width:
                            `${item.optimalLoad}%`
                        }}
                      />

                    </div>

                    <span>
                      {item.optimalLoad}
                      {" "}
                      kW
                    </span>

                  </div>

                </div>

                <div className="machine-metrics">

                  <div className="metric">

                    ⚙ Efficiency

                    <strong>
                      {item.efficiency}%
                    </strong>

                  </div>

                  <div className="metric">

                    ⚡ Power Saved

                    <strong>
                      {item.powerSaved} kW
                    </strong>

                  </div>

                </div>

              </div>

            </div>

          ))}

          <div className="summary-box">

            <h4>
              📊 Optimization Report
            </h4>

            <div className="report-grid">

              <div>
                Machines Analyzed
                <strong>5</strong>
              </div>

              <div>
                Balanced Machines
                <strong>2</strong>
              </div>

              <div>
                Critical Machines
                <strong>1</strong>
              </div>

              <div>
                Overloaded Machines
                <strong>1</strong>
              </div>

              <div>
                Energy Saved
                <strong>28 kW</strong>
              </div>

              <div>
                Monthly Saving
                <strong>₹18,500</strong>
              </div>

            </div>

          </div>

        </div>

      )}

    </section>

  );

}

export default PowerBalancer;