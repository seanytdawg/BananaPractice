import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet, PanResponder, Platform, Animated } from 'react-native'


export default function HalfPeeled(props) {

    return (
        <Animated.View >
            <Image source={require('../assets/banana-peeling/half-peeled-banana.png')} style={styles.banana} />
        </Animated.View>
    )
}


const styles = StyleSheet.create({

    banana: {
        position: "absolute",
        height: 105,
        width: 84,

    }

})