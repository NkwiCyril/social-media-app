import { getRandomDate } from "../func/utils";
import {
  FaHome,
  FaImage,
  FaMap,
  FaMountain,
  FaUsers,
  FaVideo,
} from "react-icons/fa";

import mountain1 from "../assets/images/mountain-1.jpeg";
import mountain2 from "../assets/images/mountain-2.jpeg";
import mountain3 from "../assets/images/mountain-3.jpeg";
import mountain4 from "../assets/images/mountain-4.jpeg";

import userImage1 from "../assets/images/mc.jpeg";
import userImage2 from "../assets/images/ff.png";
import userImage3 from "../assets/images/nc.jpeg";
import userImage4 from "../assets/images/ns.png";
import userImage5 from "../assets/images/ab.jpeg";
import userImage6 from "../assets/images/al.jpeg";
import userImage7 from "../assets/images/kds.jpeg";

export const hikeData = [
  {
    id: 1,
    mountain: "Mount Cameroon",
    location: "Buea, Cameroon",
    date: getRandomDate(),
    time: "07:15 AM",
    details: {
      difficulty: "Medium",
      elevation: "4,040m",
      distance: "48km",
    },
    image:
      "https://i.pinimg.com/564x/49/02/17/490217a8f649356e8f2424bcfb3e732c.jpg",
  },
  {
    id: 2,
    mountain: "Mount Kilimanjaro",
    location: "Tanzania, East Africa",
    date: getRandomDate(),
    time: "07:00 AM",
    details: {
      difficulty: "Hard",
      elevation: "5,895m",
      distance: "62km",
    },
    image:
      "https://cdn.britannica.com/33/153433-050-F76BDF75/Sunrise-Mount-Kilimanjaro-Tanzania.jpg",
  },
  {
    id: 3,
    mountain: "Mount Kenya",
    location: "Nairobi, Kenya",
    date: getRandomDate(),
    time: "06:30 AM",
    details: {
      difficulty: "Hard",
      elevation: "5,199m",
      distance: "50km",
    },
    image:
      "https://skyhookcontentful.imgix.net/5o2NluUQQ89D98qXU9Eys/8c18b70d5c41b9bcf1a903bcd0003707/mount_kenya_peak.jpg?auto=compress%2Cformat%2Cenhance%2Credeye&ixlib=react-9.7.0",
  },
  {
    id: 4,
    mountain: "Simien Mountains",
    location: "Gonder, Ethiopia",
    date: getRandomDate(),
    time: "05:45 AM",
    details: {
      difficulty: "Moderate",
      elevation: "4,550m",
      distance: "40km",
    },
    image:
      "https://www.intrepidtravel.com/adventures/wp-content/uploads/2017/07/shutterstock_567517243_800.jpg",
  },
  {
    id: 5,
    mountain: "Drakensberg",
    location: "Limpopo, South Africa",
    date: getRandomDate(),
    time: "06:00 AM",
    details: {
      difficulty: "Moderate",
      elevation: "3,482m",
      distance: "65km",
    },
    image:
      "https://www.nature-reserve.co.za/images/drakensberg-mountain-hampton-01-590x390.jpg",
  },
];

export const menuItems = [
  {
    icon: FaHome ,
    name: "Home",
  },
  {
    icon: FaUsers,
    name: "Friends",
    notification: 5,
  },
  {
    icon: FaMountain,
    name: "Hikes",
  },
  {
    icon: FaVideo,
    name: "Videos",
  },
  {
    icon: FaImage,
    name: "Photos",
    notification: 10,
  },
  {
    icon: FaMap,
    name: "Map",
  },
];

export const newsData = [
  {
    id: 1,
    title: "Ten unbelievable facts about Mountain Fako",
    image: mountain3,
    timeSincePosted: "2hr",
  },
  {
    id: 2,
    title: "All you need to know about the Mount Cameroon Race of Hope",
    image: mountain2,
    timeSincePosted: "2hr",
  },
  //   {
  //     id: 3,
  //     title: "This is by far the best weather to go hiking",
  //     image: mountain4,
  //     timeSincePosted: "2hr",
  //   },
];

export const pageItems = [
  {
    image: mountain1,
    title: "World of Mountains",
    alt: "World of Mountains",
  },
  {
    image: mountain2,
    title: "Mountain Life",
    alt: "Mountain Life",
  },
  {
    image: mountain3,
    title: "Mountains Calling in Peru",
    alt: "Mountains Calling in Peru",
  },
  {
    image: mountain4,
    title: "Mountaineering",
    alt: "Mountaineering",
  },
  {
    image: mountain1,
    title: "Mountain Cabins",
    alt: "Mountain Cabins",
  },
];

export const users = [
  {
    id: 1,
    fullName: "Meseuh Christien",
    username: "mdchristien",
    image: userImage1,
    isActive: false,
  },
  {
    id: 2,
    fullName: "Foletia Fabiola",
    username: "ffabiola",
    image: userImage2,
    isActive: true,
  },
  {
    id: 3,
    fullName: "Nsem Confident",
    username: "nsemconfident",
    image: userImage3,
    isActive: true,
  },
  {
    id: 4,
    fullName: "Njinda Salome",
    username: "njindasalome",
    image: userImage4,
    isActive: false,
  },
  {
    id: 5,
    fullName: "Ashu Boris",
    username: "ashuboris",
    image: userImage5,
    isActive: true,
  },
  {
    id: 6,
    fullName: "Kenne Suzy",
    username: "knsuzy",
    image: userImage7,
    isActive: false,
  },
  {
    id: 7,
    fullName: "Amah Laurel",
    username: "amahlaurel",
    image: userImage6,
    isActive: true,
  },
];
