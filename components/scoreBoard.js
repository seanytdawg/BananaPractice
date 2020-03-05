import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function ScoreBoard(props) {
    return (
        <View style={styles.where}>
            <Text>{props.peelQuality}</Text>
            <Text style = {styles.titleText}>Score:</Text>
            <Text>{props.score}</Text>
        </View>


    )
}

 const styles = StyleSheet.create({
    titleText: {
        fontSize: 30,
        color: 'black'
    }, 

    where: {
        top: 20,
        left: 250
    }, 



})