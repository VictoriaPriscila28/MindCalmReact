import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import Colors from '../../../assets/Shared/Colors';

export default function SearchBar({setSearchText}) {
  const [searchInput, setSearchInput] = useState();
  return (
    <View style={{marginTop:20}}>
      <View style={{
        display:'flex',
        flexDirection:'row',
        gap:5,
        alignItems:'center',
        borderWidth:0.6,
        borderRadius:10,
        borderColor: Colors.VERDE,
        padding:7
      }}>
        <AntDesign name="search1" size={17} color="#45703B" style={{marginLeft:8}}/>
        <TextInput 
          placeholder='Buscar Clinícas'
          onChangeText={(value)=> setSearchInput(value)}
          onSubmitEditing={()=> setSearchText(searchInput)}
          style={{width:'100%', fontWeight:'appfont'}}/>
      </View>
    </View>
  )
}