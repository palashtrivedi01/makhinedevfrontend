import { useTranslation } from "react-i18next";
import { NavLink, Link } from "react-router-dom";
import LocationLanguageSelector from "../ui/LocationLanguageSelector";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function Header() {
  const { t } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="w-screen h-fit px-4 py-4 flex flex-row flex-wrap justify-between items-center border-b border-gray-300 shadow-md">
      <Link to="/">
        <img src="src/assets/logo.png" alt="logo" className="w-64 h-fit" />
      </Link>

      <div>
          <Menu className={`md:hidden ${isMenuOpen? "hidden": ""} w-8 h-8`} onClick={handleMenuClick}/>
          <X className={`md:hidden ${isMenuOpen? "": "hidden"} w-8 h-8`} onClick={handleMenuClick}/>
      </div>

      <div className={`${isMenuOpen? "": "hidden"} md:flex flex-col items-end gap-4`}>
        <div>
          <LocationLanguageSelector />
        </div>

        <div className="flex flex-col md:flex-row flex-wrap gap-6 text-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-gray-800 font-bold" : "text-gray-700"
            }
          >
            {t("header.Home")}
          </NavLink>

          <NavLink
            to="/company"
            className={({ isActive }) =>
              isActive ? "text-gray-800 font-bold" : "text-gray-700"
            }
          >
            {t("header.Company")}
          </NavLink>

          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              isActive ? "text-gray-800 font-bold" : "text-gray-700"
            }
          >
            {t("header.ContactUs")}
          </NavLink>

          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              isActive ? "text-gray-800 font-bold" : "text-gray-700"
            }
          >
            {t("header.Pricing")}
          </NavLink>

          <NavLink
            to="/support"
            className={({ isActive }) =>
              isActive ? "text-gray-800 font-bold" : "text-gray-700"
            }
          >
            {t("header.Support")}
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
