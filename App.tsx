
import React, { useState, useEffect } from 'react';
import { Product, ViewMode } from './types';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import AdminPanel from './components/AdminPanel';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import VisionSection from './components/VisionSection';

const INITIAL_PRODUCTS: Product[] = [];

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [viewMode, setViewMode] = useState<ViewMode>('catalog');
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('uv_products');
    if (saved) {
      setProducts(JSON.parse(saved));
    } else {
      setProducts(INITIAL_PRODUCTS);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('uv_products', JSON.stringify(products));
  }, [products]);

  const addProduct = (product: Product) => {
    setProducts(prev => [product, ...prev]);
  };

  const updateProduct = (updatedProduct: Product) => {
    setProducts(prev => prev.map(p => p.id === updatedProduct.id ? updatedProduct : p));
  };

  const deleteProduct = (id: string) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  const clearAllProducts = () => {
    if (confirm('¿Estás seguro de que quieres borrar TODOS los productos? Esta acción no se puede deshacer.')) {
      setProducts([]);
      localStorage.removeItem('uv_products');
    }
  };

  const toggleView = () => {
    if (viewMode === 'catalog') {
      if (!isAdminLoggedIn) {
        const pass = prompt('Introduce la contraseña de administrador:');
        if (pass === 'admin123') {
          setIsAdminLoggedIn(true);
          setViewMode('admin');
        } else {
          alert('No autorizado');
        }
      } else {
        setViewMode('admin');
      }
    } else {
      setViewMode('catalog');
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-white selection:text-black">
      <Header viewMode={viewMode} toggleView={toggleView} isAdmin={isAdminLoggedIn} />
      
      <main className="flex-grow pt-24 pb-12 px-6 max-w-7xl mx-auto w-full">
        {viewMode === 'catalog' ? (
          <>
            <ProductGrid products={products} onProductSelect={setSelectedProduct} />
            <VisionSection />
          </>
        ) : (
          <AdminPanel 
            products={products} 
            onAdd={addProduct} 
            onUpdate={updateProduct} 
            onDelete={deleteProduct}
            onClearAll={clearAllProducts}
          />
        )}
      </main>

      <Footer />

      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </div>
  );
};

export default App;
