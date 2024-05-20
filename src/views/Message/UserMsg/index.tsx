import React, { useCallback, useState } from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';
import { RefreshControl } from 'react-native';
import { delayLoading } from '@utils/index';
import RenderItem from './RenderItem';
import HiddenItem from './HiddenItem';
import { connect } from 'react-redux';
import { UserInfo } from '@store/reducer/user';
import NullData from '@components/NullData';

const UserMsg = ({ follow }: {
  follow: UserInfo[]
}) => {
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    delayLoading(1000).then(() => setRefreshing(false))
  }, [])

  return (
    <>
      {
        follow.length ?
        <SwipeListView
          data={follow}
          renderItem={data => <RenderItem data={data} />}
          renderHiddenItem={() => <HiddenItem />}
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
        : <NullData />
      }
    </>

  )
}

const mapStateToProps = (state: any) => {
  return {
    follow: state.follow,
  }
};

export default connect(mapStateToProps)(UserMsg)
