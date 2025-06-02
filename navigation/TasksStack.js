import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TasksScreen from '../screens/TasksScreen';
import SubtasksScreen from '../screens/SubtasksScreen';
import SubtaskDetailScreen from '../screens/SubtaskDetailScreen'

const Stack = createNativeStackNavigator();

export default function TasksStack() {
    return (
        <Stack.Navigator>
        <Stack.Screen name="Tareas" component={TasksScreen} />
        <Stack.Screen name="Subtareas" component={SubtasksScreen} />
        <Stack.Screen name="Detalle" component={SubtaskDetailScreen} />
        </Stack.Navigator>
    );
}
