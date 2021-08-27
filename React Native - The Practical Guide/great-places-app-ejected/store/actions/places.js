import * as FileSystem from "expo-file-system"
import API_KEYS from "../../env"
import { getAllPlaces, insertPlace } from "../../storage/db"

export const ADD_PLACE = "ADD_PLACE"
export const LOAD_PLACES = "LOAD_PLACES"

export const addPlace =
  (title, imageUri, selectedLocation) => async (dispatch) => {
    try {
      const { latitude, longitude } = selectedLocation
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${API_KEYS.GOOGLE_MAPS}`
      )

      if (!response.ok) throw new Error("Error while fetching map.")

      const data = await response.json()

      // no results means no places returned from the app
      if (!data.results) throw new Error("No results from Google Maps.")

      // our central marker (selected or default) is the target
      const address = data.results[0].formatted_address

      // split path and grab the image file name with extension
      const fileName = imageUri.split("/").pop()

      // `FS.cacheDirectory`, `FS.bundleDirectory`, `FS.documentDirectory`
      // > The last one being the permanent one for the app
      const newPath = FileSystem.documentDirectory + fileName

      // move the file from its cache to its permanent path in memory.
      // > it can fail! (e.g. no space). Hence trycatch.
      await FileSystem.moveAsync({ from: imageUri, to: newPath })

      // storing data in DB can also fail
      const res = await insertPlace(
        title,
        newPath,
        address,
        latitude,
        longitude
      )

      dispatch({
        type: ADD_PLACE,
        payload: {
          id: res.insertId,
          title,
          pathToImg: newPath,
          address,
          coords: selectedLocation
        }
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
