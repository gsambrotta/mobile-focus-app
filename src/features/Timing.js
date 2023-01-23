import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';

export const Timing = ({ onChangeTime, detract }) => {
    return (
        <View style={styles.container}>
            <RoundedButton 
                size={75} 
                title={detract ? `- ${10}`: `+ ${10}`} 
                onPress={() => onChangeTime(9)} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
})