import React, { Component } from 'react';
import {

    StyleSheet,
    Text,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import TabNavigator from 'react-native-tab-navigator';
import Me from './components/tabbars/Me.js'
import Impressions from './components/Me/impressions.js'

import Home from './components/tabbars/Home.js'
import Movie from './components/movie/MovieList'
import Book from './components/read/Book'

export default class App extends Component{
    constructor(props){
        super(props)
        this.state={
            selectedTab:'home'
    };
  }
    render(){
        return(
        <View style={styles.container}>
            <TabNavigator>
              <TabNavigator.Item
                selected={this.state.selectedTab === 'home'}
                title="Home"
                renderIcon={() => <Icon name="home" size={25} color="gray" />}
                renderSelectedIcon={() =><Icon name="home" size={25} color="#0079ff" />}
//                badgeText="1"
                onPress={() => this.setState({ selectedTab: 'home' })}>
                <Home></Home>
              </TabNavigator.Item>

              <TabNavigator.Item
                              selected={this.state.selectedTab === 'movie'}
                              title="Movie"
                            renderIcon={() => <Icon name="check-circle" size={25} color="gray" />}
                            renderSelectedIcon={() =><Icon name="check-circle-o" size={25} color="#0079ff" />}
//                              badgeText="1"
                              onPress={() => this.setState({ selectedTab: 'movie' })}>
                              <Movie></Movie>
                            </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'book'}
                    title="Book"
                    renderIcon={() => <Icon name="paint-brush" size={25} color="gray" />}
                    renderSelectedIcon={() =><Icon name="paint-brush" size={25} color="#0079ff" />}
                    //                              badgeText="1"
                    onPress={() => this.setState({ selectedTab: 'book' })}>
                    <Book></Book>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'me'}
                    title="Me"
                    renderIcon={() => <Icon name="user" size={25} color="gray" />}
                    renderSelectedIcon={() =><Icon name="user-o" size={25} color="#0079ff" />}
                    //                              badgeText="1"
                    onPress={() => this.setState({ selectedTab: 'me' })}>
                    <Me></Me>
                </TabNavigator.Item>

            </TabNavigator>
        </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1
    }
});
