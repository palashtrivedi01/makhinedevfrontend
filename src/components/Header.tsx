import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import LocationLanguageSelector from "../ui/LocationLanguageSelector";

function Header() {
  const { t } = useTranslation();

  return (
    <div className="w-full h-1/6 px-4 py-4 flex flex-row justify-between items-center border-b border-gray-300 shadow-md">
      <img src="src/assets/logo.png" alt="logo" className="w-64" />

      <div className="flex flex-col items-end gap-3">
        <div>
          <LocationLanguageSelector />
        </div>

        <div className="flex flex-row gap-6 text-lg">
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
