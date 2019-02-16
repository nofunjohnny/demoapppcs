import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './yourScreenPath';

const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen }
});

export default createAppContainer(AppNavigator);