---
title: Generic Template
Keywords:
level1:
level2: Rich Messaging
level3: Messaging Connectors Alignment
level4: Facebook
order: 40
permalink: rich-messaging-connectors-fb-generic.html
indicator: both
---

The generic template is a simple structured card message that includes a text title, text subtitle, image, and up to three buttons with either URL, publish text or navigation actions.

Here are images of an example generic template with all type of button actions, including a URL button and navigation button tap view:
![image alt text](image_0.jpg)![image alt text](image_1.jpg)![image alt text](image_2.jpg)

Agent side experience:
![image alt text](image_3.png)

### Example

```JSON
{
  "type": "vertical",
  "tag": "generic",
  "elements": [
    {
      "type": "vertical",
      "elements": [
        {
          "type": "image",
          "url": "https://i.pinimg.com/736x/a0/67/5e/a0675e5161d7ae5be2550987f397a641--flower-shops-paper-flowers.jpg",
          "tooltip": "Flowers"
        },
        {
          "type": "text",
          "tag": "title",
          "text": "Birthday Bouquet",
          "tooltip": "Title"
        },
        {
          "type": "text",
          "tag": "subtitle",
          "text": "Wild flowers",
          "tooltip": "subtitle"
        },
        {
          "type": "button",
          "tooltip": "publish text example",
          "title": "publish text example",
          "click": {
            "actions": [
              {
                "type": "publishText",
                "text": "published text button tap"
              }
            ]
          }
        },
        {
          "type": "button",
          "tooltip": "URL button example",
          "title": "URL button example",
          "click": {
            "actions": [
              {
                "type": "link",
                "name": "URL button tap",
                "uri": "https://www.pinterest.com/lyndawhite/beautiful-flowers/"
              }
            ]
          }
        },
        {
          "type": "button",
          "title": "Navigate",
          "click": {
               "actions": [
              {
                "type": "navigate",
                "lo": 40.7562,
                "la": -73.99861
              }
            ]
          }
        }
      ]
    }]}
```
