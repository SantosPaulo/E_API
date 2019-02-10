# E_API
Express API boilerplate

## Mongo server
```
// start mongo server
mongod
```

# Generate app key
```
npm run gen-app-key
```

## Node server:
```
// install packages and run server
npm i && npm run dev
```

## Routes

### signup

- **POST** http://localhost:3000/api/v1/signup
params:
    username: string
    password: string

### signin

- **POST** http://localhost:3000/api/v1/signin
params:
    username: string
    password: string

### user

- **POST** http://localhost:3000/api/v1/user
headers:
    Authorization: string token
