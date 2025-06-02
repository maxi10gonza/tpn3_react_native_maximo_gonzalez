import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { TAREAS } from '../constants/tareas'; 

export default function TasksScreen({ navigation }) {
    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Subtareas', { subtareas: item.subtareas, titulo: item.titulo })}
        >
            <Text style={styles.text}>{item.titulo}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={TAREAS}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    item: { padding: 15, backgroundColor: '#eee', marginBottom: 10, borderRadius: 5 },
    text: { fontSize: 16 },
});
