import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function RootLayout() {
  return (
    <div className="flex flex-col justify-between">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
