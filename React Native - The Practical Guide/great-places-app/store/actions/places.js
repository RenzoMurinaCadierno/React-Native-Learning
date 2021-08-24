import * as FileSystem from "expo-file-system"
import { getAllPlaces, insertPlace } from "../../storage/db"

export const ADD_PLACE = "ADD_PLACE"
export const LOAD_PLACES = "LOAD_PLACES"

export const addPlace = (title, imageUri) => async (dispatch) => {
  // split path and grab the image file name with extension
  const fileName = imageUri.split("/").pop()

  // `FS.cacheDirectory`, `FS.bundleDirectory`, `FS.documentDirectory`
  // > The last one being the permanent one for the app
  const newPath = FileSystem.documentDirectory + fileName

  try {
    // move the file from its cache to its permanent path in memory.
    // > it can fail! (e.g. no space). Hence trycatch.
    await FileSystem.moveAsync({ from: imageUri, to: newPath })

    // storing data in DB can also fail
    const res = await insertPlace(title, newPath, "dummy address", 11.11, 22.22)

    dispatch({
      type: ADD_PLACE,
      payload: { id: res.insertId, title, pathToImg: newPath }
    })
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const loadPlaces = () => async (dispatch) => {
  try {
    const res = await getAllPlaces()

    dispatch({ type: LOAD_PLACES, payload: { places: res.rows._array } })
  } catch (err) {
    console.log(err)
    throw err
  }
}
