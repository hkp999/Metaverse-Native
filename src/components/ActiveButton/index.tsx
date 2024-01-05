import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextStyle, ViewStyle } from 'react-native';
import { makeStyle } from '@styles/utils';

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#fff'
  },
  wrapperCustom: {
    borderRadius: 2,
    padding: 6,
    width: 100
  },
  activeStyles: {
    backgroundColor: '#f5f5f5',
  },
  defaultStyles: {
    backgroundColor: 'rgb(91, 150, 254)'
  }
});

const ActiveButton = (
  {
    style,
    textStyle,
    defaultTitle = '关注',
    activeTitle = '已关注',
    defaultStyle,
    activeStyle,
    defaultText,
    activeText
  }
  : {
    style?: ViewStyle,
    textStyle?: TextStyle,
    defaultTitle?: string,
    activeTitle?: string,
    defaultStyle?:ViewStyle,
    activeStyle?: ViewStyle,
    defaultText?: TextStyle,
    activeText?: TextStyle
  }
  ) => {
  const [isChoose, setIsChoose] = useState(false);

  return (
      <Pressable
        onPress={() => {
          setIsChoose(!isChoose);
        }}
        style={[
          styles.wrapperCustom,
          style,
          isChoose ? makeStyle(styles.activeStyles, activeStyle) : makeStyle(styles.defaultStyles, defaultStyle),
        ]}>
        <Text style={[
          styles.text,
          textStyle,
          isChoose ? activeText : defaultText,
        ]}>
          {isChoose ? activeTitle : defaultTitle}
        </Text>
      </Pressable>
  );
}

export default ActiveButton
