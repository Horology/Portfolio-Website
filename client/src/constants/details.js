const details = [
    `Back when I was an undergrad, I took the a basic programming course that focused on using C and Bash.
    For that reason, I was interested in Typescript. I've read that it's a superset of Javascript and created to implement static typing to Javascript.
    This way, errors can be caught before deployment and live-server tests. What's a better way to learn Typescript than to create an API application that handles a decent amount of data? 
    I chose two of the most basic APIs, OpenWeather and Unsplash to do so. For the styling portion, I tried using tailwindCSS to quickly style up the application. Tailwind is like the lovechild of SCSS and Bootstrap. 
    It provide modularity and flexibility, althrough the className will get too messy at times. 
    As I build the app part by part, I slowly learn how to implement the typing to React hooks and incoming API responses. Implement types, interfaces, generics. Learning about non-primitive types such as ReactNode and JSX.Elements as well.
    Honestly, most of the time spent on the app was on researching the types of API calls and fixing Typescript `,
    `This app provides real-time search results of movies. Installed using NPM a React Modal, which I implemented to show the description of each movie. Used a combination of Tailwind and regular CSS for styling`,
    `I know, I know, everyone has a To-do app, but I personally need to keeps track of my personal tasks. It Uses local storage to store data and context API to send information to React components
    (Lesser the prop drilling, the better). Experimented with styled components in React. `,
    `Created with the goal of using different technologies in mind. I want to implement Auth0 and Stripe.io into the application. The commerce website grabs product data with a HTTP Post
    and sorts the data using Flux architectures. I had previously used Redux to implement these context state logic, however, I realized that it's not necessary to do so since React now has it's own context state
    Reducer API. Using the useReducer hooks, I was able to filter products by product data, add products to cart, and checkout products.`,
    `Built the portfolio to showcase my projects in art and in programming. 
    Enjoyed building this web portfolio a lot. It started off being really static and not really color-coordinated, but slowly I was able to make components more responsive. Used able
    started using Figma to figure out the layout. Used online resources such as Coolors.io, Shaper Slider, GenWave.io, Hankei to stylize the website. Messsages submitted in the
    contact Form are routed to the server hosted on Heroku and to MongoDB to be stored. Took a while to configure the MongoDB Schema, controller, and routes to implement.`,
    `Created a GUI to send queries to and get responsese from a MySQL database. Used Typescript to improve codebase. It\'s currently only stored in the Github repository. Will use Heroku/ Netlify to deploy them in the server.
    Hardest part of the project is implementing SQL queries with the data retrieved from the Front-End. mySQL will crash if the datatype is invalid, so the data sent to the backend must be in the right format.`
];

export default details;