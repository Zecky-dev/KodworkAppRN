import React from 'react';

// React stack navigation setup
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();

// Page imports
import Jobs from "./Jobs";
import JobDetail from '../JobDetails/JobDetails';

const JobsRouter = () => {
    return (
    <Stack.Navigator initialRouteName="JobsScreen">
        <Stack.Screen
        name="JobsScreen"
        component={Jobs}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name="JobDetailsScreen"
        component={JobDetail}
        options={{headerShown:false}}
        />
    </Stack.Navigator>
    );
};

export default JobsRouter;