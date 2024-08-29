import Navbar from "./Navbar";
import NavSocials from "./NavSocials";


function Header() {
  return (
    <div className="sticky top-0 h-[235px] w-full bg-[#000000] z-50">
      <NavSocials />
      <Navbar />
    </div>
  )
}
export default Header