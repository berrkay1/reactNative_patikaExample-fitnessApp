import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Input = ({ label,placeholder,onChangeText }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.input_container}>
                <TextInput placeholder={placeholder} onChangeText={onChangeText} />
            </View>
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    input_container:{
        borderWidth:1,
        margin:5,
        padding:10,
        borderRadius:5,
        borderColor:'#bdbdbd'
    },
    label:{
        fontSize:15,
        fontWeight:'bold',
        marginLeft:5
    }
})