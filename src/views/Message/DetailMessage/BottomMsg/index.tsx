import action from '@store/action'
import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Button } from 'react-native'
import { connect } from 'react-redux'
import { formatCurrentDateTime } from '@utils/index'

const styles = StyleSheet.create({
  mainView: {
    height: 50,
    flexDirection: 'row',
    paddingHorizontal: '5%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  textInput: {
    height: 40,
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 9999,
  },
  button: {
    backgroundColor: 'red',
    width: '20%',
    borderRadius: 4,
    overflow: 'hidden',
  }
})

const BottomMsg = ({ addMessage, nowUser, sendToUsername }: {
  addMessage: Function,
  nowUser: {
    username: string;
  },
  sendToUsername: string
}) => {

  const [value, setValue] = useState('')

  const handleSend = () => {
    addMessage(sendToUsername, {
      username: nowUser.username,
      message: value,
      time: formatCurrentDateTime()
    })

    setValue('')
  }

  return (
    <View style={styles.mainView}>
      <TextInput onChangeText={text => setValue(text)} value={value} style={styles.textInput} placeholder='此处可发言' />
      <View style={styles.button}>
        <Button onPress={handleSend} color='#07c160' title='发送' />
      </View>
    </View>
  )
}

const mapStateToProps = (state: any) => {
  return {
    nowUser: state.nowUser,
  }
};

const mapDispatchToProps = {
  addMessage: action.userMsg.addMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(BottomMsg)
