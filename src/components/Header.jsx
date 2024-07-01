import Logo from "/sample-logo.png";
import { IoSearch } from "react-icons/io5";

const Header = () => {
  return (
    <header className="flex flex-wrap gap-5 shadow px-6 py-4 items-center">
      {/* Logo  */}
      <img src={Logo} alt="Logo" className="w-10" />{" "}
      <span className="font-extrabold text-2xl uppercase -ms-3">Logo</span>
      {/* Search  */}
      <div className="text-slate-500">
        <IoSearch className="w-5 h-5" />
      </div>
      <div className="text-slate-400">|</div>
      {/* Log In  */}
      <div className="font-medium text-xl">Log In</div>
    </header>
  );
};

export default Header;
