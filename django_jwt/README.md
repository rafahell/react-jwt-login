# DJANGO JWT

## Getting Started

```bash
# install packages
pip3 install -r requirements.txt
```

```bash
# init db and admin suer
python3 manage.py makemigrations
python3 manage.py migrate
echo "from django.contrib.auth.models import User; User.objects.create_superuser('admin', 'admin@taoglas.com', 'admin')" | python manage.py shell
```

```bash
# start server
python3 manage.py runserver
```

## DOC

Users endpoints https://djoser.readthedocs.io/en/latest/base_endpoints.html#

JWT endpoints https://djoser.readthedocs.io/en/latest/jwt_endpoints.html

Endpoint prefix: localhost:8000/auth/ 

### Signup

```js
var axios = require('axios');
var data = JSON.stringify({
  "email": "rrbeeee@tao.com",
  "username": "ronaldo",
  "password": "testtest",
  "re_password": "testtest"
});

var config = {
  method: 'post',
  url: 'localhost:8000/auth/users/',
  headers: { 
    'Content-Type': 'application/json', 
    'Cookie': 'csrftoken=mjo1VCDUxjdfosaFXFLaAHcOQgbgQYFhdrAHR7hGhVGmf8hefDth1vTj9RkZ8eAy'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```

### Login

```js
var axios = require('axios');
var data = JSON.stringify({
  "username": "ronaldo",
  "password": "testtest"
});

var config = {
  method: 'post',
  url: 'localhost:8000/auth/jwt/create/',
  headers: { 
    'Content-Type': 'application/json', 
    'Cookie': 'csrftoken=mjo1VCDUxjdfosaFXFLaAHcOQgbgQYFhdrAHR7hGhVGmf8hefDth1vTj9RkZ8eAy'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```

### Verify

```js
var axios = require('axios');
var data = JSON.stringify({
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUxMjI1ODA2LCJqdGkiOiJhOWIwZjdjZWUxYjc0M2MyOTI0ZjU2N2Y5MTE3ZmQ3ZiIsInVzZXJfaWQiOjJ9.IKO3P-gL_1MbRM1Rd19LOsKmQu1MJr8yuofuPyYx3HQ"
});

var config = {
  method: 'post',
  url: 'localhost:8000/auth/jwt/verify/',
  headers: { 
    'Content-Type': 'application/json', 
    'Cookie': 'csrftoken=mjo1VCDUxjdfosaFXFLaAHcOQgbgQYFhdrAHR7hGhVGmf8hefDth1vTj9RkZ8eAy'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```

### User Details

```js
var axios = require('axios');

var config = {
  method: 'get',
  url: 'localhost:8000/auth/users/me/',
  headers: { 
    'Authorization': 'Bearer  eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUxMjI2MjY3LCJqdGkiOiIwY2RjN2EyMTU1ZjI0NjAyODE4YTNiZDQwNDc1ZDdiZSIsInVzZXJfaWQiOjN9.0ZmqCueha2NWozIBu9TF_7hPYS3W53tar2SAT95Qivo', 
    'Cookie': 'csrftoken=mjo1VCDUxjdfosaFXFLaAHcOQgbgQYFhdrAHR7hGhVGmf8hefDth1vTj9RkZ8eAy'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```