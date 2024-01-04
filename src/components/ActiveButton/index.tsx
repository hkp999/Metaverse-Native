import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, ViewStyle } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
    width: 100
  },
  activeStyles: {
    backgroundColor: '#eee',
  },
  defaultStyles: {
    backgroundColor: 'rgb(210, 230, 255)'
  }
});

const ActiveButton = (
  {
    style = styles.wrapperCustom,
    defaultTitle = '关注',
    activeTitle = '已关注',
    defaultStyle = styles.defaultStyles,
    activeStyle = styles.activeStyles
  }
  : {
    style?: ViewStyle,
    defaultTitle?: string,
    activeTitle?: string,
    defaultStyle?:ViewStyle,
    activeStyle?: ViewStyle
  }
  ) => {
  const [isChoose, setIsChoose] = useState(false);

  return (
      <Pressable
        onPress={() => {
          setIsChoose(!isChoose);
        }}
        style={[
          isChoose ? defaultStyle : activeStyle,
          style
        ]}>
        <Text style={styles.text}>
          {isChoose ? activeTitle : defaultTitle}
        </Text>
      </Pressable>
  );
}

export default ActiveButton
