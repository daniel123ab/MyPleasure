import React, { Component } from 'react';
import {
    unhighlight,
    Dimensions,
    StyleSheet,
    SafeAreaView,
    FlatList,
    Text,
    View,
    Image
} from 'react-native';

let widthOfAll = Dimensions.get('window').width;

export default class ShouCang extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    FenGeXian() {
        return (<View style={styles.FGX} />)
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.centerView}>
                    <FlatList
                        ItemSeparatorComponent={this.FenGeXian}
                        style={{flex: 1}}
                        data={require('../../assets/JSON/movies')}
                        renderItem={({item}) =>
                            <View style={{width: widthOfAll, alignItems: 'center'}}>
                                <View style={styles.itemView}>
                                    <Image style={styles.itemImage} source={{uri:item.uri}} />
                                    <View style={styles.itemTextView}>
                                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                            <Text numberOfLines={1}  ellipsizeMode={'tail'} style={styles.nameText}>{item.name}</Text>
                                            <Image style={styles.scImage} source={item.yn == '0' ? require('../../assets/images/SC.png') : require('../../assets/images/SCH2.png')} />
                                        </View>
                                        <View style={{flexDirection: 'row'}}>
                                            <Text numberOfLines={1}  ellipsizeMode={'tail'} style={[styles.pingfenText, {fontWeight: 'bold'}]}>评分：</Text>
                                            <Text numberOfLines={1}  ellipsizeMode={'tail'} style={styles.pingfenText}>{item.PingFen}</Text>
                                        </View>
                                        <Text numberOfLines={1}  ellipsizeMode={'tail'} style={[styles.jianjieText, {fontWeight: 'bold', marginBottom: 5}]}>简介：</Text>
                                        <Text numberOfLines={4}  ellipsizeMode={'tail'} style={styles.jianjieText}>{item.JianJie}</Text>
                                    </View>
                                </View>
                            </View>
                        }
                    />
                </View>
            </SafeAreaView>
        );
    }

}

let styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        alignItems: 'center'
    },
    FGX: {
        backgroundColor: '#000',
        height: 1,
        // width: widthOfAll*0.98,
        opacity: 0.3,
        margin: 9,
        marginLeft: 40,
        marginRight: 40
    },
    centerView: {
        // backgroundColor: 'green',
        flex: 1,
        // width: widthOfAll*0.9,
        alignItems: 'center'
    },
    itemView: {
        backgroundColor: '#f7f7f7',
        flex: 1,
        height: 200,
        width: widthOfAll*0.9,
        flexDirection: 'row',
        borderRadius: 10,
    },
    itemImage: {
        width: 150,
        height: 200,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    itemTextView: {
        // backgroundColor: 'cyan',
        width: widthOfAll*0.9-150,
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 12
    },
    nameText: {
        // backgroundColor: 'red',
        width: widthOfAll*0.9-230,
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 5
    },
    scImage: {
        // backgroundColor: 'blue',
        marginTop: 11,
        marginRight: 5,
        height: 25,
        width: 25
    },
    pingfenText: {
        fontSize: 15,
        marginBottom: 8
    },
    jianjieText: {
        fontSize: 15,
        // marginBottom: 10
    }
});
