import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, TextInput, SafeAreaView, ScrollView, Clipboard, Picker, StatusBar, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native';

export default function App() {
  //file import
  const rule = require('./Json/rule.json')//element rules
  const styles = require('./Style/style.js')(StyleSheet)//style stuff

  //VAR
  const [startext, start] = useState("")//input
  const [endtext, end] = useState("")//output
  const [changetype, outtype] =  useState(true)//to element or from
  let elwords = ''//hold data for converting to
  let letterwords= ''//hold data for converting back

  //on text change {textinput}
  function textinput(text){
    start(text)
  }

  //btn start text outputing
  function outputtext(){
    if(changetype == true){
      end('')
      elwords = ''
      let w = startext.trim()//input
      let a = w.toLowerCase()
      let arr = a.split(' ')
      //break down of each word
      for(let x=0; x < arr.length; x++){
        //each word
        for(let q=0; q<arr[x].length; q++){
          let one = arr[x].slice(q,q +1)//one letter
          one_word(one)
        }
      }
    }else{
      //convert to words
      let arr = startext.split(',')
      end('')
      letterwords = ''
      for(let x = 0; x < arr.length; x++){
        change_back(arr[x])
      }
    } 
  }

  //change back to words
  function change_back(data){
    for(let x =0; x < rule.One_letter.length; x++){
      if(data == rule.One_letter[x].Element){
        letterwords += rule.One_letter[x].Letter+ ','
        end(letterwords)
      }
    }
  }

  //one letter item {Does work}
  function one_word(data){
    for(let x =0; x < rule.One_letter.length; x++){
      if(data == rule.One_letter[x].Letter){
        elwords += rule.One_letter[x].Element+ ','
        end(elwords)
      }
    }
  }

  //picker func
  function changeme(itemValue){
    outtype(itemValue)
  }

  //btn copy to phone clipboard
  function copy_text(){
    Clipboard.setString(endtext)
    Alert.alert('Copied', 'Text has been copied to clipboard')
  }

  return (
    <SafeAreaView>
      <LinearGradient colors={['#33ccff', '#ff33cc']} style={{width:'100%', height:'100%'}}>
      <ScrollView>
      <View style={{padding: 35, width:'100%'}}>
        <StatusBar barStyle='light-content' translucent={false} hidden={true} animated={true}/>
        <Text style={{fontSize: 36, color: 'white', alignSelf:'center', fontWeight: 'bold'}}>Element Speller</Text>
      </View>
      <View style={styles.container}>
      <KeyboardAvoidingView>
      <View style={styles.input}>
        <Text style={{padding:4, color:'white'}}>Text Input</Text>
        <TextInput
        multiline
        value={startext}
        style={{padding:5, color:'white',fontSize:15}}
        onChangeText={textinput}
        numberOfLines={2}
        placeholder='Text...'
        />
      </View>
      <View style={{padding: 5}}>
        <Picker selectedValue={changetype} onValueChange={changeme} style={{color:'white'}}>
          <Picker.Item label="To Element" value={true} />
          <Picker.Item label="From Element" value= {false} />
        </Picker>
      </View>
      <View style={styles.input}>
        <Text style={{padding:4, color:'white'}}>Elements</Text>
        <TextInput
        multiline
        value={endtext}
        style={{padding:5,color:'white',fontSize:15}}
        numberOfLines={2}
        placeholder='Text...'
        />
      </View>
      </KeyboardAvoidingView>
      <View style={styles.BtnRow}>
        <TouchableOpacity onPress={function(){
          end('')
          start('')
        }} style={styles.btn}>
          <Text style={{fontSize: 20, color: 'white', fontWeight: '400'}}>Clear</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={outputtext} style={styles.btn}>
          <Text style={{fontSize: 20, color: 'white', fontWeight: '400'}}>Convert</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={copy_text} style={styles.btn}>
          <Text style={{fontSize: 20, color: 'white', fontWeight: '400'}}>Copy</Text>
        </TouchableOpacity>
      </View>
    </View>
      </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

