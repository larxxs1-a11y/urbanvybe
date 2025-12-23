
import React, { useState } from 'react';
import { Product } from '../types';
import { generateProductDescription } from '../services/geminiService';

interface AdminPanelProps {
  products: Product[];
  onAdd: (product: Product) => void;
  onUpdate: (product: Product) => void;
  onDelete: (id: string) => void;
  onClearAll: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ products, onAdd, onUpdate, onDelete, onClearAll }) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    price: 0,
    description: '',
    imageUrl: '',
    category: 'Camisetas'
  });

  const resetForm = () => {
    setFormData({ name: '', price: 0, description: '', imageUrl: '', category: 'Camisetas' });
    setEditingId(null);
    setIsAdding(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      onUpdate({ ...formData, id: editingId, createdAt: Date.now() });
    } else {
      onAdd({ ...formData, id: Math.random().toString(36).substr(2, 9), createdAt: Date.now() });
    }
    resetForm();
  };

  const handleEdit = (product: Product) => {
    setFormData({
      name: product.name,
      price: product.price,
      description: product.description,
      imageUrl: product.imageUrl,
      category: product.category
    });
    setEditingId(product.id);
    setIsAdding(true);
  };

  const handleGenerateAI = async () => {
    if (!formData.name) return;
    setIsGenerating(true);
    const desc = await generateProductDescription(formData.name);
    setFormData(prev => ({ ...prev, description: desc }));
    setIsGenerating(false);
  };

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-3xl font-black tracking-tighter uppercase text-white">Gestión de Inventario</h2>
        <div className="flex space-x-4">
          {products.length > 0 && (
            <button 
              onClick={onClearAll}
              className="border border-red-500/30 text-red-500/70 px-6 py-2 text-[10px] font-black uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all"
            >
              Borrar Todo
            </button>
          )}
          {!isAdding && (
            <button 
              onClick={() => setIsAdding(true)}
              className="bg-white text-black px-6 py-2 text-[10px] font-black uppercase tracking-widest hover:bg-white/90 transition-colors"
            >
              Añadir Producto
            </button>
          )}
        </div>
      </div>

      {isAdding && (
        <div className="bg-[#111] p-8 border border-white/10 rounded-sm animate-in slide-in-from-top-4 duration-500">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/50">Nombre del Producto</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-black border border-white/20 p-3 text-sm focus:border-white transition-colors outline-none text-white"
                  placeholder="ej., GRAVITY-01 TEE"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/50">Precio (USD)</label>
                <input 
                  type="number" 
                  value={formData.price}
                  onChange={e => setFormData({...formData, price: Number(e.target.value)})}
                  className="w-full bg-black border border-white/20 p-3 text-sm focus:border-white transition-colors outline-none text-white"
                  placeholder="45"
                  required
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <div className="flex justify-between items-center mb-1">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/50">Descripción</label>
                  <button 
                    type="button"
                    onClick={handleGenerateAI}
                    disabled={isGenerating || !formData.name}
                    className="text-[9px] uppercase tracking-widest font-bold text-white hover:text-white/70 transition-colors disabled:opacity-30"
                  >
                    {isGenerating ? 'Generando con IA...' : 'Generar con IA'}
                  </button>
                </div>
                <textarea 
                  value={formData.description}
                  onChange={e => setFormData({...formData, description: e.target.value})}
                  className="w-full bg-black border border-white/20 p-3 text-sm h-24 focus:border-white transition-colors outline-none text-white"
                  placeholder="Esenciales urbanos para el pionero moderno..."
                  required
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/50">URL de Imagen</label>
                <input 
                  type="url" 
                  value={formData.imageUrl}
                  onChange={e => setFormData({...formData, imageUrl: e.target.value})}
                  className="w-full bg-black border border-white/20 p-3 text-sm focus:border-white transition-colors outline-none text-white"
                  placeholder="https://images.unsplash.com/..."
                  required
                />
              </div>
            </div>
            
            <div className="flex space-x-4 pt-4">
              <button 
                type="submit"
                className="bg-white text-black px-8 py-3 text-xs font-black uppercase tracking-widest"
              >
                {editingId ? 'Actualizar Producto' : 'Crear Producto'}
              </button>
              <button 
                type="button" 
                onClick={resetForm}
                className="border border-white/20 px-8 py-3 text-xs font-black uppercase tracking-widest hover:border-white transition-colors"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}

      {products.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="text-left">
              <tr className="border-b border-white/10">
                <th className="py-4 text-[10px] uppercase tracking-[0.2em] font-bold text-white/50">Producto</th>
                <th className="py-4 text-[10px] uppercase tracking-[0.2em] font-bold text-white/50">Precio</th>
                <th className="py-4 text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map(p => (
                <tr key={p.id} className="border-b border-white/5 group hover:bg-white/[0.02] transition-colors">
                  <td className="py-6">
                    <div className="flex items-center space-x-4">
                      <img src={p.imageUrl} alt="" className="w-12 h-12 object-cover grayscale" />
                      <span className="text-sm font-bold uppercase tracking-widest">{p.name}</span>
                    </div>
                  </td>
                  <td className="py-6 text-sm font-light">${p.price}</td>
                  <td className="py-6 text-right space-x-6">
                    <button 
                      onClick={() => handleEdit(p)}
                      className="text-[10px] uppercase font-bold tracking-widest text-white/40 hover:text-white transition-colors"
                    >
                      Editar
                    </button>
                    <button 
                      onClick={() => { if(confirm('¿Eliminar producto?')) onDelete(p.id); }}
                      className="text-[10px] uppercase font-bold tracking-widest text-red-500/50 hover:text-red-500 transition-colors"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="py-20 text-center border border-dashed border-white/10">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">Tu colección está vacía.</p>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
