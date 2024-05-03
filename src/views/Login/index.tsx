import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { CheckBox, Input, Button } from '@rneui/base'
import { connect } from 'react-redux'
import action from '@store/action'

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    alignItems: 'center',
    paddingTop: '20%',
    backgroundColor: '#95c277'
  },
  callText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#fefefe',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
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
  },
  buttonView: {
    width: 100,
    height: 100,
    backgroundColor: '#e88e86',
  },
  btnConrView: {
    width: 100,
    height: 100,
    borderRadius: 999,
    shadowColor: '#000',
    elevation: 5,
    shadowOffset: { width: 0, height: 5 },
  }
})

const errorMsg = ['', '账户或密码输入错误', '请完善相关账户信息', '请完善相关协议', '两次密码不一致', '用户已存在']
const Login: React.FC<ScreenProps<'Login'> & { users: { username: string, password: string }[], register: Function }> = ({ navigation, users, register }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [sPassword, setSPassword] = useState('')
  const [isLogin, setIsLogin] = useState(true)
  const [error, setError] = useState<string>()
  const [pro, setPro] = useState(false)

  // 用户登录
  const goHome = () => {
    // 判断是否具有账户密码
    if (!username || !password) return setError(errorMsg[2])
    if (!pro) return setError(errorMsg[3])
    const login = users.some(item => {
      return item['username'] === username && item['password'] === password
    })
    if (!login) return setError(errorMsg[1])
    navigation.navigate('Home')
  }

  // 用户注册
  const goRegister = () => {
    if (!username || !password || !sPassword) return setError(errorMsg[2])
    if (sPassword !== password) return setError(errorMsg[4])

    const login = users.some(item => {
      return item['username'] === username && item['password'] === password
    })
    if (login) return setError(errorMsg[5])
    // 注册成功，将用户信息存入
    register({
      username,
      password
    })
    setIsLogin(!isLogin)
  }

  const changeValue = (value: any, type: string) => {
    if (type === 'username') {
      setUsername(value)
    } else if (type === 'password') {
      setPassword(value)
    } else if (type === 'pro') {
      setPro(value)
    } else if (type === 'sPassword') {
      setSPassword(value)
    }
    setError(errorMsg[0])
  }
  return (
    <View style={[styles.containerView]}>
      <Text style={styles.callText} onPress={() => { setIsLogin(!isLogin); setError(errorMsg[0]) }}>Welcome to Metaverse Community !</Text>
      {/* 表单 */}
      <Input
        placeholder='用户名'
        inputContainerStyle={styles.inputView}
        errorStyle={[globalStyles.baseErrorMsg, { marginLeft: 80 }]}
        errorMessage={error}
        onChangeText={value => changeValue(value, 'username')}
      />
      <Input
        placeholder='密码'
        inputContainerStyle={styles.inputView}
        secureTextEntry={true}
        onChangeText={value => changeValue(value, 'password')}
      />
      {/* 协议 */}

      {/* 登录按钮 */}
      {
        isLogin ?
          <>
            <CheckBox
              checked={pro}
              title="我已阅读相关条约"
              checkedIcon="circle"
              uncheckedIcon="check"
              containerStyle={{ backgroundColor: '#95c277' }}
              textStyle={{ color: '#fff' }}
              onPress={() => changeValue(!pro, 'pro')}
            />
            <Button onPress={goHome} containerStyle={styles.btnConrView} buttonStyle={styles.buttonView}>立即登录</Button>
          </>
          :
          <>
            <Input
              placeholder='确认密码'
              inputContainerStyle={styles.inputView}
              secureTextEntry={true}
              onChangeText={value => changeValue(value, 'sPassword')}
            />
            <Button onPress={goRegister} containerStyle={styles.btnConrView} buttonStyle={styles.buttonView}>立即注册</Button>
          </>
      }
      {/* 注册/登录 */}
    </View>
  )
}

const mapStateToProps = (state: any) => {
  return {
    users: state.user,
  }
};

const mapDispatchToProps = {
  register: action.user.regisUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)

