import { useEffect, useState } from "react"

const Podium = () => {
  const [podium, setPodium] = useState([])

  useEffect(() => {
    fetch("/podium.json")
    .then((response) => response.json())
    .then((data) => setPodium(data))
  }, [])

  return (
    <div>
      {podium.map(item => 
        <div>
          <h1>{item.car}</h1>
          <img src={item.image} alt="" />
        </div>
      )}
    </div>
  )
}

export default Podium