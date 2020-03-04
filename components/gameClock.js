import CountDown from 'react-native-countdown-component';
import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function GameClock(props) {
    const [gamePause, setGamePause] = useState(false)
    return (
        <View styles={styles.where}>
        <CountDown
            until={60}
            onFinish={() => {
                alert('game over')
                props.endGame()
            }
            }
            size={50}
            running={gamePause ? false : true}
            onPress={() => () => setGamePause(!gamePause)}
            timeToShow={['S']}
            digitStyle={{ backgroundColor: 'black' }}
            digitTxtStyle={{ color: '#1CC625' }}
            size={20}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    where:{
        top: 1,
        left: 100,
    }
})