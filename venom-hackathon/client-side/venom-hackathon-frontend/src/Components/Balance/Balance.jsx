import "./Balance.scss";
import eye from "../../assets/eye.svg"
import menu from "../../assets/Group 10.svg"


const Balance = () => {
  return (
    <div className="balance">
      <div className="balance-div">
        <h4>Total Balance</h4>
        <h1>0.00263060 <span><img className="eye" src={eye} alt="eye-icon" /></span></h1>
        <h4>=$75.10</h4>
      </div>
      <div className="balance-menu-div">
        <img className="menu-img" src={menu} alt="menu-icon" />
      </div>
    </div>
  );
};

export default Balance;
