import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
    const showAlert = (title) => {
        Alert.alert('Acción', `Presionaste: ${title}`);
    };

    const quickActions = [
        { title: 'Notificaciones', icon: 'notifications', color: '#FF6B6B' },
        { title: 'Mensajes', icon: 'mail', color: '#4ECDC4' },
        { title: 'Calendario', icon: 'calendar', color: '#45B7D1' },
        { title: 'Documentos', icon: 'document-text', color: '#96CEB4' },
    ];

    return (
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.content}>
            <View style={styles.welcomeSection}>
            <Text style={styles.welcomeText}>¡Hola! 👋</Text>
            <Text style={styles.subtitle}>Bienvenido a tu dashboard</Text>
            </View>

            <View style={styles.statsSection}>
            <Text style={styles.sectionTitle}>Resumen del día</Text>
            <View style={styles.statsContainer}>
                <View style={styles.statCard}>
                <Text style={styles.statNumber}>12</Text>
                <Text style={styles.statLabel}>Tareas</Text>
                </View>
                <View style={styles.statCard}>
                <Text style={styles.statNumber}>5</Text>
                <Text style={styles.statLabel}>Mensajes</Text>
                </View>
                <View style={styles.statCard}>
                <Text style={styles.statNumber}>3</Text>
                <Text style={styles.statLabel}>Eventos</Text>
                </View>
            </View>
            </View>

            <View style={styles.actionsSection}>
            <Text style={styles.sectionTitle}>Acciones rápidas</Text>
            <View style={styles.actionsGrid}>
                {quickActions.map((action, index) => (
                <TouchableOpacity
                    key={index}
                    style={[styles.actionCard, { backgroundColor: action.color }]}
                    onPress={() => showAlert(action.title)}
                >
                    <Ionicons name={action.icon} size={30} color="white" />
                    <Text style={styles.actionText}>{action.title}</Text>
                </TouchableOpacity>
                ))}
            </View>
            </View>
        </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    content: {
        flex: 1,
        padding: 20,
    },
    welcomeSection: {
        marginBottom: 30,
    },
    welcomeText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#333',
        marginBottom: 15,
    },
    statsSection: {
        marginBottom: 30,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    statCard: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 12,
        alignItems: 'center',
        flex: 1,
        marginHorizontal: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    statNumber: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#007AFF',
        marginBottom: 5,
    },
    statLabel: {
        fontSize: 14,
        color: '#666',
    },
    actionsSection: {
        marginBottom: 20,
    },
    actionsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    actionCard: {
        width: '48%',
        padding: 20,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 15,
    },
    actionText: {
        color: 'white',
        fontSize: 14,
        fontWeight: '600',
        marginTop: 8,
    },
});