import React from 'react';
import { StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { NavigationActions, StackActions } from 'react-navigation';



const styles = StyleSheet.create({
            image: {
              width: 300,
              height: 300,
              resizeMode:'cover'
            }
          });

          const slides = [
            {
              key: 'somethun',
              title: 'FUN TAP TAP ',
              text: 'Have FunTapTap NotFapFap !.\nTap tap to gain combo',
              image:{uri:'https://png2.kisspng.com/sh/40dde49a2e0b5396fa491d99df8f0f4b/L0KzQYm3VMIxN6h4fZH0aYP2gLBuTgBqdpxrh9DwLXLkcsq0kBhiepwyi9H3Zz3vecX7jPUuapJnkZ8AYXTkQYHsVMA5OpZpS5CANkC3RIW3UsE2OmU3TKIBMUKzQ4S8TwBvbz==/kisspng-pinkfong-baby-shark-song-little-baby-5ada10e4082ed3.5604440215242406120335.png',},
              imageStyle: styles.image,
              backgroundColor: '#59b2ab',
              
            },
            {
              key: 'somethun-dos',
              title: 'Get Free Cryptocurrency',
              text: 'Be the top 10 to get Free Crptocurency !\n Rank will be reset weekly',
              image:{uri:'https://png2.kisspng.com/sh/ac940ecc9fc5e11a8feda89a447ed8d2/L0KzQYm3U8MxN510iZH0aYP2gLBuTgBqdpxrh9DwLYP3ebTyhgIubKNmj9t3Zz32fbL5lL10fKZpkZ9sbz3vhLW0if53caVmjNt4bj3mccPrTcViapY2S6oCOEa5RoS7Tsg5Omk3UakAMUW1QoW3VsI4QWY6SKc3cH7q/kisspng-pinkfong-sticker-drawing-smart-study-co-ltd-invitation-card-5abe1387866634.8828297515224062795505.png'},
              imageStyle: styles.image,
              backgroundColor: '#febe29',
            },
          ];

          export default class Intro extends React.Component {
           state = {
              showRealApp: false
            }
            _onDone = () => {
              // User finished the introduction. Show real app through
              // navigation or simply by controlling state
              this.setState({ showRealApp: true });
                this.props.navigation.reset([NavigationActions.navigate({ routeName: 'MainScr' })], 0)

            }
            render() {
              if (this.state.showRealApp) {
                return <Intro />;
              } else {
                return <AppIntroSlider slides={slides} onDone={this._onDone}/>;
              }
            }
          }