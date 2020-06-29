import React, { Component } from 'react';
import {
    Dimensions,
    Image,
    TextInput,
    StyleSheet,
    Text,
    View,
    ImageBackground,
     TouchableOpacity,
} from 'react-native';
export const width = Dimensions.get('window').width;
//手机屏幕的高度
export const height = Dimensions.get('window').height;
import UserInform from '../userInformation'
export default class UserModify extends Component{
    render(){


        return(
            <ImageBackground
                source={require('../../images/useground1.jpg')}
                style={styles.container}>
            <View style={styles.container}>
                <View style={styles.InputBigView}>
                    <View style={styles.InputView}>
                        <Image source={require('../../images/我的.png')} style={{width:50,height:50,marginRight:10,marginLeft:5,marginTop:5}}/>
                        <TextInput  style={{ fontWeight:'bold',fontSize: 20}} underlineColorAndroid={'transparent'}   placeholderTextColor={'#CECECE' } placeholder={'用户名'}>
                            {UserInform.User[0].name}
                        </TextInput>
                    </View>
                    <View style={styles.InputView}>
                        <Image source={require('../../images/加密.png')} style={{width:50,height:50,marginRight:10,marginLeft:5,marginTop:5}}/>
                        <TextInput  style={{ fontWeight:'bold',fontSize: 20}} underlineColorAndroid={'transparent'}  placeholderTextColor={'#CECECE' } placeholder={'密码'}>
                            {UserInform.User[0].password}
                        </TextInput>
                    </View>
                    <View style={styles.InputView}>
                        <Image source={require('../../images/电话.png')} style={{width:50,height:50,marginRight:10,marginLeft:5,marginTop:5}}/>
                        <TextInput style={{ fontWeight:'bold',fontSize: 20}}  underlineColorAndroid={'transparent'} placeholderTextColor={'#CECECE' } placeholder={'手机号'}>
                            {UserInform.User[0].phoneNumber}
                        </TextInput>
                    </View>
                    <View style={styles.InputView}>
                        <Image source={require('../../images/主页.png')} style={{width:50,height:50,marginRight:10,marginLeft:5,marginTop:5}}/>
                        <TextInput style={{ fontWeight:'bold',fontSize: 20}}  underlineColorAndroid={'transparent'} placeholderTextColor={'#CECECE' } placeholder={'邮箱'}>
                            {UserInform.User[0].email}
                        </TextInput>
                    </View>
                </View>
                 <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.btText}>保 存</Text>
                </View>
                </TouchableOpacity>
                {/*width:width * 0.35,height:60 ,marginTop:20,borderRadius: 4, backgroundColor: '#F54252', alignItems: 'center'*/}
                {/*,justifyContent: 'center'*/}


            </View>
            </ImageBackground>

        );

    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
       justifyContent: 'center',
        alignItems:'center',



    },
//    inputBox: {
        //        flexDirection: 'row',
        //        justifyContent: 'center',
        //        alignItems: 'center',
        //        width: 280,
        //        height: 50,
        //        borderRadius: 15,
        //        backgroundColor: '#F6F3FE',
        //        marginBottom: 15,
        //    },
    InputBigView:{
        justifyContent: 'space-around',
        alignItems:'center',
        width:width,
        height:height * 0.7
        // flex: 4
    },
    InputView:{
        flexDirection: 'row',
        borderRadius: 20,
        backgroundColor: '#F6F3FE',
//         justifyContent:"center",
         alignItems:"center",
        width:width*0.7,
        height:60,
        // borderColor:'black',
        // borderWidth:1
    },
    button: {
        height: 50,
        width: 220,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: '#1DBAF1',
        marginTop: 28,
    },
    btText: {
        color: '#fff',
        fontSize: 25,
        fontWeight:'bold',

    },
    text: {

        color: 'black',
        fontSize: 20,

    }
})


