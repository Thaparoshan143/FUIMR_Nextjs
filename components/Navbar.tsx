import Link from "next/link";

interface INavProps {
  oClassName?: string;
  children?: any;
}

interface INavItem {
  label: string;
  url: string;
}

const Navbar = ({ oClassName, children }: INavProps) => {
  return (
    <nav
      className={`z-50 w-full flex flex-row justify-evenly items-center ${oClassName}`}
    >
      {children}
    </nav>
  );
};

export const NavItem = ({ label, url }: INavItem) => {
  return (
    <Link
      href={url}
      className="text-theme-white hover:bg-theme-alt font-bold text-center transition-colors duration-300 p-2 px-3 m-2 rounded-md"
    >
      {label}
    </Link>
  );
};

export default Navbar;
