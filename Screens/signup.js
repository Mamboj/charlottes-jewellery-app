import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';

import {ProfileScreen, BookAppointmentScreen, ProductsScreen, LoginScreen, SignupScreen } from './Screens';
import { StackNavigator } from 'react-navigation';
import Signup from './Screens/Login';
import Profile from './Screen/Profile';


const Application = StackNavigator({
     Home: { screen: Signup },
     Profile: {screen: Profile },
    },  {
    	navigationOptions: {
    		header: false,
    	}
});

export default class App extends React.Component {
    
    constructor(props) {
     super(props);
     this.state = {
        first_name: '',
        last_name: '',
        email: '',
        phonenumber: '',
     	username: '',
     	password: '',
       }
    }

    componentDidMount() {
    	this._loadInitialState().done();
    }

    _loadInitialState = async () => {

    	var value await AsyncStorage.getItem('user');
    	if (value !== null) {
    		this.props.navigation.navigate('Profile')
    	}
    }

	render() {
		return (
			    <KeyboardAvoidingView behavior = 'padding' style={styles.wrapper}>
			       <View style={styles.container}>
			            <Text style={styles.header}>- Signup -</Text>

                        <TextInput
                            style={styles.textInput} placeholder='first_name'
                            onCchangeText={ (first_name) => this.setState({first_name}) }
                            underLineColorAndroid='transparent'
                        /> 

                        <TextInput
                            style={styles.textInput} placeholder='last_name'
                            onCchangeText={ (last_name) => this.setState({last_name}) }
                            underLineColorAndroid='transparent'
                        />                        
                        <TextInput
                            style={styles.textInput} placeholder='email'
                            onCchangeText={ (email) => this.setState({email}) }
                            underLineColorAndroid='transparent'
                        /> 

                        <TextInput
                            style={styles.textInput} placeholder='phonenumber'
                            onCchangeText={ (phonenumber) => this.setState({phonenumber}) }
                            underLineColorAndroid='transparent'
                        />

                        <TextInput
                            style={styles.textInput} placeholder='username'
                            onCchangeText={ (username) => this.setState({username}) }
                            underLineColorAndroid='transparent'
                        /> 

                        <TextInput
                            style={styles.textInput} placeholder='password'
                            onCchangeText={ (password) => this.setState({password}) }
                            underLineColorAndroid='transparent'
                        />

                        <TouchableOpacity
                           style={styles.btn}
                           onPress={this.Login}>
                        </TouchableOpacity>

			       </View>
			    </KeyboardAvoidingView >
			);
	}

    Signup = () => {
    	alert('test'):
    }

}