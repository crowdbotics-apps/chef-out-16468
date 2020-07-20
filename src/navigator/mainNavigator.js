import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile82128Navigator from '../features/UserProfile82128/navigator';
import UserProfile53580Navigator from '../features/UserProfile53580/navigator';
import Maps53576Navigator from '../features/Maps53576/navigator';
import Add-Item53572Navigator from '../features/Add-Item53572/navigator';
import Maps53571Navigator from '../features/Maps53571/navigator';
import UserProfile50705Navigator from '../features/UserProfile50705/navigator';
import Maps50701Navigator from '../features/Maps50701/navigator';
import Add-Item50697Navigator from '../features/Add-Item50697/navigator';
import Maps50696Navigator from '../features/Maps50696/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile82128: { screen: UserProfile82128Navigator },
UserProfile53580: { screen: UserProfile53580Navigator },
Maps53576: { screen: Maps53576Navigator },
Add-Item53572: { screen: Add-Item53572Navigator },
Maps53571: { screen: Maps53571Navigator },
UserProfile50705: { screen: UserProfile50705Navigator },
Maps50701: { screen: Maps50701Navigator },
Add-Item50697: { screen: Add-Item50697Navigator },
Maps50696: { screen: Maps50696Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
