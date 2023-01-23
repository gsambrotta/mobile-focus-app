import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper'
import { colors } from '../utils/colors'
import { RoundedButton } from '../components/RoundedButton';
import { spacing, fontSizes } from '../utils/sizes';

export const Focus = ({ startTimer }) => {
    const [input, setInput] = useState('')

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Productvity tool
            </Text>
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.textInput}
                    label="Let's focus on..."
                    onChangeText={setInput}
                />
                <View style={styles.buttonContainer}>
                    <RoundedButton
                        title='+'
                        size={50}
                        onPress={() => startTimer(input)}
                    />
                </View>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
    },
    text: {
        color: colors.white,
        fontSize: fontSizes.xxl
    },
    inputContainer: {
        paddingTop: spacing.lg,
        paddingBottom: spacing.lg,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    textInput: {
        flex: 1,
        marginRight: spacing.sm
    },
    buttonContainer: {
        justifyContent: 'center'
    }
})