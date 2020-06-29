import React, { Component } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    TextInput,
    View,
    Text,
    ImageBackground,
    TouchableHighlight,
    Button, FlatList,
} from 'react-native';
import {Actions} from 'react-native-router-flux'
import UserInform from './userInformation.json'
export default class Login extends Component {
    render() {
        return (
            <ImageBackground
            source={require('../images/useground.jpg')}
                style={styles.container}>
                <View style={styles.inputBox}>
                    <TextInput
                        style={styles.input}
                        underlineColorAndroid={'transparent'}
                        placeholderTextColor={'#CECECE' }
                        placeholder={'请输入用户名'}
                    >{UserInform.User[0].name}</TextInput>
                </View>
                <View
                    style={styles.inputBox}>
                    <TextInput
                        style={styles.input}
                        underlineColorAndroid={'transparent'}
                        secureTextEntry={true}
                        placeholderTextColor={'#CECECE'}
                        placeholder={'请输入密码'}
                    >{UserInform.User[0].password}</TextInput>
                </View>
                 <View style={styles.RLine}>
                 <Text style={styles.Line}>__________________________________________</Text>
                  </View>
                  < TouchableOpacity underlayColor='transparent'  style={styles.button} onPress={this.goHome}>
                    <Text style={styles.btText}>登录</Text>
                </ TouchableOpacity>
                <TouchableHighlight style={styles.button} >
                    <Text style={styles.btText}>注册</Text>
                </TouchableHighlight>
                <View style={styles.forgetView}>
                <Text style={styles.forgetBox}>忘记密码！</Text>
                </View>
            </ImageBackground>
        );
    }
    goHome=()=>{
        Actions.app()
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: 200,
        height: 45,
        fontSize: 20,
        color: '#000000',
    },
    inputBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 280,
        height: 50,
        borderRadius: 15,
        backgroundColor: '#F6F3FE',
        marginBottom: 15,
    },
    button: {
        height: 50,
        width: 280,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: '#1DBAF1',
        marginTop: 20,
    },
    btText: {
        color: '#fff',
        fontSize: 25,
       fontWeight:'bold',
    },
    forgetView:{
       flexDirection: 'row',
       height:45,
       marginTop: 10,
       paddingLeft:10,
       alignItems:'flex-end',
       justifyContent:'center',
   },

   forgetBox:{
     fontSize:18,
     color:'#ffffff',
   },
   RLine:{
    marginTop:0,
    height:1,
   marginBottom:1,

   },
   Line:{
     color:'#fff',

   }

});
