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

export default function ProfileScreen() {
    const showAlert = (option) => {
        Alert.alert('Perfil', `Seleccionaste: ${option}`);
    };

    const profileOptions = [
        { title: 'Editar Perfil', icon: 'person-outline', color: '#007AFF' },
        { title: 'Cambiar Foto', icon: 'camera-outline', color: '#34C759' },
        { title: 'Notificaciones', icon: 'notifications-outline', color: '#FF9500' },
        { title: 'Privacidad', icon: 'lock-closed-outline', color: '#FF3B30' },
        { title: 'Ayuda', icon: 'help-circle-outline', color: '#5856D6' },
    ];

    return (
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.content}>
            {/* Avatar y información básica */}
            <View style={styles.profileHeader}>
            <View style={styles.avatar}>
                <Ionicons name="person" size={60} color="white" />
            </View>
            <Text style={styles.name}>Juan Pérez</Text>
            <Text style={styles.email}>juan.perez@email.com</Text>
            <TouchableOpacity 
                style={styles.editButton}
                onPress={() => showAlert('Editar Perfil Básico')}
            >
                <Text style={styles.editButtonText}>Editar Perfil</Text>
            </TouchableOpacity>
            </View>

            {/* Estadísticas del usuario */}
            <View style={styles.statsSection}>
            <View style={styles.statItem}>
                <Text style={styles.statNumber}>156</Text>
                <Text style={styles.statLabel}>Publicaciones</Text>
            </View>
            <View style={styles.statItem}>
                <Text style={styles.statNumber}>1.2k</Text>
                <Text style={styles.statLabel}>Seguidores</Text>
            </View>
            <View style={styles.statItem}>
                <Text style={styles.statNumber}>342</Text>
                <Text style={styles.statLabel}>Siguiendo</Text>
            </View>
            </View>

            {/* Opciones del perfil */}
            <View style={styles.optionsSection}>
            <Text style={styles.sectionTitle}>Configuración</Text>
            {profileOptions.map((option, index) => (
                <TouchableOpacity
                key={index}
                style={styles.optionRow}
                onPress={() => showAlert(option.title)}
                >
                <View style={styles.optionLeft}>
                    <View style={[styles.iconContainer, { backgroundColor: option.color }]}>
                    <Ionicons name={option.icon} size={20} color="white" />
                    </View>
                    <Text style={styles.optionText}>{option.title}</Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
                </TouchableOpacity>
            ))}
            </View>

            {/* Información adicional */}
            <View style={styles.infoSection}>
            <Text style={styles.sectionTitle}>Información</Text>
            <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Miembro desde:</Text>
                <Text style={styles.infoValue}>Enero 2024</Text>
            </View>
            <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Ubicación:</Text>
                <Text style={styles.infoValue}>Buenos Aires, Argentina</Text>
            </View>
            <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Último acceso:</Text>
                <Text style={styles.infoValue}>Hace 2 minutos</Text>
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
    },
    profileHeader: {
        backgroundColor: 'white',
        alignItems: 'center',
        paddingVertical: 30,
        marginBottom: 20,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: '#007AFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    email: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
    },
    editButton: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 20,
    },
    editButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
    statsSection: {
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingVertical: 20,
        marginBottom: 20,
    },
    statItem: {
        flex: 1,
        alignItems: 'center',
    },
    statNumber: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    statLabel: {
        fontSize: 14,
        color: '#666',
    },
    optionsSection: {
        backgroundColor: 'white',
        marginBottom: 20,
        paddingVertical: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#f1f1f1',
    },
    optionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#f1f1f1',
    },
    optionLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        width: 30,
        height: 30,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    optionText: {
        fontSize: 16,
        color: '#333',
    },
    infoSection: {
        backgroundColor: 'white',
        paddingVertical: 10,
        marginBottom: 20,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#f1f1f1',
    },
    infoLabel: {
        fontSize: 16,
        color: '#666',
    },
    infoValue: {
        fontSize: 16,
        color: '#333',
        fontWeight: '500',
    },
});