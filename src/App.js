import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ThemeSetuppreviewPage from "./pages/ThemeSetuppreviewPage";
import AdminPanelclientMasteradd1 from "./pages/AdminPanelclientMasteradd1";
import AdminPanelclientMasteradd2 from "./pages/AdminPanelclientMasteradd2";
import AdminPanelclientMasteradd3 from "./pages/AdminPanelclientMasteradd3";
import AdminPanelclientMasterclie from "./pages/AdminPanelclientMasterclie";
import AdminPanelclientMasteradd4 from "./pages/AdminPanelclientMasteradd4";
import AdminPanelclientMasteradd from "./pages/AdminPanelclientMasteradd";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/admin-panelclient-masteradd-new-clientstep-5":
        title = "";
        metaDescription = "";
        break;
      case "/admin-panelclient-masteradd-new-clientstep-41":
        title = "";
        metaDescription = "";
        break;
      case "/admin-panelclient-masteradd-new-clientstep-3":
        title = "";
        metaDescription = "";
        break;
      case "/admin-panelclient-masterclient-listmore":
        title = "";
        metaDescription = "";
        break;
      case "/admin-panelclient-masteradd-new-clientstep-1":
        title = "";
        metaDescription = "";
        break;
      case "/admin-panelclient-masteradd-new-clientsuccess":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<ThemeSetuppreviewPage />} />
      <Route
        path="/admin-panelclient-masteradd-new-clientstep-5"
        element={<AdminPanelclientMasteradd1 />}
      />
      <Route
        path="/admin-panelclient-masteradd-new-clientstep-41"
        element={<AdminPanelclientMasteradd2 />}
      />
      <Route
        path="/admin-panelclient-masteradd-new-clientstep-3"
        element={<AdminPanelclientMasteradd3 />}
      />
      <Route
        path="/admin-panelclient-masterclient-listmore"
        element={<AdminPanelclientMasterclie />}
      />
      <Route
        path="/admin-panelclient-masteradd-new-clientstep-1"
        element={<AdminPanelclientMasteradd4 />}
      />
      <Route
        path="/admin-panelclient-masteradd-new-clientsuccess"
        element={<AdminPanelclientMasteradd />}
      />
    </Routes>
  );
}
export default App;
