import "@/app/_styles/globals.css";
import Header from "./_components/Header";
import { Josefin_Sans } from "next/font/google";
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: { template: "%s / The Wild Oasis", default: "The Wild Oasis" },
  description:
    "Luxurous cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${josefin.className} bg-primary-950 antialiased text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header />
        <main className='px-8 py-12 flex-1 grid'>
          <div className='mx-auto max-w-7xl w-full'>{children}</div>
        </main>
      </body>
    </html>
  );
}
