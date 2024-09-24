import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { loginUser } from '../services/ApiService';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        const credentials = { username, password };

        loginUser(credentials)
            .then(data => {
                // Gérer la réponse, peut-être stocker un jeton d'authentification, etc.
                console.log(data);
                // Naviguer vers la page du profil ou autre page après la connexion réussie
                // navigation.navigate('Profile');
            })
            .catch(error => console.error('Error:', error));
    };

    return (
        <View>
            <Text>Login</Text>
            <TextInput
                placeholder="Username"
                onChangeText={setUsername}
                value={username}
            />
            <TextInput
                placeholder="Password"
                secureTextEntry
                onChangeText={setPassword}
                value={password}
            />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};

export default LoginScreen;
