import React,{Component} from 'react'
import {View, Image, Text, ActivityIndicator} from 'react-native';
import {Router,Stack,Scene} from 'react-native-router-flux'
import App from './App.js';

import MovieList from './components/movie/MovieList.js'
import MovieDetail from './components/movie/MovieDetail'
import Impressions from './components/Me/impressions'
import UserModify from './components/Me/UserModify'
import Login from './components/Login'
import Book from './components/read/Book'
import ReadBook from './components/read/ReadBook'
import Diary from './components/Diary/Diary'
import ShouCang from './components/Me/ShouCang'
import BoFang from './components/movie/BoFang';
import Me from './components/tabbars/Me';
export default class Main extends Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return<Router>
            <Stack key="root">
                {/*hideNavBar={true}*/}
                <Scene key="login" component={Login} hideNavBar={true} />
                <Scene key="app" component={App} title="hha"  hideNavBar={true}/>
                <Scene key="book" component={Book} title="读书"  />
                <Scene key="readBook" component={ReadBook} title="读书"  />
                <Scene key="diary" component={Diary} hideNavBar={true}  />

                <Scene key="movie" component={MovieList} title="热映电影列表" />
                <Scene key="moviedetail" component={MovieDetail} title="电影详情" />
                <Scene key="impressions" component={Impressions} title="写感想" />
                <Scene key="UserModify" component={UserModify} title="修改个人信息"  />
                <Scene key="ShouCang" component={ShouCang} title="我的收藏"  />
                <Scene key="BoFang" component={BoFang} hideNavBar={true}  />
                <Scene key="Me" component={Me} hideNavBar={true}  />


            </Stack>
        </Router>
    }

}
