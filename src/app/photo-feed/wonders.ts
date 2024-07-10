import { StaticImageData } from "next/image";
import photo1 from "./photos/1.jpg";
import photo2 from "./photos/2.jpg";
import photo3 from "./photos/3.jpg";
import photo4 from "./photos/4.jpg";
import photo5 from "./photos/5.jpg";
import photo6 from "./photos/6.jpg";
import photo7 from "./photos/7.jpg";

export type WonderImage = {
  id: string;
  name: string;
  src: StaticImageData;
  photographer: string;
  location: string;
};

const wondersImages: WonderImage[] = [
  getWonderObject("1", "Great Wall of China", photo1, "Photo by Max van den Oetelaar on Unsplash", "China"),
  getWonderObject("2", "Petra", photo2, "Photo by Reiseuhu on Unsplash", "Jordan"),
  getWonderObject("3", "Christ the Redeemer", photo3, "Photo by Andrea Leopardi on Unsplash", "Brazil"),
  getWonderObject("4", "Machu Picchu", photo4, "Photo by Jared Schwitzke on Unsplash", "Peru"),
  getWonderObject("5", "Chichen Itza", photo5, "Photo by E Mens on Unsplash", "Mexico"),
  getWonderObject("6", "Roman Colosseum", photo6, "Photo by Andrea Cipriano on Unsplash", "Italy"),
  getWonderObject("7", "Taj Mahal", photo7, "Photo by Su San Lee on Unsplash", "India"),
];

export default wondersImages;

function getWonderObject(id: string, name: string, src: StaticImageData, photographer: string, location: string): WonderImage {
  return { id, name, src, photographer, location }
}
