import { Header } from "./Header";
import { Content } from "./Content";
import { Experiences } from "./Experiences";
import { Educations } from "./Educations";
import { Capstones } from "./Capstones";
import { Create } from "./Create";
import { Footer } from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Content/>}/>
            <Route path="/experiences/:experienceId" element={<Experiences/>}/>
            <Route path="/educations/:educationId" element={<Educations/>}/>
            <Route path="/capstones/:educationId" element={<Capstones/>}/>
            <Route path="/create" element={<Create/>}/>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
