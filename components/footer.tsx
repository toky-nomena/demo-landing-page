import Link from "next/link";
import { Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-8 py-8 md:flex-row md:py-12">
        <div className="flex-1 space-y-4">
          <h3 className="inline-block pb-2 text-sm font-medium border-b-4 border-blue-500">
            FJKM Québec
          </h3>
          <p className="text-sm text-muted-foreground">
            Église protestante reformée au Québec, Canada
          </p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-12 sm:grid-cols-2">
          <div className="space-y-4">
            <h3 className="inline-block pb-2 text-sm font-medium border-b-4 border-blue-500">
              Nous contacter
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                Courriel: <span>contact@fjkm-quebec.com</span>
              </li>
              <li>
                Téléphone: <span>+1 (514) 123-4567</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="inline-block pb-2 text-sm font-medium border-b-4 border-blue-500">
              Nous suivre
            </h3>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com/fjkm-quebec"
                className="transition-colors text-muted-foreground"
              >
                <Instagram className="w-5 h-5 text-[#E1306C] hover:text-[#C13584]" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://facebook.com/fjkm-quebec"
                className="transition-colors text-muted-foreground"
              >
                <Facebook className="w-5 h-5 text-[#1877F2] hover:text-[#0866FF]" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://youtube.com/fjkm-quebec"
                className="transition-colors text-muted-foreground hover:text-primary"
              >
                <Youtube className="w-5 h-5 text-[#FF0000] hover:text-[#CC0000]" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-6 border-t">
        <p className="text-sm text-center text-muted-foreground">
          {new Date().getFullYear()} FJKM Québec, Inc. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
