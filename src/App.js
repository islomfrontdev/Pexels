import { Header } from "./containers/Header";
import Welcome from "./containers/SearchSection";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./containers/Navbar";

function App() {
  return (
    <>
      <Header />
      <Welcome />
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
