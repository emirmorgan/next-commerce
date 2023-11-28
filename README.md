<ul align="center">
  <image width="360" height="90" src="https://gcdnb.pbrd.co/images/r7OBbplt7cSm.png"/>
</ul>

<br>
</br>

## Getting started
First, create an <b>.env</b> file and write these inside the file:

```bash
NEXT_PUBLIC_API_URL=http://localhost:5009/api
NEXT_PUBLIC_TOKEN_SECRET=THERE IS NO KEY HERE JUST FEW RANDOM WORDS TO MAKE THE KEY HAS 512 BITS
```
After changing token secret on client, you must also update the token secret in the `server/appsettings.Development.json` file.

</br>

Second, run the client:
```bash
cd client | npm run dev
# or
cd client | yarn dev
# or
cd client | pnpm dev
```

</br>

And last, run the server:
```bash
cd server | dotnet watch
```
Website will be active after run client and server, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

</br>

## Features
```bash
+ Products
  - Get Products Filtered (Pagination Compatible)
  - Get Spesific Product
  - Add/Remove Favorites
+ Login
  - Login/Register (JWT Authentication)
+ Profile
  - Change the Password
  + Address
    - Create/Delete/Update Address
  - Orders and Details
+ Shop Cart (localStorage)
+ Dashboard
    + Statistics
       - Visitors(for Chart.JS)
       - Sales(for Chart.JS)
       - Total Customer
       - Total Products
       - Total Orders
    + Products
       - Create/Delete Product
       + Product Update Options
    	 - Add/Remove Variants
    	 - Add/Remove Stock
    	 - Update the Price
    + Orders
       - List Orders by Sort (Pagination Compatible)
       - Get the Order by Id
```

</br>

## Tech Stack
+ Next.JS
+ ASP.NET
+ Typescript
+ TailwindCSS
+ Formik / Yup
+ Chart.JS

</br>

## Screenshots
![Home Page](https://gcdnb.pbrd.co/images/kC8t0EEu54Hz.webp)
![Product](https://gcdnb.pbrd.co/images/Has6k54JMzP2.webp)
![Products](https://gcdnb.pbrd.co/images/AELzjUjva4jS.webp)
![Dashboard](https://gcdnb.pbrd.co/images/aWmFRqRFzooX.webp)
![Dashboard/Products](https://gcdnb.pbrd.co/images/5EEKMRIM92Ls.webp)
![Product/Create](https://gcdnb.pbrd.co/images/yaWxvMkxDs1G.webp)
