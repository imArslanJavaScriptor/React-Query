import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function MainLayout() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-900 w-full text-white p-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
