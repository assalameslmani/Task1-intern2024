import React, { useState, useEffect } from 'react';


const Products = () => {
  const [products, setProducts] = useState([]);

 
  useEffect(() => {
    const fetchProducts = async () => {
      
      const productData = [
        { id: 1, name: 'Product 1', price: 100, category: 'Category 1' },
        { id: 2, name: 'Product 2', price: 200, category: 'Category 2' },
      ];
      setProducts(productData);
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
