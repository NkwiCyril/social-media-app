import React from "react";
import HikeCard from "../components/CenterSection/HikeCard";

function CenterSection() {
  
  function getRandomDate() {
    const start = new Date(2024, 0, 1); 
    const end = new Date(2024, 11, 31); 
    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  
    const options = { month: 'short', day: 'numeric', weekday: 'short' };
    return randomDate.toLocaleDateString('en-US', options);
  }

  const hikeData = [
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
      image: "https://i.pinimg.com/564x/49/02/17/490217a8f649356e8f2424bcfb3e732c.jpg",
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
    // {
    //   id: 5,
    //   mountain: "Drakensberg",
    //   location: "Limpopo, South Africa",
    //   date: getRandomDate(),
    //   time: "06:00 AM",
    //   details: {
    //     difficulty: "Moderate",
    //     elevation: "3,482m",
    //     distance: "65km",
    //   },
    //   image:
    //     "https://www.nature-reserve.co.za/images/drakensberg-mountain-hampton-01-590x390.jpg",
    // },
  ];

  const renderHikeData = hikeData.map((hike) => {
    return (
      <HikeCard
        mountain={hike.mountain}
        location={hike.location}
        date={hike.date}
        time={hike.time}
        details={hike.details}
        image={hike.image}
        key={hike.id}
      />
    );
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl">Upcoming Hikes</h1>
        <span className="flex text-sm">
          <p className="text-gray-400">Sort by:</p>
          {""}
          <select className="bg-background border-none" name="sort" id="">
            <option value="">Most recent</option>
            <option value="">Last Week</option>
            <option value="">Upcoming</option>
          </select>
        </span>
      </div>
      <div className="grid grid-cols-2 gap-3">{renderHikeData}</div>
    </div>
  );
}

export default CenterSection;
