import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import Threed from '../Threed';
import { Column } from 'primereact/column';
import { ProductService } from '../../service/ProductService';
import '../../App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";

function Ramuygulamari1() {
  const [products, setProducts] = useState([]);
  const productService = new ProductService();

  useEffect(() => {
    const jsonData= require('../../data/products-small.json'); 
    setProducts(jsonData['data'])
    // productService.getProductsSmall().then(data => setProducts(data)); //setProducts(data)
}, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <> 
    <h2 className='ram1-margin'>T-RJU Jboks Ünitesi</h2>
    <Threed />
    <p className='ram1-margin'>Bu ünite, ram ve sanfor girişinde kumaş değişimi sırasında makinenin non stop çalışması için kullanılmaktadır. Kumaş cinsine göre girişinde ünitenin girişinde T-COS Çıtalı ortalayıcı veya T-BOS Beşikli ortalayıcı ünite bulunmaktadır. Kumaş gerginliği pnömatik balerin sistemi ile kontol edilmektedir. Kumaş girişi kauçuk kaplamalı silindir ile kumaşı daha iyi tutmaktadır.
      Kumaşın üniteden by-pass geçmesi için gerekli avare sistemler ile donatılmıştır. Kumaş seviye kontrol sistemi ile donatılmıştır.</p>

      <div className="card">
                <DataTable value={products} responsiveLayout="scroll">
                    <Column field="Malzeme" header="Malzeme"></Column>
                    <Column field="Max Hız" header="Max Hız"></Column>
                    <Column field="Max Hava Basıncı" header="Max Hava Basıncı"></Column>
                    <Column field="Şase Sistemi" header="Şase Sistemi"></Column>
                </DataTable>
      </div>
    </>
  )
}

export default Ramuygulamari1;