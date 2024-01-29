import { SwipeListView } from 'react-native-swipe-list-view';
import RenderItem from './RenderItem';
import HiddenItem from './HiddenItem';
import Domain from '../Domain';

const listViewData = Array(20)
  .fill("")
  .map((_, i) => ({ key: `${i}`, text: `item #${i}` }));

const UserMsg = () => {
  return (
    <SwipeListView
      data={listViewData}
      renderItem={data => <RenderItem data={data} />}
      renderHiddenItem={() => <HiddenItem />}
      ListHeaderComponent={Domain}
      rightOpenValue={-80}
      leftOpenValue={0}
      disableRightSwipe
      previewOpenDelay={3000}//侧滑展开的时间
      closeOnScroll
      closeOnRowPress
      closeOnRowBeginSwipe
    />

  )
}

export default UserMsg
