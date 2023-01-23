import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import { colors } from './src/utils/colors'
import { Focus } from './src/features/Focus'
import { Timer } from './src/features/Timer'
import { FocusHistory } from './src/features/FocusHistory';

export default function App() {
  const [hasTimer, setHasTimer] = useState({topic: ''})
  const [historyList, setHistoryList] = useState([])

  return (
    <SafeAreaView style={styles.container}>
      {hasTimer.topic.length !== 0 ? 
        <Timer 
          topic={hasTimer.topic}
          onTimerEnd={(prevTopic) => setHistoryList([...historyList, prevTopic])}
          clearTopic={() => setHasTimer({ topic: ''})} 
        /> 
        : 
        <>
          <Focus startTimer={(input) => setHasTimer({ topic: input })}/>
          {!!historyList.length && <FocusHistory historyList={historyList} />}
        </>
      }
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.primaryColor
  }
});
