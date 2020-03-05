import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, PanResponder, Platform, Animated } from 'react-native'




export default class responseText extends Component {
    state={
        showText: true,
        currentText: <Animated.Text>Bananas!</Animated.Text>, 
        currentPointBonus: 0, 
        missedBarrel: <Animated.Text>Miss!</Animated.Text>,
        peeltoBarrelSuccess: <Animated.Text>Nice Shot!</Animated.Text>, 
        missedPoints: -1,
        madeBarrelPoints: 1
    }
    peelResponseTextNotNearlyReady = <Animated.Text style={[styles.funkyText, { opacity: this.state.animatedText }]}>Way too Early</Animated.Text>
    peelResponseTextNotQuite = <Animated.Text style={styles.funkyText}>Not Quite</Animated.Text>
    peelResponseTextGood = <Animated.Text style={styles.funkyText}>Nice One</Animated.Text>
    peelResponseTextYellowSpotted = <Animated.Text style={styles.funkyText}>Yellow Spotted Bonus!</Animated.Text>
    peelResponseTextOk = <Animated.Text style={styles.funkyText}>Ok</Animated.Text>
    peelResponseTextBruised = <Animated.Text style={styles.funkyText}>Too Late! Bruised!</Animated.Text>
    peelResponseTextRotten = <Animated.Text style={styles.funkyText}>Gross! Rotten!</Animated.Text>
    bananaWasteTextResponse = <Animated.Text style={styles.funkyText}>What a waste of potassium!</Animated.Text>




    componentWillUnmount(){
    }
            componentDidMount = () => {
    
                this.interval = setInterval(
                    () => {
                        this.setState({showText: false, currentPointBonus: null, missedBarrel: null, peeltoBarrelSuccess: null})
                        },
                    3000);
                this.renderText()
            }
                    renderText=()=>{
                        
                        this.props.peelQuality === "not-nearly-ready" ? this.setState({currentText: this.peelResponseTextNotNearlyReady, showText: true, currentPointBonus: this.props.peelPoints.darkGreen})
                            :
                            this.props.peelQuality === "not-quite" ? this.setState({
                                currentText: this.peelResponseTextNotQuite, showText: true, currentPointBonus: this.props.peelPoints.lightGreen})
                                :
                                this.props.peelQuality === "good" ? this.setState({
                                    currentText: this.peelResponseTextGood, showText: true, currentPointBonus: this.props.peelPoints.yellow})
                                    :
                                    this.props.peelQuality === "yellow-spotted" ? this.setState({
                                        currentText: this.peelResponseTextYellowSpotted, showText: true, currentPointBonus: this.props.peelPoints.yellowSpotted})
                                        :
                                        this.props.peelQuality === "ok" ? this.setState({
                                            currentText: this.peelResponseTextOk, showText: true, currentPointBonus: this.props.peelPoints.slightlyBruised})
                                            :
    
                                            this.props.peelQuality === "bruised" ? this.setState({
                                                currentText: this.peelResponseTextBruised, showText: true, currentPointBonus: this.props.peelPoints.bruised})
                                                :
                                                this.props.peelQuality === "rotten" ? this.setState({
                                                    currentText: this.peelResponseTextRotten, showText: true, currentPointBonus: this.props.peelPoints.rotten})
                                                : null
                    
            }
    render(){

       let currentText
        this.state.showText ? 
        currentText = <Animated.Text>{this.state.currentText}</Animated.Text>  
        :
        currentText= null
    return (
        <View>
        <Animated.View style={styles.funkyText}>
            {currentText}
            <Animated.Text>{this.state.currentPointBonus}</Animated.Text> 
        </Animated.View>
        <Animated.View style={styles.funkyText}>
            <Animated.Text>{this.props.peeltoBarrelSuccess ? this.state.peeltoBarrelSuccess : this.props.missedBarrel ? this.state.missedBarrel : null}</Animated.Text> 
            <Animated.Text>{this.props.peeltoBarrelSuccess ? this.state.madeBarrelPoints : this.props.missedBarrel ? this.state.missedPoints : null}</Animated.Text> 
        </Animated.View>
        </View>
    )

}
}

styles = StyleSheet.create({
funkyText: {
top: 100,
left: 100
}

})