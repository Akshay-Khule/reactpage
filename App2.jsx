import React from "react";
import Card from "./Card";
import Avator from "./Avator";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avator src="https://c8.alamy.com/comp/2BBE8DF/bollywood-superstar-akshay-kumar-2BBE8DF.jpg" />
      <Card
        name="Beyonce"
        src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        ph="+123 456 789"
        em="b@beyonce.com"
      />
    </div>
  );
}

export default App;
