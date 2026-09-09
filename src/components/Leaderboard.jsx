import { useEffect, useState } from "react"

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([])

  useEffect(()=> {
    fetch("/leaderboard.json")
    .then((response) => response.json())
    .then((data) => setLeaderboard(data))
  }, [])
  return (
    <div>
      {leaderboard.map(item => 
      <div>
        <h1>{item.car}</h1>
      </div>)}
    </div>
  )
}

export default Leaderboard