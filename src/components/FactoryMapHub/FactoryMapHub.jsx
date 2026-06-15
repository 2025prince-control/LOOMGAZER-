import "./FactoryMapHub.css";
import factoryMapData from "../../data/factoryMapData";

function FactoryMapHub() {

  return (

    <section
      className="map-section"
      id="factory-map"
    >

      <div className="map-heading-wrapper">

        <h2 className="map-heading">
          Factory Map Hub
        </h2>

      </div>

      <p className="map-subtitle">
        Complete Textile Manufacturing Pipeline
      </p>

      <div className="factory-map">

        {factoryMapData.map((item, index) => (

          <div
            key={item.id}
            className={`pipeline-block ${index % 2 === 0
                ? "left-node"
                : "right-node"
              }`}
          >

            <div
              className="node"
              data-step={`0${item.id}`}
            >

              <div className="node-image">

                <img
                  src={item.image}
                  alt={item.title}
                />

              </div>

              <div className="node-content">

                <div className="machine-tag">
                  Manufacturing Unit
                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

                <div className="machine-stats">

                  <div className="stat-box">

                    <span>
                      Capacity
                    </span>

                    <strong>
                      {item.capacity}
                    </strong>

                  </div>

                  <div className="stat-box">

                    <span>
                      Efficiency
                    </span>

                    <strong>
                      {item.efficiency}
                    </strong>

                  </div>

                  <div className="stat-box">

                    <span>
                      Process Time
                    </span>

                    <strong>
                      {item.processTime}
                    </strong>

                  </div>

                </div>

              </div>

            </div>

            {index !==
              factoryMapData.length - 1 && (

                <div className="pipeline-connector">

                  <div className="connector-dot"></div>

                  <div className="connector-line"></div>

                </div>

              )}

          </div>

        ))}

      </div>

    </section>

  );
}

export default FactoryMapHub;