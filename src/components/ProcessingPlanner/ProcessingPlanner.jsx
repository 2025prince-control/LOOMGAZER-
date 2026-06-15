import "./ProcessingPlanner.css";
import { useState } from "react";
import plannerData from "../../data/plannerData";

function ProcessingPlanner() {

  const [showResult, setShowResult] =
    useState(false);

  const totalTime =
    plannerData.reduce(
      (sum, item) => sum + item.time,
      0
    );

  return (

    <section
      className="planner-section"
      id="planner"
    >

      <div className="planner-heading-wrapper">

        <h2 className="planner-heading">
          Quickest Processing Planner
        </h2>

      </div>



      <button
        className="planner-btn"
        onClick={() =>
          setShowResult(true)
        }
      >

        Find Optimal Route

      </button>

      {showResult && (

        <div className="result-box">

          <div className="summary-card">

            <h3>
              Optimal Route Found
            </h3>

            <div className="summary-grid">

              <div>
                <span>Total Stations</span>
                <h4>
                  {plannerData.length}
                </h4>
              </div>

              <div>
                <span>Total Time</span>
                <h4>
                  {totalTime} Min
                </h4>
              </div>

              <div>
                <span>Efficiency</span>
                <h4>
                  96%
                </h4>
              </div>

              <div>
                <span>Status</span>
                <h4>
                  Optimal
                </h4>
              </div>

            </div>

          </div>

          <div className="route-flow">

            {plannerData.map(
              (
                step,
                index
              ) => (

                <div
                  key={index}
                >

                  <div
                    className="route-step"
                  >

                    <div className="step-badge">

                      STEP 0{step.step}

                    </div>

                    <h4>
                      {step.machine}
                    </h4>

                    <p>
                      {step.description}
                    </p>

                    <div className="machine-info">

                      <span>
                        Machine ID:
                        {" "}
                        {step.machineId}
                      </span>

                      <span>
                        Operator:
                        {" "}
                        {step.operator}
                      </span>

                      <span>
                        Status:
                        {" "}
                        {step.status}
                      </span>

                      <span>
                        Efficiency:
                        {" "}
                        {step.efficiency}
                      </span>

                      <span>
                        Capacity:
                        {" "}
                        {step.capacity}
                      </span>

                    </div>

                    <div className="time-badge">

                      Processing Time:
                      {" "}
                      {step.time}
                      {" "}
                      Minutes

                    </div>

                  </div>

                  {index !==
                    plannerData.length - 1 && (

                      <div className="route-line">

                        <div className="route-dot"></div>

                      </div>

                    )}

                </div>

              )

            )}

          </div>

          <div className="total-time">

            <h3>
              Route Optimization Complete
            </h3>

            <h2>
              {totalTime}
              {" "}
              Minutes
            </h2>

            <p>

              Fastest Route Selected
              Using Dijkstra Algorithm

            </p>

          </div>

        </div>

      )}

    </section>

  );
}

export default ProcessingPlanner;