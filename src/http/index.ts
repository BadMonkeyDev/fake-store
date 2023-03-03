const API_URL = 'https://fakestoreapi.com/'

export const PATHS = {
    PRODUCTS: 'products/',
    CATEGORIES: 'products/categories/',
    PRODUCT: 'products/'
};

export const fetchData = async (path: typeof PATHS[keyof typeof PATHS]) => {
    const url = `${API_URL}${path}`;
    const response = await fetch(url);
    return await response.json();
}