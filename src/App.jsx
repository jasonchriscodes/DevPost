import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./ui_components/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SignupPage from "./pages/SignupPage";
import CreatePostPage from "./pages/CreatePostPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./ui_components/ProtectedRoute";
import NotFoundPage from "./pages/NotFoundPage";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="blogs/:slug" element={<DetailPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route
            path="create"
            element={
              <ProtectedRoute>
                <CreatePostPage />
              </ProtectedRoute>
            }
          />
          <Route path="signin" element={<LoginPage />} />
          {/* <Route path="profile" element={<ProfilePage />} /> */}
        </Route>
      </Routes>
    </QueryClientProvider>
  );
};

export default App;
