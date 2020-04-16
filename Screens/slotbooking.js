//This is the code that helps u choose the time and save the slot
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import {Calendar} from 'react-native-calenders';

import * as firebase from 'firebase'


const jsonData = { "slots" : {
	"slot1": "09:00hrs to 09:30hrs",
	"slot2": "09:30hrs to 10:00hrs",
	"slot3": "10:00hrs to 10:30hrs",
	"slot4": "10:30hrs to 11:00hrs",
	"slot5": "11:00hrs to 11:30hrs",
	"slot6": "11:30hrs to 12:00hrs",
	"12:oohrs to 14:00hrs launch time",
	"slot7": "14:00hrs to 14:30hrs",
	"slot8": "14:30hrs to 15:00hrs",
	"slot9": "15:00hrs to 15:30hrs",
	"slot10": "15:30hrs to 16:00hrs",
 }
}

export default class Slot extends bookappointment {
	constructor(props) {
		super(props);
		this.state ={
			bookingDate: this.props.navigation.state.params.bookingDate
		}
	}
	_onPressBack(){
		const {goBack} = this.props.navigation
		goBack()
	}
	_bookSlot(status,key,value){
		const month = this.state.bookingDate.month
		const date = this.state.bookingDate.day
		const user = firebase.auth().currentUser
		let userDataJson = {}
		if(status)
			userDataJson[key] = null
	}
	render() {
		let _this = this
		const slots = jsonDataslots
		const slotsarr = object.keys(slots).map( function(k) {
			return ( <View key={k} style={{margin: S}}>
				<Animbutton countCheck={0} oncolor={"green"} effect={"pulse"}
				</View>)
		}

		return (
           <View style={styles.conttainer}>
           <StatusBar barStyle="light-content"/>
           <View style={CommonStyle.toolbar}>
           <TouchableOpacity onPress={() => this._onPressBack() }><Text style={CommonStyle.toolbar}>
                 <Text style={Commostyle.toolbarTitle}></Text>
                 <Text style={Commonstyle.toolbarButton}></Text>
           </View>
           { slotsarr }
           </View>
        );
	}
}

const styles = StyleSheet.create({
    container: { 
    	flex: 1
    }
});