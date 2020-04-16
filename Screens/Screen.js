
import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native'
import {FontAwesome} from '@expovector-icons'

export default class Screen extends React.Component{
	render() {
		return (
			<View style={styles.container}>
			     <SafeAreaView style={{flex: 1}}>
			        <TouchableOpacity style={{alignItems: "flex-end", margin: 16}}
			            onPress={this.props.navigation.openDrawer}>
			            <FontAwesome5 name="bars" size={24} color="#161924" />
			        </TouchableOpacity>
			        <view style={{flex: 1, alignItems: "center", justifyContent: "center"}}></view>
			           <Text style={styles.text}>{this.props.name} Screen</Text>	
			     </SafeAreaView>
			</view>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff"
	},
	text: {
		color: "#161924",
		fontSize: 20,
		fontWeight: "500"
	}
})