import { View, Text, Image, StyleSheet, Dimensions, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import app from './../../assets/images/app.png'
import Colors from '../../assets/Shared/Colors'
import SignInWithOAuth from '../Components/SignInWithOAuth'


export default function Login() {
  return (
    <View style={{alignItems:'center',
        backgroundColor:Colors.LIGHT_GRAY}}>
      <Image source={app}
      style={styles.appImage}
      />
        <View style={{backgroundColor:Colors.white,
        padding:25,
        alignItems: 'center',
        marginTop:-50,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        }}>
            <Text style={styles.heading}>Bem-vindo ao MindCalm</Text>
            <Text style={styles.heading}>Aprenda sobre sua saúde mental</Text>
            <Text style={{textAlign:'center', marginTop:20,}}>Controle suas emoções com exercícios rápidos de respiração e muito mais.</Text>
            <SignInWithOAuth/>
        </View>
       
    </View>
  )
}


const styles = StyleSheet.create({
    appImage:{
        width: 300,
        height: 500,
        objectFit: 'cover',
        marginTop:50,
        borderRadius:20,
        borderWidth:6,
        borderColor:'#000'
    },
    heading:{
        fontSize:20,
        fontWeight: 'bold'
    }
})


