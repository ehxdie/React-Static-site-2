import React from 'react'

function Card(props) {
  console.log(props)
  return (
    <div className='Card'>
      
      <img className='Card-image' src={props.items.imageUrl}></img>

      <div className='Card-body'>

        <div className='Card-link'>
         <div className='Card-country'>{props.items.country}</div>
          <a href={props.items.googleMapsUrl} className="links">View on map</a>
        </div>
         <div className='Card-title'>{props.items.title}</div>
        <div className='Card-year'>{props.items.startDate} - {props.items.endDate}</div>
        <p className='Card-text'>{props.items.description}</p>

      </div>
        
    </div>
  )
}

export default Card