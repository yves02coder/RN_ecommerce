import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { getProducts } from '../services/ApiService';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then(data => setProducts(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <View>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.name}</Text>
                        {/* Afficher d'autres détails du produit */}
                    </View>
                )}
            />
        </View>
    );
};

export default ProductList;
