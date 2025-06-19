
# User Authentication Backend (Node.js + MySQL + Docker)


A simple and clean authentication backend built with Node.js, Express, and MySQL. It uses Docker for easy setup and includes JWT login, bcrypt password hashing, and basic validation.



## Installation

1. Install Docker  
   [Download Docker](https://www.docker.com/products/docker-desktop)
2. Clone the repo:
```bash
   git clone https://github.com/ackshayakeerthig/bucketstudy.git
   cd bucketstudy
   ```
3. Start the containers:
```bash
   docker-compose up --build
```
4. Install Postman for testing APIs  
   [Download Postman](https://www.postman.com/downloads/)
    
## Usage/Examples

Once the backend is running, test these endpoints:
```bash
POST /api/auth/register
POST /api/auth/login
GET /api/auth/profile
```
Use Postman to send requests. Sample request bodies are in the API section.



## API Reference

#### Lets check all the APIs
1.Open Postman  
2.On the top left corner, click on new  
3.Create a new http request

#### Register your credentials
```http
  POST http://localhost:3000/api/auth/register
```
Paste this in your json - raw :
```json
{
  "fullname": "Test User",
  "email": "test@example.com",
  "password": "yourPassword123"
}
```
#### Login with your credentials

```http
  POST http://localhost:3000/api/auth/login
```
Paste this in your json - raw :
```json
{
  "email": "test@example.com",
  "password": "yourPassword123"
}
```

Login returns you a jwt token:
```json
{
  "token": <jwt-token>
}
```
#### Check jwt working

```http
  GET http://localhost:3000/api/auth/profile
```
Paste this in your headers :
```json
{
  "email": "test@example.com",
  "password": "yourPassword123"
}
```
| Key             | Value                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Authorisation  | Bearer ***your_jwt_token***
|


## Using Postman file from repo
#### You may also use the postman files directly from the repository
The file `postman/bucketstudy.postman_collection.json` contains all API test requests.

Steps:
1. Open Postman
2. Click Import
3. Choose the file
4. Run the pre-defined API requests

## Project structure
```pgsql
bucketstudy/
├── docker-compose.yml
├── Dockerfile
├── docker-mysql-init/
│   └── full_dump.sql
├── postman/
│   └── bucketstudy.postman_collection.json
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── db/
│   └── server.js
├── package.json
├── .gitignore
└── README.md
```
## Authors

- [@ackshayakeerthig](https://github.com/ackshayakeerthig)


## License

Open-source for educational/demo purposes.


