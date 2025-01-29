import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { registerUser } from '../services/authService';
import axios from 'axios';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignUp = async () => {
    // Reset error message on form submission
    setErrorMessage('');

    // Password matching validation
    if (password !== confirmPassword) {
      setErrorMessage("Passwords don't match!");
      return;
    }

    try {
      const response = await registerUser({ email, password });
      const token = response.token;

      // Store token securely (consider using AsyncStorage)
      console.log('Registration successful, token:', token);

      // Navigate to login screen
      // For demonstration purposes, we can use an alert
      Alert.alert("Success", "Registration successful, please log in.");
      // navigate('/login'); // Uncomment this if you have navigation set up
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response?.data?.message) {
        setErrorMessage(error.response.data.message);  
      } else if (error instanceof Error) {
        setErrorMessage(error.message);  
      } else {
        setErrorMessage('Signup failed. Try again.');
      }
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#3b82f6' }}>
      <View style={{ backgroundColor: '#fff', padding: 16, borderRadius: 8, width: '90%', maxWidth: 400, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 4, elevation: 2 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 16 }}>Signup</Text>

        <View style={{ marginBottom: 12 }}>
          <Text style={{ marginBottom: 4 }}>Email</Text>
          <TextInput
            style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 4, padding: 8 }}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={{ marginBottom: 4 }}>Create Password</Text>
          <View style={{ position: 'relative' }}>
            <TextInput
              style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 4, padding: 8 }}
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={{ position: 'absolute', right: 8, top: 8 }}>
              <Text style={{ fontSize: 18 }}>{showPassword ? '🙈' : '👁️'}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={{ marginBottom: 4 }}>Confirm Password</Text>
          <View style={{ position: 'relative' }}>
            <TextInput
              style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 4, padding: 8 }}
              placeholder="Confirm your password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={{ position: 'absolute', right: 8, top: 8 }}>
              <Text style={{ fontSize: 18 }}>{showPassword ? '🙈' : '👁️'}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {errorMessage ? <Text style={{ color: 'red', marginBottom: 12 }}>{errorMessage}</Text> : null}

        <TouchableOpacity onPress={handleSignUp} style={{ backgroundColor: '#3b82f6', padding: 12, borderRadius: 4 }}>
          <Text style={{ color: '#fff', textAlign: 'center' }}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;
