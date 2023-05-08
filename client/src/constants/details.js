const details = [
	`Back when I was an undergrad, the programming course I took focused on using C and Bash.
    For that reason, I was interested in Typescript. It's a superset of Javascript and created to implement static typing to Javascript.
    This way, errors can be caught before deployment and live-server tests. What's a better way to learn Typescript than to create an API application that handles a decent amount of data? 
    I chose two of the most basic APIs, OpenWeather and Unsplash to do so. For the styling portion, I tried using tailwindCSS to quickly style up the application. Tailwind is like the lovechild of SCSS and Bootstrap. 
    It provide modularity and flexibility, althrough the className will get too messy at times. 
    As I build the app part by part, I slowly learn how to implement the typing to React hooks and incoming API responses. Implement types, interfaces, generics. Learning about non-primitive types such as ReactNode and JSX.Elements as well.
    Honestly, most of the time spent on the app was on researching the types of API calls and fixing Typescript `,

	` For this project, I focused on using the React Context API and TailwindCSS for styling. TailwindCSS felt like a great mix between Bootstrap and MUI. It provides the flexibility of rapidly prototyping web components. 
    The downside is that the classes will look really messy if you want to make responsive components. 
    Instead of opening to a movie description page when you click on the thumbnail, I implemented and customizeed a 3rd-party modal component`,

	`I know, I know, everyone has a To-do list application. Starting out learning how to use the React libraries, the To-do list is a great starting project to learn how to use Context API and localStorage. 
    I used Styled Components for styling in this project and I think it's a really organized way of styling the React custom components in the same file.`,

	`Created with the goal of using different technologies in mind, I want to implement Auth0 and Stripe.io into the application. The commerce website grabs product data with a HTTP Post
    and sorts the data using Flux architectures. I had previously used Redux to implement these context state logic, however, I realized that it's not necessary to do so since React now has it's own context state
    Reducer API. The most difficult portion of this project is handling the state logic using the useReducer hook. The state had 3 main components, filter products, cart products, and all products.
     Any online shopping platform allows their client to filter products by color, brand, etc. Withe so many different filtering options available, figuring out the filtering logic was hard`,

	`This portfolio website of mine went through many iterations. It started off really static, but I was able to implement more and more responsive features over time.
    It was not really color-coordinated either, but slowly through Figma and Coolors.io, the colors look more balanced then ever. Through building the portfolio, I learned alot about the component
    lifecycle in React. The perks of using useLayoutEffect for DOM node manipulation vs. useEffect for side effects. HashRouters vs BrowserRouters. 
    I used online resources such as Shaper Slider, GenWave.io, Hankei, and various 3rd party libraries to stylize the website. Messages submitted in the contact Form are routed to the server 
    hosted on Heroku and to MongoDB to be stored. I don't have much experience with Back End, so it was interesting figuring out how MongoDB Schemas, controllers, and routes all function together.`,

	`Created a GUI to send queries to and get responses from a MySQL database. The purpose of this application is to get insights and experience in making SQL queries. 
    The source code uses Typescript as the codebase. It's currently only stored in the Github repository, but I will use Heroku/ Netlify to deploy them in the server. Setting up the server and the api endpoints was simple. It was similar to what I've done with MongoDB. 
    Hardest part of the project is implementing SQL queries with the data retrieved from the Front-End. The server will crash if the datatype for the query sent is invalid, so the data sent to the backend must be formatted correctly prior to adding it to the query.`,
];

export default details;
