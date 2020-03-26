import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { createAppContainer, } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import settings from './volunteerSettings'


export class volunteerHomePage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            token:this.props.navigation.state.params.token || true,
            name:this.props.navigation.state.params.name || true,
            calls:this.props.navigation.state.params.calls ,
            rate:this.props.navigation.state.params.rate,
            call: 'Enable'
        }
    }
    // async componentDidMount() {
    //     console.log(this.state.calls)
    //     console.log(this.state.rate)
    //     console.log(this.state.token)
    //       }
    render(){
        return(
            <View style={styles.containar}>
                <View style={styles.topContainer}>

                </View>
                <View style={styles.info}>
                    <Text style={styles.name}>Hello {this.state.name}</Text>
                </View>
                <View style={styles.statestic}>
                    <Text style={styles.statesticText}>statestic</Text>
                </View>
                <View style={styles.settings}>
                    <View style={styles.settingsBox}>
                        <View style={styles.topText}><Text style={styles.text}> calls received</Text></View>
                        <View style={styles.buttomText}><Text style={styles.text}>{this.state.calls}</Text></View>
                    </View>
                    <View style={styles.settingsBox}>
                        <View style={styles.topText}><Text style={styles.text}>Rating</Text></View>
                        <View style={styles.buttomText}><Text style={styles.text}>{this.state.rate}</Text></View>
                    </View>
                    <View style={styles.settingsBox}>
                        <View style={styles.topText}><Text style={styles.text}> calls</Text></View>
                        <View style={this.state.call === 'Enable'? styles.callsEnabel : styles.callsDisabel}><Text style={styles.text}>{this.state.call}</Text></View>
                    </View>
                    <View style={styles.settingsBox}>
                        <View style={styles.topText}><Text style={styles.text}>active volunteers</Text></View>
                        <View style={styles.buttomText}><Text style={styles.text}>0</Text></View>
                    </View>
                </View>
            </View>
        )
    }
}



const TabNavigator = createBottomTabNavigator({
    Home: volunteerHomePage,
    Settings:{
        screen:settings,
    navigationOptions: {
        tabBarLabel: "Settings",
        tabBarIcon: ({ tintColor }) => {
            <Ionicons name="md-checkmark-circle" size={32} color="green" />

          
        }
      }
    }
  });
  
  export default createAppContainer(TabNavigator);




const styles = StyleSheet.create({
    containar:{
        flex:1,
        justifyContent:'space-around',
        backgroundColor:'#D2EDFC',
        padding:0
    },
    statestic:{
        height:"20%",
        width:'80%',
        backgroundColor:'white',
        margin:"10%",
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#3d3d3d',
        borderWidth:1,
        marginTop:0
    },
    settingsBox:{
        width:"46%",
        height:"46%",
        justifyContent:'center',
        alignItems:'center',
        margin:'2%',
        //paddingBottom:2
        //flexDirection:"row"
    },
    settingsBoxRight:{
        width:"46%",
        height:"50%",
        borderColor:"black",
        borderColor:'#3d3d3d',
        borderLeftWidth:1,
        justifyContent:'center',
        alignItems:'center',
        borderBottomWidth:1,
        margin:'2%'
        //flexDirection:"row"
    },
    settings:{
        flexDirection:'row',
        flexWrap:'wrap',
        width:"100%",
        height:'50%',
        //padding:"2%",
        justifyContent:'space-between',
        //marginTop:'-5%'
        //backgroundColor:'black',
        padding:'1%'
    },
    info:{
        height:"10%",
        width:"100%",
        justifyContent:'center',
        alignItems:'center',
        marginBottom:'-5%',
        marginTop:'-5%',
        
        //backgroundColor:'black'
    },
    name:{
        fontSize:50,
        color:'#35363D',
        
    },
    topText:{
        
        width:'100%',
        height:'70%',
        borderBottomWidth:2,
        borderLeftColor:'black',
        alignItems:"center",
        justifyContent:'center',
        borderWidth:2,
        borderColor:'black',
        borderTopEndRadius:20,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        borderTopStartRadius:20,
        borderBottomWidth:0
        //backgroundColor:'#3E91FF'
    },
    buttomText:{
        height:'30%',
        width:'100%',
        alignItems:"center",
        justifyContent:'center',
        backgroundColor:'#3E91FF',
        borderWidth:2,
        borderColor:'black',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        borderBottomEndRadius:20,
        borderBottomStartRadius:20,
        
    },
    text:{
        fontSize:30,
        color:'#35363D',
    },
    statesticText:{
        fontSize:50,
    },
    callsEnabel:{
        height:'30%',
        width:'100%',
        alignItems:"center",
        justifyContent:'center',
        backgroundColor:'#00ff00',
        borderWidth:2,
        borderColor:'black',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        borderBottomEndRadius:20,
        borderBottomStartRadius:20,
    },
    callsDisabel:{
        height:'30%',
        width:'100%',
        alignItems:"center",
        justifyContent:'center',
        backgroundColor:'#ff0000',
        borderWidth:2,
        borderColor:'black',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        borderBottomEndRadius:20,
        borderBottomStartRadius:20,
    },
    topContainer:{
        height:'25%',
        width:'100%',
        position:"absolute",
        backgroundColor:'#3E91FF',
        top:0
    }
})