import { useState, useEffect } from 'react';
import './App.css';
import { Button, TextField } from '@mui/material';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function fetchProducts() {
      const call = await fetch('https://reactapi.pautinaweb.ru/objects.php');
      const response = await call.json();
      setProducts(response);
      console.log(response);
    }
    fetchProducts();
  }, []);

  function sort(type = 'asc') {
    let res = [...products]; 
    if (type === 'asc') {
      res = res.sort((a, b) => a.price - b.price);
    } else if (type === 'desc') {
      res = res.sort((a, b) => b.price - a.price);
    }
    setProducts(res);
  }

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className='main'>
      <section className='slider'>
        <Carousel>
          <Carousel.Item>
            <img src="https://via.placeholder.com/800x400" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://via.placeholder.com/800x400" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://via.placeholder.com/800x400" alt="" />
          </Carousel.Item>
        </Carousel>
      </section>
      <section className='mx-auto pt-20 body'>
        <h1>Продукты</h1>
        <div className='mt-4'>
          <div className='flex item-center justify-between gap-1'>
            <div className='flex gap-5'>
              <Button variant='contained' onClick={() => sort('desc')}>
                По убыванию
              </Button>
              <Button variant='contained' onClick={() => sort('asc')}>
                По возрастанию
              </Button>
            </div>
            <TextField
              label="Поиск по названию"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className='catalog grid grid-cols-4 gap-y-4'>
            {filteredProducts.map((item) => {
              return (
                <article className='card p-3 rounded-xl' key={item.id}>
                  <h2 className='text-xl font-bold'>{item.name}</h2>
                  <p className='mt-2 text-sm'>{item.description}</p>
                  <p className='mt-8 font-semibold text-[12px]'>{item.price} руб.</p>
                  <p>{item.sclad} шт.</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
}

export default App;