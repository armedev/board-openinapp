import { type Component, createSignal } from "solid-js";
import "./sidebar.scss";
import Image1 from "../../assets/dashboard_icon-1.png";
import Image2 from "../../assets/transaction_icon-2.png";
import Image3 from "../../assets/schedule_icon-3.png";
import Image4 from "../../assets/user_icon-4.png";
import Image5 from "../../assets/setting_icon-5.png";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useNavigate } from "@solidjs/router";
import useWindowDimensions from "../../utils/useWindowWidth";

type Selected = 1 | 2 | 3 | 4 | 5;

const Sidebar: Component = () => {
  const navigate = useNavigate();
  const signout = async () => {
    try {
      await signOut(auth);
      navigate("/auth", { replace: true });
    } catch (err) {
      alert("failed to logout");
    }
  };
  const [selected, setSelected] = createSignal<Selected>(1);
  const [sidebarToggle, setSidebarToggle] = createSignal<boolean>(true);
  const { width } = useWindowDimensions()();
  if (width < 1200) setSidebarToggle(false);
  else setSidebarToggle(true);
  return (
    <div class="sidebar_toggler">
      <div class="toggler" onclick={() => setSidebarToggle(!sidebarToggle())}>
        {sidebarToggle() ? <span>&#10006;</span> : <span>≡</span>}
      </div>
      {sidebarToggle() ? (
        <div class="sidebar">
          <div class={"sidebar__header"}>Board.</div>
          <div class={"sidebar__body"}>
            <span
              onclick={() => setSelected(1)}
              class={`${selected() === 1 ? "selected" : ""} `}
            >
              <img src={Image1} alt="image1" />
              Dashboard
            </span>
            <span
              onclick={() => setSelected(2)}
              class={`${selected() === 2 ? "selected" : ""} `}
            >
              <img src={Image2} alt="image2" />
              Transactions
            </span>
            <span
              onclick={() => setSelected(3)}
              class={`${selected() === 3 ? "selected" : ""} `}
            >
              <img src={Image3} alt="image3" />
              Schedules
            </span>
            <span
              onclick={() => setSelected(4)}
              class={`${selected() === 4 ? "selected" : ""} `}
            >
              <img src={Image4} alt="image4" />
              Users
            </span>
            <span
              onclick={() => setSelected(5)}
              class={`${selected() === 5 ? "selected" : ""} `}
            >
              <img src={Image5} alt="image5" />
              Settings
            </span>
          </div>
          <div class={"sidebar__footer"}>
            <span onclick={signout}>Logout</span>

            <span>Help</span>
            <span>Contact Us</span>
          </div>
        </div>
      ) : (
        <div class="sidebar_closed">
          <div class={"sidebar_closed__header"}>Board.</div>
          <div class={"sidebar_closed__body"}>
            <span>
              <img src={Image1} alt="image1" />
            </span>
            <span>
              <img src={Image2} alt="image2" />
            </span>
            <span>
              <img src={Image3} alt="image3" />
            </span>
            <span>
              <img src={Image4} alt="image4" />
            </span>
            <span>
              <img src={Image5} alt="image5" />
            </span>
          </div>
          <div class={"sidebar_closed__footer"}>footer links</div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
