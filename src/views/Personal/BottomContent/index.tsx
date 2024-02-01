import React from 'react'
import { View } from 'react-native'
import { ListItem } from '@rneui/base';

const BottomContent = ({ setVisible }: {
  setVisible: Function
}) => {
  const list = [
    { title: 'List Item 1' },
    { title: 'List Item 2' },
    {
      title: 'Cancel',
      containerStyle: { backgroundColor: 'red' },
      titleStyle: { color: 'white' },
      onPress: () => setVisible(false),
    },
  ];
  return (
    <>
      {list.map((l, i) => (
        <ListItem
          key={i}
          containerStyle={l.containerStyle}
          onPress={l.onPress}
        >
          <ListItem.Content>
            <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
    </>
  )
}

export default BottomContent
