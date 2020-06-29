import React, {Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  Text,
    TouchableHighlight,
  TouchableOpacity,
  Dimensions,

} from 'react-native';
 let totalWidth = Dimensions.get('window').width;
  let totalHeight = Dimensions.get('window').height;
import Swiper from 'react-native-swiper'
import {Actions} from 'react-native-router-flux'
export default class Book extends Component {
  render() {
    return (
      <View style={styles.flex}>
       <Swiper style={styles.wrapper}  autoplay autoplayTimeout={1.5}>
              <View style={styles.slide}>
                <Image resizeMode='stretch' style={styles.image} source={require('./images2/book2.jpg')}/>
              </View>
              <View style={styles.slide}>
                <Image  resizeMode='stretch' style={styles.image} source={require('./images2/book2.jpg')}/>
              </View>
              <View style={styles.slide}>
               <Image  resizeMode='stretch' style={styles.image} source={require('./images2/book3.jpg')}/>
              </View>
            </Swiper>
             <View style={styles.ShareBook}>
            <Text style={styles.HotBook}>畅享书籍</Text>
            </View>
        <View style={styles.container}>
        <TouchableHighlight underlayColor='#fff'   onPress={this.goReadBook}>
          <View style={styles.item}><Image source={require('./images2/choose1.jpg')} style={{width:113,height:143}}/></View>
        </TouchableHighlight>
            <TouchableHighlight underlayColor='#fff'   onPress={this.goReadBook}>
          <View style={styles.item}><Image source={require('./images2/choose2.jpg')} style={{width:113,height:143}}/></View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor='#fff'   onPress={this.goReadBook}>
          <View style={styles.item}><Image source={require('./images2/choose3.jpg')} style={{width:113,height:143}}/></View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor='#fff'   onPress={this.goReadBook}>
          <View style={styles.item}><Image source={require('./images2/choose4.jpg')} style={{width:113,height:143}}/></View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor='#fff'   onPress={this.goReadBook}>
          <View style={styles.item}><Image source={require('./images2/choose5.jpg')} style={{width:113,height:143}}/></View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor='#fff'   onPress={this.goReadBook}>
          <View style={styles.item}><Image source={require('./images2/choose6.jpg')} style={{width:113,height:143}}/></View>
            </TouchableHighlight>
       </View>
      </View>
    );
  }
    goReadBook=()=>{
        Actions.readBook()
    }
 }
const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor:'#67C1FF',
  },
  wrapper:{
    backgroundColor: '#67C1FF',
     height:300,
  },
  slide: {
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: 'transparent',
      height:300,
   },
  image: {


            height:300,
            backgroundColor: 'transparent'
   },
  container: {
    backgroundColor: '#67C1FF',
    flexDirection: 'row',   // View组件默认为纵向布局，这个改为横向布局
    flexWrap: 'wrap',       // 宽度不足，可以换行
    justifyContent: 'space-between', // 等比例间距排列
    borderRadius: 1, // 设置圆角
    padding: 25,
//marginTop:15,
  },
  item: {
    width: 115,
    height: 145,
//  backgroundColor: '#135C7D',
    borderColor: '#135C7D',
    borderTopWidth: 3,
    borderRightWidth:3,
    marginBottom: 10,
    justifyContent:'center',
    alignItems:'center'
  },
   ShareBook:{
      height:50,
      width:'100%',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#304F7B',
//      marginTop:30,
      borderColor: '#fff',
      borderBottomWidth: 5,
      borderTopWidth:5,

   },
   HotBook:{
      color:'#fff',
      fontSize:25,
      fontWeight:'bold',
   }
});


