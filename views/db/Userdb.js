import React from 'react';
import {AsyncStorage} from 'react-native';

export const saveUserdata = async(loginData)=>{
    await AsyncStorage.setItem('login',JSON.stringify(loginData));
}

export const retrieveData = async()=>{
    const loginData = await AsyncStorage.getItem('login')
    const dataToJson = JSON.parse(loginData)
    return dataToJson
}