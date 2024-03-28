import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("session.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS sessions (localId TEXT PRIMARY KEY,email TEXT,token TEXT)",
        [],
        () => resolve(),
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
};

export const insertSession = (email, localId, token) => {
  const promise = new Promise((accept, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO sessions (localId,email,token) VALUES(?,?,?)",
        [localId, email, token],
        (_, result) => accept(result),
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
};

export const fetchSession = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM sessions",
        [],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
  return promise;
};

export const deleteSession = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM sessions ",
        [],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });

  return promise;
};
