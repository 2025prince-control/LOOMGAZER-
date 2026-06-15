import "./EquipmentChecker.css";
import { useState } from "react";
import equipmentData from "../../data/equipmentData";

function EquipmentChecker() {

  const [equipmentId, setEquipmentId] = useState("");
  const [result, setResult] = useState(null);

  const handleSearch = () => {

    const found = equipmentData.find(
      (item) =>
        item.id.toLowerCase() ===
        equipmentId.toLowerCase()
    );

    setResult(found || "notfound");
  };

  return (
    <section
      id="equipment"
      className="equipment-section"
    >

      <div className="equipment-heading-wrapper">
        <h2 className="equipment-heading">
          Equipment ID Checker
        </h2>
      </div>

      <div className="checker-box">

        <input
          type="text"
          placeholder="Enter Equipment ID (EQ101)"
          value={equipmentId}
          onChange={(e) =>
            setEquipmentId(e.target.value)
          }
        />

        <button onClick={handleSearch}>
          Verify
        </button>

      </div>

      {result && result !== "notfound" && (

        <div className="result-card">

          <h3>Equipment Found ✅</h3>

          <img
            src={result.image}
            alt={result.machine}
            className="equipment-image"
          />

          <p>
            <strong>ID:</strong> {result.id}
          </p>

          <p>
            <strong>Machine:</strong> {result.machine}
          </p>

          <p>
            <strong>Status:</strong> {result.status}
          </p>

          <p>
            <strong>Location:</strong> {result.location}
          </p>

          <p>
            <strong>Efficiency:</strong> {result.efficiency}
          </p>

        </div>

      )}

      {result === "notfound" && (

        <div className="not-found">
          Equipment Not Found ❌
        </div>

      )}

    </section>
  );
}

export default EquipmentChecker;