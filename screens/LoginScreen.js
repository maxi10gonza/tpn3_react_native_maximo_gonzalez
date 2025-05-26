import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
    SafeAreaView
} from 'react-native';

export default function LoginScreen({ onLogin }) {
    const [usuario, setUsuario] = useState('');
    const [contraseña, setContraseña] = useState('');

    const handleLogin = () => {
        if (usuario.trim() === '' || contraseña.trim() === '') {
        Alert.alert('Error', 'Por favor completa todos los campos');
        return;
        }
        
        // Simulamos validación exitosa
        Alert.alert('¡Bienvenido!', `Hola ${usuario}`, [
        { text: 'OK', onPress: onLogin }
        ]);
    };

    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.loginContainer}>
            <Text style={styles.title}>¡Bienvenido!</Text>
            <Text style={styles.subtitle}>Inicia sesión para continuar</Text>
            
            <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Usuario"
                value={usuario}
                onChangeText={setUsuario}
                autoCapitalize="none"
            />
            
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                value={contraseña}
                onChangeText={setContraseña}
                secureTextEntry
            />
            
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Ingresar</Text>
            </TouchableOpacity>
            </View>
            
            <Text style={styles.hint}>
            Tip: Usa cualquier usuario y contraseña para ingresar
            </Text>
        </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    loginContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 30,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        color: '#333',
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        color: '#666',
        marginBottom: 40,
    },
    inputContainer: {
        marginBottom: 30,
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 12,
        borderRadius: 8,
        fontSize: 16,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    button: {
        backgroundColor: '#007AFF',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
    hint: {
        textAlign: 'center',
        color: '#999',
        fontSize: 14,
        fontStyle: 'italic',
    },
});