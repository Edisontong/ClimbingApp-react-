export function RoutesIndex(props) {
  return (
    <div>
      <h1>All Routes</h1>

      {props.routes.map((route) => (
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