import "./App.css";
import Machines from "./components/machines/Machines";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import MaterialList from "./components/MaterialList/MaterialList";
import ProductionQueue from "./components/ProductionQueue/ProductionQueue";
import EquipmentChecker from "./components/EquipmentChecker/EquipmentChecker";
import MachineUndo from "./components/MachineUndo/MachineUndo";
import MarketValueSorter from "./components/MarketValueSorter/MarketValueSorter";
import FactoryMapHub from "./components/FactoryMapHub/FactoryMapHub";
import ProcessingPlanner from "./components/ProcessingPlanner/ProcessingPlanner";
import PowerBalancer from "./components/PowerBalancer/PowerBalancer";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <MaterialList />
      <Machines />
      <ProductionQueue />
      <EquipmentChecker />
      <MachineUndo />
      <MarketValueSorter />
      <FactoryMapHub />
      <ProcessingPlanner />
      <PowerBalancer />
      <Footer />
    </>
  );
}

export default App;