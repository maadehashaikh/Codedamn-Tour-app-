import React from 'react'
import Tour from './Tour'

const Tours = ({ tours }) => {
	// const { tours } = props
	return (
		<section>
			<div className="title">
				<h2>All Tours</h2>
				<div className="underline"></div>
			</div>
			<div>
				{/* map over tours and display UI */}
				{tours.map((tour) => (
					<Tour key={tour.id} {...tour} />
				))}
				<Tour
				  id={tours.id}
					image={tours.image}
					info={tours.info}
					price={tours.price}
					name={tours.name}
				/>
			</div>
		</section>
	)
}

export default Tours
