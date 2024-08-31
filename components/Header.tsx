import Navbar from "./Navbar";
import NavSocials from "./NavSocials";

function Header() {
  return (
    <div className="sticky top-0 h-[235px] w-full bg-[#000000] z-50">
      <div className="pt-[60px] flex justify-end w-4/5 mx-auto pb-[49px]">
        <NavSocials />
      </div>
      <Navbar />
    </div>
  );
}
export default Header;
