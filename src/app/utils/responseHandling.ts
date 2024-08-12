import { NextResponse } from "next/server";

export const sendSuccess = (result: any, code: number) => {
    return NextResponse.json({ result, success: true }, { status: code });
}

export const sendError = (errorCode: string, message: string, code: number) => {
    return NextResponse.json({ errorCode, message, success: false }, { status: code });
}