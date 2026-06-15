const machineSettingsData = [
  {
    id: 1,
    name: "Weaving Machine",

    currentSettings: {
      temperature: 60,
      speed: 120,
      pressure: 45,
      power: 12
    },

    history: [
      {
        temperature: 50,
        speed: 100,
        pressure: 40,
        power: 10
      },
      {
        temperature: 60,
        speed: 120,
        pressure: 45,
        power: 12
      }
    ]
  },

  {
    id: 2,
    name: "Fabric Inspection Machine",

    currentSettings: {
      temperature: 45,
      speed: 90,
      pressure: 35,
      power: 8
    },

    history: [
      {
        temperature: 40,
        speed: 80,
        pressure: 30,
        power: 7
      },
      {
        temperature: 45,
        speed: 90,
        pressure: 35,
        power: 8
      }
    ]
  },

  {
    id: 3,
    name: "Textile Processing Machine",

    currentSettings: {
      temperature: 70,
      speed: 140,
      pressure: 55,
      power: 15
    },

    history: [
      {
        temperature: 60,
        speed: 120,
        pressure: 50,
        power: 13
      },
      {
        temperature: 70,
        speed: 140,
        pressure: 55,
        power: 15
      }
    ]
  },

  {
    id: 4,
    name: "Packaging Machine",

    currentSettings: {
      temperature: 40,
      speed: 75,
      pressure: 25,
      power: 6
    },

    history: [
      {
        temperature: 35,
        speed: 65,
        pressure: 20,
        power: 5
      },
      {
        temperature: 40,
        speed: 75,
        pressure: 25,
        power: 6
      }
    ]
  }
];

export default machineSettingsData;