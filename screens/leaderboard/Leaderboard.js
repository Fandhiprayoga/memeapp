import React from "react"
import {View,Text, Image, ImageBackground, TouchableOpacity, } from "react-native"
import {Container, Content, List, ListItem, Left, Right} from "native-base"
import {Icon} from "react-native-elements"
export default class Leaderboard extends React.Component{
            render(){
                        return(
                             
                                  <ImageBackground
                                        source={{uri:'https://i.ibb.co/tmPKR6m/bgmain.png'}}
                                        style={{ width: "100%", height: "100%" }}
                                    >
                                    <View style={{margin:10, backgroundColor:'rgba(255,255,255,0.4)', borderRadius:6}}>
                                            <View style={{margin:5}}>
                                                    <View><Text style={{textAlign:'center'}}>My Combo : 10</Text></View>
                                                    <View style={{alignSelf:'center',}}><Image style={{borderRadius:100, height:100,width:100 }} source={require('../../img/index.png')}/></View>
                                                    <View><Text style={{textAlign:'center'}}>Guest001</Text></View>
                                                    <View style={{alignSelf:'center'}}><TouchableOpacity style={{padding:5,backgroundColor:'#395693', flexDirection:'row',width:170, justifyContent:'center' }}><Icon color="white" type="font-awesome" name="facebook" style={{marginRight: 5,}}/><Text style={{color:'white'}}> Connect to claim Reward</Text></TouchableOpacity></View>
                                                    <View><Text style={{textAlign:'center'}}>#980</Text></View>
                                            </View>
                                            <View style={{margin:10, backgroundColor:'rgba(255,255,255,0.4)', borderRadius:6}}>
                                                
                                                    <List>
                                                        <ListItem >
                                                            <Left>
                                                                    <Text>asd</Text>
                                                            </Left>
                                                            <Right>
                                                                <Text>#1</Text>
                                                            </Right>
                                                        </ListItem >

                                                        <ListItem >
                                                            <Left>
                                                                <Text>asd</Text>
                                                            </Left>
                                                            <Right>
                                                                <Text>#2</Text>
                                                            </Right>
                                                        </ListItem >

                                                       <ListItem >
                                                            <Left>
                                                                <Text>asd</Text>
                                                            </Left>
                                                            <Right>
                                                                <Text>#3</Text>
                                                            </Right>
                                                        </ListItem >

                                                        <ListItem >
                                                            <Left>
                                                                <Text>asd</Text>
                                                            </Left>
                                                            <Right>
                                                                <Text>#4</Text>
                                                            </Right>
                                                        </ListItem >

                                                        <ListItem >
                                                            <Left>
                                                                <Text>asd</Text>
                                                            </Left>
                                                            <Right>
                                                                <Text>#5</Text>
                                                            </Right>
                                                        </ListItem >

                                                        
                                                    </List>

                                            </View>
                                    </View>
                                    </ImageBackground>
                                   
                        )
            }
}