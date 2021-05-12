import React,{ useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

function Signup({ navigation }) {

    const [userName , setUserName] = useState('')
    const [Mobil , setMobile] = useState('')
    const [Password , setPassword] = useState('')
    const [CPassword , setCPassword] = useState('')

    const Submit = () =>{
        navigation.navigate('Terms')
    }
    return (
        <ScrollView>
            <LinearGradient colors={['#BFAEC9', '#ADEEE6']} style={{
                flex: 1,
                paddingHorizontal: 46,
                paddingVertical: 46,
                flexDirection: "column"
            }}>
                {/* <ScrollView> */}
                <View style={{ width: 148, height: 52 }}>
                    <Text style={{ fontSize: 42, color: "#404642" }}>Sign Up</Text>
                </View>

                <View style={{ flexDirection: 'row', marginVertical: 48, paddingHorizontal: 80 }}>
                    <View style={styles.stepNumber1}>
                        <Text style={{ color: '#fff' }}>1</Text>
                    </View>

                    <Image source={require('../assets/Line-3.png')} style={{ marginTop: 20, marginHorizontal: 10 }} />

                    <View style={styles.stepNumber2}>
                        <Text style={{ color: '#3CCDB9' }}>2</Text>
                    </View>
                </View>

                <View style={{ height: 24, marginTop: 53, paddingLeft: 20 }}>
                    <Text style={{ fontSize: 20 }}>Enter Account Details</Text>
                </View>

                <View style={{ width: 270, height: 270, marginTop: 30 }}>
                    <View style={{ width: 270, height: 45, paddingLeft: 20 }}>
                        <Text style={{ fontSize: 13 }} >User Name</Text>
                        <TextInput style={ styles.Input } onChangeText={(text)=>setUserName(text)}/>
                    </View>
                    <View style={ styles.InputView }>
                        <Text style={{ fontSize: 13 }} >Mobile Number</Text>
                        <TextInput style={styles.Input} onChangeText={(text)=>setMobile(text)}/>
                    </View>
                    <View style={ styles.InputView }>
                        <Text style={{ fontSize: 13 }}>Password</Text>
                        <TextInput style={styles.Input}  secureTextEntry={true} onChangeText={(text)=>setPassword(text)} />
                    </View>
                    <View style={ styles.InputView }>
                        <Text style={{ fontSize: 13 }}>Retype Password</Text>
                        <TextInput style={styles.Input} secureTextEntry={true} onChangeText={(text)=>setCPassword(text)}/>
                    </View>
                </View>

                <View>
                    <View style={{ marginTop: 128, paddingVertical: 20, paddingLeft: 35 }}>
                        <TouchableOpacity style={styles.NxtBtn} onPress={Submit}>
                            <Text style={styles.BtnText}>Next</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* </ScrollView> */}
            </LinearGradient>
        </ScrollView>
    )
}

export default Signup

const styles = StyleSheet.create({
    stepNumber1: {
        width: 36,
        height: 36,
        backgroundColor: '#3CCDB9',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    stepNumber2: {
        width: 36,
        height: 36,
        backgroundColor: '#ffff',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Input: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },
    NxtBtn: {
        backgroundColor: '#731D74',
        borderRadius: 24,
        paddingVertical: 10,
        paddingHorizontal: 18,
        width: 123,
        height: 40,
    },
    BtnText: {
        fontSize: 15,
        color: "white",
        alignSelf: "center",
    },
    InputView:{
        width: 270, 
        height: 45, 
        paddingLeft: 20, 
        marginTop: 40,
    }
})