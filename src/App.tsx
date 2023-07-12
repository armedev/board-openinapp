import { createSignal, type Component, createEffect } from "solid-js";
import { Router, Route, Routes } from "@solidjs/router";
import { User, onAuthStateChanged } from "firebase/auth";

import styles from "./App.module.scss";
import Home from "./pages/home/home";
import Auth from "./pages/auth/auth";
import { auth } from "./firebase/config";
import Loading from "./components/loading/loading";

const [session, setSession] = createSignal<User | null>();
const [loading, setLoading] = createSignal(true);

const App: Component = () => {
  createEffect(() => {
    const unsub = onAuthStateChanged(auth, (data) => {
      setSession(data || null);
      setLoading(false);
    });

    return unsub;
  });

  return (
    <div class={styles.App}>
      <Router>
        {loading() ? (
          <Loading />
        ) : (
          <Routes>
            <Route path={"/"} component={Home} />
            <Route path={"/auth"} component={Auth} />
          </Routes>
        )}
      </Router>
    </div>
  );
};

export { session, loading };

export default App;
