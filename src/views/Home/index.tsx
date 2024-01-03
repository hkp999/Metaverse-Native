import React from 'react'
import { View, Text, Image, StyleSheet,StatusBar,TouchableOpacity } from 'react-native'
import IconFont from '@components/IconFont'
import NavList from './NavList'

const styles = StyleSheet.create({
  inputView:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  logo: {
    width: 50,
    height: 50,
    marginHorizontal: 10
  },
  oninput:{
    width: '60%'
  },
  input: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 9999,
    height: 40,
  },
  inputText: {
    fontSize: 16,
    lineHeight: 32,
    marginLeft: 5
  },
  statusStyle: {
    color: '#000'
  },
  navStyle:{
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})

const Home: React.FC<ScreenProps<'Home'>> = ({navigation}) => {

  return (
    <View style={{ flex: 1,backgroundColor: '#fff' }}>
      {/* 状态栏 */}
      <StatusBar backgroundColor="#fff" barStyle={'dark-content'}/>
      {/* 搜索框 */}
      <View style={styles.inputView}>
        <Image
        style={styles.logo}
        source={{
          uri: 'https://vitejs.dev/logo-with-shadow.png'
        }} />
        <TouchableOpacity style={styles.oninput} onPress={() => navigation.navigate('Settings')}>
          <View style={styles.input}>
            <IconFont name="Search" size={20} />
            <Text style={styles.inputText}>请输入关键字</Text>
          </View>
        </TouchableOpacity>
      </View>
      <NavList />
  </View>
  )
}

export default Home
