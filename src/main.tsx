import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Modals from "./components/Modal/Modal.tsx";

import GroupImage from "./components/anh/GroupImage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <Modals />
    <GroupImage></GroupImage>
    <p>Cảm ơn bạn đã ngắm chính bạn :V</p>
  </>
);
