import Link from "next/link";
import { Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-8 py-8 md:flex-row md:py-12">
        <div className="flex-1 space-y-4">
          <h2 className="font-bold">FJKM Quebec</h2>
          <p className="text-sm text-muted-foreground">
            Church in Quebec, Canada
          </p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-12 sm:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Nous contacter</h3>
            <ul className="space-y-3 text-sm">
              <li>
                Email:{" "}
                <span className="font-semibold">contact@fjkm-quebec.com</span>
              </li>
              <li>
                Telephone:
                <span className="font-semibold">+1 (514) 123-4567</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Nous suivre</h3>
            <div className="flex space-x-4">
              <Link
                href="https://twitter.com/fjkm-quebec"
                className="transition-colors text-muted-foreground text-[#E1306C] hover:text-[#C13584]"
              >
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://facebook.com/fjkm-quebec"
                className="transition-colors text-muted-foreground text-[#1877F2] hover:text-[#0866FF]"
              >
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://youtube.com/fjkm-quebec"
                className="transition-colors text-muted-foreground hover:text-primary"
              >
                <Youtube className="w-5 h-5 text-[#FF0000] hover:text-[#CC0000]" />
                <span className="sr-only">Youtube</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-6 border-t">
        <p className="text-sm text-center text-muted-foreground">
          {new Date().getFullYear()} FJKM Quebec, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
