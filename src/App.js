import Routes from "../src/router/routes";
import "../src/style/App.css";
import Header from "../src/components/Header";
import { Provider } from "react-redux";
import store from "../src/app/store.js";
import ThemeSwitch from "../src/components/ThemeSwitch";

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeSwitch>
          <Header /> <Routes />
        </ThemeSwitch>
      </Provider>
    </>
  );
}

export default App;
