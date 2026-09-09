import { useEffect, useState } from "react"

const Podium = () => {
  const [podium, setPodium] = useState([])

  useEffect(() => {
    fetch("/podium.json")
    .then((response) => response.json())
    .then((data) => setPodium(data))
  }, [])

  return (
    <div id="podiumContainer">
      {podium.map(item => 
        <div className={`rank-${item.rank}`} id="podiumItem">
          <h2>{item.car}</h2>
          <img src={item.image} alt="" />
        </div>
      )}
    </div>
  )
}

export default Podium