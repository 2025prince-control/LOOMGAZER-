import spinningImg from "../assets/spinning.jpg";
import weavingImg from "../assets/weaving.jpg";
import inspectionImg from "../assets/inspection.jpg";
import dyeingImg from "../assets/dyeing.jpg";
import packagingImg from "../assets/packaging.jpg";
const powerData = [

{
  id:1,
  machine:"Spinning Machine",
  image:spinningImg,
  currentLoad:35,
  optimalLoad:38,
  efficiency:92,
  powerSaved:4,
  status:"Balanced",
  priority:"Medium",
  zone:"Production Block A"
},

{
  id:2,
  machine:"Weaving Machine",
  image:weavingImg,
  currentLoad:40,
  optimalLoad:36,
  efficiency:87,
  powerSaved:7,
  status:"Overloaded",
  priority:"High",
  zone:"Production Block B"
},

{
  id:3,
  machine:"Inspection Machine",
  image:inspectionImg,
  currentLoad:20,
  optimalLoad:24,
  efficiency:96,
  powerSaved:2,
  status:"Underutilized",
  priority:"Low",
  zone:"Quality Control"
},

{
  id:4,
  machine:"Dyeing Machine",
  image:dyeingImg,
  currentLoad:60,
  optimalLoad:48,
  efficiency:78,
  powerSaved:15,
  status:"Critical",
  priority:"High",
  zone:"Chemical Processing"
},

{
  id:5,
  machine:"Packaging Machine",
  image:packagingImg,
  currentLoad:30,
  optimalLoad:30,
  efficiency:99,
  powerSaved:0,
  status:"Balanced",
  priority:"Low",
  zone:"Dispatch Area"
}

];
export default powerData;