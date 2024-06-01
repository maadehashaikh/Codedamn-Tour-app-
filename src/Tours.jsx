// import React from 'react'
// import Tour from './Tour'

// const Tours = ({tours}) => {
//   // const {tours} = props; 
//   return (
// 		<section>
// 			<div className="title">
// 				<h2>All Tours</h2>
// 				<div className="underline"></div>
// 			</div>
// 			<div>
// 				{/* map over tours and display UI */}
// 				{tours.map((tour) => (
// 					<Tour key={tour.id} {...tour}  />
// 				))}
//         <Tour id={2} image={'something'} info={'something'} price={3} name={'something'}/>
// 			</div>
// 		</section>
// 	);
// };


// export default Tours

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
				  key={999}
					id={3}
					image={'something'}
					info={'something'}
					price={3}
					name={'something'}
				/>
			</div>
		</section>
	)
}

export default Tours
