import * as React from 'react';
import { Image, Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNavigator from './navigation/BottomTabNavigator';
import useLinking from './navigation/useLinking';

import {createAppContainer} from 'react-navigation-tabs';
import {ProfileScreen, BookAppointmentScreen, ProductsScreen, LoginScreen, SignupScreen, ContactusScreen} from './Screens';
import AddButton from './Component/AddButton';

const TabNavigator = creatBottomTabNavigator (
  {
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
          tabBarIcon: () => < name="Profile" size={24} color="#CDCCCE" />
      }
    },
        BookAppointment: {
      screen: BookAppointmentScreen,
      navigationOptions: {
          tabBarIcon: () => < name="BookAppointment" size={24} color="#CDCCCE" />
      }
    },
        Products: {
      screen: ProductsScreen,
      navigationOptions: {
          tabBarIcon: () => < name="Products" size={24} color="#CDCCCE" />
      }
    },
        Login: {
      screen: LoginScreen,
      navigationOptions: {
          tabBarIcon: () => < name="Login" size={24} color="#CDCCCE" />
      }
    },
        Signup: {
      screen: SignupScreen,
      navigationOptions: {
          tabBarIcon: () => < name="Signup" size={24} color="#CDCCCE" />
      }
    },
        Contactus: {
      screen: ContactusScreen,
      navigationOptions: {
          tabBarIcon: () => < name="Contactus" size={24} color="#CDCCCE" />
      }
    }
  },
  {
    tabBarOption: {
       showLabel:false
    }
  }
);

export default function App() {
  return (
    <View style={styles.container}>
     <Image source={require('./assets/spider.jpg')} /> 

      <Text style={{color: '#888', fontSize: 18}}> 
        To book an appoint for this necklace, just press the button below!
      </Text>

          <View style={styles.container}>
     <Image source={require('./assets/spider1.jpg')} /> 

      <Text style={{color: '#888', fontSize: 18}}> 
        To book an appoint for this necklace, just press the button below!
      </Text>

          <View style={styles.container}>
     <Image source={require('./assets/spider2.jpg')} /> 

      <Text style={{color: '#888', fontSize: 18}}> 
        To book an appoint for this necklace, just press the button below!
      </Text>

          <View style={styles.container}>
     <Image source={require('./assets/spider3.jpg')} /> 

      <Text style={{color: '#888', fontSize: 18}}> 
        To book an appoint for this necklace, just press the button below!
      </Text>

          <View style={styles.container}>
     <Image source={require('./assets/spider5.jpg')} /> 

      <Text style={{color: '#888', fontSize: 18}}> 
        To book an appoint for this necklace, just press the button below!
      </Text>
      </View>
  );
}




const Stack = createStackNavigator();

export default function App(props) {
    const [state, setState] = useState({
    s: "Enter name of jewellery",
    results: [],
    selected: {}
  });
    const search = () => {
  //Was supposed to add an API that returns jewellery from the database or website if searched for but cant find an apriopriate API
}
    return (
    <View style={styles.container}>
      <Text style={styles.title}>Charlottes Jewellery Store</Text>
      <TextInput 
          style={styles.searchbox}
          value={state.s}
          onChangeText={text => setState(prevState => {
            return {...prevState, s: text}
          })}
          on
      />
      </View>
    );
  }






  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);


  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
          <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#223345',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 70,
    paddingHorizontal: 20
  },
    title: {
    color: 'skyblue',
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20
  },
  searchbox: {
    fontSize: 20,
    fontWeight: '300',
    padding: 20,
    width: '100%',
    backgroundColor: 'skyblue',
    borderRadius: 8,
    marginBottom: 40
  },
});

export default createAppContainer(TabNavigation);
