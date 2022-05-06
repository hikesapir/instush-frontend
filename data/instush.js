const posts = [
  {
    "_id": "p101",
    "txt": "Point of view",
    "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1651604330/instush/wjj9a7ucw8xauyvikxiq.jpg", //Can be an array if decide to support multiple imgs
    "createdAt": 1651604385128,
    "by": {
      "_id": "u101",
      "username": "Muko",
      "imgUrl": "https://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
    },
    "loc": {
      "lat": 11.11,
      "lng": 22.22,
      "name": "Tel Aviv"
    },
    "comments": [
      {
        "id": "c1001",
        "by": {
          "_id": "u102",
          "username": "Ulash",
          "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1648414285/funday%20must/photo-1618085222100-93f0eecad0aa_fuisxo.jpg"
        },
        "txt": "good one!",
        "likedBy": [ // Optional
          {
            "_id": "u101",
            "username": "Muko",
            "imgUrl": "https://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
          }
        ]
      }
    ],
    "likedBy": [
      {
        "_id": "u102",
        "username": "Ulash",
        "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1648414285/funday%20must/photo-1618085222100-93f0eecad0aa_fuisxo.jpg"
      }
    ],
    "tags": ["fun", "kids"]
  },
  {
    "_id": "p102",
    "txt": "Best trip ever",
    "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1651604328/instush/vivezflwf8hfyr8i4mgl.jpg", //Can be an array if decide to support multiple imgs
    "createdAt": 1651605049742,
    "by": {
      "_id": "u102",
      "username": "Ulash",
      "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1648414285/funday%20must/photo-1618085222100-93f0eecad0aa_fuisxo.jpg"
    },
    "loc": {
      "lat": 11.11,
      "lng": 22.22,
      "name": "Tel Aviv"
    },
    "comments": [
      {
        "id": "c1001",
        "by": {
          "_id": "u101",
          "username": "Muko",
          "imgUrl": "https://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
        },
        "txt": "good one!",
        "likedBy": [ // Optional
          {
            "_id": "u102",
            "username": "Ulash",
            "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1648414285/funday%20must/photo-1618085222100-93f0eecad0aa_fuisxo.jpg"
          }
        ]
      }
    ],
    "likedBy": [
      {
        "_id": "u101",
        "username": "Muko",
        "imgUrl": "https://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
      }
    ],
    "tags": ["fun", "kids"]
  }
]

const users = [
  {
    "_id": "u101",
    "username": "Muko",
    "imgUrl": "https://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg",
    "fullname": "Muki Muka",
    "password": "123",
    "createdAt": 1651504622095,
    "following": [
      {
        "_id": "u102",
        "username": "Ulash",
        "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1648414285/funday%20must/photo-1618085222100-93f0eecad0aa_fuisxo.jpg"
      }
    ],
    "followers": [
      {
        "_id": "u102",
        "username": "Ulash",
        "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1648414285/funday%20must/photo-1618085222100-93f0eecad0aa_fuisxo.jpg"
      }
    ],
    "savedPostIds": ["p101"],
    "stories": []
  },
  {
    "_id": "u102",
    "username": "Ulash",
    "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1648414285/funday%20must/photo-1618085222100-93f0eecad0aa_fuisxo.jpg",
    "fullname": "Ulash Ulashi",
    "password": "123",
    "createdAt": 1651604622095,
    "following": [
      {
        "_id": "u101",
        "username": "Muko",
        "imgUrl": "https://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
      }
    ],
    "followers": [
      {
        "_id": "u101",
        "username": "Muko",
        "imgUrl": "https://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
      }
    ],
    "savedPostIds": ["p102"],
    "stories": ["s104", "s111", "s123"]
  },
  {
    "_id": "u103",
    "username": "guest",
    "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1648463489/funday%20must/vote_1_bkio4y.png",
    "fullname": "ghost guest",
    "password": "123",
    "createdAt": 1651820923732,
    "following": [
      {
        "_id": "u101",
        "username": "Muko",
        "imgUrl": "https://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
      },
      {
        "_id": "u102",
        "username": "Ulash",
        "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1648414285/funday%20must/photo-1618085222100-93f0eecad0aa_fuisxo.jpg"
      }
    ],
    "followers": [
      {
        "_id": "u101",
        "username": "Muko",
        "imgUrl": "https://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
      },
      {
        "_id": "u102",
        "username": "Ulash",
        "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1648414285/funday%20must/photo-1618085222100-93f0eecad0aa_fuisxo.jpg"
      }
    ],
    "savedPostIds": [],
    "stories": []
  }
]

