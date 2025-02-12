import Link from "next/link";
import { ThemeSwitcher } from "./theme/theme-switcher";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex justify-between items-center max-w-screen-2xl h-14">
        <Link href="/" className="flex items-center mr-6 space-x-2">
          <span className="font-bold">FJKM Quebec</span>
        </Link>
        <div className="flex items-center space-x-6">
          <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
            <Link
              href="#activites"
              className="transition-colors hover:text-primary"
            >
              Activités
            </Link>
            <Link
              href="#branches"
              className="transition-colors hover:text-primary"
            >
              Branches
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}
