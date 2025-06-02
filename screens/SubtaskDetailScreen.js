import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SubtaskDetailScreen({ route }) {
    const { subtarea } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detalle de la Subtarea</Text>
            <Text style={styles.label}>Título:</Text>
            <Text style={styles.text}>{subtarea.titulo}</Text>
            <Text style={styles.label}>Estado:</Text>
            <Text style={styles.text}>{subtarea.estado}</Text>
            <Text style={styles.label}>Descripción:</Text>
            <Text style={styles.text}>{subtarea.descripcion || 'Sin descripción'}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
    label: { fontSize: 16, fontWeight: '600', marginTop: 10 },
    text: { fontSize: 16, color: '#333' },
});
