import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import currency from './views/blindUI/currency'
import decide from './views/decide'
import blindHomePage from './views/blindUI/blindHomePage'
import volunteerHomePage from './views/volunteerUI/volunteerHomePage'
import login from './views/volunteerUI/login'
import signup from './views/volunteerUI/signup'
import createAccountB from './views/blindUI/createAccountB'
import image from './views/blindUI/displayImage'
import voice from './views/blindUI/TextRecognition'
import object from './views/blindUI/ObjectRecognition'

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
  CurrencyP:{
    screen: currency
  },
  imageP:{
    screen: image
  },
  voiceP:{
    screen: voice
  },
  objectP:{
    screen: object
  },
});

export default createAppContainer(AppNavigator);