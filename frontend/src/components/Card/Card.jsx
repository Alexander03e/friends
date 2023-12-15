import './Card.css'

const Card = () => {

  return (
    <div className='card'>
      <div className="card__img-wrapper">
        <img src="" alt="картинка" className="card__img" />
      </div>
      <div className="card__text">
        <div className="title">
          <p className='card__title'>sdfsdfsddasdfsdfsdfsdfsdfsdfsdsdfdssdfsd</p>
        </div>
        <p><strong>date</strong></p>
        <p className='card__category'>category</p>
      </div>
    </div>
  )
}

export default Card