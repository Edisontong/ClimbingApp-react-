import { Link, useParams } from "react-router-dom";

export function AreasIndex(props) {
  return (
    <div>
      <h1>All areas</h1>
      {props.areas.map((area) => (
        <div key={area.id}>
          <h2>{area.name}</h2>
          <img src={area.image_url} />
          <p>Location: {area.location}</p>
          <p>Routes: {area.route_quantity}</p>
          <Link to={`/routes?area_id=${area.id}`} className="btn btn-primary">
            See routes
          </Link>
        </div>
      ))}
    </div>
  );
}
