import React, { Component } from 'react';
import {
    Image,
    Dimensions,
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableHighlight
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export const width = Dimensions.get('window').width;
//手机屏幕的高度
export const height = Dimensions.get('window').height;
export default class Me extends Component{
    render(){
     return(
     <View style={styles.container}>
     <ImageBackground
             source={require('../../images/myperson.jpeg')}
                             style={styles.container}>
         <TouchableHighlight  underlayColor='transparent' onPress={this.goMovieList}>
         <View style={{flexDirection:'row'}}>
             <Image source={require('../../images/个人设置.png')} style={{width:80,height:80,marginRight:20}}/>
             <View style={styles.textView}>
                 <Text style={styles.text}>个人信息</Text>
             </View>


         </View>
         </TouchableHighlight>

         <TouchableHighlight underlayColor='transparent' onPress={this.goDiary}>
             <View style={{flexDirection:'row'}}>
                 <Image source={require('../../images/日志.png')} style={{width:80,height:80,marginRight:20}}/>
                 <View style={styles.textView}>
                     <Text style={styles.text}>我的感想</Text>
                 </View>
             </View>
         </TouchableHighlight>

         <TouchableHighlight underlayColor='transparent' onPress={this.goShouCang}>
         <View style={{flexDirection:'row'}}>
             <Image source={require('../../images/消息中心.png')} style={{width:80,height:80,marginRight:20}}/>
             <View style={styles.textView}>
                 <Text style={styles.text}>我的收藏</Text>
             </View>
         </View>
         </TouchableHighlight>
         </ImageBackground>
     </View>
     );
    }
    goMovieList=()=>{
        Actions.UserModify()
    }
    goImpressions=()=>{
        Actions.impressions()
    }
    goDiary=()=>{
        Actions.diary()
    }
    goShouCang=()=>{
        Actions.ShouCang()
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:width,
        height:height,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems:'center',
        marginBottom:30,
//        marginTop: 30


    },
             box:{
             width:'33.33%',
             alignItems:'center',
             marginTop:80
         },
    textView:{
        justifyContent:"center",
        alignItems:"center",
        width:220,
        height:80,
        borderColor:'#3D96E5',
        borderWidth:2
    },
             text: {
            textAlign:'center',
             color: 'black',
             fontWeight:'bold',
             fontSize: 30,

         }
         })
