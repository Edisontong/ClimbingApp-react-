import { useSearchParams } from "react-router-dom";

export function RoutesIndex(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const areaID = parseInt(searchParams.get("area_id"));

  let unfiltered = props.routes;
  let areaRoutes = [];
  let i = 0;

  while (i < unfiltered.length) {
    if (unfiltered[i].area_id === areaID) {
      areaRoutes.push(unfiltered[i]);
    }
    i++;
  }

  return (
    <div>
      <h1>Routes</h1>

      {areaRoutes.map((route) => (
        <div key={route.id}>
          <h2>{route.name}</h2>
          <img src={route.image_url} />
          <p>Grade: {route.grade}</p>
          <p>Beta: {route.beta}</p>
          <p>Protection: {route.protection}</p>
          <p>Location: {route.location}</p>
          <p>Discipline: {route.discipline}</p>
        </div>
      ))}
    </div>
  );
}
