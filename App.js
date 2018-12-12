/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import { createStackNavigator, createAppContainer } from "react-navigation";

import Intro from "./screens/intro/Intro"
import MainScr from "./screens/mainscr/MainScr"
import Leaderboard from "./screens/leaderboard/Leaderboard"
    const apnav =createStackNavigator({
      Intro:{screen : Intro,navigationOptions:{header:null}},
      MainScr:{screen:MainScr,navigationOptions:{header:null}},
      Leaderboard:{screen:Leaderboard,navigationOptions:{title:'Leaderboard'}}
    },{
      initialRouteName: 'Intro',
      // headerMode: "none"
    })

    export default createAppContainer(apnav)
