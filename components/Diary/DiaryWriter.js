import React, { Component } from 'react';
 import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
    Image,
    StatusBar, StyleSheet, ImageBackground,
} from 'react-native';
import {height, width} from '../Me/impressions';
  export default class DiaryWriter extends Component{
      constructor(props){
          super(props);
          this.diaryTitle=null;
          this.diaryBody=null;
          this.moodCode=0;
          this.state={
              moodText:'choose 类别'
          };
      }
     returnPressed(){
         Alert.alert(
             '请确认',
             '你确定要退回列表吗?',
             [
                 {text:'确认',onPress:this.props.returnPressed},
                 {text:'取消'}
             ]
         );
     }
     selectMood(){
         let tempString;
         if (this.moodCode===2) this.moodCode=1;
         else this.moodCode=this.moodCode+1;
         switch(this.moodCode){
            case 1:
                tempString='电影作品';
                break;
            case 2:
                tempString='文学作品';
                break;
         }
         this.setState(()=>{
             return{
                 moodText:tempString
             };
         });
     }
  render(){
    return(
        <View style = {styles.container}>
            <StatusBar hidden={true}/>
            <ImageBackground
                source={require('../../images/myperson.jpeg')}
                style={styles.container}>
            <View style={styles.InputBigView}>
                <View style={[styles.InputView,{height:45}]}>
                     <TextInput style={styles.input1}
                       placeholder={'写个标题吧！'}
                                underlineColorAndroid={'transparent'}
                                placeholderTextColor={'#000'}
                       onChangeText={(text)=>{this.diaryTitle=text}}/>
                </View>
            <View style={[styles.InputView1,{height:45}]}>
            <TouchableOpacity onPress={this.selectMood.bind(this)}>
                <Text style={styles.input1}  underlineColorAndroid={'transparent'}
                      placeholderTextColor={'#000' } placeholder={'choose 类别'}>
                    {this.state.moodText}
                </Text>
            </TouchableOpacity>
             </View>

        <TextInput style={[styles.InputView2, {height:340 }]}
            multiline={true}
            placeholder={'正文请在此输入！'}
            underlineColorAndroid={'transparent'}
            placeholderTextColor={'#000'}
            onChangeText={(text)=>this.diaryBody=text}/>
            </View>
            <View  style={styles.Buttons}>
            <TouchableOpacity onPress={()=>this.props.saveDiary(this.moodCode,
                this.diaryBody,this.diaryTitle)}>
                <View style={styles.smallButton}>
                <Text style={styles.text}>
                    保存
                </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.returnPressed.bind(this)}>
                <View style={styles.smallButton1}>
                <Text style={styles.text}>
                    返回
                </Text>
                </View>
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
        alignItems:'center',
        },
    Buttons:{
       flexDirection:'row',
       justifyContent: 'space-around',
       top:10,
    },
    smallButton:{
              width:width * 0.3,
              height:50 ,
              marginTop:10,
              borderRadius: 15,
              backgroundColor: '#1CBAF1',
              textAlign:'center',
              right:15,
              alignItems: 'center',
              justifyContent: 'center'
          },
           smallButton1:{
                  width:width * 0.3,
                  height:50 ,
                  marginTop:10,
                  left:15,
                  borderRadius: 15,
                  backgroundColor: '#1CBAF1',
                  textAlign:'center',
                  alignItems: 'center',
                  justifyContent: 'center'
              },
    InputBigView:{

        justifyContent: 'center',
        alignItems:'center',
        width:width,
        height:height * 0.75,
        top:25,
        // flex: 4
    },
    InputView:{
        flexDirection: 'row',
        justifyContent:"center",
        alignItems:"center",
        width:width*0.7,
        borderRadius:10,
//         height:80,
        borderColor:'transparent',
        borderWidth:2,
        backgroundColor:'#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    InputView1:{
        flexDirection: 'row',
        marginTop:0,

        width:width*0.5,
        borderRadius:10,
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
        borderRadius:10,
        //         height:80,
        borderColor:'transparent',
        borderWidth:2,
        backgroundColor:'#fff',
        fontSize:15,
        textAlign:'center',
    },
    input1:{
        fontSize:15,
        fontWeight:'bold',
        textAlign:'center',
    },
    text: {
        fontWeight:'bold',
        color: '#F6F3FE',
        fontSize: 25,

    }
})




