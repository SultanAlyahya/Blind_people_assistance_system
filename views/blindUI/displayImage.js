import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image} from 'react-native';

export default class image extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            image: this.props.navigation.state.params.imagePath || 'yes'
        };
      }
    render(){
        return(
            <View>
         <Image 
         style={{width: '50%', height: '50%'}}
         source={{uri:(this.props.navigation.state.params.imagePath).replace("file://","")}} />
         <TouchableOpacity onPress={()=> console.log(this.state.image)}>
         <Text>click</Text>
         </TouchableOpacity>
         </View>
        )
    }
}