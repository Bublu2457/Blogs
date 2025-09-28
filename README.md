
## Satoru foundation assignment
-Blog platform is built using Next.js,tailwind css,MongoDB.
-Deployed it in Vercel.


## Description about project:
-It  shows latest bolgs on home page with `tilte`,`description/tag`,`timestamp`.
-It is  also provided with fearture to add blog in web app as a `admin`.
-It has navigation on top like `Home` to return back.


## Setup guidlines
-clone the repository: ` git clone https://github.com/Bublu2457/Blogs.git cd repo`.
-install dependencies: they are in package.json in root of the folder.
  dependencies:  
     "mongoose": "^8.18.2",
     "next": "15.5.4",
     "react": "19.1.0",
     "react-dom": "19.1.0"
     "@tailwindcss/postcss": "^4",
     "@types/node": "^20",
     "@types/react": "^19",
     "@types/react-dom": "^19",
     "tailwindcss": "^4",
     "typescript": "^5".

-To connect with your own database create `.env.development` and add database url to connect with local or remote database.

-run the app: `npm run dev`.

## usage of chatgpt
 -used chatpt to take help in deploying it in vercel. 
 -`To fix few errors that occur while destructing the parameters it was bit difficult`.
 -`while configuring tailwind css with postcss `.
 -`to solve issues with version in tailwind`.
 








## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

