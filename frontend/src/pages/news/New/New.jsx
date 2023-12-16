import '../News.css'
import './New.css'
import Gallery from './Gallery'
const New = ({item}) => {

  return (
    <div className="new">
      <div className="new__header">
        <div className="new__img-container">
          <img src={item?.user_img} alt="no-photo" className="new-img" />
        </div>
        <div className="new__name">
          <strong><p>{item?.name}</p></strong>
          <p className="new__time">{item?.time }</p>
        </div>
      </div>
      <div className="new__body">
        <p className="new__text">{item?.text}</p>
        {item?.img!= '' ?<Gallery img={item?.img}/>: ''}
      </div>
    </div>
  )
}

export default New