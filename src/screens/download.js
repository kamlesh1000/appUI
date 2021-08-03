import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class DownloadScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontFamily: 'Raleway-Bold',
            fontSize: 26,
          }}>
          DOWNLOAD SCREEN
        </Text>
      </View>
    );
  }
}

export default DownloadScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
