import React, { useState, useEffect } from 'react';


const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', category: '' });
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        const productData = data.map((product, index) => ({
          id: product.id,
          name: product.title,
          price: (index + 1) * 10,
          category: 'Category ' + ((index % 3) + 1),
        }));
        setProducts(productData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAdd = () => {
    setProducts([...products, { id: products.length + 1, ...newProduct }]);
    setNewProduct({ name: '', price: '', category: '' });
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleUpdate = () => {
    setProducts(products.map(product => product.id === editingProduct.id ? editingProduct : product));
    setEditingProduct(null);
  };

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (editingProduct) {
      setEditingProduct({ ...editingProduct, [name]: value });
    } else {
      setNewProduct({ ...newProduct, [name]: value });
    }
  };

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div>
      <h1>Manage Products</h1>
      <div>
        <input
          type="text"
          name="name"
          value={editingProduct ? editingProduct.name : newProduct.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="number"
          name="price"
          value={editingProduct ? editingProduct.price : newProduct.price}
          onChange={handleChange}
          placeholder="Price"
        />
        <input
          type="text"
          name="category"
          value={editingProduct ? editingProduct.category : newProduct.category}
          onChange={handleChange}
          placeholder="Category"
        />
        {editingProduct ? (
          <button onClick={handleUpdate}>Update Product</button>
        ) : (
          <button onClick={handleAdd}>Add Product</button>
        )}
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.category}</td>
              <td>
                <button onClick={() => handleEdit(product)}>Edit</button>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
