import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import { router } from 'expo-router';
import { EvilIcons } from '@expo/vector-icons';

import AppGradient from "@/components/AppGradient";

const ProfileScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [emailSent, setEmailSent] = useState<boolean>(false);

  return (
    <View className="flex-1">
        <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
        <EvilIcons style={styles.title} name="user" color="green" />
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
        // autoCompleteType="email"
        textContentType="emailAddress"
      />

      <Text style={styles.label}>Current Password</Text>
      
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry={true}
        textContentType="password"
      />

    <Text style={styles.label}>New Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry={true}
        textContentType="password"
      />

    <Text style={styles.label}>Confirn Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry={true}
        textContentType="password"
      />

      <TouchableOpacity
        style={styles.button}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <Text style={styles.buttonText}>Reset Password</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.logoutButton]}
        onPress={()=> router.push("/login")}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
      </AppGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 150,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: '600',
    color:'white'
  },
  input: {
    width: '100%',
    height: 45,
    borderRadius: 6,
    paddingHorizontal: 10,
    backgroundColor: '#eaeaea',
    marginBottom: 15,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  button: {
    width: '100%',
    height: 45,
    backgroundColor: 'teal',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  logoutButton: {
    backgroundColor: 'gray',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoText: {
    textAlign: 'center',
    color: 'green',
    marginTop: 10,
  },
});

export default ProfileScreen;
