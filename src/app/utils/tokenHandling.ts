// import jwt from 'jsonwebtoken';
// import User from '../../models/user';
import * as jose from 'jose';

export async function generateAccessToken(payload: any) {

    const jwtToken = await new jose.SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime(process.env.ACCESS_TOKEN_EXPIRY as string)
        .sign(new TextEncoder().encode(process.env.ACCESS_TOKEN_SECRET));

    return jwtToken;
}

export async function generateRefreshToken(payload: any) {
    // let refreshToken = jwt.sign(
    //     payload,
    //     process.env.REFRESH_TOKEN_SECRET as string,
    //     {
    //         expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    //     }
    // );
    // return refreshToken;

    const jwtToken = await new jose.SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime(process.env.REFRESH_TOKEN_EXPIRY as string)
        .sign(new TextEncoder().encode(process.env.REFRESH_TOKEN_SECRET));

    return jwtToken;
}

export async function generateToken(payload: any, type: string) {
    let secret;
    let time: any;
    if (type === "activation") {
        secret = process.env.ACTIVATION_TOKEN_SECRET;
        time = process.env.ACTIVATION_TOKEN_EXPIRY;
    } else if (type === "complain"){
        secret = process.env.COMPLAIN_TOKEN_SECRET;
        time = process.env.COMPLAIN_TOKEN_EXPIRY;
    } else {
        secret = process.env.RESET_PASSWORD_TOKEN_SECRET;
        time = process.env.RESET_PASSWORD_TOKEN_EXPIRY;
    }
    const jwtToken = await new jose.SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime(time)
        .sign(new TextEncoder().encode(secret));

    return jwtToken;
}

export async function checkToken(token: any, type: any) {
    try {
        const { payload: jwtData } = await jose.jwtVerify(
            token, new TextEncoder().encode(
                type === 'refresh' ? process.env.REFRESH_TOKEN_SECRET :
                type === 'access' ? process.env.ACCESS_TOKEN_SECRET :
                type === 'activation' ? process.env.ACTIVATION_TOKEN_SECRET :
                type === 'forget' ? process.env.RESET_PASSWORD_TOKEN_SECRET :
                type === 'complain' ? process.env.COMPLAIN_TOKEN_SECRET :
                'Invalid type'
            )
        );

        return { data: jwtData, success: true };
    } catch (error: unknown) {
        // Asserting that error is of type Error
        if (typeof error === 'object' && error !== null && 'name' in error) {
            const errorName = (error as Error).name;
            if (errorName.includes('JWTExpired')) {
                return { data: "JWTExpired", success: false };
            } else {
                return { data: errorName, success: false };
            }
        } else {
            return { data: error, success: false };
        }
    }

}