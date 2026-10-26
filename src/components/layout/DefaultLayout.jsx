import HeaderContent from "./HeaderContent";
import FooterContent from "./FooterContent";
import { Outlet } from "react-router";

export default function DefaultLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <HeaderContent />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <FooterContent />
    </div>
  );
}
