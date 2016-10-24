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

### Application Specifications
Your app must have the following:
  - Your app will have a single route `'/'` (SPA)
  - Search Bar that queries the iTunes API to return music albums based on a search term
    * When displaying the results, there should be a button/link next to each result with the option to save as a favorite
  - There should be a sidebar displaying your list of favorite albums
    * You should be able to delete each album from your favorites list
  - There must be a `music_search.js` service that uses `node-fetch` to query the iTune's API (`https://itunes.apple.com/search?term=beatles&entity=album&medium=music`)
  - There must be a model called `albums.js` that handles the Creation, Reading, and Deleting of album entried in your `mongo` database.