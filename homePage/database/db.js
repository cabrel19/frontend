import react from 'react'
import {} from 'react-native';
import * as SQLite from 'expo-sqlite';


const db = SQLite.openDatabaseAsync('userlocation.db')
//initialisation
export const sqlinit = () =>{
    const  initPromise = new Promise((resolve, reject) =>{
        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS userlocation(id INTEGER KEY NOT NULL, latitude REAL NOT NULL, longitude REAL NOT NULL)'
                [latitude, longitude],
                ()=>{
                    resolve();
                },
                (_, error)=>{
                    reject(error);
                }
            )
        })
    });

    return initPromise;
}


//datas de geolocalisation
export const addusergeo = (latitude, longitude) =>{
    const  insertPromise = new Promise((resolve, reject) =>{
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO userlocation (latitude, longitude) VALUES (?,?)'
                [latitude, longitude],
                (_, result)=>{
                    resolve(result);
                },
                (_, error)=>{
                    reject(error);
                }
            )
        })
    });

    return insertPromise;
}


//recuperer la date
export const fetchSQLite = () =>{
    const  fetchPromise = new Promise((resolve, reject) =>{
        db.transaction(tx => {
            tx.executeSql(
                'SELECT* FROM userlocation'
                [latitude, longitude],
                (_, result)=>{
                    resolve(result);
                },
                (_, error)=>{
                    reject(error);
                }
            )
        })
    });

    return fetchPromise;
}


