# iTunes C.R.U.D.

![iTunes](http://i.giphy.com/M0jz9LMQCPDLW.gif)

## Introduction
Today we will be creating a SPA(Single Page Application) that will allow us to search for, and store our favorite albums from iTunes.

### Setup
To get started, create a project in your `lab/` directory and initialize a node project. Download the following dependencies for your project:
  - `express`
  - `ejs`
  - `path`
  - `morgan`
  - `node-fetch`
  - `mongodb`
  - `body-parser`
  - `method-override`

Create a project with the following structure:

```
itunes_crud/
  |_ public/
  |     |_ css/
  |         |_ normalize.css
  |         |_ main.css
  |
  |_ models/
  |     |_ favorites.js
  |
  |_ services/
  |     |_ itunes.js
  |
  |_ views/
  |     |_ index.ejs
  |
  |_ app.js
  |_ package.json
```

[Here is a link to a normalize.css](https://necolas.github.io/normalize.css/5.0.0/normalize.css) - copy and paste it in your own `normalize.css` file, and make sure you link the `normalize.css` file before you link `main.css` in the `<head>` of your `index.ejs`

### Application Specifications
Your app must have the following:
  - Your app will only render a single view (index.ejs), which should contain:
    * Search Bar that queries the iTunes API to return music albums based on a search term
      - When displaying the results, there should be a button/link next to each result with the option to save as a favorite
    * There should be a display of your list of favorite albums
      - You should be able to delete each album from your favorites list
  - There must be a `itunes.js` service that uses `node-fetch` to query the iTune's API (`https://itunes.apple.com/search?term=beatles&entity=album&medium=music`)
  - There must be a model called `favorites.js` that handles the Creation, Reading, and Deleting of album entried in your `mongo` database.
  - All routing can be done in the `app.js`, you shuld have the following:
    * GET to `/`
      - This should use middleware to get your current favorites (if there are none yet make sure there is a way to set them to `[]`)
      - render `index.ejs`
    * POST to `/search`
      - This should use middleware to get your current favorites (if there are none yet make sure there is a way to set them to `[]`)
      - This should use middleware to search the iTunes API
      - render `index.ejs`, with your favorites _and_ the search results
    * POST to `/favorites`
      - This should use middleware to save to your current favorites
      - redirect to `/` (hint: `res.redirect('/')`)
    * DELETE to `/favorites/:id`
      - This should use middleware to delete the selected album from your current favorites
      - redirect to `/`

#### Bonus
1. STYLE IT!
2. Think about how you would be able to update entries into your database and what else we would need to make that possible