import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar
  } from 'react-native';
 // let angryMood=require('./image/angry.jpg')//测试界面先临时获取这张图片
import MVC from './MCV';
import DataHandler from './DataHandler';
  export default class DiaryList extends Component{
      constructor(props){
          super(props);
          this.updataSearchKeyword=this.updataSearchKeyword.bind(this);
      }
      updataSearchKeyword(newText){
          this.props.searchKeyword(newText);
          //将用户输入的搜索关键字交给上层组件，由上层组件对日记列表进行处理，只显示日记
          //标题中包含关键字的日记
      }
  render(){
    return(
        <View style = {MVC.container}>
            <StatusBar hidden={true}/>
            <View style={MVC.firstRow}>
                <View style={{borderWidth:1}}>
                    <TextInput autoCapitalize="none"
                               placeholder='输入搜索关键字'
                               clearButtonMode="while-editing"
                               onChangeText={this.updataSearchKeyword}
                               style={MVC.searchBarTextInput}/>
             
            </View>
            <TouchableOpacity onPress={this.props.writeDiary}>
                <Text style={MVC.middleButton}>
                    写日记
                </Text>
            </TouchableOpacity>
        </View>
    <View style={MVC.diaryAbstractList}>
    <View style={MVC.secondRow}>
        <Image style={MVC.moodStyle}
           source={this.props.fakeListMood}/>
           
           <View style={MVC.subViewInReader}>
            <TouchableOpacity onPress={this.props.selectLististItem}>
               <Text style={MVC.textInReader}>

                  {this.props.fakeListTitle}
               </Text>
            </TouchableOpacity>
            <Text style={MVC.textInReader}>
                {this.props.fakeListTime}
            </Text>
            </View>
          </View>
      </View>
  </View>

   );
  }
}

