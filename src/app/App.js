import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../layouts/HomePage";
import { HubPage } from "../layouts/HubPage";
import { ContactPage } from "../layouts/ContactPage";
import { ContactForm } from "../components/ContactForm";
import { NicoyaStaCruz } from "../components/NicoyaStaCruz";
import { JacoHerradura } from "../components/JacoHerradura";
import { Monteverde } from "../components/Monteverde";
import { LaFortuna } from "../components/LaFortuna";
import { CahuitaPtoViejo } from "../components/CahuitaPtoViejo";
import { ResourceList } from "../components/ResourceList";
import "../css/app.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<Home />} />
        </Route>
        <Route element={<HubPage />}>
          <Route path="nicoyastacruz" element={<NicoyaStaCruz />} />
          <Route
            path="nicoyastacruz/:resourceType"
            element={<ResourceList hubName={"nicoyastacruz"} />}
          />
          <Route path="jacoherradura" element={<JacoHerradura />} />
          <Route
            path="jacoherradura/:resourceType"
            element={<ResourceList hubName={"jacoherradura"} />}
          />
          <Route path="monteverde" element={<Monteverde />} />
          <Route
            path="monteverde/:resourceType"
            element={<ResourceList hubName={"monteverde"} />}
          />
          <Route path="lafortuna" element={<LaFortuna />} />
          <Route
            path="lafortuna/:resourceType"
            element={<ResourceList hubName={"lafortuna"} />}
          />
          <Route path="cahuitaptoviejo" element={<CahuitaPtoViejo />} />
          <Route
            path="cahuitaptoviejo/:resourceType"
            element={<ResourceList hubName={"cahuitaptoviejo"} />}
          />
        </Route>
        <Route element={<ContactPage />}>
          <Route path="/contact" element={<ContactForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

export default App;
