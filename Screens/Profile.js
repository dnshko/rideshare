import React,{ useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput,ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import DocumentPicker from 'react-native-document-picker';

function Profile({navigation}) {

    const [first_name, setfirst_name] = useState('')
    const [last_name, setlast_name] = useState('')
    const [mobile, setmobile] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')
    const [profile_pic, setprofile_pic] = useState(null)
    const [ img_url,setimage_url] = useState('')


    const selectfile = async () =>{
        try {
            const res = await DocumentPicker.pick({
              type: [DocumentPicker.types.images],
            });
            console.log('res : ' + JSON.stringify(res));
            setprofile_pic(res);
            const img_url = URL.createObjectURL(res)
            setimage_url(img_url)
          } catch (err) {
            setprofile_pic(null);
            if (DocumentPicker.isCancel(err)) {
              alert('Canceled');
            } else {
              alert('Unknown Error: ' + JSON.stringify(err));
              throw err;
            }
        }
    }

    const Register = () =>{
        navigation.navigate('Home')
    }

    return (
        <ScrollView>
        <LinearGradient colors={['#BFAEC9', '#ADEEE6']} style={{
            flex: 1,
            paddingVertical: 34,
            flexDirection: "column"
        }}>
            <View style={{ height: 55, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 30 }}>
                    Profile
                </Text>
            </View>

            <TouchableOpacity 
                style={{ height: 50, alignItems: 'center', marginTop: 34 }}
                onPress={selectfile}>
                <Image 
                    source={profile_pic!== null ?{uri:profile_pic.uri}:''} style={{ height: 50, width: 50, borderRadius: 50 }} />
            </TouchableOpacity>
            <View style={{ height: 50, alignItems: 'center', marginTop: 7 }}>
                <Text>+1 475-874-0000</Text>
            </View>

            <View style={{ width: 270, height: 255, paddingLeft: 50 }}>
                <View style={{ flexDirection: 'row' }}>
                    
                    <View style={{ width: 130, height: 45 }}>
                        <Text style={styles.InputText}>First Name</Text>
                        <TextInput style={ styles.Input } onChangeText={(text) => setfirst_name(text)}/>
                    </View>

                    <View style={{ width: 140, height: 45, paddingLeft: 20 }}>
                        <Text style={{ fontSize: 13,color:'#2F5E58' }}>Last Name</Text>
                        <TextInput style={ styles.Input } onChangeText={(text) => setlast_name(text)} />
                    </View>

                </View>
                
                <View style={{ width: 270, height: 45, marginTop: 40 }}>
                    <Text style={{ fontSize: 13,color:'#2F5E58' }}>Mobile Number</Text>
                    <TextInput style={ styles.Input } onChangeText={(text) => setmobile(text)} />
                </View>
                
                <View style={{ width: 270, height: 45, marginTop: 40 }}>
                    <Text style={{ fontSize: 13,color:'#2F5E58' }}>Password</Text>
                    <TextInput style={ styles.Input } secureTextEntry={true} onChangeText={(text) => setpassword(text)} />
                </View>
                
                <View style={{ width: 270, height: 45, marginTop: 40 }}>
                    <Text style={{ fontSize: 13,color:'#2F5E58' }}>Retype Password</Text>
                    <TextInput style={ styles.Input } secureTextEntry={true} onChangeText={(text) => setcpassword(text)} />
                </View>
            
            </View>

            <View style={{marginTop:200,marginHorizontal:40}}>
                    <TouchableOpacity style={styles.Btn} onPress={Register}>
                        <Text style={styles.BtnTxt}>Done</Text>
                    </TouchableOpacity>
                </View>

        </LinearGradient>
        </ScrollView>
    )
}

export default Profile

const styles = StyleSheet.create({
  Input : {
    height: 40, 
    borderBottomWidth: 1,
    borderBottomColor: 'black' 
  },
  Btn:{
    backgroundColor: '#731D74',
    borderRadius: 24,
    paddingVertical: 10,
    paddingHorizontal: 18,
  },
  BtnTxt :{
    fontSize:15,
    color:"white",
    alignSelf: "center",
  },
  InputText:{
    fontSize: 13,
    color:'#2F5E58'
  }
})