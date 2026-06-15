import weaving from "../assets/weaving.jpg";
import inspection from "../assets/inspection.jpg";
import dyeing from "../assets/dyeing.jpg";
import packaging from "../assets/packaging.jpg";

const machineData = [
  {
    id: 1,
    name: "Weaving Machine",
    image: weaving,
    status: "Running",
    efficiency: "95%",
    power: "12 kW"
  },
  {
    id: 2,
    name: "Fabric Inspection Machine",
    image: inspection,
    status: "Running",
    efficiency: "92%",
    power: "10 kW"
  },
  {
    id: 3,
    name: "Textile Processing Machine",
    image: dyeing,
    status: "Maintenance",
    efficiency: "65%",
    power: "8 kW"
  },
  {
    id: 4,
    name: "Packaging Machine",
    image: packaging,
    status: "Running",
    efficiency: "88%",
    power: "6 kW"
  }
];

export default machineData;