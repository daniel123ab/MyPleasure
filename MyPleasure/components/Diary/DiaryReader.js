import React, { Component } from 'react';
 import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    StatusBar, StyleSheet, Dimensions, TouchableNativeFeedback,
} from 'react-native';
let widthOfAll = Dimensions.get('window').width;
  import MVC from './MCV';
  export default class DiaryReader extends Component{
  render(){
    return(
        <View style = {styles.container}>
            <StatusBar hidden={true}/>

    <View style={styles.titleView}>
        <Image style={MVC.moodStyle}
           source={this.props.diaryMood}/>
           <View style={{paddingBottom: 20, height: 190, width: 200, justifyContent: 'center', alignItems: 'center',}}>
             <Text style={styles.titleText} >
               {this.props.diaryTitle}
               </Text>
             <Text  style={[styles.titleText, {fontWeight: 'normal', fontSize: 15,lineHeight: 30}]} >
                 {this.props.diaryTime}
            </Text>
            </View>
          </View>
            <View style={styles.textView}>
                <Text style={{width: widthOfAll*0.9, marginTop: 15, marginBottom: 10, fontWeight: 'bold', fontSize: 20}}>观感：</Text>
          <TextInput style={[ styles.textviewText,{color:'black'}]}
          multiline={true}
          editable={false}
          value={this.props.diaryBody}/>
            </View>
            <View style={styles.buttonView}>
                <TouchableNativeFeedback onPress={this.props.readingPreviousPressed} background={TouchableNativeFeedback.Ripple('white',false)}>
                    <View style={styles.bottomButtonView}><Text style={styles.bottomButtonText}>
                        上一篇
                    </Text></View>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback onPress={this.props.writeDiary} background={TouchableNativeFeedback.Ripple('white',false)}>
                    <View style={[styles.bottomButtonView, {marginLeft: 20, marginRight: 20}]}><Text style={styles.bottomButtonText}>
                        编辑
                    </Text></View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={this.props.readingNextPressed} background={TouchableNativeFeedback.Ripple('white',false)}>
                    <View style={styles.bottomButtonView}><Text style={styles.bottomButtonText}>
                        下一篇
                    </Text></View>
                </TouchableNativeFeedback>
            </View>
      </View>
   );
  }
}

let styles = StyleSheet.create({
    container: {
        backgroundColor: '#f1f1f1',
        flex: 1,
        alignItems: 'center'
    },
    titleView: {
        // backgroundColor: 'red',
        flex: 4,
        width: widthOfAll,
        // marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleImage: {
        height: 190,
        width: 150,
    },
    titleText: {
        // backgroundColor: '#7b7b7b',
        width: 180,
        lineHeight:50,
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center'
    },


    textView: {
        // backgroundColor: 'blue',
        bottom:35,
        flex: 5,
        width: widthOfAll,
        alignItems: 'center',
        // justifyContent: 'center'
    },
    textviewText: {
        backgroundColor: '#fcfcfc',
        borderRadius: 10,
        padding: 10,
        // flex: 1,
        width: widthOfAll*0.9,
        height: widthOfAll*0.58,
        fontSize: 20,
        fontWeight: 'normal'
    },

    buttonView: {
        // backgroundColor: 'yellow',
        flex: 3,
        width: widthOfAll,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',

    },
    bottomButtonView: {
        backgroundColor: '#33ADFF',
        elevation: 5,
        borderRadius: 5,
        marginTop: 55
    },
    bottomButtonText: {
        // backgroundColor: '#33ADFF',
        color: "white",
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 45,
        width: 100,
        height: 45,
        letterSpacing: 3,
    }
});

