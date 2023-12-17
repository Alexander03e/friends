import './New.css'

const Gallery = ({img}) => {
  console.log(img)
  return (
    <div className="gallery">
      {img.map(image=> {
        console.log(image)
        return (
          <img src={image} alt="" className="gallery__img" />
        )
      })}
     
    </div>
  )
}

export default Gallery