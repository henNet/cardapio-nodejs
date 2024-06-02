import db from "../database/food-database.js";

async function selectAllFoods(){
    try{
        const res = await db.query("SELECT * FROM foods");
        //console.log("retornou os dados", res.rows);
        return res.rows;
    }catch(error){
        return {status: 500, err: error};
    }   
}

async function postFood(title, image, price){
    try{
        const sql = "INSERT INTO foods(title, image, price)" + 
                     "VALUES($1, $2, $3) RETURNING id";
        const values = [title, image, price];

        const res = await db.query(sql, values);
        return res.rows[0];
    }catch(error){
        return {status: 500, err: error};
    }
}

async function putFood(id, body){
    try{
        const sql = "UPDATE foods " + 
                     "SET title=$1, image=$2, price=$3 " +
                     "WHERE id = $4 " +
                     "RETURNING id";
        const values = [body.title, body.image, body.price, id];

        const res = await db.query(sql, values);
        return res.rows[0];
    }catch(error){
        return {status: 500, err: error};
    }
}

async function deleteFood(id){
    try{
        const sql = "DELETE FROM foods " + 
                     "WHERE id = $1 " +
                     "RETURNING id";
        const values = [id];

        const res = await db.query(sql, values);
        return res.rows[0];
    }catch(error){
        return {status: 500, err: error};
    }
}

export default {selectAllFoods, postFood, putFood, deleteFood};