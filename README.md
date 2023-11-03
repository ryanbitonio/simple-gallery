# simple-gallery

This repository contains the client and server code for an image gallery website that displays images from Pexels. The client is a React application, and the server is a Node.js REST API that supports CRUD operations.

## Live Website

Image Gallery: https://simple-image-gallery.vercel.app/

RESTful API /products: https://simple-image-gallery.onrender.com/products

## Tech Stack

- **Framework**: React
- **Styling**: TailwindCSS
- **Data Fetching**: @tanstack-react-query and axios
- **UI Components**: shadcn

## Features

- Responsive
- CRUD
- Basic Pagination
- RESTful API

## Running locally

1.) Clone the repository

```bash
  git clone https://github.com/ryanbitonio/simple-gallery.git
```

2.) Install dependencies using npm

```bash
  cd simple-gallery/
  npm run install
```

3.) Start the development server

```bash
  npm run watch
```

## API Reference

_You can use Postman/Insomnia for testing the /products API_

#### Get all products

```http
  GET localhost:3000/products
```

#### Get product

```http
  GET localhost:3000/products/${id}
```

| Parameter | Type     | Description                          |
| :-------- | :------- | :----------------------------------- |
| `id`      | `string` | **Required**. Id of product to fetch |

#### Add product

```http
  POST localhost:3000/products
```

| Body | Type       | Description                        |
| :--- | :--------- | :--------------------------------- |
| `id` | `raw json` | **Required**. Id of product to add |

#### Update product

```http
  PUT localhost:3000/products/${id}
```

| Body | Type       | Description                           |
| :--- | :--------- | :------------------------------------ |
| `id` | `raw json` | **Required**. Id of product to update |

#### Delete product

```http
  DELETE localhost:3000/products/${id}
```

| Parameter | Type     | Description                           |
| :-------- | :------- | :------------------------------------ |
| `id`      | `string` | **Required**. Id of product to update |

## Author

[@ryanbitonio](https://github.com/ryanbitonio)
