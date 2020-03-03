import CountDown from 'react-native-countdown-component';
import React, { useState } from 'react'
import { View, Text } from 'react-native'

export default function GameClock(props) {
    const [gamePause, setGamePause] = useState(true)
    return (
        <CountDown
            until={60}
            onFinish={() => {
                alert('game over')
                props.gameFinish()
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
    )
}