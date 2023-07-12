import { type Component } from "solid-js";
import "./home.scss";
import Sidebar from "../../components/sidebar/sidebar";
import Dashboard from "../../components/dashboard/dashboard";
import { session } from "../../App";
import { useNavigate } from "@solidjs/router";

const Home: Component = () => {
  const navigate = useNavigate();
  if (!session()) {
    navigate("/auth", { replace: true });
  }

  return (
    <div class="home">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default Home;
