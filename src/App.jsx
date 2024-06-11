import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import PageRoutes from "./routes/PageRoutes";
import ThemeProvider from "./contexts/ThemeContext/ThemeContext";
import AuthProvider from "./contexts/AuthContext/AuthContext";
import { store } from "./app/store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider>
          <AuthProvider>
            <PageRoutes />
          </AuthProvider>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
