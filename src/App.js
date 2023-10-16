import Routes from "../src/router/routes";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import { useTheme } from "../src/components/ThemeSwitch";

function App() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme === "light" ? "light" : "dark"}`}>
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
