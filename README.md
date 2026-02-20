# BookBestie

## See the App!
https://book-bestie.vercel.app/

![BookBestie Logo](./src/assets/logo.png)

---

## Description

BookBestie is a book discovery and review web application that allows users to browse books, explore genres, and view detailed information about individual titles in a clean and modern interface.

#### Client Repo here
https://github.com/maylis-dev/BookBestie

#### Server Repo here
Currently frontend only (no backend repository yet)

---

## Technologies, Libraries & APIs used

- HTML5
- CSS3
- JavaScript (ES6+)
- React
- Vite
- React Router DOM
- npm
- ESLint
- Vercel (deployment)

---

## Backlog Functionalities

- User authentication (signup/login/logout)
- User profile page
- Book rating system
- Add, edit, and delete reviews
- Search bar with filtering options
- Integration with external book API (Google Books API or Open Library API)
- Favorites / Wishlist feature
- Dark mode
- Pagination for book listings
- Backend integration (Node.js + Express or Firebase)

---

# Client Structure

## User Stories

- **404** - As a user I want to see a 404 page when I navigate to a non-existing route so that I understand the page does not exist.
- **500** - As a user I want to see an error page if something goes wrong so that I know the issue is not on my side.
- **homepage** - As a user I want to access the homepage so that I can understand what BookBestie is about.
- **book list** - As a user I want to see a list of books so that I can browse available titles.
- **book details** - As a user I want to see detailed information about a specific book so that I can learn more about it.
- **genre filter** - As a user I want to browse books by genre so that I can easily find books that match my interests.
- **navigation** - As a user I want to use a navigation bar so that I can move between pages easily.

---

## Client Routes

## React Router Routes (React App)

| Path              | Page         | Components        | Behavior                                      |
| ----------------- | ------------ | ----------------- | --------------------------------------------- |
| `/`               | Home         | Navbar, Footer    | Displays homepage with featured books         |
| `/books`          | BookList     | BookCard          | Shows all available books                     |
| `/books/:id`      | BookDetails  |                   | Shows detailed information for one book       |
| `/genres/:genre`  | GenrePage    | BookCard          | Displays books filtered by selected genre     |
| `*`               | NotFound     |                   | Displays 404 page for unknown routes          |

---

## Other Components

- Navbar
- create/edit
- BookCard
- Projectbook

---

## Links

### Collaborators

Maylis  
https://github.com/maylis-dev

### Project

Repository Link Client  
https://github.com/maylis-dev/BookBestie

Repository Link Server  
Not available

Deploy Link  
https://book-bestie.vercel.app/

### Trello

Add your Trello board link here if available

### Slides

Add your presentation slides link here if available
