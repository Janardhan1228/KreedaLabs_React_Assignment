
import React, { useState } from "react";

function ExitPage({ parkingSlots, setParkingSlots, vehicles, setVehicles }) {
  const [vehicleReg, setVehicleReg] = useState("");
  const [timeSpent, setTimeSpent] = useState("");

  const exitVehicle = () => {
    if (!vehicles[vehicleReg]) {
      alert("Vehicle not found.");
      return;
    }

    const { slot, vehicleType, entryTime } = vehicles[vehicleReg];
    const exitTime = new Date();
    const timeDiff = Math.floor((exitTime - new Date(entryTime)) / 1000 / 60); // Time in minutes
    setTimeSpent(`${timeDiff} minutes`);

    const currentSlot = parkingSlots[slot];
    if (vehicleType === "Bike") {
      currentSlot.bikes -= 1;
    } else if (vehicleType === "Car") {
      currentSlot.cars -= 1;
    } else if (vehicleType === "SUV") {
      currentSlot.suvs -= 1;
    }

    setParkingSlots({ ...parkingSlots });
    const updatedVehicles = { ...vehicles };
    delete updatedVehicles[vehicleReg];
    setVehicles(updatedVehicles);
  };

  return (
    <div>
      <h2>Exit Page</h2>
      <input
        type="text"
        placeholder="Enter Vehicle Registration Number"
        value={vehicleReg}
        onChange={(e) => setVehicleReg(e.target.value)}
      />
      <button onClick={exitVehicle}>Exit Parking</button>
      {timeSpent && <p>Time Spent: {timeSpent}</p>}
    </div>
  );
}

export default ExitPage;
