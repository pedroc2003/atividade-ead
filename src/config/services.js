import React from 'react'
import axios from 'axios'

const services=(titulo,descricao)=> {
axios.defaults.baseURL='http://10.0.2.2:3000'
    axios.post('/user/user', {
        title: titulo,
        desc: descricao
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}
  

export default services;
