const BASE_URL = 'http://localhost/api';

export const getProducts = () => {
    return fetch(`${BASE_URL}/products`)
        .then(response => response.json())
        .catch(error => console.error('Error:', error));
};

// Ajouter d'autres services pour les utilisateurs, le panier, etc.
