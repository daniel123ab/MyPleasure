
import React, { Component } from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    TouchableHighlight,
    ScrollView
} from 'react-native';
import {Actions} from 'react-native-router-flux';
export  default class MovieDetail extends Component{
    constructor(props){
        super(props)
        this.state = {
            movieInfo:{},
            isLoading:true
        }
    }

    componentWillMount(): void {
        fetch('https://douban.uieee.com/v2/movie/subject/' +  this.props.id)
        //  fetch('http://api.douban.com/v2/movie/subject/?apikey=0df993c66c0c636e29ecbb5344252a4a&' +  this.props.id)
            .then(res=>res.json())
            .then(data=>{
                this.setState({
                    movieInfo:data,
                    isLoading:false
                })
            })
    }
    render(){
        return<View>
            {
                this.renderInfo()
            }
        </View>
    }
    renderInfo=()=>{

        if(this.state.isLoading){
            return<ActivityIndicator size="large"/>
        }


        return<ScrollView>
            <TouchableHighlight underlayColor='transparent' onPress={this.goShouCang}>
            <View style={{padding:4}}>
                <Text style={{fontSize:25,textAlign:'center',marginTop:20,marginBottom:20}}>
                    {this.state.movieInfo.title}
                </Text>
                <View style={{alignItems:'center'}}>
                    <Image source={{uri:this.state.movieInfo.images.large}}
                           style={{width:200,height:280}}/>
                    <Text style={{lineHeight:30,marginTop:20,fontSize:15,fontWeight:'bold'}}> &emsp;&emsp;{this.state.movieInfo.summary}</Text>
                </View>
            </View>
            </TouchableHighlight>
        </ScrollView>

    }
    goShouCang=()=>{
        Actions.BoFang()
    }

}
