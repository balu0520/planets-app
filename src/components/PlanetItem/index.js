// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails
  console.log(props)

  return (
    <div className="planet-item-container">
      <img src={imageUrl} alt={`planet ${name}`} className="planet-img" />
      <h1 className="planet-item-heading">{name}</h1>
      <p className="planet-item-para">{description}</p>
    </div>
  )
}

export default PlanetItem
