import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { spacing, fontSizes } from '../utils/sizes';

export const FocusHistory = ({ historyList }) => {
    const renderItem = ({ item }) => (
        <Text style={styles.item}>{item}</Text>
    )

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Focus History</Text>
            <FlatList 
                data={historyList}
                renderItem={renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: spacing.lg,
        padding: spacing.md,
    },  
    title: {
        color: colors.secondaryColor,
        fontSize: fontSizes.lg,
        marginBottom: spacing.sm,
        fontWeight: 'bold'
    },
    item: {
        color: colors.lightGreyColor,
        fontSize: fontSizes.md,
        paddingTop: spacing.sm
    }
}) 