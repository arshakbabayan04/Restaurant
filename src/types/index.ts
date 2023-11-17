export interface Food {
    id: string;
    name: string;
    price: string;
    descr: string;
    category: string;
}

export interface Category {
    id: string;
    name: string;
}

export interface Set {
    id: string;
    name: string;
    foods: string[];
}