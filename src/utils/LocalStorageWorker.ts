import {CategoriesDataType} from "../store/reducers/categoriesSlice";
import {ProductsDataType} from "../store/reducers/productsSlice";
import {CartDataType} from "../store/reducers/cartSlice";

type DataType = CategoriesDataType | ProductsDataType | CartDataType;

export const LocalStorageWorker = {
    setItem(key: string, value: DataType): void {
        const serializedValue = JSON.stringify(value);
        localStorage.setItem(key, serializedValue);
    },
    getItem<T = DataType>(key: string): T | null {
        const serializedValue = localStorage.getItem(key);
        if (serializedValue === null) {
            return null;
        }
        return JSON.parse(serializedValue) as T;
    },
    removeItem(key: string): void {
        localStorage.removeItem(key);
    },
    clear(): void {
        localStorage.clear();
    }
};
