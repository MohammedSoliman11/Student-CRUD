# Student App CRUD Operations Using Firebase Tokens and Node.js

## Introduction

This repository outlines the implementation of CRUD (Create, Read, Update, Delete) operations for a Student App using Node.js. Firebase tokens are employed for user authentication, and MongoDB is used for data storage.

## Table of Contents

1. [Setup](#setup)
2. [Authentication with Firebase Tokens](#authentication-with-firebase-tokens)
3. [Endpoints](#endpoints)
   - [Register User](#register-user)
   - [Login User](#login-user)
   - [Create New Student](#create-new-student)
   - [Get All Students](#get-all-students)
   - [Get Student By ID](#get-student-by-id)
   - [Delete Student By ID](#delete-student-by-id)
   - [Update Student By ID](#update-student-by-id)
4. [Implementation Details](#implementation-details)
   - [Middleware for Firebase Token Validation](#middleware-for-firebase-token-validation)
   - [MongoDB Schema](#mongodb-schema)
   - [Endpoint Implementations](#endpoint-implementations)
5. [Conclusion](#conclusion)

## Setup

To run the application, ensure you have Node.js and MongoDB installed on your machine. Replace placeholder values in the code with your actual Firebase project configurations.

1. **Install Node.js:** [https://nodejs.org/](https://nodejs.org/)
2. **Install MongoDB:** [https://docs.mongodb.com/manual/installation/](https://docs.mongodb.com/manual/installation/)
3. **Install project dependencies:**
   ```bash
   npm install
   ```

### Run the Node.js server:

    npm start

## Authentication with Firebase Tokens

Firebase tokens are employed for user authentication. The server validates the provided Firebase token to secure data operations.

### Endpoints

### Register User

- **URL:** `POST /api/v1/users/register`
- **Description:** Register a new user, store their information in MongoDB and create custom token in firebase.
- **Request Body:**
  ```json
  {
    "name": "Mohammed Soliman",
    "email": "mohamed.soliman@gmail.com",
    "passowrd": "1234567",
    "passowrdConfirm": "1234567"
  }
  ```
- **Response**
  ```json
  {
    "status": "OK",
    "data": {
      "name": "Mohammed Soliman",
      "email": "mohamed.soliman@gmail.com",
      "CreatedAt": "2024-01-06T15:47:42.249Z",
      "isVerified": false,
      "isDeleted": false,
      "_id": "659...52a"
    },
    "token": "eyJhbG...AN8Gexg"
  }
  ```

### Login User

- **URL:** `POST /api/v1/users/login`
- **Description:** login user and create custom token in firebase
- **Request Body:**
  ```json
  {
    "email": "mohamed.soliman@gmail.com",
    "passowrd": "1234567"
  }
  ```
- **Response**
  ```json
  {
    "user": {
      "_id": "65992...56d0",
      "name": "Mohammed Soliman",
      "email": "mohamed.soliman@gmail.com",
      "CreatedAt": "2024-01-06T10:47:26.213Z",
      "isVerified": false,
      "isDeleted": false
    },
    "token": "eyJhbGciOi...HBdpOg"
  }
  ```

## Student CRUDS

there're endpoints to handle all CRUDs for student in MongoDB

### Endpoints

### Create New Student

- **URL:** `POST /api/v1/students/createStudent`
- **Description:** Register a new user and store their information in MongoDB.
- **Request Body:**
  ```json
  {
    "name": "Mohammed Soliman",
    "email": "mohamedsoliman123@gmail.com",
    "grade": "1",
    "address": "Tahrir square, Cairo, Egypt",
    "phoneNumber": "123456789"
  }
  ```
- **Response**
  ```json
  {
    "status": "OK",
    "data": {
      "name": "Mohammed Soliman",
      "email": "mohamedsoliman123@gmail.com",
      "grade": "1",
      "address": "Tahrir square, Cairo, Egypt",
      "CreatedAt": "2024-01-06T15:41:05.540Z",
      "phoneNumber": "123456789",
      "_id": "659975...a5a"
    }
  }
  ```

### Get All Students

- **URL:** `GET /api/v1/students/`
- **Description:** Get All Students from MongoDB.
- **Response**
  ```json
  {
    "status": "OK",
    "data": [
      {
        "name": "Mohammed Soliman",
        "email": "mohamedsoliman123@gmail.com",
        "grade": "1",
        "address": "Tahrir square, Cairo, Egypt",
        "CreatedAt": "2024-01-06T15:41:05.540Z",
        "phoneNumber": "123456789",
        "_id": "659975...a5a"
      }
    ]
  }
  ```

### Get Student By ID

- **URL:** `GET /api/v1/students/{StudentID}`
- **Description:** Get a Single Student from MongoDB.
- **Response**
  ```json
  {
    "status": "OK",
    "data": {
      "name": "Mohammed Soliman",
      "email": "mohamedsoliman123@gmail.com",
      "grade": "1",
      "address": "Tahrir square, Cairo, Egypt",
      "CreatedAt": "2024-01-06T15:41:05.540Z",
      "phoneNumber": "123456789",
      "_id": "659975...a5a"
    }
  }
  ```

### Delete Student By ID

- **URL:** `DELETE /api/v1/students/{StudentID}`
- **Description:** Delete a Single Student from MongoDB.
- **Response**
  ```json
  {
    "status": "Success"
  }
  ```

### Update Student By ID

- **URL:** `PUT /api/v1/students/{StudentID}`
- **Description:** Update a Single Student from MongoDB.
- **Response**
  ```json
  {
    "status": "Name updated successfully",
    "data": {
      "_id": "65997b9eddea326d8b2301d8",
      "name": "mohamedsoliman",
      "email": "mohamedsoliman123@gmail.com",
      "grade": "1",
      "address": "Tahrir square, Cairo, Egypt",
      "phoneNumber": "123456789",
      "CreatedAt": "2024-01-06T15:41:05.540Z"
    }
  }
  ```

# Implementation Details

## Middleware for Firebase Token Validation

A middleware function is implemented to validate and authenticate Firebase tokens. It is applied to endpoints requiring authentication.

## MongoDB Schema

A MongoDB schema is defined for the User model with basic user details.

## Endpoint Implementations

Endpoints are implemented for registering new user and login users those endpoints for who are using the api.
creating a new student, getting a student by ID, getting multiple students, update single student by ID and delete a single student by ID.
Firebase token authentication is applied to secure these operations.

## Conclusion

This project showcases the integration of Firebase tokens for user authentication and MongoDB for data storage in a Node.js environment. The CRUD operations provide a solid foundation for building more complex applications, and the implementation can be extended to include additional features based on specific project requirements.

For any questions or issues, please refer to the project documentation or contact the project maintainers.

Contact me to provide a service account and env variables.
