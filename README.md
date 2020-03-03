# LandTrick Server

## Setup

```sh
yarn
yarn setup
```

Update the `.env` file.

## Development

```sh
yarn dev
```

## Production

```sh
yarn start
```

---

# Endpoint and Data Collection

## Users

| Endpoint                             | Method | Description        | isAuthenticated | isAdmin |
| ------------------------------------ | ------ | ------------------ | --------------- | ------- |
| `/http://localhost:5001/`            | GET    | Hello              |                 |         |
| `http://localhost:5001/api/v1/login` | POST   | Register new buyer |                 |         |

Example Data:

```json
{
  "_id": ObjectID(),
  "id": 1,
  "username": "name",
  "email": "email",
  "salt": "",
  "password": "password"
}
```
