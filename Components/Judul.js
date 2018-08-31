import React, {Component} from 'react';
import {Text} from 'react-native';

class Judul extends Component {
	render(){
		return(
			<Text style={salon.Judul}>BIODATA</Text>
		)
	}

}
const salon = {
	Judul: {
		color : '#696969',
		fontSize: 45,
		fontWeight: 'bold',
		textAlign: 'center',
		

	}
}
export default Judul;