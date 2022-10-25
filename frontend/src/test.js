import axios from 'axios'

function login({username = '', password = ''}) {
    axios.post(
      "http://localhost:8000",
      {
        username: 'admin',
        password: '123456'
      },{
          headers: { 'content-type': 'application/x-www-form-urlencoded' }
        }
    ).then(resp =>{
        console.log(resp)
    }).catch(error =>{
        console.log(error)
    })
}

login({username: 'admin', password: '123456'})

