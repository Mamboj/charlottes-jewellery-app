import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Animated} from 'react-native';

export default class AddButton extends React.Component{

    buttonSize = new Animated.Value(1)
    handlePress = () => {
       Animated.sequence([
           Animated.timing(this.buttonSize, {
           	 toValue: 0.95,
           	 duration: 200
           }),
           Animated.timing(this.buttonSize, {
           	toValue: 1
           })
       	]).start();
    }

	render() {
		return(
              <View style={{position: "absolute", AlignItems:"center"}}> 
                  <Animated.View style={styles.button}>
                    <TouchableHighlight onPress={this.handlePress} underlayColor="#7F58FF">
                         <Animated.View> 
                             <name="Book Appointment" size={24} color: '#FFF' />
                          </Animated.View>
                    </TouchableHighlight>
                  </Animated.View>
              </View>
		);
	}
}



const styles = StyleSheet.create({
	button: {
		backgroundColor: "#7F58FF",
		alignItems: "center",
		justifyContent: "center",
		width; 72,
		height; 72,
		borderRadius: 36,
		position: "absolute",
		top: -60,
		shadowColor: "#7F58FF",
		shadowRadius: 5,
		shadowOffset: { height: 10 },
        shadowOpacity: 0.3,
        borderWidth: 3,
        borderColor: "#FFF"
    }
})