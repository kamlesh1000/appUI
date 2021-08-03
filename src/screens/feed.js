import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class GridScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontFamily: 'Raleway-Bold',
            fontSize: 26,
          }}>
          FEED SCREEN
        </Text>
      </View>
    );
  }
}

export default GridScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
