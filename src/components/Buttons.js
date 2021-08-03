import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Colors from '../res/colors';

const Primary = ({title, onPress, style}) => {
  return (
    <LinearGradient
      style={{
        paddingHorizontal: 16,
        borderRadius: 5,
      }}
      colors={[Colors.gradient1, Colors.gradient2]}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 1}}>
      <TouchableOpacity
        activeOpacity={0.75}
        style={[
          {
            paddingVertical: 4,
            justifyContent: 'center',
            alignItems: 'center',
          },
          style,
        ]}
        onPress={onPress}>
        <Text
          style={{
            fontFamily: 'Raleway-Bold',
            fontSize: 12,
            color: Colors.white,
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default {
  Primary,
};
