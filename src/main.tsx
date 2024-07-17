import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes/MainRoutes.tsx";
import ReduxProviders from "./providers/ReduxProviders.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ReduxProviders>
      <App />
      <MainRoutes />
    </ReduxProviders>
  </BrowserRouter>
);
