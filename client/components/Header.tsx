import Navbar from "./Navbar";
import NavbarBanner from "./NavbarBanner";
import NavSocials from "./NavSocials";

function Header() {
  return (
    <div>
      <NavbarBanner />
      <div className="sticky top-0 w-full bg-[#000000] z-50">
        <div className="pt-11 pb-8 sm:pt-[60px] flex justify-center sm:justify-end sm:w-4/5 sm:mx-auto sm:pb-[49px]">
          <NavSocials />
        </div>
        <Navbar />
      </div>
    </div>
  );
}
export default Header;
