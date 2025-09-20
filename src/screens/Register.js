import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

export default function Register({ navigation }) {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cedula, setCedula] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = () => {
    if (!userName.trim()) {
      setError('El nombre de usuario es obligatorio');
      clearMessages();
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Correo electrónico no válido');
      clearMessages();
      return;
    }
    if (phone.length < 7) {
      setError('El teléfono debe tener al menos 7 dígitos');
      clearMessages();
      return;
    }
    if (!cedula.trim()) {
      setError('La cédula es obligatoria');
      clearMessages();
      return;
    }
    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      clearMessages();
      return;
    }

    setError('');
    setSuccess(`Usuario ${userName} registrado correctamente`);
    clearMessages();

    // Redirige al login después de un pequeño delay
    setTimeout(() => navigation.goBack(), 2000);
  };

  const clearMessages = () => {
    setTimeout(() => {
      setError('');
      setSuccess('');
    }, 5000);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Registro de Usuario</Text>

      <TextInput style={styles.input} placeholder="Nombre de usuario" value={userName} onChangeText={setUserName} />
      <TextInput style={styles.input} placeholder="Correo electrónico" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Teléfono" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
      <TextInput style={styles.input} placeholder="Cédula" value={cedula} onChangeText={setCedula} />
      <TextInput style={styles.input} placeholder="Contraseña" value={password} onChangeText={setPassword} secureTextEntry />

      {error ? <Text style={styles.error}>{error}</Text> : null}
      {success ? <Text style={styles.success}>{success}</Text> : null}

      <Button title="Registrar" onPress={handleRegister} />

      <Text style={styles.link} onPress={() => navigation.goBack()}>
        ¿Ya tienes cuenta? Inicia sesión
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, marginBottom: 15 },
  link: { color: 'blue', marginTop: 15, textAlign: 'center' },
  error: { color: 'red', marginBottom: 15, textAlign: 'center' },
  success: { color: 'green', marginBottom: 15, textAlign: 'center' },
});
