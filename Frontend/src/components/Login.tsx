import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { loginUser } from '../services/authService';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

const Login: React.FC = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const base64UrlToBase64 = (base64Url: string) => {
    return base64Url.replace(/-/g, '+').replace(/_/g, '/') + '='.repeat((4 - base64Url.length % 4) % 4);
  };

  const handleLogin = async () => {
    // Basic validation
    if (!email || !password) {
      Alert.alert('Error', 'Email and password are required');
      return;
    }

    try {
      const response = await loginUser({ email, password });
      console.log('API response:', response);

      if (response && response.token) {
        const token = response.token;
        console.log("Received Token:", token);

        // Split the token into parts and check for correct structure
        const tokenParts = token.split('.');
        if (tokenParts.length !== 3) {
          throw new Error('Invalid token format');
        }

        // Decode payload
        const base64Payload = base64UrlToBase64(tokenParts[1]);
        const decodedPayload = JSON.parse(atob(base64Payload));
        const userID = decodedPayload.userID;

        // Securely store token and userID
        await AsyncStorage.setItem('token', token);
        await AsyncStorage.setItem('userID', userID.toString());

        console.log('User logged in, ID:', userID);

        // Navigate to the Home screen
        navigation.navigate('Home');
      } else {
        throw new Error('Invalid API response structure');
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage('Invalid email or password');
    }
  };

  const signUpBtn = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#3b82f6' }}>
      <View style={{ backgroundColor: '#fff', padding: 16, borderRadius: 8, width: '90%', maxWidth: 400, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 4, elevation: 2 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 16 }}>Login</Text>

        {/* Email Input */}
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

        {/* Password Input */}
        <View style={{ marginBottom: 12 }}>
          <Text style={{ marginBottom: 4 }}>Password</Text>
          <View style={{ position: 'relative' }}>
            <TextInput
              style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 4, padding: 8 }}
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            {/* Toggle Password Visibility */}
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={{ position: 'absolute', right: 8, top: 8 }}>
              <Text style={{ fontSize: 18 }}>{showPassword ? '🙈' : '👁️'}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Error Message */}
        {errorMessage ? <Text style={{ color: 'red', marginBottom: 12 }}>{errorMessage}</Text> : null}

        {/* Login Button */}
        <TouchableOpacity onPress={handleLogin} style={{ backgroundColor: '#3b82f6', padding: 12, borderRadius: 4, marginBottom: 8 }}>
          <Text style={{ color: '#fff', textAlign: 'center' }}>Login</Text>
        </TouchableOpacity>

        {/* Sign Up Button */}
        <TouchableOpacity onPress={signUpBtn} style={{ backgroundColor: '#3b82f6', padding: 12, borderRadius: 4 }}>
          <Text style={{ color: '#fff', textAlign: 'center' }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
