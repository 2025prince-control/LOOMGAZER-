import "./Machines.css";
import { useState } from "react";
import machineData from "../../data/machineData";

function Machines() {

  const [machines, setMachines] =
    useState(machineData);

  const changeStatus = (id) => {

    const updatedMachines =
      machines.map((machine) => {

        if (machine.id === id) {

          let newStatus = "Running";

          if (machine.status === "Running") {
            newStatus = "Maintenance";
          }

          else if (
            machine.status === "Maintenance"
          ) {
            newStatus = "Offline";
          }

          else {
            newStatus = "Running";
          }

          return {
            ...machine,
            status: newStatus
          };
        }

        return machine;
      });

    setMachines(updatedMachines);
  };

  return (

    <section
      id="machines"
      className="machines-section"
    >

      <div className="machine-heading-wrapper">
        <h2 className="machine-heading">
          Machine Monitoring
        </h2>
      </div>

      <div className="machine-grid">

        {machines.map((machine) => (

          <div
            className="machine-card"
            key={machine.id}
          >

            <img
              src={machine.image}
              alt={machine.name}
              className="machine-img"
            />

            <h3>
              {machine.name}
            </h3>

            <p className="status-row">

              Status:

              <span
                className={
                  machine.status === "Running"
                    ? "running"
                    : machine.status === "Maintenance"
                      ? "maintenance"
                      : "offline"
                }
              >
                {machine.status}
              </span>

            </p>

            <div className="label">

              <span>
                Efficiency
              </span>

              <span>
                {machine.efficiency}
              </span>

            </div>

            <div className="progress">

              <div
                className="progress-fill"
                style={{
                  width:
                    machine.efficiency
                }}
              ></div>

            </div>

            <div className="label">

              <span>
                Power Usage
              </span>

              <span>
                {machine.power}
              </span>

            </div>

            <div className="progress">

              <div
                className="power-fill"
                style={{
                  width:
                    machine.id === 1
                      ? "85%"
                      : machine.id === 2
                        ? "75%"
                        : machine.id === 3
                          ? "55%"
                          : "65%"
                }}
              ></div>

            </div>

            <button
              className="status-btn"
              onClick={() =>
                changeStatus(
                  machine.id
                )
              }
            >
              Change Status
            </button>

            <div className="machine-footer">

              Real-Time Factory Monitoring

            </div>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Machines;