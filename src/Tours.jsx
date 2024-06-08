import React from 'react'
import Tour from './Tour'

const Tours = (props) => {
	const {tours , removeTour} = props
	return (
		<section>
			<div className="title">
				<h2>All Tours</h2>
				<div className="underline"></div>
			</div>
			<div>
				{/* map over tours and display UI */}
				{tours.map((tour) => (
					<Tour {...tour} key={tour.id}  removeTour={removeTour}/>
				))}
			</div>
		</section>
	)
}

export default Tours
