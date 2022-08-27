import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Ünitelerimize Göz Atın!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
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
          </ul>
          {/* <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/ramuygulamari'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Cards;
