import './New.css'

const Gallery = ({img}) => {

  return (
    <div className="gallery">
      <img src={img} alt="" className="gallery__img" />
      <img src={img} alt="" className="gallery__img" />
      <img src={img} alt="" className="gallery__img" />
      <img src={img} alt="" className="gallery__img" />
      <img src={img} alt="" className="gallery__img" />
      {/* <img src={img} alt="" className="gallery__img" /> */}
    </div>
  )
}

export default Gallery