import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import PostScreen from '../screens/postScreen/PostScreen';
import PostDetailScreen from '../screens/postDetailScreen/PostDetailScreen';

const StackNavigator = createStackNavigator(
  {
    PostScreen: {screen: PostScreen},
    PostDetailScreen: {screen: PostDetailScreen},
  },
  {
    initialRouteName: 'PostScreen',
    headerMode: 'none',
  },
);
export default createAppContainer(StackNavigator);
