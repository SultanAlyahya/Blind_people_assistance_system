import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Carrency from './views/blindUI/Carrency'
import decide from './views/decide'
import blindHomePage from './views/blindUI/blindHomePage'
import volunteerHomePage from './views/volunteerUI/volunteerHomePage'
import login from './views/volunteerUI/login'
import signup from './views/volunteerUI/signup'
import createAccountB from './views/blindUI/createAccountB'

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  decideP: {
    screen: decide,
  },
  blindHomePageP:{
    screen: blindHomePage,
  },
  volunteerHomePageP:{
    screen: volunteerHomePage,
  },
  loginP:{
    screen: login,
  },
  signupP:{
    screen: signup,
  },
  createAccountBP:{
    screen: createAccountB,
  },
  CarrencyP:{
    screen: Carrency
  }
});

export default createAppContainer(AppNavigator);