// Page 1: Entrance Page
// Inputs:
// User's Name (text input)
// Vehicle Registration Number (text input)
// Type of Vehicle (dropdown selection: Bike, Car, SUV)
// Functionality:
// Upon submission, allocate a parking slot from the available slots.
// Display the allocated parking slot ID to the user.
// Page 2: Exit Page
// Inputs:
// Vehicle Registration Number (text input)
// Functionality:
// Upon submission, free up the parking slot used by the vehicle.
// Calculate and display the time spent in the parking lot.
// Parking Slot Allocation
// Parking Slots:
// P1: Accommodates 2 bikes or 1 car
// P2: Accommodates 2 bikes or 1 car
// P3: Accommodates 2 bikes or 1 car
// P4: Accommodates 3 bikes or (1 car and 1 bike) or 1 SUV
// P5: Accommodates 3 bikes or (1 car and 1 bike) or 1 SUV
// Allocation Logic:
// Prioritize parking slots to maximize space usage.
// If a slot can accommodate multiple configurations, choose the most space-efficient option.
// Ensure that no more vehicles are allocated to a slot than it can handle.




import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import EntrancePage from "./EntrancePage";
import ExitPage from "./ExitPage";
import './App.css';
function App() {
  const [parkingSlots, setParkingSlots] = useState({
    P1: { bikes: 0, cars: 0, suvs: 0, capacity: { bikes: 2, cars: 1, suvs: 0 } },
    P2: { bikes: 0, cars: 0, suvs: 0, capacity: { bikes: 2, cars: 1, suvs: 0 } },
    P3: { bikes: 0, cars: 0, suvs: 0, capacity: { bikes: 2, cars: 1, suvs: 0 } },
    P4: { bikes: 0, cars: 0, suvs: 0, capacity: { bikes: 3, cars: 1, suvs: 1 } },
    P5: { bikes: 0, cars: 0, suvs: 0, capacity: { bikes: 3, cars: 1, suvs: 1 } },
  });

  const [vehicles, setVehicles] = useState({});

  return (
    <Router>
      <nav>
        <Link to="/">Entrance</Link> | <Link to="/exit">Exit</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <EntrancePage
              parkingSlots={parkingSlots}
              setParkingSlots={setParkingSlots}
              vehicles={vehicles}
              setVehicles={setVehicles}
            />
          }
        />
        <Route
          path="/exit"
          element={
            <ExitPage
              parkingSlots={parkingSlots}
              setParkingSlots={setParkingSlots}
              vehicles={vehicles}
              setVehicles={setVehicles}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
