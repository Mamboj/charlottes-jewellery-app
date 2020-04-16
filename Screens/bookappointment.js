//This is the code for booking an appointment
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import {Calendar} from 'react-native-calenders';


export default class calc extends Components {
	constructor(props) {
		super(props);
		this.state = {};
		this.onDayPress = this.onDayPress.bind(this);
	}
	onDayPress(day) {
		this.setState({
			selected: day.dataString
		});
		this.props.navigation.navigate('slot', { bookingDate : day})
	}
	_onPressBack(){
		const {goBack} = this.props.navigation
		   goBack()
	}
	render() {
		return (
              <View style={styles.container}>
              <StatusBar barStyle="light-content"/>
              <View style={Commonstyle.toolbar}>
              <TouchableOpacity onPress={() => this._onPressBack()}><Text style={Commonstyle.toolbar}/>
                     <Text style={Commonstyle.toolbarTitle}></Text>
                     <Text style={Commonstyle.toolbarButton}></Text>
                 </View>
                   <Calendar
                 onDayPress={this.onDayPress}
                 style={styles.calendar}
                 hideExtraDays
                 markDates={{[this.state.selected]: {selected: true}}}
                 theme={{
                 	selectedDayBackgroundColor: 'green',
                 	todayTextColor: 'green',
                 	arrowColor: 'green',
                    }}
                    />
                </View>
			);
	}

}

const Styles = StyleSheet.create({
	container: {
       flex: 1
	},
  calendar: {
  	borderTopWidth: 1,
  	paddingTop: 5,
  	borderBottomWidth: 1,
  	borderColor: "#eee",
  	height: 350
  }
});