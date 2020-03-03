'use strict'
import React, { useState, Component, Dimensions } from 'react';
import { StyleSheet, Text, View, Animated, Image, PanResponder } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import swipeDirections from 'react-native-swipe-gestures'
import BananaPeel from '../components/bananaPeel'
import BananaPhase1 from '../components/bananaPhase1'
import BananaPhase2 from '../components/bananaPhase2'
import BananaPhase3 from '../components/bananaPhase3'
import BananaPhase4 from '../components/bananaPhase4'
import BananaPhase5 from '../components/bananaPhase5'
import BananaPhase6 from '../components/bananaPhase6'
import YellowSpotted from '../components/yellowSpotted'
import Barrel from '../components/barrel'
import HalfPeeledBanana from '../components/halfPeeled'
import BareBanana from '../components/bareBanana'
import GameClock from '../components/gameClock';
import ScoreBoard from '../components/scoreBoard';
import {Wave} from 'react-animated-text'
import MasterBanana from '../components/masterBanana'
export default class BananaGame extends Component {
    state = { 
        bananaPosition: new Animated.ValueXY({x: 30, y: 300}),
        StartingBarrelPosition: new Animated.ValueXY({x: -20, y: 40}),
        barrelLeft: {x: -190, y: 350},
        barrelRight: {x: 150, y:350},
        barrelUp: {x: -30, y: 60},
        barrelDown: {x: -30, y: 750},
        anyBarrelPosition: [{ x: -30, y: 60 }, { x: -190, y: 350 }, { x: 150, y: 350 }, { x: -30, y: 750 }],
        bareBananaPosition: new Animated.ValueXY({x: 10, y: 199}),
        barrelPositionIndex: 2,
        bananaPeelHeight:  new Animated.Value(80),
        bananaPeelWidth: new Animated.Value(60),
        bananaPeelSize: new Animated.ValueXY({ x: 120, y: 180 }),
        bananaPhase: 0,
        displayedText: new Animated.Value(0),
     swipedRight: false,
     swipedLeft: false,
     swipedUp: false,
     swipedDown: false,
     swipedForBarrel: false,
     bananaPeelProcess: 'full',
     barrelTimer: 1,
     agingTimer: 0,
     runAgingTimer: true,
     spinAnim: new Animated.Value(0),
     gestureName: 'none',
     peelToBarrelSuccess: false,
     score: 0,
     missedBarrel: false, 
     peelQuality: "none",
    peelPoints: {darkGreen: -4, lightGreen: -1, yellow: 2, yellowSpotted: 3, slightlyBruised: 1, bruised: -1, rotten: -5}
    }

    
    componentDidMount = () => {
            
    this.interval = setInterval(
        () => {
            this.setState((prevState) => ({ barrelTimer: prevState.agingTimer + 1 }))
            if (this.state.barrelTimer % 10 === 0) {
                let newIndex = Math.floor(Math.random() * 4)                // console.log("rando", Math.round(Math.random() * 4))
                // console.log(newIndex)
                // console.log(num, this.state)
                this.setState({ barrelPositionIndex: newIndex })
                // console.log("ten")
            }
        },
        1000);
    }

    render(){
        return (
        <View>
            <Animated.View >
                <Animated.View>
            <ScoreBoard score={this.state.score}/>
                </Animated.View>
                <Animated.View style={[styles.container, {top: 100, left: -160}]}>
                    <Text style={10}>Time: </Text>
            <GameClock />
                </Animated.View>
                <Animated.View style={[styles.container, { left: this.state.anyBarrelPosition[this.state.barrelPositionIndex].x, top: this.state.anyBarrelPosition[this.state.barrelPositionIndex].y }]}>
            <Barrel />
                </Animated.View>
                <Animated.View>
                <MasterBanana barrelPositionIndex = {this.state.barrelPositionIndex}/>
                </Animated.View>
            </Animated.View>
         </View>
    );
    }
    }
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    peelImage: {
        height: 120,
        width: 180
    },
    swipedUp: {
        transform: [
            { perspective: 850 },
            { translateY: -300 },
            { rotateX: '360deg' }]
    }, 
    funkyText: {
        width: 100,
        height: 100,
        top: 200,
        left: 50
    }
});
