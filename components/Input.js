import React from 'react';
import { TextInput,StyleSheet } from 'react-native';

const Input=props=>{
    return (
        <TextInput style={{...styles.Input,...props.style}}/>
    )
}
const styles=StyleSheet.create({
    input:{
        height:30
    }
})
export default Input;