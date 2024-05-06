import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RecoilRoot } from "recoil";
import { FunctionContextProvider } from "./Context/DataContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
    <FunctionContextProvider>
      <App />
    </FunctionContextProvider>
  </RecoilRoot>
);
