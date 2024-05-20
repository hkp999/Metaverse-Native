import React, { useContext, useState } from 'react'
import { View, Image, StyleSheet, StatusBar, TextInput } from 'react-native'
import IconFont from '@components/IconFont'
import TableBarTop from '@components/TableBarTop'
import { ThemeContext } from '@theme/index'
import { Icon } from '@assets/index'
import SearchView from './SearchView'

const styles = StyleSheet.create({
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    elevation: 20,
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 5,
    paddingBottom: 10
  },
  logo: {
    width: 50,
    height: 50,
    marginHorizontal: 20,
    borderRadius: 5
  },
  input: {
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 9999,
  },
  inputText: {
    width: '70%',
    paddingLeft: 10,
    borderBottomWidth: 0,
  },
  statusStyle: {
    color: '#000'
  },
  navStyle: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})

const Home: React.FC<ScreenProps<'Home'>> = () => {
  const { theme } = useContext(ThemeContext)
  const [keyword, setKeyWord] = useState('')

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* 状态栏 */}
      <StatusBar backgroundColor={theme.bgColor} barStyle={'dark-content'} />
      {/* 搜索框 */}
      <View style={styles.inputView}>
        <Image
          style={styles.logo}
          source={Icon['Meta']}
        />
        <View style={styles.input}>
          <IconFont name="Search" size={20} />
          <TextInput value={keyword} onChangeText={value => setKeyWord(value)} style={styles.inputText} />
        </View>
      </View>
      {/* 顶部选项卡 */}
      {
        keyword ?
          <SearchView keyword={keyword} />
          :
          <TableBarTop />
      }

    </View>
  )
}

export default Home
