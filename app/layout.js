import { Baloo_2, Poppins } from "next/font/google";
import "./globals.css";

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-baloo",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Leng Yang | Ice Cream & Tea",
  description:
    "Leng Yang Ice Cream & Tea — premium bubble tea and ice cream made fresh, every day.",
  icons: {
    icon: "/assets/mascot.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${baloo.variable} ${poppins.variable}`}>
      <body className="bg-bg font-body text-ink">{children}</body>
    </html>
  );
}
