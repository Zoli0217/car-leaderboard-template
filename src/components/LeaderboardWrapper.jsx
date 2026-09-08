import Leaderboard from "./Leaderboard"
import Podium from "./Podium"

const LeaderboardWrapper = () => {
  return (
    <section className="leaderboardWrapper">
      <Podium/>
      <Leaderboard/>
    </section>
  )
}

export default LeaderboardWrapper