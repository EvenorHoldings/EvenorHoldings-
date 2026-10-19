import { BrowserRouter } from "react-router-dom";
import { QueryClient } from "@tanstack/react-query";
import AppRoutes from "./AppRoutes";

const queryClient = new QueryClient();

const App = () => (
  <BrowserRouter>
    <AppRoutes queryClient={queryClient} />
  </BrowserRouter>
);

export default App;
