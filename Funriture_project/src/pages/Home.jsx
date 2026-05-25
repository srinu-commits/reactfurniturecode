import Login from "../components/Login";
import { FaWhatsapp } from "react-icons/fa";
import customisedcotsetup from "../assets/images/customisedcotsetup.jpeg";
import Footer from "../components/Footer";
import TVCUPBOARD from "../assets/images/TVCUPBOARD.jpeg";
import stylishtvCUPBOARD from "../assets/images/stylishtvCUPBOARD.jpeg";
import Modernwhiteandcofeecombo from "../assets/images/Modernwhiteandcofeecombo.jpeg";
import Ligthgreenandwhitecombo from "../assets/images/Ligthgreenandwhitecombo.jpeg";
import allcombocupboard from "../assets/images/allcombocupboard.jpeg";
import cupboardrunningdoors from "../assets/images/cupboardrunningdoors.jpeg";
import excellentTVCUPBOARD from "../assets/images/excellentTVCUPBOARD.jpeg";
import stylishcupboardcementandgreycombo from "../assets/images/stylishcupboardcementandgreycombo.jpeg";
import cupboarddarkgreenandwhitecombo from "../assets/images/cupboarddarkgreenandwhitecombo.jpeg";
import dressingtable from "../assets/images/dressingtable.jpeg";

import completehomeinteriorworkvideo from "../assets/videos/completehomeinteriorworkvideo.mp4";

function Home() {

  const products = [
    {
      id: 1,
      name: "All combo Modern cupboard",
      image: allcombocupboard,
    },
    {
      id: 2,
      name: " Dressing Table",
      image: dressingtable,
    },
    {
      id: 3,
      name: "Modern Cupboard",
      image: stylishcupboardcementandgreycombo,
    },
    {
      id: 4,
      name: "cupboard darkgreen and whitecombo ",
      image: cupboarddarkgreenandwhitecombo,
    },
      {
      id: 5,
      name: "cupboard running doors ",
      image: cupboardrunningdoors,
    },
      {
      id: 6,
      name: "TV cupboard",
      image: excellentTVCUPBOARD,
    },
     {
      id: 7,
      name: "Light green and white combo",
      image: Ligthgreenandwhitecombo,
    },
    
     {
      id: 8,
      name: "Modern white and cofee color combo",
      image: Modernwhiteandcofeecombo,
    },
    {
      id: 9,
      name: "TV Cupboard setup",
      image: stylishtvCUPBOARD,
    },
     {
      id: 10,
      name: "classic TV Cupboard setup",
      image: TVCUPBOARD,
    },

     {
      id: 12,
      name: "customised cot fixed on wall",
      image: customisedcotsetup,
    },



  
  ];

  return (
    <div>

      {/* HERO SECTION */}

      <section className="bg-orange-100 flex px-16 py-12 items-center justify-between">

        {/* LEFT CONTENT */}

        <div className="w-1/2">

          <h1 className="text-5xl font-bold leading-tight">
            Cherukugattu Carpentary  Works
            <br />
          
          </h1>

          <p className="text-xl mt-6 text-gray-700">
              Premium Doors, Windows, Cupboards & Modular Interiors

          </p>

          <button className="mt-8 bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800">
            Explore Products
          </button>

        </div>

        {/* LOGIN SECTION */}

        <div className="bg-white p-6 rounded-2xl shadow-2xl w-80">

          <Login />

        </div>

      </section>

      {/* PRODUCT IMAGES SECTION */}

      <section className="px-10 py-10 bg-white">

        <h2 className="text-4xl font-bold text-center mb-10">
          Our work Collection
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {/* VIDEO CARD */}

          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">

            <video
              autoPlay
              loop
              muted
              className="w-full h-60 object-cover"
            >

              <source
                src={completehomeinteriorworkvideo}
                type="video/mp4"
              />

            </video>

            <div className="p-3">

              <h3 className="text-lg font-semibold text-center">
                Premium Interior Designs
              </h3>

            </div>

          </div>

          {/* IMAGE CARDS */}

          {products.map((item) => (

            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
            >

              <img
                src={item.image}
                alt={item.name}
                className="w-full h-60 object-cover"
              />

              <div className="p-3">

                <h3 className="text-lg font-semibold text-center">
                  {item.name}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </section>

{/* WHATSAPP BUTTON */}
<a
  href="https://wa.me/918179351414"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition duration-300 z-50"
>

  <FaWhatsapp size={40} />

</a>

<Footer />
    </div>
  );
}

export default Home;