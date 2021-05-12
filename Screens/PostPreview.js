import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import Preview from '../Components/PostPreview'
function PostPreview({ navigation }) {
    return (
        <LinearGradient colors={['#BFAEC9', '#ADEEE6']} style={{
            flex: 1,
            paddingVertical: 34,
            flexDirection: "column"
        }}>
            <View style={{ flexDirection: 'row', height: 55 }}>
                <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                    <Image source={require('../assets/Group-41.png')} style={{ marginTop:20,height: 24, width: 24, borderRadius: 50, marginLeft: 20 }} />
                </TouchableOpacity>
                <View style={{ flex: 2, justifyContent: 'center', paddingHorizontal: 70 }}>
                    <Text style={{ fontSize: 35,fontWeight:'bold' }}>
                        KCSPR</Text>
                </View>
            </View>
                <View style={{marginVertical:50,alignItems:'center'}}>
                    <Text style={{ fontSize: 25,fontWeight:'bold' }}>YOUR POST</Text>
                </View>

                <View style={{marginHorizontal:30}}>
                    <Preview/>
                </View>

                <View style={{marginTop:88, paddingHorizontal: 58,}}>
                    <TouchableOpacity style={{
                        // elevation: 8,
                        backgroundColor: '#731D74',
                        borderRadius: 24,
                        paddingVertical: 6,
                        paddingHorizontal: 18,
                        borderWidth:2,
                        borderColor:'#731D74'
                    }}  onPress={()=>navigation.navigate('Home')}>
                        <Text style={{
                            fontSize:15,
                            color:"#fff",
                            alignSelf: "center",
                            fontWeight:'bold'
                            }} >Post Now</Text>
                    </TouchableOpacity>
                </View>
        </LinearGradient>
    )
}

export default PostPreview
