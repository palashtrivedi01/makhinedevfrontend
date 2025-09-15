import { Link } from "react-router-dom"
import CityDropdown from "../ui/CityDropDown"
import LocationLanguageSelector from "../ui/LocationLanguageSelector"
import SocialLinks from "../ui/SocialLinks"



function Footer() {
  return (
    <div className='w-full px-4 py-8 flex flex-row justify-between items-start border-t border-gray-300'>
      <div className="flex flex-row justify-between flex-start w-2/3">
        <div className="flex flex-col gap-4 w-1/4 text-xs">
          <img
            src="src\assets\logo.png"
            alt="logo"
            className='w-48' />
          <p>&copy; 2024 HBKR Enterprise Pvt. Ltd.

            By continuing past this page,
            you accept to our Terms of Service,
            Cookie Policy, Privacy Policy and
            Content Policies. All trademarks
            are properties of their respective
            owners.</p>
        </div>
        <div className="flex flex-col gap-4 text-xs">
          <div className="flex flex-col">
            <h2 className="text-sm font-semibold">For Restaurants</h2>
            <div className="flex flex-col text-sm">
              <Link to="#">Partner with us</Link>
              <Link to="#">Features for you</Link>
            </div>
          </div>
          <div>
            <div className="flex flex-col">
              <h2 className="text-sm font-semibold">For Enterprises</h2>
              <div className="flex flex-col text-sm">
                <Link to="#">Maikhane Business</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 text-xs">
          <div className="flex flex-col">
            <h2 className="text-sm font-semibold">Legal</h2>
            <div className="flex flex-col text-sm">
              <Link to="#">Terms & conditions</Link>
              <Link to="#">cookie policy</Link>
              <Link to="#">privacy policy</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 text-xs">
          <h2 className="text-sm font-semibold">We Are Live In</h2>
          <div className="flex flex-col text-sm">
            <Link to="#">Indore</Link>
            <Link to="#">Bhopal</Link>
            <Link to="#">Pune</Link>
            <Link to="#">Bangalore</Link>
            <CityDropdown />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end gap-4 w-1/3">
        <div className="text-xs flex flex-col gap-4 items-start">
          <LocationLanguageSelector />
          <SocialLinks />
        </div>
      </div>
    </div>
  )
}

export default Footer