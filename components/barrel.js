import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, PanResponder, Platform, Animated } from 'react-native'

export default function Barrel(props) {


    return (

        <Animated.View>
            <Animated.Image source={require('../assets/barrel.png')}
                style={styles.image}
            />
        </Animated.View>
    )
}
const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 80,
        position: 'absolute'
    }
})