import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom"
import {CanvasJSChart} from 'canvasjs-react-charts';

class Locations extends Component {
	constructor(props) {
		super(props);
		this.state = {
			states : [],
			amounts : []
		}
	}

	componentDidMount() {
		fetch('http://localhost:3000/locations', {
      	method: 'post',
      	headers: {'Content-Type': 'application/json'},
      	body: JSON.stringify({
        email: this.props.user.email
      })
    })
      .then(response => response.json())
      .then(data => this.setState({states:data.states, amounts:data.amounts}))
}


	render () {
	// return(
  //     <div>
  //       <div className="Main">
  //         	<div id="Controls">
	// 			<p className="This"> locations!!!</p>
	// 		</div>
	// 					<div className="Table">
	//       <table>
	//         <thead>
	//         <tr>
	//           <th colSpan="3">these are your donors</th>
	//           </tr>
	//         </thead>
	//         <tbody>
	//           <tr>
	//             <td>donor code</td>
	//             <td>name</td>
	//             <td>address</td>
	//             <td>city</td>
	//           </tr>
	//         </tbody>
	//       </table>
	// 	</div>
				
  //       </div>
  //     </div>
			let dataPoints = []
			let x=10
			this.state.states.map((state)=>{
				let index = this.state.states.indexOf(state)
				let amount = Math.round(this.state.amounts[index])
				dataPoints.push({
					x:x,
					label: state,
					y:amount,
					indexLabel: '$'+String(amount)
					}
				)
				x = x+10
			}
			)

      const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", //"light1", "dark1", "dark2"
			title:{
				text: "Donations by State"
			},
			axisY: {
				includeZero: true
			},
			axisX: {
				interval:10,
			},
			data: [{
				type: "column", //change type to bar, line, area, pie, etc
				//indexLabel: "{y}", //Shows y value on all Data Points
				indexLabelFontColor: "#5A5757",
				indexLabelPlacement: "outside",
				dataPoints: dataPoints
			}]
		}
		
		return (
		<div>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
				/* containerProps={{ width: '100%', height: '300px' }} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
 
		</div>
		);
	}
}
// 	);
// }
// }

export default Locations;