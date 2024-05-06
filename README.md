# MERN Stack Product Cart Application

This is a simple MERN (MongoDB, Express.js, React.js, Node.js) stack application that allows users to add products with name, price, quantity. Users can then increment or decrement the quantity of each product in the cart.

## Features

- **Add Product**: Users can add products with name, price, quantity.
- **View Products**: Users can view the list of products fetched from the backend.
- **Increment/Decrement Quantity**: Users can increment or decrement the quantity of each product in the cart.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Express.js
- **Database**: MongoDB
- **State Management**: Recoil 
- **Styling**: Tailwind


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Piyush5784/Zakti-task.git

   cd Zakti-task

   cd Frontend/ && npm i

   cd Backend/ && npm i
  
2. Create .env file in the Backend folder and replace mongodbUrl

    ```bash
    mongodbUrl = "",
    port = "",

3. Run it locally 

    into 2 different terminals
    ```bash
    cd Frontend/ && npm run dev
    cd Backend/ && npm run dev
