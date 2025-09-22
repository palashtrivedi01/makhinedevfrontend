import { Link } from "react-router-dom";
import CityDropdown from "../ui/CityDropDown";
import LocationLanguageSelector from "../ui/LocationLanguageSelector";
import SocialLinks from "../ui/SocialLinks";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <div className="w-full px-4 py-8 flex flex-row justify-between items-start border-t border-gray-300">
      <div className="flex flex-row justify-between flex-start w-2/3">
        {/* Left Section */}
        <div className="flex flex-col gap-4 w-1/4 text-xs">
          <img src="src/assets/logo.png" alt="logo" className="w-48" />
          <p>{t("Footer.Description")}</p>
        </div>

        {/* For Restaurants & Enterprises */}
        <div className="flex flex-col gap-4 text-xs">
          <div className="flex flex-col">
            <h2 className="text-sm font-semibold">{t("Footer.ForRestaurant")}</h2>
            <div className="flex flex-col text-sm">
              <Link to="#">{t("Footer.PartnersWithUs")}</Link>
            </div>
          </div>
          <div>
            <div className="flex flex-col">
              <h2 className="text-sm font-semibold">{t("Footer.ForEnterprise")}</h2>
              <div className="flex flex-col text-sm">
                <Link to="#">{t("Footer.MailkhaneBusin")}</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Section */}
        <div className="flex flex-col gap-1 text-xs">
          <div className="flex flex-col">
            <h2 className="text-sm font-semibold">{t("Footer.Legal")}</h2>
            <div className="flex flex-col text-sm">
              <Link to="#">{t("Footer.Terms&Condition")}</Link>
            </div>
          </div>
        </div>

        {/* Cities Section */}
        <div className="flex flex-col gap-1 text-xs">
          <h2 className="text-sm font-semibold">{t("Footer.LiveIn")}</h2>
          <div className="flex flex-col text-sm">
            {t("Footer.Cities")
              .split(" ")
              .map((city: string, index: number) => (
                <Link key={index} to="#">
                  {city}
                </Link>
              ))}
            <CityDropdown />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-end gap-4 w-1/3">
        <div className="text-xs flex flex-col gap-4 items-start">
          <LocationLanguageSelector />
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}

export default Footer;
