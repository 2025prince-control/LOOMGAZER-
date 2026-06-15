import "./MachineUndo.css";
import { useState } from "react";
import machineSettingsData from "../../data/machineSettingsData";

function MachineUndo() {

  const [machines, setMachines] =
    useState(machineSettingsData);

  const changeSettings = (id) => {

    const updatedMachines =
      machines.map((machine) => {

        if (machine.id === id) {

          const newSettings = {

            temperature:
              machine.currentSettings.temperature + 10,

            speed:
              machine.currentSettings.speed + 20,

            pressure:
              machine.currentSettings.pressure + 5,

            power:
              machine.currentSettings.power + 2
          };

          return {

            ...machine,

            currentSettings:
              newSettings,

            history: [
              ...machine.history,
              newSettings
            ]
          };
        }

        return machine;
      });

    setMachines(updatedMachines);
  };

  const undoChange = (id) => {

    const updatedMachines =
      machines.map((machine) => {

        if (
          machine.id === id &&
          machine.history.length > 1
        ) {

          const newHistory =
            [...machine.history];

          newHistory.pop();

          return {

            ...machine,

            currentSettings:
              newHistory[
              newHistory.length - 1
              ],

            history: newHistory
          };
        }

        return machine;
      });

    setMachines(updatedMachines);
  };

  return (

    <section
      className="undo-section"
      id="undo"
    >

      <div className="undo-heading-wrapper">
        <h2 className="undo-heading">
          Machine Setting Undo
        </h2>
      </div>

      <p className="undo-desc">
        Stack Based Machine Configuration Management
      </p>

      <div className="undo-grid">

        {machines.map((machine) => (

          <div
            className="undo-card"
            key={machine.id}
          >

            <h3>
              {machine.name}
            </h3>

            <div className="setting-box">

              <div className="setting-row">
                <span>Temperature</span>
                <strong>
                  {
                    machine
                      .currentSettings
                      .temperature
                  }°C
                </strong>
              </div>

              <div className="setting-row">
                <span>Speed</span>
                <strong>
                  {
                    machine
                      .currentSettings
                      .speed
                  } RPM
                </strong>
              </div>

              <div className="setting-row">
                <span>Pressure</span>
                <strong>
                  {
                    machine
                      .currentSettings
                      .pressure
                  } PSI
                </strong>
              </div>

              <div className="setting-row">
                <span>Power</span>
                <strong>
                  {
                    machine
                      .currentSettings
                      .power
                  } kW
                </strong>
              </div>

            </div>

            <div className="btn-group">

              <button
                className="change-btn"
                onClick={() =>
                  changeSettings(
                    machine.id
                  )
                }
              >
                Change Settings
              </button>

              <button
                className="undo-btn"
                onClick={() =>
                  undoChange(
                    machine.id
                  )
                }
              >
                Undo Last Change
              </button>

            </div>

            <div className="history-box">

              History Records:
              {" "}
              {
                machine.history.length
              }

            </div>

          </div>

        ))}

      </div>

    </section>

  );
}

export default MachineUndo;