import React, { createContext, useContext, ReactNode } from 'react';
import { typeCategory } from '../../types';

// Define el tipo de dato para una categoría.

// Define el tipo de dato para el contexto.
type CategoryContextType = {
  category: typeCategory;
  setCategory: (value: typeCategory) => void;
};

// Crea el contexto de categorías.
const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

// Crear un componente proveedor que utilizará el contexto.
type CategoryProviderProps = {
  children: ReactNode;
};

const CategoryProvider: React.FC<CategoryProviderProps> = ({ children }) => {
  const [category, setCategory] = React.useState<typeCategory>('all');

  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

// Crear un hook personalizado para acceder al contexto.
const useCategory = () => {
  const context = useContext(CategoryContext);
  if (context === undefined) {
    throw new Error('useCategory debe ser utilizado dentro de un CategoryProvider');
  }
  return context;
};

export { CategoryProvider, useCategory };
