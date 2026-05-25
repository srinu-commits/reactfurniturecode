import { FaUser, FaPhoneAlt } from "react-icons/fa";
function Footer() {

  return (

    <footer className="bg-[#4b0026] text-white px-10 py-14">

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* LEFT */}

        <div>

          <h2 className="text-3xl font-bold mb-4">
            cherukugattu  Interior wood works
          </h2>

          <p className="text-gray-300">
            Stylish & affordable design
            for modern homes based on customer requirement.
          </p>

        </div>

        {/* CUSTOMER SERVICE */}

        <div>

          <h3 className="text-2xl font-semibold mb-4">
            Customer Service
          </h3>

          <ul className="space-y-3 text-gray-300">

            <li>Cancellation Policy</li>
            <li>Warranty</li>
            <li>Usage & Care</li>
            <li>FAQ</li>

          </ul>

        </div>

        {/* ABOUT */}

        <div>

          <h3 className="text-2xl font-semibold mb-4">
            About
          </h3>

          <ul className="space-y-3 text-gray-300">

            <li>Carpentary works Include</li>
            <li>cupboards</li>
            <li>Main doors</li>
            <li>windows</li>
            <li>Double cot</li>
            <li>Dressing Table</li>
            <li>Dinning Table</li>
          </ul>

        </div>

        {/* CONTACT */}

        <div>

          <h3 className="text-2xl font-semibold mb-4">
            Contact Us
          </h3>

          <ul className="space-y-3 text-gray-300">

               <li className="flex items-center gap-3">

      <FaUser className="text-white" />

      Cherukugattu Manikantachari

    </li>

    <li className="flex items-center gap-3">

      <FaPhoneAlt className="text-white" />

      +91 8179351414

    </li>
  
          </ul>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="border-t border-gray-500 mt-10 pt-6 text-center text-gray-300">

        © 2026 cherukugattu carpentary works.

      </div>

    </footer>

  );
}

export default Footer;