import { Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./layout/Layout";
import NotFound from "./components/NotFound";
import Tour from "./components/Tour";
import TourList from "./components/TourList";
import TourDetail from "./components/TourDetail";

function Home() {
  return (
    <section className="container home">
      <h2 className="fw-bold text-center">觀迎來到高雄旅遊網~</h2>
    </section>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/tour" element={<Tour />}>
            <Route index element={<TourList />} />
            <Route path=":tourId" element={<TourDetail />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
