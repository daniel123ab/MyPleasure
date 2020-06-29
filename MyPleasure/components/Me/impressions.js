import React, { Component } from 'react';
import {
    Dimensions,
    Image,
    TextInput,
     ImageBackground,
    StyleSheet,
     TouchableOpacity,
    Text,
    View,
} from 'react-native';
export const width = Dimensions.get('window').width;
//手机屏幕的高度
export const height = Dimensions.get('window').height;
export default class UserModify extends Component{
    render(){
        return(
            <View style={styles.container}>
            <ImageBackground
                         source={require('../../images/myperson.jpeg')}
                                         style={styles.container}>
            <View style={styles.InputBigView}>
                <View style={[styles.InputView,{height:45}]}>
                <TextInput  style={styles.input1}
                  underlineColorAndroid={'transparent'}
                 placeholderTextColor={'#000' } placeholder={'标题'}/>
                </View>
                <View style={[styles.InputView1,{height:45}]}>
                    <TextInput  style={styles.input1}  underlineColorAndroid={'transparent'}
                  placeholderTextColor={'#000' } placeholder={'choose 类别'}/>
                </View>
                <View style={[styles.InputView2,{height:340 }]}>
                    <TextInput  style={styles.input2}  underlineColorAndroid={'transparent'}
                     placeholderTextColor={'#000' } placeholder={'内容'}/>
                </View>

            </View>
            <View style={styles.smallButton}>
                <TouchableOpacity >
                <Text style={styles.text}>保 存</Text>
                </TouchableOpacity>
            </View>


           </ImageBackground>
        </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

        // justifyContent: 'space-around',
        alignItems:'center',



    },
    smallButton:{
        width:width * 0.42,
        height:60 ,
        marginTop:10,
        borderRadius: 15,
        backgroundColor: '#1CBAF1',
        alignItems: 'center',
        justifyContent: 'center'
    },

    InputBigView:{

        justifyContent: 'space-around',
        alignItems:'center',
        width:width,
        height:height * 0.75,
        // flex: 4
    },
    InputView:{
        flexDirection: 'row',
         justifyContent:"center",
        alignItems:"center",
        width:width*0.75,
        borderRadius:5,
//         height:80,
        borderColor:'transparent',
        borderWidth:2,
        backgroundColor:'#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
     InputView1:{
            flexDirection: 'row',
            marginTop:5,

            width:width*0.75,
            borderRadius:5,
    //         height:80,
            borderColor:'transparent',
            borderWidth:2,
            backgroundColor:'#fff',
            alignItems: 'center',
            justifyContent: 'center',


        },
     InputView2:{
            flexDirection: 'row',
             justifyContent:"center",
            alignItems:"center",
            width:width*0.75,
            borderRadius:5,
    //         height:80,
            borderColor:'transparent',
            borderWidth:2,
            backgroundColor:'#fff',
//            alignItems: 'center',
//            justifyContent: 'center'
        },
    input1:{
       fontSize:15,
       fontWeight:'bold',
    },
    input2:{
           fontSize:15,

        },
    text: {
         fontWeight:'bold',
        color: '#F6F3FE',
        fontSize: 25,

    }
})


