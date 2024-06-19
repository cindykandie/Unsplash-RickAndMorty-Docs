# Unsplash-RickAndMorty-Docs

This project documents the Unsplash and Rick & Morty APIs. It demonstrates how to fetch and display data from these APIs using a frontend application built with Next.js.

## Features
- Fetch and display photos from Unsplash
- Fetch and display characters from Rick & Morty
- Search and filter Rick and Morty characters by name
- Search photos from Unsplash API
- User-friendly interface with search and filter functionality
- Responsive design

## Technologies Used
- Next.js
- React
- Apollo Client (for GraphQL)
- Axios (for REST APIs)
- Vercel (for deployment)

## Screenshots
![Unsplash Photos](/public/unsplashed.png)
![Ricky and Morty Characters](/public/rickied.png)

## Setup

1. Clone the repository
    ```bash
    git clone https://github.com/cindykandie/Unsplash-RickAndMorty-Docs.git
    cd Unsplash-RickAndMorty-Docs
    ```

2. Install dependencies
    ```bash
    npm install
    ```

3. Set up environment variables
    - Create a `.env.local` file in the root of your project
    - Add your Unsplash API access key
    ```plaintext
    NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=your_unsplash_access_key
    ```

4. Start the development server
    ```bash
    npm run dev
    ```

## Usage

- Navigate to `/unsplash` to view Unsplash photos
- Navigate to `/rickandmorty` to view Rick & Morty characters

## Project Structure

```
Unsplash-RickAndMorty-Docs/
├── .next/
├── node_modules/
├── public/
│   ├── favicon.ico
│   ├── vercel.svg
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── unsplash.js
│   │   │   ├── rickandmorty.js
│   │   ├── lib/
│   │   │   └── apolloClient.js
│   │   ├── unsplash
|                └── page.tsx
│   │   ├── rickandmorty
|                └── page.tsx
│   │   ├── layout.tsx
│   │   ├── globals.css
├── .env.local
├── .gitignore
├── next.config.mjs
├── package.json
├── README.md
```

## API Documentation

### Unsplash API

**Endpoint:** `GET /photos`

**Example Request:**
```bash
curl -H "Authorization: Client-ID YOUR_ACCESS_KEY" "https://api.unsplash.com/photos"
```

**Example Response:**
```json
[
  {
    "id": "Dwu85P9SOIk",
    "created_at": "2016-05-03T11:00:28-04:00",
    "width": 2448,
    "height": 3264,
    "color": "#6E633A",
    "blur_hash": "LFC$yHwc8^$yIAS$%M%00KxukYIp",
    "likes": 24,
    "liked_by_user": false,
    "description": "A man drinking a coffee.",
    "urls": {
      "raw": "https://images.unsplash.com/photo-1463320726281-696a485928c7",
      "full": "https://images.unsplash.com/photo-1463320726281-696a485928c7",
      "regular": "https://images.unsplash.com/photo-1463320726281-696a485928c7",
      "small": "https://images.unsplash.com/photo-1463320726281-696a485928c7",
      "thumb": "https://images.unsplash.com/photo-1463320726281-696a485928c7"
    }
  }
]
```

### Rick & Morty API

**Endpoint:** `GET /character`

**Example Request:**
```bash
curl "https://rickandmortyapi.com/api/character"
```

**Example Response:**
```json
{
  "info": {
    "count": 493,
    "pages": 25,
    "next": "https://rickandmortyapi.com/api/character/?page=2",
    "prev": null
  },
  "results": [
    {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "Earth",
        "url": "https://rickandmortyapi.com/api/location/1"
      },
      "location": {
        "name": "Earth",
        "url": "https://rickandmortyapi.com/api/location/20"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
        // ...
      ],
      "url": "https://rickandmortyapi.com/api/character/1",
      "created": "2017-11-04T18:48:46.250Z"
    },
    // ...
  ]
}
```

## Deployment

The project is deployed using Vercel. 

1. Push your code to GitHub.
2. Log in to Vercel and create a new project.
3. Import your repository and deploy.

## License

This project is licensed under the MIT License.

## Contact

For any inquiries or questions, please contact Cindy(Me) at [cindyjk6@gmail.com].

---

Thank you for using Unsplash-RickAndMorty-Docs. I hope this documentation helps you get started with the Unsplash and Rick & Morty APIs.
