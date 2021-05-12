import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity,ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'


function LandingScrn({navigation}) {
    return (
      <ScrollView>
      <LinearGradient colors={['#46D5C7', '#6D337E']} style={styles.screen}>
      <View
      style={[styles.container, {
        flexDirection: "column",
        alignItems: "center"
      }]}
      >
       <View style={styles.LogoLayout}>
          <Image source={require('../assets/Rebrand-KCSPR.png')} style={{ width: 180, height: 180 }} />
        </View>
        <View style={styles.BtnLayout}>
          <TouchableOpacity style={styles.Btn1} onPress={()=>navigation.navigate('Profile')}>
            <Text
             style={styles.BtnTxt} >Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View  style={styles.BtnLayout}>
          <TouchableOpacity style={styles.Btn2} onPress={()=>navigation.navigate('Signin')}>
            <Text
            style={styles.BtnTxt}
          >Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
      </LinearGradient>
      </ScrollView>
    )
}

export default LandingScrn

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: "100%"
  },
  container: {
    flex: 1,
    padding: 20,
  },
    LogoLayout: {
      marginVertical:216,
      paddingHorizontal:91,
    },
    BtnLayout: {
      paddingHorizontal:30,
      marginVertical:20,
      height: 50,
      width: 310
    },
    Btn1:{
      elevation: 8,
      backgroundColor: "#42E4CE",
      borderWidth:2,
      borderColor:"white",
      borderRadius: 24,
      paddingVertical: 3,
      paddingHorizontal: 18,

      
    },
    Btn2:{
      backgroundColor: 'transparent',
      borderRadius: 24,
      paddingVertical: 3,
      paddingHorizontal: 18,
      borderWidth:2,
      borderColor:"white",
      marginBottom: 10
    },
    BtnTxt :{
      fontSize: 32,
      color: "#fff",
      alignSelf: "center",
      fontSize: 25
    }
  })