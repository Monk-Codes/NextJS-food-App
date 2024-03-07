import "./globals.css";
import MainHeader from "./meals/main-header";
import MainHeaderBg from "./meals/main-header-bg";

export const metadata = {
 title: "Next Foods",
 description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
 return (
  <html lang="en">
   <body>
    <MainHeaderBg />
    <MainHeader />
    {children}
   </body>
  </html>
 );
}
