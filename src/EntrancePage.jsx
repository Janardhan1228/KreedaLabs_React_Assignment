
import React, { useState } from "react";

function EntrancePage({ parkingSlots, setParkingSlots, vehicles, setVehicles }) {
  const [name, setName] = useState("");
  const [vehicleReg, setVehicleReg] = useState("");
  const [vehicleType, setVehicleType] = useState("Bike");
  const [allocatedSlot, setAllocatedSlot] = useState("");

  const allocateSlot = () => {
    let chosenSlot = "";
    for (let slot in parkingSlots) {
      const currentSlot = parkingSlots[slot];
      if (vehicleType === "Bike" && currentSlot.bikes < currentSlot.capacity.bikes) {
        currentSlot.bikes += 1;
        chosenSlot = slot;
        break;
      } else if (vehicleType === "Car" && currentSlot.cars < currentSlot.capacity.cars) {
        currentSlot.cars += 1;
        chosenSlot = slot;
        break;
      } else if (vehicleType === "SUV" && currentSlot.suvs < currentSlot.capacity.suvs) {
        currentSlot.suvs += 1;
        chosenSlot = slot;
        break;
      }
    }

    if (chosenSlot) {
      setParkingSlots({ ...parkingSlots });
      setVehicles({
        ...vehicles,
        [vehicleReg]: { name, vehicleType, slot: chosenSlot, entryTime: new Date() },
      });
      setAllocatedSlot(chosenSlot);
    } else {
      alert("No available parking slots for your vehicle type.");
    }
  };

  return (
    <div>
      <h2>Entrance Page</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Vehicle Registration Number"
        value={vehicleReg}
        onChange={(e) => setVehicleReg(e.target.value)}
      />
      <select value={vehicleType} onChange={(e) => setVehicleType(e.target.value)}>
        <option value="Bike">Bike</option>
        <option value="Car">Car</option>
        <option value="SUV">SUV</option>
      </select>
      <button onClick={allocateSlot}>Allocate Parking Slot</button>
      {allocatedSlot && <p>Allocated Slot: {allocatedSlot}</p>}
    </div>
  );
}

export default EntrancePage;
