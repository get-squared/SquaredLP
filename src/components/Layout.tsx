import { Outlet } from "react-router-dom";

import { Header, Footer } from ".";

export const Layout = () => {
  return(
    <div className="bg-gradient-dark">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
};