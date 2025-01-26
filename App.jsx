import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    vehicleType: "",
    date: "",
    fromLocation: "",
    toLocation: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://<EXTERNAL SERVICE END POINT>/logistic-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setResponseMessage(result.message || "Request submitted successfully!");
    } catch (error) {
      setResponseMessage("Error submitting request. Please try again.");
    }
  };

  return (
    <div className="app-container">
      <h1>Logistic Request Form</h1>
      <form className="logistic-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="vehicleType">Vehicle Type:</label>
          <select
            id="vehicleType"
            name="vehicleType"
            value={formData.vehicleType}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select a vehicle</option>
            <option value="Truck">Truck</option>
            <option value="Van">Van</option>
            <option value="Bike">Bike</option>
            <option value="Container">Container</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="fromLocation">From Location:</label>
          <input
            type="text"
            id="fromLocation"
            name="fromLocation"
            value={formData.fromLocation}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="toLocation">To Location:</label>
          <input
            type="text"
            id="toLocation"
            name="toLocation"
            value={formData.toLocation}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">Submit Request</button>
      </form>

      {responseMessage && <p className="response-message">{responseMessage}</p>}
    </div>
  );
}

export default App;
