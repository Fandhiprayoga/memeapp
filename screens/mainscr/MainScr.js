import React from "react";
import { View, Text, ImageBackground, TouchableOpacity,Animated } from "react-native";
import {  Container,  } from "native-base";
import {Icon} from "react-native-elements"
import ViewOverflow from 'react-native-view-overflow';

import Sound from 'react-native-sound';



export default class MainScr extends React.Component {
  
  constructor () {
    super()
    this.springValue = new Animated.Value(1)
  }

  state={
    combos:0,
    counter:0,

    pattren:[2,1,4,1,2,4,3,2],

    activeBtnOne:false,
    activeBtnTwo:false,
    activeBtnThree:false,
    activeBtnFour:false,

    defaultColorBtnOne:'#FD5FA5',
    defaultColorBtnTwo:'#FD5FA5',
    defaultColorBtnThree:'#FD5FA5',
    defaultColorBtnFour:'#FD5FA5',

    statusTapWrong:false
  }
  
  guideline()
  {
      let a = this.state.pattren.slice(); //creates the clone of the state
      let counter =   this.state.counter ;
     
      //\]alert(this.state.statusTapWrong)
      if(this.state.counter>a.length-1)
      {
        counter=0;
      }

      if(this.state.statusTapWrong===true)
      {
          counter=0
          this.setState({statusTapWrong:false})
      }

      if(a[counter]===1)
      {
        this.setState({defaultColorBtnOne:'#FFF',defaultColorBtnTwo:'#FD5FA5', defaultColorBtnThree:'#FD5FA5', defaultColorBtnFour:'#FD5FA5'})
      }
      else if(a[counter]===2)
      {
        this.setState({defaultColorBtnOne:'#FD5FA5',defaultColorBtnTwo:'#FFF', defaultColorBtnThree:'#FD5FA5', defaultColorBtnFour:'#FD5FA5'})
      }
      else if(a[counter]===3)
      {
        this.setState({defaultColorBtnOne:'#FD5FA5',defaultColorBtnTwo:'#FD5FA5', defaultColorBtnThree:'#FFF', defaultColorBtnFour:'#FD5FA5'})
      }
      else if(a[counter]===4)
      {
        this.setState({defaultColorBtnOne:'#FD5FA5',defaultColorBtnTwo:'#FD5FA5', defaultColorBtnThree:'#FD5FA5', defaultColorBtnFour:'#FFF'})
      }
      else
      {
        this.setState({defaultColorBtnOne:'#FD5FA5',defaultColorBtnTwo:'#FD5FA5', defaultColorBtnThree:'#FD5FA5', defaultColorBtnFour:'#FD5FA5'})
      }

  }



  counterPlay(number)
  {
       
        //this.sound.play()
        if(number===1)
        {
          this.one.stop()
            this.two.stop()
            this.three.stop()
            this.four.stop()
            this.one.play()
        }

        if(number===2)
        {   
            this.two.stop()
            this.three.stop()
            this.four.stop()
            this.one.stop()
            this.two.play()
        }

        if(number===3)
        {
          this.two.stop()
          this.three.stop()
          this.four.stop()
          this.one.stop()
            this.three.play()
        }

        if(number===4)
        {
            this.two.stop()
            this.three.stop()
            this.four.stop()
            this.one.stop()
            this.four.play()
        }
        this.setState({counter:this.state.counter+1}, function(){this.guideline()})
        //this.guideline()
        let a = this.state.pattren.slice(); //creates the clone of the state

      if(number===a[this.state.counter])
      {
        
          //alert('benar')
          if(this.state.counter+1===a.length)
          {
              this.setState({combos:this.state.combos+1})
              this.setState({counter:0})
              this.spring()
          }
          
      }
      else
      {
        //alert('salah')
        alert('GAME OVER'+'\n'+"Your combos : "+this.state.combos)
        this.setState({combos:0})
        this.setState({counter:0})
        this.sound.stop()
        this.setState({statusTapWrong:true}, function(){this.guideline()})
        
      }
      
        //console.warn('counter :'+this.state.counter+'\n'+'pressed :'+a[this.state.counter]+' '+a.length)
  }

  spring () {
    this.springValue.setValue(0.3)
    Animated.spring(
      this.springValue,
      {
        toValue: 1,
        friction: 1
      }
    ).start()
  }

  sound = new Sound(require('../../android/app/src/res/raw/babys.mp3'), null, (error) => {
      if (error) {
        alert('asdasd')
      }
    });

    one = new Sound(require('../../android/app/src/res/raw/one.mp3'), null, (error) => {
      if (error) {
        alert('asdasd')
      }
    });

    two = new Sound(require('../../android/app/src/res/raw/two.mp3'), null, (error) => {
      if (error) {
        alert('asdasd')
      }
    });

    three = new Sound(require('../../android/app/src/res/raw/three.mp3'), null, (error) => {
      if (error) {
        alert('asdasd')
      }
    });

    four = new Sound(require('../../android/app/src/res/raw/four.mp3'), null, (error) => {
      if (error) {
        alert('asdasd')
      }
    });

    componentDidMount()
    {
      
        this.guideline()
      
   
    }
  render() {
    return (
      <Container style={{ flexDirection: "column" }}>
        <Container style={{ flex: 1, backgroundColor: "#43DFFB", flexDirection:'row' }}>
          {/* header */}
          <Container style={{flex:1, flexDirection:'row', marginLeft:10, marginRight:10, paddingTop:10, backgroundColor: "#43DFFB"}}>
                <Container style={{flex:2,flexDirection:"column",marginRight:5, backgroundColor: "#43DFFB"}}>
                   
                        <Text style={{color:'#FC9C11', textAlign:'right'}}>Rank #0000</Text> 
                    
                    
                        <TouchableOpacity onPress={ ()=> this.props.navigation.navigate('Leaderboard')}style={{marginTop:10,backgroundColor:'#FC9C11', paddingTop:5,paddingBottom:5, borderRadius:5}}>
                            <Text style={{textAlign:'center'}}>Leaderboard</Text>
                        </TouchableOpacity>
                   
                </Container>
                <Container style={{flex:1, alignItems:'center', paddingTop:9, backgroundColor: "#43DFFB", borderWidth:1.5, borderColor:'#FC9C11', height:50}}>
                    <Icon
                    name='trophy'
                    type='font-awesome'
                    color='#FC9C11'
                    size={30}
                    style={{paddingTop:5, paddingBottom:4, paddingLeft: 4,paddingRight:5,  color:'#FC9C11'}}
                  />
                </Container>
          </Container>
          {/* right header */}
          <Container style={{flex:1, flexDirection:'row', marginLeft:10, marginRight:10, paddingTop:10, backgroundColor: "#43DFFB"}}>
                <Container style={{flex:2,flexDirection:"column",marginRight:5, backgroundColor: "#43DFFB"}}>
                   
                        <Text style={{color:'#FC9C11', textAlign:'right', fontWeight:'bold'}}>Guest</Text> 
                    
                    
                        <TouchableOpacity style={{marginTop:10,backgroundColor:'#3E6FB1', paddingTop:5,paddingBottom:5, borderRadius:5, flexDirection:'row', paddingLeft:5}}>
                              <Icon
                                name='facebook'
                                type='font-awesome'
                                color='white'
                                size={15}
                            />
                            <Text style={{textAlign:'right' ,color:'white', }}>   Connect</Text>
                        </TouchableOpacity>
                   
                </Container>
                <Container style={{flex:1, alignItems:'center', paddingTop:9, backgroundColor: "#43DFFB", borderWidth:1.5, borderColor:'#FC9C11', height:50}}>
                    <Icon
                    name='user-circle'
                    type='font-awesome'
                    color='#FC9C11'
                    size={30}
                    style={{paddingTop:5, paddingBottom:4, paddingLeft: 4,paddingRight:5,  color:'#FC9C11'}}
                  />
                </Container>
          </Container>
        </Container>

        <Container style={{ flex: 4 }}>
          
          <ImageBackground
            source={{uri:'https://i.ibb.co/tmPKR6m/bgmain.png'}}
            style={{ width: "100%", height: "100%" }}
          >
            {/* ini dalemanyyna */}
            <ViewOverflow style={{alignSelf :'center', marginTop:-30}}>
              <View style={{backgroundColor:'white', width:100, borderRadius:5, }}>
                  <Text style={{textAlign:'center', fontWeight:'bold', fontSize:30}}>{this.state.combos}</Text>
                  <Text style={{textAlign:'center', color:'#EE52A6', fontSize:20}}>Combos !</Text>
              </View>
          </ViewOverflow>

          <ViewOverflow style={{zIndex:9,marginTop:-25}}>
            <TouchableOpacity activeOpacity={0.8} style={{alignSelf: 'center',}} onPress={this.spring.bind(this)}>
              <Animated.Image style={{height:340, width:240, transform: [{scale: this.springValue}]}}source={{uri:'https://i.ibb.co/N2RCjNQ/centaur.png'}}/>
            </TouchableOpacity>
          </ViewOverflow >

          <ViewOverflow style={{zIndex:10}}>
                <View style={{flexDirection:'row', padding:5}}>
                      <View style={{flex:1,paddingTop:10,paddingBottom:10, paddingleft:5, paddingRight:5}}><TouchableOpacity onPress={()=>this.counterPlay(1) } style={{backgroundColor:this.state.defaultColorBtnOne ,height:70, borderRadius:100,justifyContent:'center'}}><Text style={{ textAlign:'center',color:'#FEA7CE',fontSize:25}}>ONE</Text></TouchableOpacity></View>
                      <View style={{flex:1,paddingTop:10,paddingBottom:10, paddingleft:5, paddingRight:5}}><TouchableOpacity onPress={()=>this.counterPlay(2) } style={{backgroundColor:this.state.defaultColorBtnTwo,height:70, borderRadius:100,justifyContent:'center'}}><Text style={{ textAlign:'center',color:'#FEA7CE',fontSize:25}}>TWO</Text></TouchableOpacity></View>
                      <View style={{flex:1,paddingTop:10,paddingBottom:10, paddingleft:5, paddingRight:5}}><TouchableOpacity onPress={()=>this.counterPlay(3) } style={{backgroundColor:this.state.defaultColorBtnThree,height:70, borderRadius:100,justifyContent:'center'}}><Text style={{ textAlign:'center',color:'#FEA7CE',fontSize:25}}>THREE</Text></TouchableOpacity></View>
                      <View style={{flex:1,paddingTop:10,paddingBottom:10, paddingleft:5, paddingRight:5}}><TouchableOpacity onPress={()=>this.counterPlay(4) } style={{backgroundColor:this.state.defaultColorBtnFour,height:70, borderRadius:100,justifyContent:'center'}}><Text style={{ textAlign:'center',color:'#FEA7CE',fontSize:25}}>FOUR</Text></TouchableOpacity></View>
                </View>
          </ViewOverflow>
          </ImageBackground>
        </Container>
      </Container>
    );
  }
}
