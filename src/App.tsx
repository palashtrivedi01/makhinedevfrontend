import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import Company from "./pages/Company"
import ContactUs from "./pages/ContactUs"
import Support from "./pages/Support"
import Pricing from "./pages/Pricing"
import "./i18n";
//import SignUp  from "./pages/SignUp"
import DirectorPAN from "./components/DirectorPAN"
import DirectorAadhar from "./components/DirectorAdhar"



function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            
            <Route index element={<Home />} />
            <Route path="/company" element={<Company />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/support" element={<Support />} />
            {/* <Route path ="/signUp" element = {<SignUp/> } /> */}
            <Route path = "/DirectorPAN.tsx" element ={<DirectorPAN/>} />
            <Route path = "/DirectorAdhar" element ={<DirectorAadhar/>}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
