import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../layouts/HomePage";
import { HubPage } from "../layouts/HubPage";
import { SearchPage } from "../layouts/SearchPage";
import { NicoyaStaCruz } from "../components/NicoyaStaCruz";
import { JacoHerradura } from "../components/JacoHerradura";
import { Monteverde } from "../components/Monteverde";
import { LaFortuna } from "../components/LaFortuna";
import { CahuitaPtoViejo } from "../components/CahuitaPtoViejo";
import { ResourceList } from "../components/ResourceList";
import "../css/app.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
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
        <Route path="search/:searchTerm" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
