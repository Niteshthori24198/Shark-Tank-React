# 💰 Shark Tank Masai 🦈
### JS-VITE-WITH-MOCK-SERVER

Please do NOT use VSCode live-server. It will not work. Use the npm commands suggested to you here.

## Installation
```
npm install --engine-strict
```
## Start only the Backend server
```
npm run server
```
## Start only Frontend server
```
npm run start
```
## Start both BE & FE in a single command
```
npm run watch
```
# Important files
```
├── index.html
├── scripts
│   └── main.js
└── styles
    └── style.css
```
## Maximum Marks - 15

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

## Rubrics
```
✅ able to submit the app - 1 mark ( minimum score )
✅ Shows the correct initial data - 3 marks 
✅ Able to add new pitch - 2 marks
✅ Able to delete a pitch - 2 marks
✅ Able to edit all fields of the pitch - 2 marks
✅ Able to edit the price - 1 mark
✅ Sorts as expected - 1 mark
✅ Filters as expected - 1 mark
✅ Able to search by title - 1 mark
✅ Able to search by the founder - 1 mark
```
### You haven't been taught Cypress to run the test cases locally, you can see the passed/ failed test cases and test errors on CP itself.

## Some Rules to follow:-

- Before writing a single line of code please read the problem statement very carefully.
- Don't change the already given ids or classes.
- If you don't follow these rules you might not get any marks even if you do everything correctly.

# Problem statements

Your task is to build ***` Shark Tank Masai`*** app where different entrepreneur comes and pitches their `Startup` ideas and you have to perform all `CURD` operations here able to create, update, Read, and Delete a pitch also implement search functionality. Navbar has already been created no need to build it again.
### Problem 1. List of pitches on page load [3]
On page `load`, a list of all `pitches` should be shown in the  `div#data-list-wrapper`. 

Expected markup (Pitch card list):
<!-- ![landingpage markup]() -->
<img src="https://i.imgur.com/a6YoVWO.png" width="100%"/>
- The `div.card` is a card appended to the div with `div.card-list` where all such cards are appended.

Expected markup (example single card div inside card-list div): 
<!-- ![pitchMarkUp]() -->
<img src="https://i.imgur.com/HeBZdOx.png" width="100%"/>

- **Markup - elements, classes & IDs should be identical to the above screenshot.**

- The **Card** with `div.card` and `data-id={id of div}` having two child div 
  1. The `div.card-img` in this image of the pitch is present.
  2. The `div.card-body` in this 
    - h4 tag with `h4.card-title` **with title of pitch**.
    - p tag with `p.card-founder` with the founder of the pitch
    - p tag with `p.card-category` with category of pitch
    - p tag with `p.card-price` with the price of a pitch
    - anchor tag with `a.card-link` with `Edit` text
        -  class= card-link
        -  href=#
        -  data-id= id of the pitch 
    - button with `button. card-button` with `Delete` text 
        -  class= card-button
        -  data-id= id of the pitch

Expected UI (example card):
<!-- ![pitchUI]() -->
<img src="https://i.imgur.com/ZVoohx1.png" width="100%"/>

Data mapping:
<!-- ![dataMarkUp]() -->
<img src="https://i.imgur.com/r1o2bXu.png" width="100%"/>

- The data should be fetched from `${baseServerURL}/pitches`
- The pitches should be shown on page `load`

### Problem 2. Ability to add new Pitches [2]
<!-- ![add pitch ] -->
<img src="https://i.imgur.com/AL1MsGd.png" width="100%"/>

- make a 'POST' request at ```${baseServerURL}/pitches```
- **` the page must not reload the list must update`**  otherwise you will lose the marks.

<!-- ![added pitch UI]() -->
<img src="https://i.imgur.com/VgpjqId.png" width="100%"/>

### Problem 3. Ability to delete a Pitch [2]
- In each pitch, the card adds a button `Delete` with `button.card-button` On clicking this button particular pitch must be removed from DOM as well as `db.json`.

- make a 'DELETE' request at ```${baseServerURL}/pitches/{pitchId}```
- **` the page must not reload the list must update`**  otherwise you will lose the marks.

### Problem 4. Ability to update all the fields of a pitch [2]

- Able to populate the following input on edit link click.
- add an event listener with ```click``` to anchor tag with class `.card-link` use preventDefault.
- The page should not re-load on the click of the EDIT link `.card-link`.

1. To update all fields 

- `#update-pitch-id`  should be populated with the `id` of the pitch 
- `#update-pitch-title` should be populated with the `title` of the pitch
- `#update-pitch-image` should be populated with the `image URL` of the pitch
- `#update-pitch-founder` should be populated with the `founder` of the pitch
- `#update-pitch-category` should be populated with the `category` of the pitch
- `#update-pitch-price` should be populated with the `price` of the pitch

<img src="https://i.imgur.com/yM4Eorz.png" width="100%"/>

- make a 'PATCH' request at ```${baseServerURL}/pitches/${pitchId}``` to updated *title , image ,founder ,category and price*
- **` the page must not reload the list must update`**  otherwise you will lose the marks.

### Problem 5. Ability to update only the Price [1]

- Able to populate the following input on edit link click.
- `#update-price-pitch-id` should be populated with the `id` of the pitch
- `#update-price-pitch-price` should be populated with the `price` of the pitch

- Once the edit inputs are populated, if the user clicks `#update-price-pitch` button. 
- the price of that particular pitch should update based on the value entered in the `#update-price-pitch-price`. 
- The price of the pitch in the list should update without any page *reloads*.

- - **` the page must not reload the list must update`**  otherwise you will lose the marks.

- make a 'PATCH' request at ```${baseServerURL}/pitches/${pitchId}```

### Problem 6. Sorting Pitches Based on Price [1]
- Sorting for `Low to High` UI:
<!-- ![sort Low to high] -->
<img src="https://i.imgur.com/zMSdKGK.png" width="100%"/>

With the click of the button `#sort-low-to-high`, the pitch list should be sorted in ascending order based on their *price*.

With the click of the button `#sort-high-to-low`, the pitch list should be sorted in descending order based on their *price*.

You may use any approach of your choice for sorting. You may sort the available data or you may make a new fetch request to the server and update the list. In case you want to fetch data, please use the [JSON Server documentation](https://github.com/typicode/json-server).

### Problem 7. Filtering Pitches based on the category [1]
 You have to create three types of filters as
 1. ***Food***
 2. ***Electronics***
 3. ***Personal Care***
- Filtering for `Electronics` UI:
<!-- ![filter fantacy] -->
<img src="https://i.imgur.com/19I0mX7.png" width="100%"/>

When the button `#filter-Food` is clicked, the pitch list is expected to be filtered. It should only show the pitches whose `category` is ***`Food`***.

When the button `#filter-Electronics` is clicked, the pitch list is expected to be filtered. It should only show the pitches whose `category` is ***`Electronics`***.

When the button `#filter-Personal-Care` is clicked, the pitch list is expected to be filtered. It should only show the pitches whose `category` is ***`Personal-Care`***.

You may use any approach of your choice for filtering. You may filter the available data or you may make a new fetch request to the server and update the list. In case you want to fetch data, please refer to the [JSON Server documentation](https://github.com/typicode/json-server).

### Problem 8. Search by title/founder [1+1]
- To implement search functionality on top there is a select tag with *options* as to search by category  
 1. ***`title`***
<!-- ![search by title] -->

<img src="https://i.imgur.com/BKcnVKG.png" width="100%"/>

 2. ***`founder`***

<img src="https://i.imgur.com/3GZzTfg.png" width="100%"/>

A select tag (`select#search-by-select`) with options as
  1. Title
  2. Founder is already created
every time you have to select eighter option, next to it there is an input box (`input#search-by-input`) you have to enter the title name/founder name if it is included in the title/founder's name respectively show those pitches only after clicking a search button(`button#search-by-button`)

You may use any approach of your choice for search functionality. You may use the available data or you may make a new fetch request to the server (with params as ***`?${title/founder}_like=${title name/founder name}`***) and update the list. In case you want to fetch data, please refer to the [JSON Server documentation](https://github.com/typicode/json-server). 


***Note***:- Get the updated data from API after POST, PATCH or DELETE request is done.


### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
- Use `${baseServerURL}/what-ever-route` for server url & not `localhost:9090/what-ever-route` in your solution. Failing to do so may cause all the tests to fail.
#   S h a r k - T a n k - R e a c t  
 