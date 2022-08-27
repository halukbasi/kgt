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
    console.log('hejs')
    productService.getProductsSmall().then(data => console.log(data)); //setProducts(data)
}, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <> 
    <h2 className='ram1-margin'>T-RJU Jboks Ünitesi</h2>
    <Threed />
    <p className='ram1-margin'>Bu ünite, ram ve sanfor girişinde kumaş değişimi sırasında makinenin non stop çalışması için kullanılmaktadır. Kumaş cinsine göre girişinde ünitenin girişinde T-COS Çıtalı ortalayıcı veya T-BOS Beşikli ortalayıcı ünite bulunmaktadır. Kumaş gerginliği pnömatik balerin sistemi ile kontol edilmektedir. Kumaş girişi kauçuk kaplamalı silindir ile kumaşı daha iyi tutmaktadır.
      Kumaşın üniteden by-pass geçmesi için gerekli avare sistemler ile donatılmıştır. Kumaş seviye kontrol sistemi ile donatılmıştır.</p>

      <div className="card">
                <DataTable value={products} responsiveLayout="scroll">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
      </div>
    </>
  )
}

export default Ramuygulamari1;