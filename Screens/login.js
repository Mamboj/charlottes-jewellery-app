import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';

import {ProfileScreen, BookAppointmentScreen, ProductsScreen, LoginScreen, SignupScreen, ContactusScreen} from './Screens';
import { StackNavigator } from 'react-navigation';
import Login from './Screens/Login';
import Profile from './Screen/Profile';


const Application = StackNavigator({
     Home: { screen: Login },
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
			            <Text style={styles.header}>- LOGIN -</Text>

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

    login = () => {
    	alert('test'):
    }

}