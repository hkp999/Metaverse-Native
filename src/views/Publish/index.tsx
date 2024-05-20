import React, { useState, useEffect } from 'react'
import { View, TextInput, Button, Image, ScrollView, Alert, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import ImagePicker from 'react-native-image-crop-picker'
import { connect } from 'react-redux'
import action from '@store/action'
import { formatCurrentDateTime } from '@utils/index'

export type UserInfo = {
  username: string;
  avator: string;
  title: string;
  description: string;
  content: string;
  images: string[];
  create_time: string;
};

const Publish = ({ userInfo, addArtical, addOwnArtical, addDynamicCount }: {
  userInfo: UserInfo,
  addOwnArtical: Function,
  addArtical: Function,
  addDynamicCount: Function
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [selectedImages, setSelectedImages] = useState<{ uri: string }[]>([]);
  const navigation = useNavigation<NavigatePage>()

  const MAX_IMAGES = 9; // 最大上传数量

  useEffect(() => {
    navigation.setOptions({
      title: '动态发布'
    });
  }, [])

  const chooseImage = () => {
    ImagePicker.openPicker({
      multiple: true,
      cropping: true
    }).then(images => {
      if (images.length > MAX_IMAGES) {
        Alert.alert('提示', `最多只能上传${MAX_IMAGES}张图片`);
        return;
      }
      const newImages = images.map(image => ({ uri: image.path }));
      setSelectedImages([...selectedImages, ...newImages]);
      // 在这里可以添加保存图片到本地的逻辑
    }).catch(error => {
      console.log('Error choosing image:', error);
    });
  };

  const deleteImage = (index: number) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
  }

  const makeArtical = () => {
    const artical = {
      username: userInfo.username,
      avator: userInfo.avator,
      title,
      content,
      description,
      images: selectedImages,
      create_time: formatCurrentDateTime()
    }
    addArtical(artical)
    addOwnArtical(artical)
    addDynamicCount()
    Alert.alert('提示', '提交成功')
    navigation.goBack()
  }
  return (
    <View
      style={{
        paddingHorizontal: 20
      }}>
      <TextInput
        placeholder='标题'
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <TextInput
        value={description}
        onChangeText={text => setDescription(text)}
        placeholder='简介'
      />
      <TextInput
        multiline={true}
        numberOfLines={4}
        placeholder='内容'
        value={content}
        onChangeText={text => setContent(text)}
      />
      <ScrollView style={{
        marginBottom: 20
      }} horizontal={true}>
        {selectedImages.map((image, index) => (
          <TouchableOpacity key={index} onPress={() => deleteImage(index)}>
            <Image source={image} style={{ width: 100, height: 100, marginRight: 10 }} />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Button title="选择图片" onPress={chooseImage} />
      <View style={{
        marginBottom: 10
      }}></View>
      <Button title="提交文章" onPress={makeArtical} />
    </View>
  )
}

const mapStateToProps = (state: any) => {
  return {
    userInfo: state.nowUser
  }
};

const mapDispatchToProps = {
  addArtical: action.publish.addArtical,
  addOwnArtical: action.nowUser.addOwnArtical,
  addDynamicCount: action.nowUser.addDynamicCount
};

export default connect(mapStateToProps, mapDispatchToProps)(Publish)
