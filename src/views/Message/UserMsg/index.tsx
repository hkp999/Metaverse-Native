import React, { useCallback, useState } from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';
import { RefreshControl } from 'react-native';
import RenderItem from './RenderItem';
import HiddenItem from './HiddenItem';
import Domain from '../Domain';

const listViewData = Array(20)
  .fill("")
  .map((_, i) => ({ key: `${i}`, text: `item #${i}` }));

const wait = (timeout: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

const UserMsg = () => {
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    wait(2000).then(() => setRefreshing(false))
  }, [])

  return (
    <SwipeListView
      data={listViewData}
      renderItem={data => <RenderItem data={data} />}
      renderHiddenItem={() => <HiddenItem />}
      ListHeaderComponent={Domain}
      rightOpenValue={-80}
      leftOpenValue={0}
      disableRightSwipe
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      previewOpenDelay={3000}//侧滑展开的时间
      closeOnScroll
      closeOnRowPress
      closeOnRowBeginSwipe
    />

  )
}

export default UserMsg
