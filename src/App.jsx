import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./ui_components/AppLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="detail" element={<DetailPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
};

export default App;
