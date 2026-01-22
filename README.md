This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

This application is built using a Next.JS framework, which is on top of a React front-end and a Node.JS runtime environment.  For backend CRUD operations, next.js is probably all I need (to save cost on deploying microservices).  For more complex operations/business logic, we can probably call an API using an exposed endpoint on microservices, which we can use like java build on spring boot or whatever, which can be deployed on AWS.

I would WANT to make an auth microservice IF I had more than one app that need to login, using the same credentials.
Or, if my authentication traffic is exceptionally high and needs to scale independently from the rest of your application logic.
This would probably be overkill here.

I plan to use an AWS db, likely SQL.  Maybe MongoDB.

/public is where Image component looks to.

Plans are to containerize this image after and deploy it on aws EC2.

UI:
I want to create a dashboard similar to Strava's website on desktop, such that there is a top navigation bar.  The nav bar should have the logo that redirects to the dashboard, "explore hobbies" link, "achievements" link, a search bar to look for other users and groups, and a "profile icon" on the far right that when clicked, should have a dropdown with the profile features, let's start with the dropdown having only "my groups", and "settings".  I want the standard resolution to be 1920 x 1080.   The dashboard will have a calendar in a panel/card on the left, month view, planted there despite any scrolling.  In the center it will have a long vertical scrolling feed.  Above the long vertical feed, have a dropdown allowing you to choose "Following", "Suggested", "All Hobbies" options, planted despite any scrolling. In the right it will have a suggested friends panel/card planted despite any scrolling.