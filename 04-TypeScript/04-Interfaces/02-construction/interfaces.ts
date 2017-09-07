import { Category } from './enums';

interface Book{
    id: number;
    title: string;
    author: string;
    isAvailable: boolean;
    category: Category;
    year?: number,
    copies?: number,
    pages?: number
}

export { Book };