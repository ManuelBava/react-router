import HeaderContent from "./HeaderContent";
import FooterContent from "./FooterContent";
import { Outlet } from "react-router";

export default function DefaultLayout() {
  return (
    <div className="position-relative">
      <HeaderContent />
      <Outlet />
      <FooterContent />
    </div>
  );
}
