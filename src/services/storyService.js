import { utilService } from "./util-service"
import { storageService } from "./asyncStorageService"
//CRUDL CREAT READ UPDATE DELETE LIST

export const storyService = {
    query,
}

const STORY_KEY = 'storyDB'
const gStories = _createStories()

async function query() {
    const stories = await gStories
    return stories
}

async function _createStories() {
    try {
        var stories = await storageService.query(STORY_KEY)
        if (!stories || !stories.length) {
            stories = [
                {
                    "_id": "s101",
                    "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1649006013/funday%20must/%D7%94%D7%95%D7%A8%D7%93%D7%94_hbswew.jpg", //Can be an array if decide to support multiple imgs
                    "createdAt": 1651829476268,
                    "by": {
                        "_id": "u101",
                        "username": "Muko",
                        "imgUrl": "https://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                    }
                },
                {
                    "_id": "p102",
                    "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1647806296/samples/animals/reindeer.jpg", //Can be an array if decide to support multiple imgs
                    "createdAt": 1651829518024,
                    "by": {
                        "_id": "u102",
                        "username": "Ulash",
                        "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1648414285/funday%20must/photo-1618085222100-93f0eecad0aa_fuisxo.jpg"
                    }
                }
            ]
            return storageService.postMany(STORY_KEY, stories)
        } else return stories

    } catch (err) {
        console.log('storyService: createStories had issue: ' + err);
    }
}