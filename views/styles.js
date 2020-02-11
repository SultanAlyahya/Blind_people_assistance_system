import React from 'react';
import {StyleSheet} from 'react-native';

const color1= '#441785'
const color2= '#B078FF'
const color3= '#842BFF'
const color4= '#4383CC'
const color5= '#441785'
const color6= '#53A4FF'

export default StyleSheet.create({
    blinde:{
        height:"50%",
        width:"100%",
        backgroundColor:color4,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
    },
    volunteer:{
        height:"48%",
        width:"100%",
        backgroundColor:color6,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
        fontSize:50,
    },
    container:{
        flex:1,
        padding:"2%",
        flex:1,
        justifyContent:"space-around",
        backgroundColor:'#B8B7B1',
    }
})