import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayouts";
import { HomePage } from "@pages";


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;