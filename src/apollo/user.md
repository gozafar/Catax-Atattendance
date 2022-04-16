# getAllUsers

```js
query getAllusers {
  getAllusers {
    payload {
      _id
      name
      email
      emailVerified
      mobileNo
      phoneVerified
      isPasswordSet
      gender
      dob
      pancard
      aadhaar
      position
      bankAccount
      IFSC
      city
      state
      country
      referrer
      refCode
      createdAt
      updatedAt
    }
    page
    limit
    count
    message
    status
  }
}
```

# getuser

```js
query getuser($userId: ID!) {
  getuser(userId: $userId) {
    payload {
      _id
      name
      email
      emailVerified
      mobileNo
      phoneVerified
      isPasswordSet
      gender
      dob
      pancard
      aadhaar
      position
      bankAccount
      IFSC
      city
      state
      country
      referrer
      refCode
      createdAt
      updatedAt
    }
    token
    message
    status
  }
}
```

> Mutation

# userRegister

```js
mutation userRegister($input: NewUser!) {
  userRegister( input: $input) {
    payload {
      _id
      name
      email
      emailVerified
      mobileNo
      phoneVerified
      isPasswordSet
      gender
      dob
      pancard
      aadhaar
      position
      bankAccount
      IFSC
      city
      state
      country
      referrer
      refCode
      createdAt
      updatedAt
    }
    token
    message
    status
  }
}
```

-variable

```json
{
  "input": {
    "name": "",
    "email": "",
    "mobileNo": "",
    "password": "",
    "confirmPassword": "",
    "gender": "",
    "dob": "",
    "pancard": "",
    "aadhaar": "",
    "position": "",
    "bankAccount": "",
    "IFSC": "",
    "city": "",
    "state": "",
    "country": ""
  }
}
```

# userLogin

```js
mutation userLogin($email: String!, $password: String!) {
  userLogin(email: $email, password: $password) {
    payload {
      _id
      name
      email
      emailVerified
      mobileNo
      phoneVerified
      isPasswordSet
      gender
      dob
      pancard
      aadhaar
      position
      bankAccount
      IFSC
      city
      state
      country
      referrer
      refCode
      createdAt
      updatedAt
    }
    token
    message
    status
  }
}
```

# userUpdate

```js
mutation userUpdate($userId: ID!, $update: UpdateUser!) {
  userUpdate(userId: $userId, update: $update) {
    payload {
      _id
      name
      email
      emailVerified
      mobileNo
      phoneVerified
      isPasswordSet
      gender
      dob
      pancard
      aadhaar
      position
      bankAccount
      IFSC
      city
      state
      country
      referrer
      refCode
      createdAt
      updatedAt
    }
    token
    message
    status
  }
}
```

-variable

```json
{
  "userId": null,
  "update": {
    "name": null,
    "gender": null,
    "dob": null,
    "pancard": null,
    "aadhaar": null,
    "position": null,
    "bankAccount": null,
    "IFSC": null,
    "city": null,
    "state": null,
    "country": null
  }
}
```

# userDelete

```js
mutation userDelete($userId: ID!) {
  userDelete(userId: $userId) {
    payload {
      _id
      name
      email
      emailVerified
      mobileNo
      phoneVerified
      isPasswordSet
      gender
      dob
      pancard
      aadhaar
      position
      bankAccount
      IFSC
      city
      state
      country
      referrer
      refCode
      createdAt
      updatedAt
    }
    token
    message
    status
  }
}
```
