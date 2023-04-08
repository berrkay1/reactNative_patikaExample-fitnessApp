import { Alert, Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Input from '../components/Input'

const MemberSing = ({ navigation }) => {

  const [userName, setUserName] = useState(null)
  const [userSoyAd, setUserSoyAd] = useState(null)
  const [userYas, setUserYas] = useState(null)
  const [userMail, setUserMail] = useState(null)
  const [userMemleketi, setUserMemleketi] = useState(null)




  const handleSubmit = () => {

    let user = {
      userName,
      userSoyAd,
      userYas,
      userMail,
      userMemleketi
    }


    if (!userName || !userMail || !userMemleketi || !userSoyAd || !userYas) {
      Alert.alert('Lütfen boş alanları doldurun !')
    } else {
      navigation.navigate('MemberResult', {user})
    }




  }



  return (
    <SafeAreaView style={styles.container}>
      <Input label={'Üye Adı'} placeholder='Üye ismini girin' onChangeText={setUserName} />
      <Input label={'Üye Soyadı'} placeholder='Üye soyadını girin' onChangeText={setUserSoyAd} />
      <Input label={'Üye Yaşı'} placeholder='Üye yaşını girin' onChangeText={setUserYas} />
      <Input label={'Üyenin E-postası'} placeholder='Üyenin e-postasını girin' onChangeText={setUserMail} />
      <Input label={'Üye Oturduğu yer'} placeholder='Üyenin oturduğu yeri girin' onChangeText={setUserMemleketi} />
      <Button title='Kaydı Tamamla' onPress={handleSubmit} />
    </SafeAreaView>
  )
}

export default MemberSing

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    margin: 5
  }
})