const element = (
  <div className="container">
    <h1 className="heading">Congratulations</h1>
    <div className="card-container">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <h2 className="kiran">Kiran V</h2>
      <p className="para">
        Vishnu Institue of Computer Education and Technology Bhimavaram
      </p>
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
