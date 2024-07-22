import React, { useState, useEffect } from 'react';


const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        // Simulate product data by adding price and category
        const productData = data.map((product, index) => ({
          id: product.id,
          name: product.title,
          price: (index + 1) * 10, // Dummy price
          category: 'Category ' + ((index % 3) + 1), // Dummy category
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
    console.log('Add product');
  };

  const handleEdit = (id) => {
    console.log('Edit product with ID:', id);
  };

  const handleDelete = (id) => {
    console.log('Delete product with ID:', id);
  };

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div>
      <h1>Manage Products</h1>
      <button onClick={handleAdd}>Add Product</button>
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
                <button onClick={() => handleEdit(product.id)}>Edit</button>
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

