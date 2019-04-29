import React from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';

const secret_key = 'lxxx-mxxx-axxx-exxx-rxxx'

function Product() {
  return (
    <MaterialTable
      title="Product"
      columns={[
        { title: 'Barcode', field: 'barcode1' },
        { title: 'Nama Barang', field: 'namabarang' },
        { title: 'Satuan', field: 'satuan1' },
        { title: 'Stock', field: 'stokakhir1', type: 'numeric' },
      ]}
      data={query =>
        new Promise((resolve, reject) => {
          let url = 'https://apprekap.ws-skincare.com/api/v1/product/data?'
          url += 'barcode1=' + query.search
          url += '&namabarang=' + query.search
          url += '&pageSize=' + query.pageSize
          url += '&pageIndex=' + (query.page + 1)

          if(query.orderBy){
            url += '&sortField' + query.orderBy.field
            url += '&sortOrder=' + query.orderDirection
          }

          axios({
            method: 'GET',
            url: url,
            headers: { 'Authorization':  `Basic ${secret_key}`},
          }).then(function (result) {
            const {page, data, total} = result.data
            
            resolve({
              data: data,
              page: Number(page) - 1,
              totalCount: total,
            })
          }).catch(function (e) {
            console.log(e.response)
          })
        })
      }
    />
  );
}

export default Product;