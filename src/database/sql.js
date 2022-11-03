import mysql from 'mysql2';

const pool = mysql.createPool({
    host: 'localhost',
    //port: 3306,
    user: 'root',
    password: '@@hj159357',
    database: 'week10',
    waitForConnections:true,
    connectionLimit : 10,
    queueLimit:0,
});

const promisePool = pool.promise();

export const selectSql = {
    getUsers : async()=> {
        const [rows] = await promisePool.query(`select * from user`);
        return rows;
    },
     

    getDepartment: async () => {
        const [rows] = await promisePool.query(`select * from department`);
        return rows;
    }
};

export const deleteSql = {
    deleteDepartment : async (data)=>{
        console.log("deleteSql.deleteDepartment:",data.Dnumber);
        const sql =`delete from department where Dnumber= ${data.Dnumber}`;

        await promisePool.query(sql);
    },
};

