import weavingImg from "../assets/weaving.jpg";
import inspectionImg from "../assets/inspection.jpg";
import processingImg from "../assets/spinning.jpg";
import packagingImg from "../assets/packaging.jpg";

const equipmentData = [
  {
    id: "EQ101",
    machine: "Weaving Machine",
    status: "Running",
    location: "Unit A",
    efficiency: "95%",
    image: weavingImg
  },
  {
    id: "EQ102",
    machine: "Fabric Inspection Machine",
    status: "Running",
    location: "Unit B",
    efficiency: "92%",
    image: inspectionImg
  },
  {
    id: "EQ103",
    machine: "Textile Processing Machine",
    status: "Maintenance",
    location: "Unit C",
    efficiency: "65%",
    image: processingImg
  },
  {
    id: "EQ104",
    machine: "Packaging Machine",
    status: "Running",
    location: "Unit D",
    efficiency: "88%",
    image: packagingImg
  }
];

export default equipmentData;