export function AscentsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateAscent(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Ascent</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Route id: <input name="route_id" type="integer" />
        </div>
        <div>
          Discipline: <input name="discipline" type="text" />
        </div>
        <div>
          grade: <input name="grade" type="text" />
        </div>
        <div>
          date: <input name="date" type="text" />
        </div>
        <div>
          attempts: <input name="attempts" type="integer" />
        </div>
        <div>
          beta: <input name="beta" type="text" />
        </div>
        <button type="submit">Create ascent</button>
      </form>
    </div>
  );

  // return (
  //   <div>
  //     <h1>New Ascent</h1>
  //     <form onSubmit={handleSubmit}>
  //       <div>Name: current users name</div>
  //       <div>Route: route.name</div>
  //       <div>Grade: route.grade</div>
  //       <div>Discipline: route.discipline</div>
  //       <div>date: date.now</div>
  //       <div>
  //         Attempts: <input name="attempts" type="integer" />
  //       </div>
  //       <div>
  //         Beta: <input name="Beta" type="text" />
  //       </div>
  //       <button type="submit">Create ascent</button>
  //     </form>
  //   </div>
  // );
}
