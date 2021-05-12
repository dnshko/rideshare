import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput ,ScrollView} from 'react-native';

function PostPreview() {
    return (
        <View>
            <View style={{height:138,width:315,backgroundColor:"#fff",borderWidth:1,borderColor:'#3CCDB9',borderRadius:20}}>
                <View style={{paddingHorizontal:12,paddingVertical:10}}>
                    <Text style={{fontSize:14}}>Ride now from this to this place near CA hotel post office road, LA</Text>
                </View>

                <View style={{flexDirection:'row',justifyContent:'space-between',width:300,paddingHorizontal:40}}>
                <View>
                    <Text>Passenger 1</Text>
                </View>
                <View>
                    <Text> Child Seat 2</Text>
                </View>
            </View>
            <View style={{alignItems:'center',marginTop:20}}>
                <Text style={{fontWeight:'bold',color:'#2F5E58'}}>Metro Station to KCSPR Office</Text>
            </View>
            </View>

            
        </View>
    )
}

export default PostPreview
