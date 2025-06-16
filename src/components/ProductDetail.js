import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import nikeItems from '../data/nikeData';
import { CartContext } from '../context/CartContext';
import '../styles/ProductDetail.css';

const ProductDetail = () => {
const { id } = useParams();
const navigate = useNavigate();
const product = nikeItems.find((item) => item.id === parseInt(id));
const [selectedImage, setSelectedImage] = useState(product?.images[0]);
const [selectedSize, setSelectedSize] = useState(null);
const { addToCart } = useContext(CartContext);

if (!product) return <p>Product not found</p>;

const handleAddToCart = () => {
if (!selectedSize) {
alert('Please select a size before adding to cart.');
return;
}


const productWithSize = {
  id: `${product.id}-${selectedSize}`, // makes it unique for same product with different sizes
  name: product.title,
  image: product.images[0],
  price: product.price,
  size: selectedSize,
  code: product.code || '',
  color: product.color || '',
  extra: product.extra || '',
};

addToCart(productWithSize);
navigate('/cart');
};

return (
<div className="product-detail-container">
<div className="image-gallery">
<img className="main-image" src={selectedImage} alt={product.title} />
<div className="thumbnail-row">
{product.images.map((img, index) => (
<img
key={index}
src={img}
alt={`thumb-${index}`}
className={`thumbnail ${selectedImage === img ? 'selected' : ''}`}
onClick={() => setSelectedImage(img)}
/>
))}
</div>
</div>


  <div className="info-section">
    <h2>{product.title}</h2>
    <p className="brand">{product.brand}</p>
    <p className="price">₹{product.price}</p>
    <p>Color: {product.color}</p>

    <div className="size-selector">
      <p>Select Size:</p>
      <div className="sizes">
        {product.sizes.map((size) => (
          <button
            key={size}
            className={`size-button ${selectedSize === size ? 'selected' : ''}`}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>

    <button className="add-to-cart-btn" onClick={handleAddToCart}>
      Add to Cart
    </button>
    <p className="note">Free delivery on orders over ₹500</p>
  </div>
</div>
);
};

export default ProductDetail;