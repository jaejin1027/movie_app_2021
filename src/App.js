import React from "react";

function Food({ fav }) {
  //prop.fav === {fav}
  return <h1>I like {fav}</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="kimchi" />
      <Food fav="kimbob" />
      <Food fav="sundae" />
      <Food fav="odeng" />
    </div>
  );
}

export default App;
