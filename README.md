## **React TDD - Star Wars Project**

A web application that displays character details from the Star Wars universe
using the swapi.dev API.









1) **Home Page**

1.1) On Windows load, an API request is made to fetch list of characters from  GET https://swapi.dev/api/people/?page=${pageNumber}.

Further for each character another API call is made using axios.get to API  GET https://swapi.dev/api/planets/?page=${pageNumber}.

Data is merged together from both the API's to collect and merge general characters and planets .
![image](https://github.com/sahilomatic/star-war/assets/70945198/1bf91ec8-4d61-4663-9ed2-53aef5f146b2)



1.2) **Fetched data is added to cache using local storage** , pagewise to avoid unnecessary API request, **if user clicks again previous page , data is fetched from cache** i.e. localstorage.
![image](https://github.com/sahilomatic/star-war/assets/70945198/017a2d27-d6b4-422c-a9df-ba4b682f77e8)

1.3) Loader appears when request is made to new page




2) **Character Details model**

2.1) On click details icons , a character details model popup on screen which show character details.
![image](https://github.com/sahilomatic/star-war/assets/70945198/5b9edd56-d551-4da8-9caf-ea2387da39f9)


2.2) Using Promise.all , API call are made for all film titles , in which given character has appeared.
![image](https://github.com/sahilomatic/star-war/assets/70945198/da10f1b9-84d4-492c-a63e-f942a06011e0)

2.3) Character gender can be changed via user
![image](https://github.com/sahilomatic/star-war/assets/70945198/7bcee6c8-0336-451c-aacf-a0f77b23a34a)


## Features

- Loader while fetching data
- Character Details Table
- Pagination
- Character Details Model
- Cache mechanism using Local Storage
- Unit Testing 
- TDD
- Change character gender functionality
- Typescript


## Optimizations

- Used Promis.all to make parallel API requests
- Used Local Storage to cache old data
- CSS properties to convert text to title format


## Tech Stack

**Client:** React, Typescript , HTML , CSS , Axios, react-router-dom, react-bootstrap

**Testing:** react-testing-library, Jest




## Running Tests

To run tests, run the following command

```bash
  npm run test
```
Unit Testing is done using react-testing-library and jest for each react-typescript component.

![image](https://github.com/sahilomatic/star-war/assets/70945198/bbe5d918-fd69-4840-b192-a7bc460fd47f)

## Installation

Install star-wars-api with npm

```bash
  npm install
  
```
    
## API Reference

#### Get all items

```http
  GET https://swapi.dev/api/people/?page=${pageNumber}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `pageNumber` | `number` | **Required**.  |

#### Get item

```http
  GET https://swapi.dev/api/planets/?page=${pageNumber}
```


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `pageNumber` | `number` | **Required**.  |

```http
  GET https://swapi.dev/api/films/?page=${pageNumber}
```


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `pageNumber` | `number` | **Required**.  |



## Contributing

In future end to end testing can be implemented using libraries like Cypress
