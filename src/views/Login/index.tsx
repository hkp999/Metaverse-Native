import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { CheckBox, Input, Button } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'


const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    alignItems: 'center',
    paddingTop: '20%',
    backgroundColor: '#95c277'
  },
  callText: {
    fontSize: 28,
    marginBottom: 30,
    textAlign: 'center'
  },
  inputView: {
    backgroundColor: '#f0e7a3',
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: globalThis.baseInfo.baseWidth - 100,
    marginLeft: 50,
    borderRadius: 999,
    borderWidth: 2,
    borderBottomWidth: 2,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 3,
  }
})

const Login:React.FC<ScreenProps<'Login'>> = ({navigation}) => {
  const [pro, setPro] = useState(false)

  const goHome = () => {
    if(pro) {
      navigation.navigate('Home')
    }
  }
  return (
    <View style={styles.containerView}>
      <Text style={styles.callText}>Welcome to Metaverse Community !</Text>
      {/* 表单 */}
      <Input placeholder='用户名' inputContainerStyle={styles.inputView} />
      <Input placeholder='密码' inputContainerStyle={styles.inputView} secureTextEntry={true} />
      {/* 协议 */}
      <CheckBox
        checked={pro}
        title="我已阅读相关条约"
        checkedIcon="circle"
        uncheckedIcon="check"
        containerStyle={{ backgroundColor: '#95c277' }}
        textStyle={{ color: '#fff' }}
        onPress={() => setPro(!pro)}
      />
      {/* 登录按钮 */}
      <Button onPress={goHome} buttonStyle={{backgroundColor: '#e78e86',width: 100,height: 100,borderRadius: 999}} >探索元宇宙</Button>
      {/* 注册/登录 */}
    </View>
  )
}

export default Login

