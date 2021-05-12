import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity ,ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import CheckBox from '@react-native-community/checkbox';

function TermsandConditions({navigation}) {
    return (
        <ScrollView>
        <LinearGradient colors={['#BFAEC9', '#ADEEE6']} style={{
            flex: 1,
            paddingHorizontal: 46,
            paddingVertical: 46,
            flexDirection: "column"
        }}>
            <View style={{ flexDirection: 'row', marginTop: 128, paddingHorizontal: 80 }}>
                <View style={{
                    width: 36,
                    height: 36,
                    backgroundColor: '#3CCDB9',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                }}>
                    <Text style={{ color: '#fff' }}>1</Text>
                </View>

                <Image source={require('../assets/Line-3.png')} style={{ marginTop: 20, marginHorizontal: 10 }} />

                <View style={{
                    width: 36,
                    height: 36,
                    backgroundColor: '#3CCDB9',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{ color: '#fff' }}>2</Text>
                </View>


            </View>
            <View style={{ height: 24, marginTop: 53}}>
                <Text style={{ fontSize: 20 }}>Terms of Service</Text>
            </View>
            
            <View style={{marginTop:30}}>
                <Text style={{marginTop:10}}>
                Legal agreements are only good if they can be enforced. 
                </Text>
                <Text style={{marginTop:10}}>
                To get your users to agree to be bound to your legal agreements, use the clickwrap method to obtain consent. Clickwrap is when you have a user check a box or at minimum click a button that is clearly labeled as showing that the user is agreeing by taking that action.
                </Text>
                <Text style={{marginTop:10}}>
                Here's a simple example of clickwrap in action. A user must click the checkbox next to a statement that says, "I accept and agree to the Terms of Use" before being able to continue interacting with the platform:
                </Text>
                <Text style={{marginTop:10}}>
                Legal agreements are only good if they can be enforced. 
                </Text >
                <Text style={{marginTop:10}}>
                To get your users to agree to be bound to your legal agreements, use the clickwrap method to obtain consent. Clickwrap is when you have a user check a box or at minimum click a button that is clearly labeled as showing that the user is agreeing by taking that action.
                </Text>
                <Text style={{marginTop:10}}>
                Here's a simple example of clickwrap in action. A user must click the checkbox next to a statement that says, "I accept and agree to the Terms of Use" before being able to continue interacting with the platform:
                </Text>
            </View>
            <View style={{
                flexDirection: 'row',
                marginTop: 20,
            }}>
                <CheckBox style={{ marginRight:10,width: 20, height: 20, }} value='' />
                <Text style={{ marginLeft:8, fontSize: 13 }}>I accept the terms of service and privacy policy</Text>
            </View>

            <View style={{marginTop:10,paddingVertical:20}}>
                    <TouchableOpacity style={{
                        elevation: 8,
                        backgroundColor: '#731D74',
                        borderRadius: 24,
                        paddingVertical: 10,
                        paddingHorizontal: 18,
                        width:123,
                        height:40,
                        // paddingRight:50,
                    }} onPress={()=>navigation.navigate('MobVerify')}>
                        <Text style={{
                            fontSize:15,
                            color:"white",
                            alignSelf: "center",
                            }}>Next</Text>
                    </TouchableOpacity>
                </View>
        </LinearGradient>
        </ScrollView>
    )
}

export default TermsandConditions
