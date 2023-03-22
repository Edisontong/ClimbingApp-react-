export function AscentsIndex(props) {
  return (
    <div>
      <h1>All Ascents</h1>
      {props.ascents.map((ascent) => (
        <div key={ascent.id}>
          <h2>Date: {ascent.date}</h2>
          <p>{ascent.attempts}</p>
          <p>{ascent.beta}</p>
          <h4>{ascent.discipline}</h4>
          <h4>{ascent.grade}</h4>
        </div>
      ))}
    </div>
  );
}
