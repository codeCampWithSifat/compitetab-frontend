import { Outlet } from "react-router";
import Footer from "../Common/Footer";
import Header from "../Common/Header";

const UserLayout = () => {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* Main Contenet */}
      <main>
        <Outlet />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default UserLayout;
