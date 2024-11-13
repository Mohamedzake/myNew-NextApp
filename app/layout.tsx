import Navigation from "./_components/Navigation";
import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});
export const metadata = {
  title: {
    template: "%s / udemy",
    default: "welcome / udemy",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className}
       antialiased bg-primary-950 text-primary-100
         min-h-screen flex flex-col relative`}
      >
        <header>
          logo <Navigation />
        </header>

        <main>{children}</main>
        <footer>Copyright by mohamed zaki</footer>
      </body>
    </html>
  );
}
