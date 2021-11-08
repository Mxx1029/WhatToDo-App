# WhatToDo-App
App to search and list events - final Full Stack Web Dev project @ DCI Berlin, class of 2022

- one sentence description: With this app you can list, find, filter and share events happening in Berlin at anytime!
- (slightly) longer description: You can look up events by category and/or date. If you signup/login, you can also list your own events, share them and make a wishlist of events you like.
- MVP (Minimal Viable Product):
  - list of events on current day
  - search by category
  - search by date
  - registration/login
  - create event listing

## Usage
  - this will serve as the frontend repo: [WhatToDo-frontend](https://github.com/Mxx1029/WhatToDo-frontend)
    - npm i
    - npm start (??)
  - backend repo can be found here: [WhatToDo-backend](https://github.com/Mxx1029/WhatToDo-backend)
    - npm i
    - npm start (??)

## Table of contents
- [Overview](#overview)
  - [Team](#team)
  - [The idea](#the-idea)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview
### Team

- Maria Glück ()
- Kalaya Chatelain (https://github.com/Kaalaayaa)
- Maxie Haufe (https://github.com/Mxx1029)

### The idea

Users should be able to:
- View the optimal layout for the app depending on their device's screen size

#### USER FLOW: 
- case 1: user is NOT logged in
  - LANDING PAGE MAIN: events happening that current day as a list --> KEY FEATURE
  - OR events as pins on a map (you can switch between listings view and map view) --> NICE TO HAVE
  - HEADER: login/signup; create a listing --> KEY FEATURE
  - HEADER: User can search for events by category (drop-down menu) and/or by date (drop-down menu) --> KEY FEATURES
  - HEADER: User could also search by district (drop-down) and/or keywords (input field) --> NICE TO HAVE
  - MAIN: Events displayed as cards; 4 in a row on Web App, 1 or 2 in a row on mobile, infinite scroll-down --> KEY FEATURE 
  - OR 20 results per page (web and mobile) --> NICE TO HAVE
  - EVENT CARD: Image (incl. Date or duration), Title, Teaser, Category (only 1 displayed here, more on event page), District, (Wishlist Icon), GO button on Web (click on image on mobile) --> KEY FEATURES (apart from Wishlist)
  - FOOTER: contact, disclaimer (not responsible for content correctness), privacy (what type of data we collect and what we do with it) --> NICE TO HAVE
  - EVENT PAGE: 
    - WEB: 
      - Left 2/3: Image (incl. date/duration), Title, Description, Categories (all) --> KEY FEATURE; also Wishlist Icon and Map with Pin (GoogleMaps Integration) --> NICE TO HAVE
      - Right 1/3: Date & Times; Location (link to googlemaps); Price & Bookings (link to bookingpage); Contact Details: Telephone, email (link to website)
    - MOBILE: 1 Row: first image, title, start of description with a show more drop down; then the Date & Times, Location etc. row, Map
- case 2: user wants to register --> KEY FEATURE
  - SIGNUP --> REDIRECT TO LOGIN
- case 3 user wants to login --> KEY FEATURE
  - LOGIN: KEY FEATURE 
- case 4: user wants to create a listing --> KEY FEATURE
  - REDIRECT TO SIGNUP
- case 5: user wants to make a wishlist --> NICE TO HAVE
  - REDIRECT TO SIGNUP
- case 6: user is LOGGED IN --> KEY FEATURE
  - HEADER stays the same, plus logout
  - MAIN: still defaults to events on that day
  - above events, Create Listing component, maybe display only a bit and hide the rest in a show more
  - NICE TO HAVE: Wishlist

#### Questions: 
- How is the sequence of results displayed? first listing, date, best category fit, alphabet, free first


### Screenshot
![](./screenshot.jpg)

--> Figma stuff goes here?
Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.
Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.
Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

### Links
- Solution URL: [Add solution URL here](https://your-solution-url.com) 
- Live Site URL: [Add live site URL here](https://your-live-site-url.com) --> HEROKU link here!
## My process
### Built with
- Figma
- Semantic HTML5 markup
- CSS, Flexbox, Grid
- SCSS
- Mobile-first workflow
- React
- (React Native)
- Node.js
- Express
- MongoDB/Mongo Atlas/mongoose
- Git, GitHub, Git Projects
- Heroku
### What I learned (maybe filling this later, maybe not)
Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.
To see how you can add code snippets, see below:
```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
const proudOfThisFunc = () => {
  console.log(':tada:')
}
```
If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.
**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development
Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.
**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources
- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.
**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author
- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)
**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments
This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.
**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
