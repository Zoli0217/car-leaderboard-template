import { useEffect, useState } from "react"

const Podium = () => {
  const [podium, setPodium] = useState([])

  useEffect(() => {
    fetch("podium.json")
    .then((response) => response.json())
    
  })

  return (
    <div>Podium</div>
  )
}

export default Podium