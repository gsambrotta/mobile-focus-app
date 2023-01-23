import React, { useState } from 'react';
import { View, Text, Vibration, StyleSheet } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { useKeepAwake } from 'expo-keep-awake'
import { Countdown } from '../components/Countdown'
import { RoundedButton } from '../components/RoundedButton';
import { Timing } from '../features/Timing'
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

const ONE_SEC_IN_MILLIS = 1000
const  INTERVAL_VIBRATION = [
    1 * ONE_SEC_IN_MILLIS,
    2 * ONE_SEC_IN_MILLIS,
    3 * ONE_SEC_IN_MILLIS,
    4 * ONE_SEC_IN_MILLIS,
    5 * ONE_SEC_IN_MILLIS
]

export const Timer = ({ topic, onTimerEnd, clearTopic }) => {
    useKeepAwake()
    const [isStarted, setIsStarted] = useState(false)
    const [progress, setProgress] = useState(1)
    const [minutes, setMinutes] = useState(0.1)

    const handleTimerOnchangeTime = (time, detract) => {
        if (minutes < '09' && detract) return
        detract ? setMinutes(minutes - time): setMinutes(minutes + time)
    }

    const onEnd = (reset) => {
        Vibration.vibrate(INTERVAL_VIBRATION)
        setIsStarted(false)
        setProgress(1)
        reset()
        onTimerEnd(topic)
    }

    return (
        <View style={styles.container}>
            <View style={styles.countdownContainer}>
                <Countdown 
                    minutes={minutes}
                    isPaused={!isStarted}
                    onProgress={setProgress}
                    onEnd={onEnd}
                />
            </View>
            <View style={styles.topicWrapper}>
                <Text style={styles.title}>Focusing on:</Text>
                <Text style={styles.topic}>{topic}</Text>
            </View>
            <View style={{ paddingBottom: spacing.xxxl, paddingTop: spacing.md}}>
                <ProgressBar 
                    progress={progress}
                    color={colors.secondaryColor}
                    style={{ height: 10 }}
                />
            </View>

            <View style={styles.buttonWrapper}>
                <Timing onChangeTime={(time) => handleTimerOnchangeTime(time, true)} detract />
                <RoundedButton title={isStarted ? 'pause' : 'start'} onPress={() => setIsStarted(isStarted ? false : true) } />
                <Timing onChangeTime={(time) => handleTimerOnchangeTime(time)} />
            </View>
            <View style={styles.clearButtonWrapper} >
                <RoundedButton size={50} title='reset' onPress={() => clearTopic() } />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    countdownContainer: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    topicWrapper: {
        paddingTop: spacing.xl
    },
    title: {
        fontSizes: fontSizes.xxl,
        color: colors.secondaryColor,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    topic: {
        color: colors.lightGreyColor,
        textAlign: 'center',
        fontSizes: fontSizes.xl
    },
    buttonWrapper: {
        flex: 0.3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    timingWrapper: {
        flex: 0.1,
        padding: spacing.md
    },
    clearButtonWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: spacing.lg
    }

})