const plannerData = [

  {
    step: 1,
    machine: "Raw Material Storage",
    machineId: "RM-101",
    operator: "Rajesh Kumar",
    status: "Active",
    efficiency: "98%",
    capacity: "15 Tons",
    time: 2,
    description:
      "Stores cotton, silk, rayon and polyester fibres in temperature-controlled warehouses before production begins."
  },

  {
    step: 2,
    machine: "High Speed Spinning Unit",
    machineId: "SP-204",
    operator: "Amit Sharma",
    status: "Running",
    efficiency: "95%",
    capacity: "1200 Kg / Hour",
    time: 5,
    description:
      "Converts raw textile fibres into high-quality yarn using automated spinning technology."
  },

  {
    step: 3,
    machine: "Automated Weaving Machine",
    machineId: "WV-310",
    operator: "Suresh Patil",
    status: "Running",
    efficiency: "94%",
    capacity: "850 Meters / Hour",
    time: 8,
    description:
      "Interlaces yarn threads into fabric through computer-controlled textile looms."
  },

  {
    step: 4,
    machine: "Fabric Inspection Station",
    machineId: "IN-118",
    operator: "Neha Singh",
    status: "Active",
    efficiency: "97%",
    capacity: "1000 Meters / Hour",
    time: 3,
    description:
      "Detects defects, colour mismatches and weaving faults using AI-assisted quality inspection systems."
  },

  {
    step: 5,
    machine: "Fast Dyeing Unit B",
    machineId: "DY-425",
    operator: "Ravi Verma",
    status: "Optimal Route Selected",
    efficiency: "96%",
    capacity: "900 Meters / Hour",
    time: 6,
    description:
      "Applies colour treatment and finishing processes with the fastest available dyeing setup."
  },

  {
    step: 6,
    machine: "Packaging & Labelling System",
    machineId: "PK-512",
    operator: "Priya Deshmukh",
    status: "Ready",
    efficiency: "99%",
    capacity: "500 Packages / Hour",
    time: 4,
    description:
      "Performs automatic folding, packaging, barcode generation and shipment preparation."
  },

  {
    step: 7,
    machine: "Dispatch & Logistics Hub",
    machineId: "DP-701",
    operator: "Vikas Yadav",
    status: "Scheduled",
    efficiency: "100%",
    capacity: "50 Shipments / Day",
    time: 2,
    description:
      "Transfers finished textile products to warehouses, retailers and export distribution centers."
  }

];

export default plannerData;