import axios from "axios";
import { useSearchParams } from "react-router-dom";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { AscentsIndex } from "./AscentsIndex";
import { AscentsNew } from "./AscentsNew";
import { AreasIndex } from "./AreasIndex";
import { RoutesIndex } from "./RoutesIndex";

export function Content() {
  const [ascents, setAscents] = useState([]);
  const [areas, setAreas] = useState([]);
  const [routes, setRoutes] = useState([]);

  const handleIndexAscents = () => {
    console.log("handleIndexAscents");
    axios.get("http://localhost:3000/ascents.json").then((response) => {
      console.log(response.data);
      setAscents(response.data);
    });
  };

  const handleCreateAscent = (params, successCallback) => {
    console.log("handleCreateAscent", params);
    axios.post("http://localhost:3000/ascents.json", params).then((response) => {
      setAscents([...ascents, response.data]);
      successCallback();
    });
  };

  const handleIndexAreas = () => {
    console.log("handleIndexAreas");
    axios.get("http://localhost:3000/areas.json").then((response) => {
      console.log(response.data);
      setAreas(response.data);
    });
  };

  const handleIndexRoutes = () => {
    console.log("handleIndexRoutes");
    axios.get(`http://localhost:3000/routes.json`).then((response) => {
      console.log(response.data);
      setRoutes(response.data);
    });
  };

  useEffect(handleIndexRoutes, []);
  useEffect(handleIndexAreas, []);
  useEffect(handleIndexAscents, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ascents/new" element={<AscentsNew onCreateAscent={handleCreateAscent} />} />
        <Route path="/areas" element={<AreasIndex areas={areas} />} />
        <Route path="/routes" element={<RoutesIndex routes={routes} />} />
        <Route path="/ascents" element={<AscentsIndex ascents={ascents} />} />
      </Routes>
    </BrowserRouter>
  );
}
