import cottonImg from "../assets/cotton.jpg";
import silkImg from "../assets/silk.jpg";
import denimImg from "../assets/denim.jpg";
import polyesterImg from "../assets/polyester.jpg";
import rayonImg from "../assets/rayon.jpg";

const marketData = [
  {
    id: 1,
    material: "Silk",
    value: 600,
    image: silkImg,
    description:
      "Premium natural fiber used in luxury garments and export-quality fabrics."
  },

  {
    id: 2,
    material: "Denim",
    value: 350,
    image: denimImg,
    description:
      "Strong and durable fabric widely used in jeans and industrial clothing."
  },

  {
    id: 3,
    material: "Rayon",
    value: 300,
    image: rayonImg,
    description:
      "Soft semi-synthetic textile used in fashion and decorative products."
  },

  {
    id: 4,
    material: "Cotton",
    value: 250,
    image: cottonImg,
    description:
      "Natural breathable fabric commonly used in daily wear garments."
  },

  {
    id: 5,
    material: "Polyester",
    value: 200,
    image: polyesterImg,
    description:
      "Synthetic wrinkle-resistant material with high industrial demand."
  }
];

export default marketData;