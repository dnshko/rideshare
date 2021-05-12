import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput ,ScrollView} from 'react-native';

function Post() {
    return (
        <View style={{width:315,backgroundColor:'white',borderRadius:20,borderWidth:1,borderColor:'#3CCDB9'}}>
            {/* <Image/> */}
            <View style={{flexDirection:'row'}}>
                <Image source={require('../assets/Rebrand-KCSPR.png')} style={{ height: 50, width: 50, borderRadius: 50,marginLeft:5 }} />
                    <Text style={{fontSize:15,fontWeight:'bold',marginHorizontal:10,marginTop:10}}>Name </Text>
                    <Image source={require('../assets/Group-1945.png')} style={{marginLeft:165,marginTop:9}}/>
            </View>
            <View style={{paddingLeft:65,width:246}}>
                <Text style={{fontSize:7}}>Toronto sector 12 to downtown, Toronto plaza, Toronto sector 12 to downtown, Toronto plaza</Text>
            </View>

            <View style={{flexDirection:'row',justifyContent:'space-between',width:256,paddingLeft:65,marginTop:10}}>
                <View style={{width:70,height:15,borderWidth:2,borderColor:'#3CCDB9',borderRadius:5,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:8,fontWeight:'bold'}}>From Location</Text>
                </View>
                <Text style={{fontSize:8}}>To</Text>
                <View style={{width:70,height:15,borderWidth:2,borderColor:'#3CCDB9',borderRadius:5,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:8,fontWeight:'bold'}}>To Location</Text>
                </View>
            </View>

            <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:45,width:210,marginTop:10}}>

                <View>
                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../assets/Group-11.png')}/>
                        <Text style={{fontSize:10}}>15:24</Text>
                    </View>
                    <View>
                        <Text style={{fontSize:7}}>Estimated Time</Text>
                    </View>
                </View>

                <View>
                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../assets/Child-Seat.png')}/>
                        <Text style={{fontSize:10}}>1</Text>
                    </View>
                    <View>
                        <Text style={{fontSize:7}}>Child Seat</Text>
                    </View>
                </View>

                <View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{backgroundColor:'#3CCDB9',width:15,height:15,borderRadius:50,alignItems:'center',justifyContent:'center'}}>
                        <Image source={require('../assets/people_outline.png')}/>
                        </View>
                        <Text style={{fontSize:10}}>2</Text>
                    </View>
                    <View>
                        <Text style={{fontSize:7}}>Persons</Text>
                    </View>
                </View>

            </View>

            <View style={{marginVertical:10,alignItems:'center'}}>
                    <TouchableOpacity style={{
                        backgroundColor: '#3CCDB9',
                        borderRadius: 24,
                        width:121,
                        height:15,
                        paddingVertical:3,
                        paddingHorizontal:50
                        // paddingRight:50,
                    }}>
                        <Text style={{
                            fontSize:8,
                            color:"white",
                            alignSelf: "center",
                            }}>Call</Text>
                    </TouchableOpacity>
                </View>
        </View>
    )
}

export default Post
