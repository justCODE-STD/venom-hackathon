import "./History.scss"
import historyImage from "../../assets/history.svg"

const History = () => {
  return (
    <div className="history-container">
      <div className="text-container">
        <h4>Recent Transactions</h4>
        <h4>View All History &gt;</h4>
      </div>
      <div className="historyCard-container">
        <div className="img-container">
            <div>
                <img className="historyImage" src={historyImage} alt="Your image" />
            </div>
            <div className="imgContainer-text">
                <h4>0x6a141....4928</h4>
                <p>5mins ago</p>
            </div>
        </div>
        <div className="amount-container">
            <h4>$12</h4>
            <p>Received</p>
        </div>
      </div>
    </div>
  )
}

export default History
