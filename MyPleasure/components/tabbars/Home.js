import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    TouchableOpacity,
     Dimensions,
} from 'react-native';
import Swiper from 'react-native-swiper'
import {Actions} from 'react-native-router-flux'
export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;
export default class Home extends Component{
   render(){
        return (
        <View style={styles.level}>
            <View style={{height: 260,width:width  }}>
                <Swiper autoplay = {true} autoplayTimeout={2} style={styles.wrapper}
                    dot={
                        <View
                            style={{
                                backgroundColor: 'rgba(255,255,255,.3)',
                                width: 13,
                                height: 13,
                                borderRadius: 7,
                                marginLeft: 7,
                                marginRight: 7
                            }}
                        />
                    }
                    activeDot={
                        <View
                            style={{
                                backgroundColor: '#fff',
                                width: 13,
                                height: 13,
                                borderRadius: 7,
                                marginLeft: 7,
                                marginRight: 7
                            }}
                        />
                    }
                    paginationStyle={{
                        bottom: 70
                    }}
                    loop={true}
                >
                    <View style={styles.slide}>
                        <Image
                            style={{height:width*0.625,width:width}}
                            source={require('../../images/1.jpg')}
                            resizeMode="cover"
                        />
                    </View>
                    <View style={styles.slide}>
                        <Image
                            style={{height:width*0.625,width:width}}
                            source={require('../../images/2.jpg')}
                            resizeMode="cover"
                        />
                    </View>
                    <View style={styles.slide}>
                        <Image style={{height:width*0.625,width:width}} source={require('../../images/3.jpg')} />
                    </View>
                </Swiper>


            </View>
            <View style={{  flexDirection: 'column', justifyContent: 'space-around', top:10,
                alignItems:'center', height:height-330}}>
                <TouchableHighlight  underlayColor='#fff'  onPress={this.goMovieList}>
                <View style={{flexDirection:'row'}}>

                    <Image source={require('../../images/move.jpg')} style={{width:80,height:80,marginRight:25}}/>

                    <View style={styles.textView}>
                        <Text style={styles.text}>电影赏析</Text>
                    </View>
                 </View>
                 </TouchableHighlight>
                <TouchableHighlight onPress={this.goBook} underlayColor='#fff'>
                    <View style={{flexDirection:'row'}}>

                        <Image source={require('../../images/read.jpg')} style={{width:80,height:80,marginRight:25}}/>

                        <View style={styles.textView}>
                            <Text style={styles.text}>阅读文章</Text>
                        </View>
                          </View>
             </TouchableHighlight>
                <TouchableHighlight onPress={this.goMe} underlayColor='#fff'>
                <View style={{flexDirection:'row'}}>

                    <Image source={require('../../images/write.jpg')} style={{width:80,height:80,marginRight:25}}/>

                    <View style={styles.textView}>
                        <Text style={styles.text}>影评阅读</Text>
                    </View>
                 </View>
                </TouchableHighlight>
            </View>


        </View>
        );
    }
    goMovieList=()=>{
        Actions.movie({id:10})
    }
    goMovieList=()=>{
        Actions.movie({id:10})
    }
    goBook=()=>{
        Actions.book()
    }
    goMe=()=>{
        Actions.Me()
    }
    goLogin=()=>{
        Actions.login()
    }
}

const styles = StyleSheet.create({
    wrapper: {},
    level:{
    width:width,
    height:height,

    },
    textView:{
        justifyContent:"center",
        alignItems:"center",
        width:220,
        height:80,
        borderColor:'black',
        borderWidth:1
    },
    slide: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    imgBackground: {

        backgroundColor: 'transparent',
        position: 'absolute'
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
        backgroundColor: 'transparent',
        borderColor:'#93C8FE',
        borderWidth:2
    },
    text: {
        textAlign:'center',
        color: '#2B2B2B',
        fontSize: 25,
        fontWeight:'bold',

    }
})
