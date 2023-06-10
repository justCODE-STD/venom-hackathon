import NavBar from "../../Components/DashboardNavBar/DashboardNavBar"
import Balance from "../../Components/Balance/Balance"
import Cards from "../../Components/Cards/cards"
import History from "../../Components/History/History"
import Footer from "../../Components/Footer/Footer"

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <Balance />
      <Cards />
      <History />
      <Footer />
      </>
  )
}

export default Dashboard
