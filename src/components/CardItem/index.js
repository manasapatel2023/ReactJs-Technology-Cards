// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardsList} = props
  const {title, imgUrl, description, className} = cardsList
  return (
    <li className={`${className} card-item`}>
      <div className="list-container">
        <h1 className="title">{title}</h1>
        <p className="description">{description} </p>
        <img src={imgUrl} alt={title} className="image" />
      </div>
    </li>
  )
}
export default CardItem
