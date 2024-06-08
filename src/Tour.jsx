import React, { useState } from 'react'
import App from './App.css'

const Tour = (props) => {
	const { id, image, info, price, name , removeTour} = props
	const [readmore,setReadmore] = useState(true);
	const description = info.substring(0,200);
	console.log(description);
	// render them here. Read instructions
	return (
		<article className="single-tour">
			<img src={image} alt={name} />
			<footer>
				<div className="tour-info">
					<h4>{name}</h4>
					<h4 className="tour-price">{price}</h4>
				</div>
				<p>{readmore ? description : info} 
					<button onClick={() => setReadmore(!readmore)}>
						{readmore ? 'read more' : 'show less'}
					</button>
				</p>
				<button className="delete-btn" onClick={() => removeTour(id)}>Not Interested</button>
			</footer>
		</article>
	)
}
export default Tour
