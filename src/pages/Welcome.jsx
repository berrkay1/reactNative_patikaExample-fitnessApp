import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Welcome = ({navigation}) => {

    const gotoMemberSing = () => {
        navigation.navigate('MemberSing')
    }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Kebap Fitness Salonu</Text>
      <Button title='Üye Kaydı Oluştur' onPress={gotoMemberSing} />
    </SafeAreaView>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        padding:10
    },
    title:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
        margin:10
    }
})