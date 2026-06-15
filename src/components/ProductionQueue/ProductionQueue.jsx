import "./ProductionQueue.css";
import { useState } from "react";
import queueData from "../../data/ProductionData";

function ProductionQueue() {

  const [queue, setQueue] = useState(queueData);

  const [selectedMaterial, setSelectedMaterial] =
    useState("Cotton");

  const [showSelector, setShowSelector] =
    useState(false);

  const processNextBatch = () => {

    if (queue.length === 0) return;

    const updatedQueue = [...queue];

    updatedQueue.shift();

    setQueue(updatedQueue);
  };

  const addBatch = () => {

    const newBatch = {

      id: Date.now(),

      batch: `${selectedMaterial} Batch`,

      stage: "Waiting For Processing",

      time: new Date().toLocaleTimeString()

    };

    setQueue([...queue, newBatch]);

    setShowSelector(false);
  };

  return (

    <section
      id="queue"
      className="queue-section"
    >

      <div className="queue-heading-wrapper">
        <h2 className="queue-heading">
          Production Log Queue
        </h2>
      </div>

      <div className="queue-stats">

        <div className="stat-card">
          <h3>{queue.length}</h3>
          <p>Total Batches</p>
        </div>

        <div className="stat-card">
          <h3>{queue.length > 0 ? queue.length - 1 : 0}</h3>
          <p>Waiting Queue</p>
        </div>

        <div className="stat-card">
          <h3>92%</h3>
          <p>Factory Efficiency</p>
        </div>

      </div>

      {queue.length > 0 && (

        <div className="processing-panel">

          <h3>
            Currently Processing
          </h3>

          <h2>
            {queue[0].batch}
          </h2>

          <span>
            {queue[0].time}
          </span>

        </div>

      )}

      <div className="queue-actions">

        <button
          className="process-btn"
          onClick={processNextBatch}
        >
          Process Next Batch
        </button>

        <button
          className="add-btn"
          onClick={() =>
            setShowSelector(!showSelector)
          }
        >
          Add Batch
        </button>

      </div>

      {showSelector && (

        <div className="batch-selector">

          <select
            value={selectedMaterial}
            onChange={(e) =>
              setSelectedMaterial(
                e.target.value
              )
            }
          >

            <option>Cotton</option>
            <option>Silk</option>
            <option>Denim</option>
            <option>Linen</option>
            <option>Polyester</option>
            <option>Rayon</option>
            <option>Wool</option>

          </select>

          <button
            className="confirm-btn"
            onClick={addBatch}
          >
            Confirm
          </button>

        </div>

      )}

      {queue.length === 0 && (

        <div className="empty-queue">

          No Pending Batch Available

        </div>

      )}

      <div className="queue-container">

        {queue.slice(1).map((item, index) => (

          <div
            className="queue-row"
            key={item.id}
          >

            <div className="queue-id">

              {index + 1}

            </div>

            <div className="queue-content">

              <h3>
                {item.batch}
              </h3>

              <p>
                {item.stage}
              </p>

              <span>
                {item.time}
              </span>

            </div>

          </div>

        ))}

      </div>

    </section>

  );
}

export default ProductionQueue;