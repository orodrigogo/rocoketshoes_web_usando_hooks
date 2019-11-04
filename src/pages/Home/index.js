import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../utils/format';
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';
import { ProductList } from './styles';

 export default function Home() {
   const [products, setProducts] = useState([]);
   const amount = useSelector(state => state.cart.reduce((sumAmount, product) => {
    sumAmount[product.id] = product.amount;
    return sumAmount;
  }, {}));

  const dispath = useDispatch();

   useEffect(() => {
     // Não é possivel usar async no useEffect. Mas, podemos criar um função para aplicar o asyn await.
     async function loadProducts(){
      const response = await api.get('products')

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
     }

     loadProducts();
   }, []);

 function handleAddProduct(id){
   dispath(CartActions.addToCartRequest(id));
 }
    return(
      <ProductList>
      {products.map(product =>(
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <label>{product.priceFormatted}</label>

          <button type="button" onClick={() => handleAddProduct(product.id)}>
            <div>
              <MdAddShoppingCart size={16} color="#FFF" /> {amount[product.id] || 0}
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
    )
  }

