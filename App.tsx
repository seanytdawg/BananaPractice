
import React, { Component,  } from 'react'
import BananaGame from './screens/bananaGame'
import { View, Dimensions, Animated, Button, Text, StyleSheet} from 'react-native'
import Barrel from './components/barrel'

export default class App extends Component{
// const config={
//   velocityThreshold: 0.1,
//     directionalOffsetThreshold: 20
// }




state = {
  playGame: false,
  anyBarrelPosition: [{ x: -30, y: 60 }, { x: -190, y: 350 }, { x: 150, y: 350 }, { x: -30, y: 750 }],
  barrelPositionIndex: 2,
  barrelTimer: 0,
}

// componentDidMount(){
//   this.onStart()
// }



//   moveBarrel = ()=>{
//     if (this.state.barrelTimer === 10) {
//       let newIndex = Math.floor(Math.random() * 4)
//       let num = 5
//       this.setState({ barrelPositionIndex: newIndex })
//     }
//     if (this.state.barrelTimer === 20) {
//       let newIndex = [Math.floor(Math.random() * 4)][0]
//       // console.log(newIndex)
//       this.setState({ barrelPositionIndex: newIndex })
//     }
//     if (this.state.barrelTimer === 30) {
//       let newIndex = [Math.floor(Math.random() * 4)][0]
//       // console.log(newIndex)
//       this.setState({ barrelPositionIndex: newIndex })
//     }
//     if (this.state.barrelTimer === 40) {
//       let newIndex = [Math.floor(Math.random() * 4)][0]
//       // console.log(newIndex)
//       this.setState({ barrelPositionIndex: newIndex })
//     }
//     if (this.state.barrelTimer === 50) {
//       let newIndex = [Math.floor(Math.random() * 4)][0]
//       // console.log(newIndex)
//       this.setState({ barrelPositionIndex: newIndex })
//     }
// }

endGame=()=>{
  this.setState({playGame: false})
}

render(){
  return (
    this.state.playGame ?
    <View style={{
      width: Dimensions.get("screen").width, height: Dimensions.get("screen").height}}
      >
    <BananaGame playGame = {this.state.playGame} endGame={this.endGame}/>
    </View>
  :
  <View style={styles.button}>
    <Button title="Start Game"
          onPress={()=>this.setState({playGame: true})}
    /> 
  </View>
  );
    }
}

const styles = StyleSheet.create({

  button: {
    flex: .06,
    top: 290,
    left: 0,
    backgroundColor: '#2B4141'
  }

})
