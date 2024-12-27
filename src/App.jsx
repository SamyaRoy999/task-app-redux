import { Provider } from "react-redux";
import MainLayout from "./components/layouts/MainLayout";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}></Provider>
      <MainLayout />
    </>
  );
}

export default App;
