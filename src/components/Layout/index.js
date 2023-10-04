import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "components/Header";
import "./Layout.scss";

export default function PrimaryLayout() {
  //persist product filters and user on server side renders

  return (
    <div className="container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
