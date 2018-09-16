import React, {Component} from 'react';
import {Text, TextInput, View} from 'react-native';


class Judul extends Component {
	render(){
		return(
			<View>
			<Text style={salon.Judul}>{this.props.judul}</Text>
			<TextInput/>
			</View>
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