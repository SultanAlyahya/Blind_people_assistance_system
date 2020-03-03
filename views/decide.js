import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import styles from './styles'

export default class decide extends React.Component{
    static navigationOptions = {
        //To hide the ActionBar/NavigationBar
        //headerShown: false
    };
    render(){
        return(
            <View style={styles.container}>
            
                <TouchableOpacity style={styles.blinde} onPress={()=> this.props.navigation.navigate('createAccountBP')}>
                    <Text style={styles.text}>كفيف</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.volunteer} onPress={()=> this.props.navigation.navigate('loginP')}>
                    <Text style={styles.text}>متطوع</Text>
                </TouchableOpacity>
            
            </View>
        )
    }
}

