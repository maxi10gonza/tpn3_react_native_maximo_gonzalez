import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function SubtasksScreen({ route, navigation }) {
    const { subtareas, titulo } = route.params;

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Detalle', { subtarea: item })}
        >
            <Text style={styles.title}>{item.titulo}</Text>
            <Text style={styles.estado}>Estado: {item.estado}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Subtareas de: {titulo}</Text>
            <FlatList
                data={subtareas}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    header: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
    item: { padding: 15, backgroundColor: '#f0f0f0', marginBottom: 10, borderRadius: 5 },
    title: { fontSize: 16, fontWeight: '600' },
    estado: { fontSize: 14, color: '#555' },
});
