import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput,ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

function CreatePost({navigation}) {
    return (
        <ScrollView>
        <LinearGradient  colors={['#BFAEC9', '#ADEEE6']} style={{
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
            <View style={{paddingVertical:30,alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:15,fontWeight:'bold'}}>CREATE/EDIT YOUR POST</Text>
            </View>

            <View style={{width:315,height:146,backgroundColor:'#fff',borderWidth:1,borderColor:'#731D74',borderRadius:10,marginHorizontal:20}}>
                <Text style={{paddingHorizontal:20,marginTop:20}}>Ride now from this to this place near CA hotel post office road, LA</Text>
            </View>

            <View style={{width:315,height:70,backgroundColor:'#fff',borderWidth:1,borderColor:'#731D74',borderRadius:10,flexDirection:'row',marginHorizontal:20,marginVertical:30}}>
                <View style={{paddingLeft:20,paddingVertical:10}}>
                    <View style={{marginTop:5}}>
                        <Image source={require('../assets/Ellipse-2.png')}/>
                    </View>
                    <View>
                        <Image style={{marginTop:5,marginLeft:2}} source={require('../assets/Line-6.png')}/>
                    </View>
                    <View>
                        <Image style={{marginTop:5}} source={require('../assets/Path-2942.png')}/>
                    </View>
                </View>

                <View style={{marginHorizontal:10}}>
                    <TextInput style={{borderBottomWidth:2,borderBottomColor:'#731D74',height:35,width:200}}/>
                    <TextInput style={{height:35}}/>
                </View>

                <View style={{flexDirection:'row',marginVertical:23,justifyContent:'space-between',width:50}}>
                    <Text>+</Text>
                    <Text style={{fontSize:7,marginTop:5}}>Add Stop</Text>
                </View>
            </View>

            <View style={{flexDirection:'row',justifyContent:'space-between',width:315,marginHorizontal:20}}>
                <View style={{width:90,height:30,flexDirection:'row',alignItems:'center',borderWidth:1,borderColor:'#731D74',borderRadius:10,backgroundColor:'#fff'}}>
                <Image source={require('../assets/Group-11.png')} style={{marginLeft:9}}/>
                <Text style={{fontSize:10,marginHorizontal:10}}>15 mins</Text>
                </View>

                <View style={{width:90,height:30,flexDirection:'row',alignItems:'center',borderWidth:1,borderColor:'#731D74',borderRadius:10,backgroundColor:'#fff'}}>
                <Image source={require('../assets/Group-10.png')} style={{marginLeft:9}}/>
                <Text style={{fontSize:10,marginHorizontal:10}}>Call</Text>
                </View>

                <View style={{width:90,height:30,flexDirection:'row',alignItems:'center',borderWidth:1,borderColor:'#731D74',borderRadius:10,backgroundColor:'#fff'}}>
                <View style={{marginLeft:9,backgroundColor:'#731D74',width:15,height:15,borderRadius:50,alignItems:'center',justifyContent:'center'}}>
                        <Image source={require('../assets/people_outline.png')}/>
                        </View>
                <Text style={{fontSize:10,marginHorizontal:10}}>Share</Text>
                </View>
            </View>

            <View style={{marginHorizontal:20,marginVertical:20}}>
                <Text style={{fontSize:15,fontWeight:'bold'}}>Ride Details</Text>
            </View>

            <View style={{borderWidth:1,width:310,height:90,backgroundColor:'#fff',borderRadius:10,marginHorizontal:20}}>

                <View style={{flexDirection:'row',width:250,marginLeft:30,justifyContent:'space-between',paddingVertical:10,borderBottomWidth:1}}>
                    <Text>Passenger</Text>
                    <View style={{flexDirection:'row'}}>
                        <View style={{width:20,alignItems:'center',justifyContent:'center',borderWidth:1}}>
                            <Text>-</Text>
                        </View>
                        <View style={{width:40,alignItems:'center',justifyContent:'center',borderWidth:1}}>
                            <Text>1</Text>
                        </View>
                        <View style={{width:20,alignItems:'center',justifyContent:'center',borderWidth:1}}>
                            <Text>+</Text>
                        </View>
                    </View>
                </View>

                <View style={{flexDirection:'row',width:250,marginLeft:30,justifyContent:'space-between',paddingVertical:10}}>
                    <Text>Child Seat</Text>
                    <View style={{flexDirection:'row'}}>
                        <View style={{width:20,alignItems:'center',justifyContent:'center',borderWidth:1}}>
                            <Text>-</Text>
                        </View>
                        <View style={{width:40,alignItems:'center',justifyContent:'center',borderWidth:1}}>
                            <Text>1</Text>
                        </View>
                        <View style={{width:20,alignItems:'center',justifyContent:'center',borderWidth:1}}>
                            <Text>+</Text>
                        </View>
                    </View>
                </View>

            </View>
            <View style={{marginTop:44, paddingHorizontal: 48}}>
                    <TouchableOpacity style={{
                        // elevation: 8,
                        backgroundColor: '#731D74',
                        borderRadius: 24,
                        paddingVertical: 6,
                        paddingHorizontal: 18,
                        borderWidth:2,
                        borderColor:'#731D74'
                    }}  onPress={()=>navigation.navigate('Preview')}>
                        <Text style={{
                            fontSize:15,
                            color:"#fff",
                            alignSelf: "center",
                            fontWeight:'bold'
                            }} >Continue</Text>
                    </TouchableOpacity>
                </View>
        </LinearGradient>
        </ScrollView>
    )
}

export default CreatePost
