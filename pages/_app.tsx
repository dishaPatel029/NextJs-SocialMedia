import "../styles/globals.css";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import type { AppProps } from "next/app";
import SideBar from "../components/Sidebar";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR) return null;

  return (
    <div>
      <Navbar />
      <div className="flex gap-6 md: gap-20">
        <div className="h-[92vh] overflow hidden xl:hover:overflow-auto">
          <SideBar />
        </div>
        <div className="mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1 33:02">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
};

export default MyApp;
