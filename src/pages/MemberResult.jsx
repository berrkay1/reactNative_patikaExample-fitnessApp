import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MemberResult = ({route}) => {

    const {user} = route.params;
    
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>Üye Adı : {user.userName}</Text>
      <Text style={styles.label}>Üye Soyadı : {user.userSoyAd}</Text>
      <Text style={styles.label}>Üye Yaş : {user.userYas}</Text>
      <Text style={styles.label}>Üye E-posta : {user.userMail}</Text>
      <Text style={styles.label}>Üye Memleketi : {user.userMemleketi}</Text>
    </SafeAreaView>
  )
}

export default MemberResult

const styles = StyleSheet.create({
    container:{
        marginTop:50,
        margin:10
    },
    label:{
        fontSize:20,
        fontWeight:'bold',
        margin:5
    }
})