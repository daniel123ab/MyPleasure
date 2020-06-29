import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Image,
  StatusBar
  } from 'react-native';
  let totalWidth = Dimensions.get('window').width;
  let totalHeight = Dimensions.get('window').height;
  let textSize = totalWidth / 18;
  export default class DiaryList extends Component{
  render(){
    return(
    <View style={styles.container}>
     <ImageBackground
        source={require('./images2/ground1.jpeg')}
                        style={styles.container}>
           <StatusBar hidden={true}/>
            <View style={styles.firstRow}>

            <Text style={styles.returnButton}></Text>

           </View>
           <View style={styles.secondRow}>
           <Text style={styles.TitleText}>活着——余华</Text>
           </View>
           <View style={styles.thirdRow}>
           <Text  numberOfLines={18}
                 ellipsizeMode = 'tail'
            style={styles.content}>
             &emsp;&emsp;这是一个历尽世间沧桑和磨难老人的人生感言，是一幕演绎人生苦难经历的戏剧。
            小说的叙述者“我”在年轻时获得了一个游手好闲的职业——去乡间收集民间歌谣。
            在夏天刚刚来到的季节，遇到那位名叫福贵的老人，听他讲述了自己坎坷的人生经历：
             地主少爷福贵嗜赌成性，终于赌光了家业一贫如洗，穷困之中福贵因母亲生病前去求医，
             没想到半路上被国民党部队抓了壮丁，后被解放军所俘虏，回到家乡他才知道母亲已经过世，
             妻子家珍含辛茹苦带大了一双儿女，但女儿不幸变成了哑巴。
             真正的悲剧从此才开始渐次上演。家珍因患有软骨病而干不了重活；
             儿子因与县长夫人血型相同，为救县长夫人抽血过多而亡；
             女儿凤霞与队长介绍的城里的偏头二喜喜结良缘，产下一男婴后，因大出血死在手术台上；
             而凤霞死后三个月家珍也相继去世；二喜是搬运工，因吊车出了差错，被两排水泥板夹死；
             外孙苦根便随福贵回到乡下，生活十分艰难，就连豆子都很难吃上，福贵心疼便给苦根煮豆吃，
             不料苦根却因吃豆子撑死……生命里难得的温情将被一次次死亡撕扯得粉碎，
             只剩得老了的福贵伴随着一头老牛在阳光下回忆。
           </Text>
           </View>
            <View style={styles.firstRows}>
            </View>
        </ImageBackground>
      </View>

   );
  }
}
 const styles=StyleSheet.create({
    container: {
    top:0,
    left:0,
    flex: 1,
    flexDirection:'column',
    justifyContent: 'space-around',
    alignItems: 'center',
},
//   firstRow: {
//    height:35,
//    flexDirection: 'row',
//    width:totalWidth,
//    justifyContent: 'flex-start',
////    margin:5,
////    marginTop:5,
//     top:0,
//     left:0,
//    backgroundColor:'#fff',
//  },
  firstRows: {
      height:40,
      flexDirection: 'row',
      width:totalWidth,
      justifyContent: 'flex-start',
//      margin:5,
//      marginTop:5,
      bottom:0,
      left:0,
      backgroundColor:'#fff',
    },
   secondRow:{
       height:50,
       flexDirection: 'row',
       width:totalWidth,
       justifyContent: 'center',
       alignItems:'center',
       marginBottom:2,
   },
//  returnButton: {
//   height:35 ,
//   backgroundColor: '#FFC700',
//   width:textSize*5,
//   borderRadius: 10,
//   textAlign:'center',
//   fontSize: textSize,
//   fontWeight:'bold',
//   color:'#fff',
//   marginLeft:5,
////   left:5
//
//   },
  TitleText: {
   height:50 ,
   width: textSize*10,
   paddingTop: 8,
   paddingBottom: 2,
   fontSize: 20,
   fontWeight:'bold',
   textAlign:'center',
   textShadowOffset:{width:3, height:5},
   textShadowColor:'red',
   textDecorationLine:'underline'
   },
   thirdRow:{
        width:totalWidth-5,
        height:totalHeight-120,
//        backgroundColor:'#FF5D33',
        justifyContent: 'center',
        alignItems:'center',
   },
   content:{
    width:totalWidth-10,
   height:totalHeight-125,
    fontSize:20,
     letterSpacing:4,
 backgroundColor:'transparent',
 textDecorationLine:'underline'

   }


 });
