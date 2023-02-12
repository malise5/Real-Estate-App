import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HouseCard from "./components/HouseCard";
import HouseDetails from "./components/HouseDetails";

const App = () => {
  const [selectedHouse, setSelectedHouse] = useState(null);

  const handleClick = (house) => {
    setSelectedHouse(house);
  };

  const handleClose = () => {
    setSelectedHouse(null);
  };

  const houses = [
    {
      id: 1,
      address: "123 Main St",
      price: "$500,000",
      img: "https://www.shutterstock.com/image-photo/luxurious-new-construction-home-bellevue-600w-555325381.jpg",
      planImg:
        "https://wpmedia.roomsketcher.com/content/uploads/2021/12/07133333/RoomSketcher-High-Quality-3D-Floor-Plans.jpg",
    },
    {
      id: 2,
      address: "956 Elm St",
      price: "$600,000",
      img: "https://www.shutterstock.com/image-photo/custom-built-luxury-house-nicely-600w-272674109.jpg",
      planImg:
        "https://wpmedia.roomsketcher.com/content/uploads/2022/02/03101147/3D-Floor-Plans-Blue-Walls-With-Balcony.jpg",
    },
    {
      id: 3,
      address: "489 Oak St",
      price: "$700,000",
      img: "https://www.shutterstock.com/image-photo/beautiful-exterior-newly-built-luxury-600w-529108441.jpg",
      planImg:
        "https://wpmedia.roomsketcher.com/content/uploads/2022/02/03101147/3D-Floor-Plans-Blue-Walls-With-Balcony.jpg",
    },
    {
      id: 4,
      address: "789 Qete St",
      price: "$700,000",
      img: "https://www.shutterstock.com/image-photo/luxury-house-vancouver-canada-600w-73960042.jpg",
      planImg:
        "https://wpmedia.roomsketcher.com/content/uploads/2021/12/30101922/RoomSketcher-Home-Designer-3D-Floor-Plan.jpg",
    },
    {
      id: 5,
      address: "889 Stak St",
      price: "$750,000",
      img: "https://www.shutterstock.com/image-photo/modern-luxury-residential-house-tile-600w-487937482.jpg",
      planImg:
        "https://i.pinimg.com/originals/e6/c6/cb/e6c6cb3fa4dbd852d1661aa0f3c22a82.jpg",
    },
    {
      id: 6,
      address: "889 Hak St",
      price: "$700,000",
      img: "https://www.shutterstock.com/image-photo/brand-new-luxury-residential-house-600w-667916182.jpg",
      planImg:
        "https://wpmedia.roomsketcher.com/content/uploads/2021/12/07133333/RoomSketcher-High-Quality-3D-Floor-Plans.jpg",
    },
    {
      id: 7,
      address: "889 Pak St",
      price: "$2700,000",
      img: "https://www.shutterstock.com/image-illustration/3d-rendering-cute-cozy-white-600w-2207511493.jpg",
      planImg:
        "https://i.pinimg.com/originals/11/69/25/116925d6ab27bfbe9e392a5637b64f44.jpg",
    },
    {
      id: 8,
      address: "289 Moi St",
      price: "$1700,000",
      img: "https://www.shutterstock.com/image-photo/house-carolina-600w-460053058.jpg",
      planImg:
        "https://i.pinimg.com/originals/68/e5/85/68e5854d2330cefc32a1ebe717722d8f.jpg",
    },
    {
      id: 9,
      address: "589 Key St",
      price: "$100,000",
      img: "https://www.shutterstock.com/image-photo/luxury-house-summer-day-vancouver-600w-455000746.jpg",
      planImg:
        "https://i.pinimg.com/originals/14/b9/04/14b90437982d0977816fa93acec063a5.jpg",
    },
  ];

  return (
    <div className="App">
      <Header />
      <div className="house-list">
        {houses.map((house) => (
          <HouseCard
            key={house.id}
            address={house.address}
            price={house.price}
            img={house.img}
            onClick={() => handleClick(house)}
          />
        ))}
      </div>
      {selectedHouse && (
        <HouseDetails planImg={selectedHouse.planImg} onClose={handleClose} />
      )}
      <Footer />
    </div>
  );
};

export default App;
