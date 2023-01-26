import React from 'react';

// React navigation
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

// Page imports
import JobsRouter from './pages/Jobs/JobsRouter';
import FavoriteJobs from './pages/FavoriteJobs/FavoriteJobs';

// Icon package import
import Icon from 'react-native-vector-icons/Ionicons';

// Redux
import { Provider } from 'react-redux';
import store from './context/store';


const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Drawer.Navigator>
                <Drawer.Screen
                name="JobsRouterScreen"
                component={JobsRouter}
                options={{
                    title: 'Jobs',
                    drawerIcon: ({focused}) => {
                        if (focused) {
                            return <Icon name="list" size={28} color="crimson"/>;
                        }
                        else {
                            return <Icon name="list-outline" size={28}/>;
                        }
                    },
                }}
                />
                <Drawer.Screen
                name="FavoriteJobsScreen"
                component={FavoriteJobs}
                options={{
                    title: 'Favorite Jobs',
                    drawerIcon: ({focused}) => {
                        if (focused) {
                            return <Icon name="heart" size={28} color="crimson"/>;
                        }
                        else {
                            return <Icon name="heart-outline" size={28}/>;
                        }
                    },
                }}
                />
                </Drawer.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
