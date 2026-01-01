import "./globals.css";
import ReduxProvider from "@/store/providers";
import { ToastContainer, toast } from 'react-toastify';
import { Albert_Sans, Poppins, Roboto } from 'next/font/google'


const albert_sans = Albert_Sans({
  subsets: ['latin'],
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-roboto',
  display: 'swap',
})


export const metadata = {
  title: "Ready-ecommerce",
  description: "A cutting edge digital solution",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${roboto.variable}`}>
      <body
        className={`antialiased ${poppins.className}`}
      >
        <ReduxProvider>
          <ToastContainer />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
