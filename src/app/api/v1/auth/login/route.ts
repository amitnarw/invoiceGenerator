import { sendSuccess, sendError } from '@/app/utils/responseHandling';
import { verifyPassword } from '@/app/utils/password';
import { generateAccessToken } from '@/app/utils/tokenHandling';
import { users } from '../../../../../../db/models';

interface UserData {
    id?: number;
    email?: string;
    password?: string;
    firstname?: string;
    lastname?: string;
}

export const POST = async (req: any, res: Response) => {
    try {
        const { email, password } = await req.json();
        if (!email || !password) {
            return sendError("ERR_MISSING_FIELDS", "Please provide both your email and password.", 400);
        }
        let resp = await users.findOne({
            where: {
                email
            }
        });
        if (resp) {
            let check = await verifyPassword({
                filledPassword: password,
                dbPassword: resp.password
            });
            const userData: UserData = resp as UserData;
            if (check) {
                let payload = {
                    id: resp.id,
                    email: resp.email
                };
                let token = await generateAccessToken(payload);
                let response = {
                    email,
                    firstname: userData.firstname,
                    lastname: userData.lastname,
                    token
                }
                return sendSuccess(response, 200);
            }
        } else {
            return sendError("ERR_USER_NOT_FOUND", "Email not found. Please register and try again.", 404);
        }
    } catch (err) {
        return sendError("ERR_SERVER_ERROR", "Server error, please check backend", 400);
    }
}