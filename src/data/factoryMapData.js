import storageImg from "../assets/storage.jpg";
import spinningImg from "../assets/spinning.jpg";
import weavingImg from "../assets/weaving.jpg";
import inspectionImg from "../assets/inspection.jpg";
import dyeingImg from "../assets/dyeing.jpg";
import packagingImg from "../assets/packaging.jpg";
import dispatchImg from "../assets/dispatch.jpg";

const factoryMapData = [

  {
    id: 1,
    title: "Raw Material Storage",
    image: storageImg,

    description:
      "This warehouse stores cotton, silk, rayon, polyester and other textile raw materials before production begins. Materials are inspected, weighed, categorized and allocated to production units according to manufacturing schedules.",

    capacity: "25 Tons",
    efficiency: "98%",
    processTime: "15 Min",

    connectedTo: ["Spinning Machine"]
  },

  {
    id: 2,
    title: "Spinning Machine",
    image: spinningImg,

    description:
      "Raw textile fibres are converted into high-quality yarn through automated spinning systems. The machine controls fibre alignment, twist ratio and yarn thickness to ensure consistency throughout the production cycle.",

    capacity: "1200 Kg / Day",
    efficiency: "95%",
    processTime: "25 Min",

    connectedTo: ["Weaving Machine"]
  },

  {
    id: 3,
    title: "Weaving Machine",
    image: weavingImg,

    description:
      "Prepared yarn is woven together using computerized textile looms. Different weaving patterns are applied to produce fabrics with varying textures, durability and industrial applications.",

    capacity: "950 Meters / Day",
    efficiency: "94%",
    processTime: "40 Min",

    connectedTo: ["Inspection Machine"]
  },

  {
    id: 4,
    title: "Inspection Machine",
    image: inspectionImg,

    description:
      "Fabric quality is thoroughly inspected for defects such as holes, color inconsistencies, weaving faults and alignment issues. Only approved fabric proceeds to the next production stage.",

    capacity: "1800 Meters / Day",
    efficiency: "97%",
    processTime: "18 Min",

    connectedTo: ["Dyeing Machine"]
  },

  {
    id: 5,
    title: "Dyeing Machine",
    image: dyeingImg,

    description:
      "Fabric undergoes advanced dyeing and chemical treatment processes to achieve the desired color, texture and finishing standards. Automated systems ensure uniform color distribution across all batches.",

    capacity: "1500 Kg / Day",
    efficiency: "93%",
    processTime: "50 Min",

    connectedTo: ["Packaging Machine"]
  },

  {
    id: 6,
    title: "Packaging Machine",
    image: packagingImg,

    description:
      "Finished textile products are folded, labeled, sealed and packaged according to industrial standards. Packaging information is automatically generated for inventory and logistics tracking.",

    capacity: "3000 Units / Day",
    efficiency: "99%",
    processTime: "12 Min",

    connectedTo: ["Dispatch Unit"]
  },

  {
    id: 7,
    title: "Dispatch Unit",
    image: dispatchImg,

    description:
      "Packaged products are transferred to distribution centers, retailers and export channels. Shipment records, delivery schedules and warehouse allocation are managed from this final stage.",

    capacity: "5000 Units / Day",
    efficiency: "99%",
    processTime: "10 Min",

    connectedTo: []
  }

];

export default factoryMapData;