import React, {Component} from 'react';

import {
    StyleSheet,
    TouchableOpacity,
    View,
    Dimensions,
    Image,
    Text
} from 'react-native';

import Video from 'react-native-video';

let widthOfAll = Dimensions.get('window').width;

export default class BoFang extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rate: 1,//播放速率
            volume: 1,//调节音量
            muted: false,//控制音频是否静音
            resizeMode: 'contain',//缩放模式
            duration: 0.0,
            currentTime: 0.0,
            paused: false,//暂停
        };
    }

    printt(){
        // if( this.state.paused==true ){
        //     this.setState({paused: false, i: this.state.i+1});
        //     alert(this.state);

        // }
        // this.setState( {i: this.state.i+1});
        // alert(this.state.i);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.videoView}>
                    <TouchableOpacity
                        style={styles.fullScreen}
                        onPress={() => this.setState({paused: !this.state.paused})}>
                        <Video
                            ref={(ref: Video) => {  //方法对引用Video元素的ref引用进行操作
                                this.video = ref
                            }}
                            // source={{ uri: 'https://gslb.miaopai.com/stream/HNkFfNMuhjRzDd-q6j9qycf54OaKqInVMu0YhQ__.mp4?ssig=bbabfd7684cae53660dc2d4c2103984e&time_stamp=1533631567740&cookie_id=&vend=1&os=3&partner=1&platform=2&cookie_id=&refer=miaopai&scid=HNkFfNMuhjRzDd-q6j9qycf54OaKqInVMu0YhQ__', type: 'mpd' }}
                            source={require('../../assets/movies/有底部字.mp4')}
                            style={styles.fullScreen}//组件样式
                            rate={this.state.rate}//播放速率
                            paused={this.state.paused}//暂停
                            volume={this.state.volume}//调节音量
                            muted={this.state.muted}//控制音频是否静音
                            resizeMode={this.state.resizeMode}//缩放模式
                            onLoad={this.onLoad}//加载媒体并准备播放时调用的回调函数。
                            onProgress={this.onProgress}//视频播放过程中每个间隔进度单位调用的回调函数
                            onEnd={this.onEnd}//视频播放结束时的回调函数
                            onAudioBecomingNoisy={this.onAudioBecomingNoisy}//音频变得嘈杂时的回调 - 应暂停视频
                            onAudioFocusChanged={this.onAudioFocusChanged}//音频焦点丢失时的回调 - 如果焦点丢失则暂停
                            repeat={true}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.textView}>
                    <Image style={styles.textImage} source={{uri:'https://i0.hdslb.com/bfs/bangumi/image/44fd7c383ea96c47dbf399974c86f3e193f6042d.jpg@282w_375h.jpg'}} />
                    <Text numberOfLines={1}  ellipsizeMode={'tail'} style={styles.nameText}>全民超人汉考克</Text>
                    <View style={{flexDirection: 'row', alignSelf: 'flex-start'}}>
                        <Text numberOfLines={1}  ellipsizeMode={'tail'} style={[styles.pingfenText, {fontWeight: 'bold'}]}>评分：</Text>
                        <Text numberOfLines={1}  ellipsizeMode={'tail'} style={styles.pingfenText}>8.1</Text>
                    </View>
                    <Text numberOfLines={1}  ellipsizeMode={'tail'} style={[styles.jianjieText, {fontWeight: 'bold', marginBottom: 5, alignSelf: 'flex-start'}]}>简介：</Text>
                    <Text numberOfLines={4}  ellipsizeMode={'tail'} style={styles.jianjieText}>作为超级英雄的汉考克（威尔·史密斯 饰），拥有巨大的能力，并伴随着巨大的责任。人人都知道汉考克可以解决一切，但是由于汉考克有着易怒、矛盾、尖刻的性格，这让他招致了许多的误解。他的英勇行为在挽救无数的生命同时，似乎总在事后造成严重的破坏性。公众终于对这位英雄忍无可忍，汉考克并不在乎别人所想...</Text>
                </View>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    videoView: {
        flex: 2
    },

    textView: {
        backgroundColor: '#EEEEEE',
        flex: 4,
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20
    },
    textImage: {
        width: 180,
        height: 239,
    },
    pingfenText: {
        fontSize: 15,
        marginBottom: 8
    },
    jianjieText: {
        fontSize: 15,
    },
    nameText: {
        width: widthOfAll-40,
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 5,
        textAlign: 'center'
    },

    fullScreen: {
        flex: 1
    },
});
