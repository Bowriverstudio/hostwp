const settings = {
  "name": "f1",
  "state": {
    "frontity": {
      "url": "https://hostwp.no/",
      "title": "HostWP",
      "description": "HostWp website"
    }
  },
  "packages": [
    {
      "name": "@awsmin/f1",
      "state": {
        "theme": {
          "menu": [],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          },
          autoPrefetch: "hover"
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          url: "https://backend.hostwp.no/",
          homepage: "/home/",
          postTypes: [
            {
              type: "nyheter",
              endpoint: "nyheter",
              archive: "/nyheter",
            },
            {
              type: "tjenester",
              endpoint: "tjenester",
              archive: "/tjenester",
            },
          ],
        }
      }
    },
    {
      name: "@frontity/google-tag-manager-analytics",
      state: {
        googleTagManagerAnalytics: {
          containerId: "GTM-5LQS338",
        }
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "frontity-contact-form-7",
    "@frontity/head-tags",
  ]
};

export default settings;