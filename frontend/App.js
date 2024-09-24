import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductList from './components/ProductList';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={ProductList} />
                {/* Ajouter d'autres écrans pour les détails du produit, le panier, etc. */}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;

