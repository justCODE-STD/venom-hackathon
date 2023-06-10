import receive from "../../assets/Vector-3.svg";
import withdraw from "../../assets/Vector-2.svg";
import send from "../../assets/Vector-1.svg";

import "./cards.scss";

const cards = () => {
  return (
    <div className="card-container">
      <div className="card1">
        <img src={receive} alt="Receive-Icon" />
        <h4>Receive</h4>
        <h4>Funds</h4>
      </div>
      <div className="card2">
      <img src={send} alt="Receive-Icon" />
        <h4>Send</h4>
        <h4>Funds</h4>
      </div>
      <div className="card3">
      <img src={withdraw} alt="Receive-Icon" />
        <h4>Withdraw </h4>
        <h4>Funds</h4>
      </div>
    </div>
  )
}

export default cards
