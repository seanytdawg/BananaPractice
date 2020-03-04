'use strict'
import React, { useState, Component, Dimensions } from 'react';
import { StyleSheet, Text, View, Animated, Image, PanResponder } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import Barrel from '../components/barrel'
import HalfPeeledBanana from '../components/halfPeeled'
import BareBanana from '../components/bareBanana'
import GameClock from '../components/gameClock';
import ScoreBoard from '../components/scoreBoard';
import {Wave} from 'react-animated-text'
import MasterBanana from '../components/masterBanana'
export default class BananaGame extends Component {
    state = { 
        bananaPosition: new Animated.ValueXY({ x: Math.floor(Math.random() * 200), y: Math.floor(Math.random() * 100)}),
        StartingBarrelPosition: new Animated.ValueXY({x: -20, y: 40}),
        barrelLeft: {x: -190, y: 350},
        barrelRight: {x: 150, y:350},
        barrelUp: {x: -30, y: 20},
        barrelDown: {x: -30, y: 750},
        anyBarrelPosition: [{ x: -20, y: 0 }, { x: -190, y: 200 }, { x: 130, y: 200 }, { x: -20, y: 500 }],
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
     bananaArray : [],
     peelToBarrelSuccess: false,
     score: 0,
     missedBarrel: false, 
     peelQuality: "none",
    peelPoints: {darkGreen: -4, lightGreen: -1, yellow: 2, yellowSpotted: 3, slightlyBruised: 1, bruised: -1, rotten: -5},
    randomBananaPositionX: Math.floor(Math.random() * 200 - 100),
    randomBananaPositionY: Math.floor(Math.random() * 350 + 150 )
    }

    
    componentDidMount = () => {
            
    this.interval = setInterval(
        () => {
            this.setState((prevState) => ({ barrelTimer: prevState.barrelTimer + 1 }))
            if (this.state.barrelTimer % 10 === 0) {
                // console.log("barrel time!")
                let newIndex = Math.floor(Math.random() * 4)                // console.log("rando", Math.round(Math.random() * 4))
                // console.log(newIndex)
                // console.log(num, this.state)
                this.setState({ barrelPositionIndex: newIndex })
                // console.log("ten")
            }
        },
        1000);

        this.renderBananas()
    }
    renderBananas(){
        let key = 0
    setInterval(
        () => {
            this.state.bananaArray.forEach(banana=>
                console.log(banana)
                )

           let  newBanana = 
                <MasterBanana barrelPositionIndex={this.state.barrelPositionIndex}
                    randomBananaPositionX={this.state.randomBananaPositionX}
                    randomBananaPositionY={this.state.randomBananaPositionY}
                    addUpScore={this.addUpScore}
                    anyBarrelPosition ={this.state.anyBarrelPosition}
                    key={key}
                //    key={Math.floor(Math.random() * 10000)}
                //     removeBanana={this.removeBanana}
                    />
                    key ++
                    console.log("game random y", this.state.randomBananaPositionY)
                    console.log("new",newBanana.randomBananaPositionY)
                    // console.log(this.state.bananaArray)
                if(this.state.bananaArray && newBanana){
            this.setState({ bananaArray: [...this.state.bananaArray, newBanana], randomBananaPositionX: Math.floor(Math.random() * 200 - 100), randomBananaPositionY: Math.floor(Math.random() * 350 + 150)})
        }},
        5000);}
    

        addUpScore=(points)=>{
            this.setState({score: this.state.score + points})
        }

    removeBanana=(key)=>{
        if (this.state.bananaArray){
       let newArray = this.state.bananaArray.filter(banana=>{
            banana != banana
            this.setState({bananaArray: newArray})
            console.log("bananaray", this.state.bananaArray.length)
        })}
        
    }

    render(){
        return (
        <View>
                <Animated.View>
            <ScoreBoard score={this.state.score}/>
                </Animated.View>
                <Animated.View style={[styles.container, {top: 1, left: -160}]}>
                    <Text style={10}>Time: </Text>
            <GameClock endGame={this.props.endGame}/>
                </Animated.View>
                <Animated.View style={[styles.container, { left: this.state.anyBarrelPosition[this.state.barrelPositionIndex].x, top: this.state.anyBarrelPosition[this.state.barrelPositionIndex].y }]}>
                <Barrel />
                </Animated.View>
                <Animated.View>
                    {this.state.bananaArray}
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
