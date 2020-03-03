'use strict'
import React, { useState, Component, Dimensions } from 'react';
import { StyleSheet, Text, View, Animated, Image, PanResponder } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import BananaPhase1 from './bananaPhase1'
import BananaPhase2 from './bananaPhase2'
import BananaPhase3 from './bananaPhase3'
import BananaPhase4 from './bananaPhase4'
import BananaPhase5 from './bananaPhase5'
import BananaPhase6 from './bananaPhase6'
import YellowSpotted from './yellowSpotted'
import HalfPeeledBanana from './halfPeeled'
import BareBanana from './bareBanana'

export default class MasterBanana extends Component {
state = {
    bananaPosition: new Animated.ValueXY({ x: 30, y: 300 }),
    bananaPhase: 0,
    displayedText: new Animated.Value(0),
    bareBananaPosition: new Animated.ValueXY({ x: 10, y: 199 }),
    swipedRight: false,
    swipedLeft: false,
    swipedUp: false,
    swipedDown: false,
    swipedForBarrel: false,
    bananaPeelProcess: 'full',
    barrelTimer: 1,
    agingTimer: 0,
    spinAnim: new Animated.Value(0),
    gestureName: 'none',
    peelToBarrelSuccess: false,
    score: 0,
    missedBarrel: false,
    peelQuality: "none",
    peelPoints: { darkGreen: -4, lightGreen: -1, yellow: 2, yellowSpotted: 3, slightlyBruised: 1, bruised: -1, rotten: -5 }
}


    onSwipeUp = () => {
        this.setState({ swipedUp: true })
        // console.log("swiped up")
    }
    onSwipeDown = () => {
        // e.preventDefault()
        this.setState({ swipedDown: true })
        // console.log("swiped down")
    }
    onSwipeLeft = () => {
        this.setState({ swipedLeft: true })
        // console.log("swiped down")
    }
    onSwipeRight = () => {
        this.setState({ swipedRight: true })
        // console.log("swiped down")
    }

    peelTheBanana = () => {

this.setState({ bananaPeelProcess: "peeled" })
this.state.agingTimer > 0 && this.state.agingTimer <= 10 ?
this.setState({ peelQuality: "not-nearly-ready", score: this.state.score + this.state.peelPoints.darkGreen })
:
this.state.agingTimer > 10 && this.state.agingTimer <= 20 ?
this.setState({ peelQuality: "not-quite", score: this.state.score + this.state.peelPoints.lightGreen })
:
this.state.agingTimer > 20 && this.state.agingTimer <= 30 ?
this.setState({ peelQuality: "good", score: this.state.score + this.state.peelPoints.yellow })
:
this.state.agingTimer > 30 && this.state.agingTimer <= 33 ?
this.setState({ peelQuality: "yellow-spotted!", score: this.state.score + this.state.peelPoints.yellowSpotted })
:
this.state.agingTimer > 33 && this.state.agingTimer <= 40 ?
this.setState({ peelQuality: "Ok", score: this.state.score + this.state.peelPoints.slightlyBruised })
:
this.state.agingTimer > 40 && this.state.agingTimer <= 50 ?
this.setState({ peelQuality: "bruised", score: this.state.score + this.state.peelPoints.bruised })
:
this.state.agingTimer > 50 && this.state.agingTimer <= 60 ?
this.setState({ peelQuality: "rotten", score: this.state.score + this.state.peelPoints.rotten })
:
 null
}

handlePeelToBarrelSuccess = () => {
setTimeout = () => {
 this.setState({ peelToBarrelSuccess: true, score: this.state.score + 1 })
    }, 500
        // console.log(this.state)
    }

    animateSwipedUp = () => {
        Animated.timing(this.state.bananaPosition, {
            toValue: { x: 5, y: 30 },

            duration: 500,
        }).start();

        Animated.timing(this.state.bareBananaPosition, {
            toValue: { x: 150, y: 850 },
            duration: 500
        }).start()
        if (this.props.barrelPositionIndex === 0 && this.state.swipedForBarrel === false) {
            this.setState({ swipedForBarrel: true })
            this.handlePeelToBarrelSuccess()
        }
        else {
            this.setState({ swipedForBarrel: true })
            this.setState({ missedBarrel: true })

            // console.log("miss!")
        }
    }
    animateSwipedDown = () => {
        Animated.timing(this.state.bananaPosition, {
            toValue: { x: 5, y: 700 },
            duration: 500,
        }).start();
        Animated.timing(this.state.bareBananaPosition, {
            toValue: { x: 150, y: 850 },
            duration: 500
        }).start()
        if (this.props.barrelPositionIndex === 3 && this.state.swipedForBarrel === false) {
            // console.log("NICE!")
            this.setState({ swipedForBarrel: true })
            this.handlePeelToBarrelSuccess()
        }
        else {
            this.setState({ swipedForBarrel: true })
            this.setState({ missedBarrel: true })
            // console.log(this.state)

        }
    }
    animateSwipedLeft = () => {
        Animated.timing(this.state.bananaPosition, {
            toValue: { x: -200, y: 300 },
            duration: 500,
        }).start(
        );
        Animated.timing(this.state.bareBananaPosition, {
            toValue: { x: 150, y: 850 },
            duration: 500
        }).start()
        if (this.props.barrelPositionIndex === 1 && this.state.swipedForBarrel === false) {
            this.setState({ swipedForBarrel: true })
            this.handlePeelToBarrelSuccess()
            // console.log("NICE!")
        }
        else {
            this.setState({ swipedForBarrel: true })
            this.setState({ missedBarrel: true })
            // console.log(this.state)

        }
    }
    animateSwipedRight = () => {
        Animated.timing(this.state.bananaPosition, {
            toValue: { x: 200, y: 300 },
            duration: 500,
        }).start();
        Animated.timing(this.state.bareBananaPosition, {
            toValue: { x: 150, y: 850 },
            duration: 500
        }).start()
        if (this.props.barrelPositionIndex === 2 && this.state.swipedForBarrel === false) {
            this.setState({ swipedForBarrel: true })
            this.handlePeelToBarrelSuccess()
            // console.log("NICE!")
        }
        else {
            this.setState({ swipedForBarrel: true })
            this.setState({ missedBarrel: true })
            // console.log(this.state)
        }
    }

    componentDidMount = () => {

        this.interval = setInterval(
            () => {
                this.setState((prevState) => ({ agingTimer: prevState.agingTimer + 1 }))
            },
            1000);
        this.ageTheBanana()
    }
    ageTheBanana = () => {
        // console.log("aging", this.state)
this.state.agingTimer > 0 && this.state.agingTimer < 10 ?
[this.setState({ bananaPhase: 1 }), console.log("yoo")]
:
this.state.agingTimer > 10 && this.state.agingTimer <= 20 ?
this.setState({ bananaPhase: 2 })
:
this.state.agingTimer > 20 && this.state.agingTimer <= 30 ?
this.setState({ bananaPhase: 3 })
:
this.state.agingTimer > 30 & this.state.agingTimer <= 33 ?
this.setState({ bananaPhase: "yellow-spotted" })
:
this.state.agingTimer > 33 & this.state.agingTimer <= 40 ?
this.setState({ bananaPhase: 4 })
:
this.state.agingTimer > 40 & this.state.agingTimer <= 50 ?
this.setState({ bananaPhase: 5 })
:
this.state.agingTimer > 50 & this.state.agingTimer <= 60 ?
this.setState({ bananaPhase: 6 })
:
null
    }

    phase1Banana =
        <View>
            <Animated.View style={[styles.container, this.state.bananaPosition.getLayout()]}
            >
                <GestureRecognizer
                    onSwipe={this.onSwipe}
                    onSwipeDown={this.peelTheBanana}
                    config={this.peelConfig}
                >
                    <BananaPhase1 />
                </GestureRecognizer>
            </Animated.View>
        </View>;
    phase2Banana =
        <View>
            <Animated.View style={[styles.container, this.state.bananaPosition.getLayout()]}>
                <GestureRecognizer
                    onSwipe={this.onSwipe}
                    onSwipeDown={this.peelTheBanana}
                    config={this.peelConfig}
                >
                    <BananaPhase2 />
                </GestureRecognizer>
            </Animated.View>
        </View>;
    phase3Banana =
        <View>
            <Animated.View style={[styles.container, this.state.bananaPosition.getLayout()]}>
                <GestureRecognizer
                    onSwipe={this.onSwipe}
                    onSwipeDown={this.peelTheBanana}
                    config={this.peelConfig}
                >
                    <BananaPhase3 />
                </GestureRecognizer>
            </Animated.View>
        </View>;
    phase4Banana =
        <View>
            <Animated.View style={[styles.container, this.state.bananaPosition.getLayout()]}>
                <GestureRecognizer
                    onSwipe={this.onSwipe}
                    onSwipeDown={this.peelTheBanana}
                    config={this.peelConfig}
                >
                    <BananaPhase4 />
                </GestureRecognizer>
            </Animated.View>
        </View>;
    phase5Banana =
        <View>
            <Animated.View style={[styles.container, this.state.bananaPosition.getLayout()]}>
                <GestureRecognizer
                    onSwipe={this.onSwipe}
                    onSwipeDown={this.peelTheBanana}
                    config={this.peelConfig}
                >
                    <BananaPhase5 />
                </GestureRecognizer>
            </Animated.View>
        </View>;
    phase6Banana =
        <View>
            <Animated.View style={[styles.container, this.state.bananaPosition.getLayout()]}>
                <GestureRecognizer
                    onSwipe={this.onSwipe}
                    onSwipeDown={this.peelTheBanan}
                    config={this.peelConfig}
                >
                    <BananaPhase6 />
                </GestureRecognizer>
            </Animated.View>
        </View>;
    yellowSpottedBanana =
        <View>
            <Animated.View style={[styles.container, this.state.bananaPosition.getLayout()]}>
                <GestureRecognizer
                    onSwipe={this.onSwipe}
                    onSwipeDown={this.peelTheBanana}
                    config={this.peelConfig}
                >
                    <YellowSpotted />
                </GestureRecognizer>
            </Animated.View>
        </View>;

    halfPeeledBanana =
        <View>
            <Animated.View style={[styles.container, this.state.bananaPosition.getLayout()]}>
                <GestureRecognizer>
                    <HalfPeeledBanana />
                </GestureRecognizer>
            </Animated.View>
        </View>;
    bananaPeel = <View>
        <Animated.View style={[styles.container, this.state.bananaPosition.getLayout()]}>
            <GestureRecognizer
                onSwipe={this.onSwipe}
                onSwipeUp={this.animateSwipedUp}
                onSwipeDown={this.animateSwipedDown}
                onSwipeLeft={this.animateSwipedLeft}
                onSwipeRight={this.animateSwipedRight}
            >
                <Animated.View>
                    <Image source={require('../assets/banana-peeling/banana-peel.png')} style={styles.peelImage} />
                </Animated.View>
            </GestureRecognizer>
        </Animated.View>
    </View>
    peeledBanana =
        <View>
            <Animated.View style={[styles.container, this.state.bareBananaPosition.getLayout()]}>
                <GestureRecognizer>
                    <BareBanana />
                </GestureRecognizer>
            </Animated.View>
        </View>;


    peelResponseTextNotNearlyReady = <Animated.Text>Way too Early</Animated.Text>
    peelResponseTextNotQuite = <Animated.Text>Not Quite</Animated.Text>
    peelResponseTextGood = <Animated.Text>Nice One</Animated.Text>
    peelResponseTextYellowSpotted = <Animated.Text>Yellow Spotted Bonus!</Animated.Text>
    peelResponseTextOk = <Animated.Text>Ok</Animated.Text>
    peelResponseTextBruised = <Animated.Text>Too Late! Bruised!</Animated.Text>
    peelResponseTextRotten = <Animated.Text>Gross! Rotten!</Animated.Text>


    peelConfig = {
        velocityThreshold: -5,
        directionalOffsetThreshold: 1
    }

render(){
    return (
    <Animated.View>
    {this.state.bananaPeelProcess === "full" ?
    this.state.agingTimer > 0 && this.state.agingTimer <= 10 ?
    this.phase1Banana
    :
    this.state.agingTimer > 10 && this.state.agingTimer <= 20 ?
    this.phase2Banana
    :
    this.state.agingTimer > 20 && this.state.agingTimer <= 30 ?
    this.phase3Banana
    :
    this.state.agingTimer > 30 && this.state.agingTimer <= 33 ?
    this.yellowSpottedBanana
    :
    this.state.agingTimer > 30 && this.state.agingTimer <= 40 ?
    this.phase4Banana
    :
    this.state.agingTimer > 40 && this.state.agingTimer <= 50 ?
    this.phase5Banana
    :
    this.state.agingTimer > 50 && this.state.agingTimer <= 60 ?
    this.phase6Banana
    :
    null
    :
    this.state.bananaPeelProcess === "half-peeled" && this.state.agingTimer > 0 && this.state.agingTimer < 60 ?
    this.halfPeeledBanana
    :
    this.state.bananaPeelProcess === "peeled" ?
    [this.peeledBanana, this.state.peelToBarrelSuccess ? null : this.bananaPeel,
    this.state.peelQuality === "not-nearly-ready" ? this.peelResponseTextNotNearlyReady
    : this.state.peelQuality === "not-quite" ? this.peelResponseTextNotQuite
    : this.state.peelQuality === "good" ? this.peelResponseTextGood
    : this.state.peelQuality === "yellow-spotted" ? this.peelResponseTextYellowSpotted
    : this.state.peelQuality === "ok" ? this.peelResponseTextOk
    : this.state.peelQuality === "bruised" ? this.peelResponseTextBruised
    : this.state.peelQuality === "rotten" ? this.peelResponseTextRotten : null]
    :
                        null}        
        </Animated.View>
    )
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
