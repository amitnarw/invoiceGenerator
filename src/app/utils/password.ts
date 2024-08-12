import bcrypt from 'bcryptjs';
require('dotenv').config();


export function encryptPassword({ password }: any){
    try{
        let saltRound = process.env.SALT_ROUND;
        let salt = bcrypt.genSaltSync(Number(saltRound));
        let securedPassword = bcrypt.hashSync(password, salt);
        return securedPassword;
    } catch (err) {
        return err;
    }
}

export async function verifyPassword({ filledPassword, dbPassword }: any){
    try{
        let comparePassword = await bcrypt.compare(filledPassword, dbPassword);
        return comparePassword;
    } catch (err) {
        return err;
    }
}