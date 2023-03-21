import axios from "axios";
import { useState, useEffect } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
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
    axios.get("http://localhost:3000/routes.json").then((response) => {
      console.log(response.data);
      setRoutes(response.data);
    });
  };

  useEffect(handleIndexRoutes, []);
  useEffect(handleIndexAreas, []);
  useEffect(handleIndexAscents, []);

  return (
    <div>
      <h1>hello world</h1>
      <Signup />
      <Login />
      <LogoutLink />
      <AscentsNew onCreateAscent={handleCreateAscent} />
      <AreasIndex areas={areas} />
      <RoutesIndex routes={routes} />
      <AscentsIndex ascents={ascents} />
    </div>
  );
}
