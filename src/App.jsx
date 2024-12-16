import "./App.css";
// import About from "./components/About";
// import Home from "./Home";
import Services from "./components/Services";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Abouts from "./pages/Abouts";
import Produks from "./pages/Produks";
import Contacts from "./pages/Contacts";
import Layout from "./layout/Index";

function App() {
  // const [count, setCount] = useState(0);
  // const increment = useCallback(() => {
  //   SetCount((prev) => prev + 1);
  // }, []);
  // const [input, setInput] = useState("");
  // const handleInputChange = (value) => {
  //   setInput(value);
  // };
  return (
    <>
      <div>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Abouts" element={<Abouts />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Produks" element={<Produks />} />
            <Route path="/Contacts" element={<Contacts />} />
          </Routes>
        </Layout> 
        {/* Kumpulan Konten */}
        {/* <Header />
        <Home />
        <About />
        <Services />
        <Produk /> */}
        {/* <NonLift />
        <Lift input={""} /> */}
        {/* <Contact /> */}
        {/* <div className="text-center mt-4">
          <button className="btn btn-primary">Learn More</button>
          <button className="btn btn-secondary ml-2">Get Started</button>
        </div> */}
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
