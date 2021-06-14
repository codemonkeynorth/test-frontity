const settings = {
  "name": "test-frontity",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            /*[
              "Nature",
              "/category/nature/"
            ],
            [
              "Travel",
              "/category/travel/"
            ],
            [
              "Japan",
              "/tag/japan/"
            ],*/
            [
              "Destinations",
              "/destinations"
            ],
            [ 
              "Movies",
              "/movies"
            ],
            [
              "About Us (don't want this url accessible)",
              "/about-us/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          },
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://test.frontity.org",
          "params": {
            per_page: 2,
          },
          "postTypes": [
            {
              type: "movies",
              endpoint: "movies", // 
              archive: "movies" // the frontity url
            },
            {
              type: "destinations",
              endpoint: "destinations", // 
              archive: "destinations" // the frontity url
            }
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
