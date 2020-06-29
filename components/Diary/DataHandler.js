import React, {Component} from 'react';
import { AsyncStorage } from 'react-native';
let angryMood =require('../../images/book.jpg')
let peaceMood =require('../../images/move.jpg');
let happyMood =require('../../images/happy.jpg');
let sadMood =require('../../images/sad.jpg');
let miseryMood =require('../../images/misery.jpg');
export default class DataHandler {
    static realDiaryList=[];
    static listIndex =0;
    static getAllTheDiary(){ //获取存储中所有的日记函数
         return new Promise(
             function( resolve,reject){
                 AsyncStorage.getAllKeys().then( //获取存储中所有的key
                    (Keys)=>{
                        if(Keys.length===0){//判断储存中是否没有数据
                        let returnValue ={
                            diaryTime:'没有历史日记',
                            diaryTitle:'没有历史日记',
                            diaryBody:''
                        }
                    resolve(returnValue);//Promise机制中成功返回
                    console.log('注意,resolve后的语句还会被执行，因此resolve后如果有代码，结束处理必须要跟return语句！');
                    return;
                }
                AsyncStorage.multiGet(Keys).then( //通过Keys获取所有数据
                    (results)=>{
                        let resultsLength=results.length;
                        for (let counter=0;counter<resultsLength;counter++){
                            //取得数据并利用JSON类的parse方法生成对象，插入日记列表
                            DataHandler.realDiaryList[counter]=JSON.parse(results
                                [counter][1]);
                        }
                        DataHandler.bubleSortDiaryList();//日记列表排序
                        if (resultsLength>0){//日记列表中有数据，取最后一条数据
                             resultsLength--;
                             DataHandler.listIndex=resultsLength;
                             let newMoodIcon;
                             switch(DataHandler.realDiaryList[resultsLength].mood){
                               case 2:
                                   newMoodIcon=angryMood;
                                   break;
                                case 3:
                                    newMoodIcon=sadMood;
                                    break;
                                case 4:
                                    newMoodIcon=happyMood;
                                    break;
                                case 5:
                                    newMoodIcon=miseryMood;
                                    break;
                                default:
                                    newMoodIcon=peaceMood;
                             }
                             let newtitle=DataHandler.realDiaryList[resultsLength].title;
                             let newbody=DataHandler.realDiaryList[resultsLength].body;
                             //利用Date的构造函数，从字符串中得到Date类型数据
                             let ctime=new Date(DataHandler.realDiaryList[resultsLength].time);
                             let timeString=''+ctime.getFullYear()+'年'+(ctime.getMonth()+1)+'月'+ctime.getDate()+'日 星期'
                             +(ctime.getDay() +1)+' '+ctime.getHours()+':'+ctime.getMinutes();
                             let rValue={
                                 diaryMood:newMoodIcon,
                                 diaryTime:timeString,
                                 diaryTitle:newtitle,
                                 diaryBody:newbody
                             };
                             resolve(rValue);//Promise机制中的成功返回
                        }
                        else{ //日记列表中没有数据
                             let returnValue ={
                                 diaryTime:'没有历史日记',
                                 diaryTitle:'没有历史日记',
                                 diaryBody:''
                             }
                             resolve(returnValue);
                        }
                    }
                ).catch(
                    (error)=>{
                        console.log(error);
                }
            )
        }
        ).catch(
            (error)=>{
                console.log('A error happens read all the diary.');
                console.log(error);
                AsyncStorage.clear();
                let aValue={
                    diaryTime:'没有历史日记',
                    diaryTitle:'没有历史日记',
                    diaryBody:''
                };
                resolve(aValue);
            }
        )
             }
         );
    }
    static bubleSortDiaryList(){ ///因为AsyncStorage API不能保证读取的顺序
        let tempObj; //使用冒泡排序对日记列表进行排序
        for (let i=0;i<DataHandler.realDiaryList.length;i++){
            for(let j=0;j<DataHandler.realDiaryList.length-i-1;j++){
                if(DataHandler.realDiaryList[j].index>DataHandler.realDiaryList[j+1].index){
                    tempObj=DataHandler.realDiaryList[j];
                    DataHandler.realDiaryList[j]=DataHandler.realDiaryList[j+1];
                    DataHandler.realDiaryList[j+1]=tempObj;
                }
            }
        }
    }
    static getPreviousDiary(){  //请求上一篇日记数据的处理函数
           if(DataHandler.listIndex===0) return null;//已经显示的第一篇日记
           DataHandler.listIndex--;
           let resultsLength=DataHandler.listIndex;
           let newMoodIcon;
           switch (DataHandler.realDiaryList[resultsLength].mood){//准备心情图片
                case 2:
                    newMoodIcon=angryMood;
                    break;
                case 3:
                    newMoodIcon=sadMood;
                    break;
                case 4:
                    newMoodIcon=happyMood;
                    break;
                case 5:
                    newMoodIcon=miseryMood;
                    break;
                default:
                    newMoodIcon=peaceMood;
            }
            let newtitle=DataHandler.realDiaryList[resultsLength].title;
            let newbody=DataHandler.realDiaryList[resultsLength].body;
            let ctime=new Date(DataHandler.realDiaryList[resultsLength].time);
            let timeString=''+ctime.getFullYear()+'年'+(ctime.getMonth()+1)+'月'+ctime.getDate()+'日 星期'
            +(ctime.getDay()+1)+' '+ctime.getHours()+':'+ctime.getMinutes();
            return{//返回上一篇日记的相关数据
                    diaryMood:newMoodIcon,
                    diaryTime:timeString,
                    diaryTitle:newtitle,
                    diaryBody:newbody
         };
    }
    static getNextDiary(){//请求下一篇日记的数据处理函数
        if (DataHandler.listIndex===(DataHandler.realDiaryList.length-1)) return null;
        //已经到最后一篇日记
        DataHandler.listIndex++;
        let resultsLength=DataHandler.listIndex;
        let newMoodIcon;
        switch(DataHandler.realDiaryList[resultsLength].mood){
            case 2:
                    newMoodIcon=angryMood;
                    break;
                case 3:
                    newMoodIcon=sadMood;
                    break;
                case 4:
                    newMoodIcon=happyMood;
                    break;
                case 5:
                    newMoodIcon=miseryMood;
                    break;
                default:
                    newMoodIcon=peaceMood;
            }
            let newtitle=DataHandler.realDiaryList[resultsLength].title;
            let newbody=DataHandler.realDiaryList[resultsLength].body;
            let ctime=new Date(DataHandler.realDiaryList[resultsLength].time);
            let timeString=''+ctime.getFullYear()+'年'+(ctime.getMonth()+1)+'月'+ctime.getDate()+'日 星期'+(ctime.getDay()+1)+' '
            ctime.getHours()+':'+ctime.getMinutes();
            return{
                diaryMood:newMoodIcon,
                diaryTime:timeString,
                diaryTitle:newtitle,
                diaryBody:newbody
            };
    }
    static saveDiary(newDiaryMood,newDiaryBody,newDiaryTitle){ //保存日记数据
      return new Promise(function(resolve,reject){
          let currentTime=new Date();//获取当前时间
          let timeString=''+currentTime.getFullYear+'年'+(currentTime.getMonth()+1)+'月'+currentTime.getDate()+'日 星期'
          +(currentTime.getDay()+1)+' '+currentTime.getHours()+':'+currentTime.getMinutes();
          let aDiary =Object();
          aDiary.title=newDiaryTitle;
          aDiary.body=newDiaryBody;
          aDiary.mood=newDiaryMood;
          aDiary.time=currentTime;
          aDiary.sectionID=''+currentTime.getFullYear()+'年'+(currentTime.getMonth()+1)+'月';
          //sectionID用来对日记列表进行分段显示
          aDiary.index=Date.parse(currentTime);
          //从当前时间生成唯一值，用来索引日记列表，这个值精确到毫秒，可以认为它是唯一的
          AsyncStorage.setItem(''+aDiary.index,JSON.stringify(aDiary)).then(
              ()=>{//将新的日记存储在本地存储中
            let totalLength=DataHandler.realDiaryList.length;
            DataHandler.realDiaryList[totalLength]=aDiary;
            DataHandler.listIndex=totalLength;
            let newMoodIcon;
            switch(newDiaryMood){
                case 2:
                    newMoodIcon=angryMood;
                    break;
                 case 3:
                     newMoodIcon=sadMood;
                     break;
                 case 4:
                     newMoodIcon=happyMood;
                     break;
                 case 5:
                     newMoodIcon=miseryMood;
                     break;
                 default:
                     newMoodIcon=peaceMood;
              }
              let aValue ={
                  uiCode:2,
                  diaryTime:timeString,
                  diaryTitle:newDiaryTitle,
                  diaryMood:newMoodIcon,
                  diaryBody:newDiaryBody
              };
              resolve(aValue);//返回最新写日记数据
        }
        ).catch(
            (error)=>{
                console.log('Saving failed,error'+error.message);
            }
        );
      });
    }

}
