import React from 'react';
import '../../App.css';
import '../Cards.css';
import CardItem from '../CardItem';

function Ramuygulamari()
{
  return(
    <div className='cards'>
    <h1>Ram Uygulamaları</h1>
    <div className='cards__container'>
      <div className='cards__wrapper'>
        <ul className='cards__items'>
          <CardItem
            src='images/Ram1.jpg'
            text='Ram Uygulamarı'
            label='Ram'
            path='/ramuygulamari1'
          />
          <CardItem
            src='images/Baskı1.jpg'
            text='Baskı Makinesi Uygulamaları'
            label='Baskı'
            path='/products'
          />
          <CardItem
            src='images/Dijital1.jpg'
            text='Dijital Baskı Uygulamaları'
            label='Dijital Baskı'
            path='/sign-up'
          />
          <CardItem
            src='images/Ram1.jpg'
            text='Ram Uygulamarı'
            label='Ram'
            path='/ramuygulamari'
          />
          <CardItem
            src='images/Baskı1.jpg'
            text='Baskı Makinesi Uygulamaları'
            label='Baskı'
            path='/products'
          />
          <CardItem
            src='images/Dijital1.jpg'
            text='Dijital Baskı Uygulamaları'
            label='Dijital Baskı'
            path='/sign-up'
          />
        </ul>
        <ul className='cards__items'>
          <CardItem
            src='images/Ram1.jpg'
            text='Ram Uygulamarı'
            label='Ram'
            path='/ramuygulamari'
          />
          <CardItem
            src='images/Baskı1.jpg'
            text='Baskı Makinesi Uygulamaları'
            label='Baskı'
            path='/products'
          />
          <CardItem
            src='images/Dijital1.jpg'
            text='Dijital Baskı Uygulamaları'
            label='Dijital Baskı'
            path='/sign-up'
          />
          <CardItem
            src='images/Ram1.jpg'
            text='Ram Uygulamarı'
            label='Ram'
            path='/ramuygulamari'
          />
          <CardItem
            src='images/Baskı1.jpg'
            text='Baskı Makinesi Uygulamaları'
            label='Baskı'
            path='/products'
          />
          <CardItem
            src='images/Dijital1.jpg'
            text='Dijital Baskı Uygulamaları'
            label='Dijital Baskı'
            path='/sign-up'
          />
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Ramuygulamari;