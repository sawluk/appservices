import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Settings() {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Configuración</Text>
      <Text style={styles.subheader}>Perfil y preferencias</Text>
      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.label}>Nombre</Text>
          <Text style={styles.value}>Usuario</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>tucorreo@ejemplo.com</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Notificaciones</Text>
          <TouchableOpacity style={styles.badge} activeOpacity={0.7}>
            <Text style={styles.badgeText}>Activadas</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    paddingHorizontal: 10,
    paddingTop: 30,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#1E293B',
  },
  subheader: {
    fontSize: 16,
    color: '#64748B',
    marginBottom: 18,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    elevation: 2,
    marginTop: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: '#1E293B',
    fontWeight: '500',
  },
  value: {
    fontSize: 16,
    color: '#64748B',
    fontWeight: '400',
  },
  badge: {
    backgroundColor: '#E0F7F1',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  badgeText: {
    color: '#38B6A8',
    fontWeight: 'bold',
    fontSize: 14,
  },
  logoutButton: {
    backgroundColor: '#F87171',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 30,
    marginHorizontal: 30,
  },
  logoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
