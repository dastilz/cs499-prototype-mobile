import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Login from '../screens/login';
import TeacherPortal from '../screens/teacherPortal';

const screens = {
    Login: {
        screen: Login,
        navigationOptions: {
            headerShown: false
        }
    },
    TeacherPortal: {
        screen: TeacherPortal,
        navigationOptions: {
            title: 'Teacher Portal',
            headerStyle: { backgroundColor: '#3e64ff'},
            headerTitleStyle: { color: '#FFF' },
            headerTintColor: '#FFF',
            headerLeft: () => null,
            gesturesEnabled: false
        }
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);