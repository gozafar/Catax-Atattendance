import { gql } from '@apollo/client';

export const USER_CREATE = gql`
  mutation userRegister($input: NewUser!) {
    userRegister(input: $input) {
      payload {
        _id
        name
        email
        #emailVerified
        mobileNo
        #phoneVerified
        isPasswordSet
        gender
        dob
        doj
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
`;

export const USER_LOGIN = gql`
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
`;
