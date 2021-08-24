import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase("places.db")

export function initializeDatabase() {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS places (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, imageUri TEXT NOT NULL, address TEXT NOT NULL, lat REAL NOT NULL, lng REAL NOT NULL);",
        [], // args
        (executedQuery, result) => {
          // success callback
          resolve()
        },
        (executedQuery, err) => {
          // error callback
          reject(err)
        }
      )
    })
  })
}

export function insertPlace(title, imageUri, address, lat, lng) {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        // WARNING!!!
        // NEVER USE string interpolation!!! (like ${title}, ${lat}, ...)
        // > You are vulnerable to SQL Injection attacks
        // > Use the "?" syntax instead, passing them in `args` array
        `INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?);`,
        [title, imageUri, address, lat, lng],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      )
    })
  })
}

export function getAllPlaces() {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM places",
        [],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      )
    })
  })
}
