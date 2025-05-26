import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Switch,
    Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SettingsScreen() {
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [autoSync, setAutoSync] = useState(true);
    const [locationServices, setLocationServices] = useState(false);

    const showAlert = (title, message) => {
        Alert.alert(title, message);
    };

    const settingsOptions = [
        {
        section: 'Cuenta',
        items: [
            { title: 'Cambiar contraseña', icon: 'lock-closed-outline', action: () => showAlert('Contraseña', 'Función de cambiar contraseña') },
            { title: 'Verificación en dos pasos', icon: 'shield-checkmark-outline', action: () => showAlert('Seguridad', 'Configurar 2FA') },
            { title: 'Sesiones activas', icon: 'phone-portrait-outline', action: () => showAlert('Sesiones', 'Ver dispositivos conectados') },
        ]
        },
        {
        section: 'Preferencias',
        items: [
            { title: 'Idioma', icon: 'language-outline', subtitle: 'Español', action: () => showAlert('Idioma', 'Cambiar idioma de la app') },
            { title: 'Región', icon: 'globe-outline', subtitle: 'Argentina', action: () => showAlert('Región', 'Configurar región') },
            { title: 'Formato de fecha', icon: 'calendar-outline', subtitle: 'DD/MM/YYYY', action: () => showAlert('Fecha', 'Cambiar formato de fecha') },
        ]
        },
        {
        section: 'Privacidad',
        items: [
            { title: 'Política de privacidad', icon: 'document-text-outline', action: () => showAlert('Privacidad', 'Ver política de privacidad') },
            { title: 'Términos de servicio', icon: 'receipt-outline', action: () => showAlert('Términos', 'Ver términos de servicio') },
            { title: 'Permisos de la app', icon: 'key-outline', action: () => showAlert('Permisos', 'Gestionar permisos') },
        ]
        },
        {
        section: 'Soporte',
        items: [
            { title: 'Centro de ayuda', icon: 'help-circle-outline', action: () => showAlert('Ayuda', 'Abrir centro de ayuda') },
            { title: 'Contactar soporte', icon: 'mail-outline', action: () => showAlert('Soporte', 'Enviar mensaje de soporte') },
            { title: 'Reportar problema', icon: 'bug-outline', action: () => showAlert('Reporte', 'Reportar un problema') },
        ]
        }
    ];

    const SettingSwitch = ({ title, subtitle, value, onValueChange, icon }) => (
        <View style={styles.settingRow}>
        <View style={styles.settingLeft}>
            <Ionicons name={icon} size={22} color="#007AFF" style={styles.settingIcon} />
            <View style={styles.settingTextContainer}>
            <Text style={styles.settingTitle}>{title}</Text>
            {subtitle && <Text style={styles.settingSubtitle}>{subtitle}</Text>}
            </View>
        </View>
        <Switch
            value={value}
            onValueChange={onValueChange}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={value ? '#007AFF' : '#f4f3f4'}
        />
        </View>
    );

    const SettingItem = ({ title, subtitle, icon, onPress }) => (
        <TouchableOpacity style={styles.settingRow} onPress={onPress}>
        <View style={styles.settingLeft}>
            <Ionicons name={icon} size={22} color="#007AFF" style={styles.settingIcon} />
            <View style={styles.settingTextContainer}>
            <Text style={styles.settingTitle}>{title}</Text>
            {subtitle && <Text style={styles.settingSubtitle}>{subtitle}</Text>}
            </View>
        </View>
        <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.content}>
            {/* Configuraciones con switches */}
            <View style={styles.section}>
            <Text style={styles.sectionHeader}>Configuración general</Text>
            <View style={styles.sectionContent}>
                <SettingSwitch
                title="Notificaciones push"
                subtitle="Recibir alertas y actualizaciones"
                value={notifications}
                onValueChange={setNotifications}
                icon="notifications-outline"
                />
                <SettingSwitch
                title="Modo oscuro"
                subtitle="Usar tema oscuro"
                value={darkMode}
                onValueChange={setDarkMode}
                icon="moon-outline"
                />
                <SettingSwitch
                title="Sincronización automática"
                subtitle="Sincronizar datos automáticamente"
                value={autoSync}
                onValueChange={setAutoSync}
                icon="sync-outline"
                />
                <SettingSwitch
                title="Servicios de ubicación"
                subtitle="Permitir acceso a la ubicación"
                value={locationServices}
                onValueChange={setLocationServices}
                icon="location-outline"
                />
            </View>
            </View>

            {/* Secciones de configuración */}
            {settingsOptions.map((section, sectionIndex) => (
            <View key={sectionIndex} style={styles.section}>
                <Text style={styles.sectionHeader}>{section.section}</Text>
                <View style={styles.sectionContent}>
                {section.items.map((item, itemIndex) => (
                    <SettingItem
                    key={itemIndex}
                    title={item.title}
                    subtitle={item.subtitle}
                    icon={item.icon}
                    onPress={item.action}
                    />
                ))}
                </View>
            </View>
            ))}

            {/* Información de la app */}
            <View style={styles.section}>
            <Text style={styles.sectionHeader}>Información</Text>
            <View style={styles.sectionContent}>
                <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Versión de la app</Text>
                <Text style={styles.infoValue}>1.0.0</Text>
                </View>
                <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Última actualización</Text>
                <Text style={styles.infoValue}>25 May 2025</Text>
                </View>
                <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Tamaño de caché</Text>
                <Text style={styles.infoValue}>12.5 MB</Text>
                </View>
            </View>
            </View>

            {/* Botón de cerrar sesión */}
            <View style={styles.section}>
            <TouchableOpacity 
                style={styles.logoutButton}
                onPress={() => showAlert('Cerrar sesión', '¿Estás seguro que deseas cerrar sesión?')}
            >
                <Ionicons name="log-out-outline" size={22} color="#FF3B30" />
                <Text style={styles.logoutText}>Cerrar sesión</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.footer}>
            <Text style={styles.footerText}>Mi App con React Native</Text>
            <Text style={styles.footerSubtext}>Hecho con ❤️ usando Expo</Text>
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
    section: {
        marginBottom: 30,
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        paddingHorizontal: 20,
        paddingBottom: 10,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    sectionContent: {
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#e1e1e1',
    },
    settingRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#f1f1f1',
    },
    settingLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    settingIcon: {
        marginRight: 15,
        width: 25,
    },
    settingTextContainer: {
        flex: 1,
    },
    settingTitle: {
        fontSize: 16,
        color: '#333',
        fontWeight: '500',
    },
    settingSubtitle: {
        fontSize: 14,
        color: '#666',
        marginTop: 2,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#f1f1f1',
    },
    infoLabel: {
        fontSize: 16,
        color: '#333',
    },
    infoValue: {
        fontSize: 16,
        color: '#666',
        fontWeight: '500',
    },
    logoutButton: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#e1e1e1',
    },
    logoutText: {
        fontSize: 16,
        color: '#FF3B30',
        fontWeight: '600',
        marginLeft: 10,
    },
    footer: {
        alignItems: 'center',
        paddingVertical: 30,
    },
    footerText: {
        fontSize: 16,
        color: '#666',
        fontWeight: '600',
    },
    footerSubtext: {
        fontSize: 14,
        color: '#999',
        marginTop: 5,
    },
});