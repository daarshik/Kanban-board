This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Schema for crud

Baseurl="http://localhost:3000/api"

1- CRUD for Kanban Board
endpoint: /topic

{
"boards": [
{
"\_id": "654bfffa48f2593817502da8",
"name": "cghfxjfj",
"description": "dgzdrd",

},
{
"\_id": "654e0d792f2b9678a7ffcb10",
"name": "HTML",
"description": "hypertext",

},
{
"\_id": "654e37b73d6ad9ad447bb612",
"name": "DSA",
"description": "Data Structure And Algo",

}
]
}

METHODS:
1- GET-> /topic
2- DELETE-> /topic?id=[id]
3- POST-> /topic
{
"name": "DSA",
"description": "Data Structure And Algo",
}
4- PUT-> /topic/[id]
{
"newName": "DSA",
"newDescription": "Data Structure And Algo",
}

2- CRUD for column
endpoint: /topic/column
{
"getAllColumn": [
{
"_id": "654e23dae9e92343d8d9ba4e",
"name": "Hydrogen",
"__v": 0
},
{
"_id": "654e244de9e92343d8d9ba56",
"name": "Anmol",
"__v": 0
},
{
"_id": "654e2660e9e92343d8d9ba98",
"name": "Daarshik",
"__v": 0
}
]
}

METHODS:
1- GET-> /topic/column
2- DELETE-> /topic/column?id=[id]
3- POST-> /topic/column
{
"name": "DSA"
}
4- PUT-> /topic/column/[id]
{
"newName": "DSA"
}

3- CRUD for Items
endpoints: /topic/column/item

{
"getAllItem": [
{
"_id": "654e282b2d1495e088970be4",
"name": "xgbdgfnndfhdtrhdhhh",
"description": "yyyyyyyyyyyyyyyyyyy",
"createdAt": "2023-11-10T12:55:07.549Z",
"updatedAt": "2023-11-10T12:55:07.549Z",
"__v": 0
},
{
"_id": "654e289c2d1495e088970bea",
"name": "DesignItem",
"description": "DesignDesc",
"createdAt": "2023-11-10T12:57:00.352Z",
"updatedAt": "2023-11-10T12:57:00.352Z",
"__v": 0
}
]
}

METHODS:
1- GET-> /topic/column/item
2- DELETE-> /topic/column/item?id=[id]
3- POST-> /topic/column/item
{
"name": "DesignItem",
"description": "DesignDesc"
}
4- PUT-> /topic/column/item[id]
{
"newName": "DSA",
"newDescription": "Data Structure And Algo"

}

P.s. I have also done impolemented the drag and drop functionality but there is small issue due to which this functionality will only be triggered only if some changes are done to the codebase. Also i could have solved this if i had more time. Thankyou for your time!
