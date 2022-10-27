import { useState } from "react";

export default function SwitchState() {
  const [isGoingOut, setIsGoingOut] = useState(false);
  const changeDecision = () => {
    setIsGoingOut((prevState) => !prevState);
  };
  return (
    <div className="bg-dark d-flex align-items-center">
      <div>
        <h2 className="text-light text-center">Do i feel like going out?</h2>
        <button className="text-dark yes h2" onClick={changeDecision}>
          {isGoingOut ? "Yes" : "No"}
        </button>
      </div>
    </div>
  );
}
