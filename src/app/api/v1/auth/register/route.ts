import { sendSuccess, sendError } from '@/app/utils/responseHandling';
import { encryptPassword } from '@/app/utils/password';
import { generateAccessToken } from '@/app/utils/tokenHandling';
import { users } from '../../../../../../db/models';


export const POST = async (req: any, res: Response) => {
    try {
        const { firstname, lastname, email, password } = await req.json();

        if (!firstname || !lastname || !email || !password) {
            return sendError("ERR_MISSING_FIELDS", "Please provide first name, last name, email and password.", 400);
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return sendError("ERR_INVALID_EMAIL", "Please provide a valid email address.", 400);
        }
        if (password.length < 8) {
            return sendError("ERR_WEAK_PASSWORD", "Password must be at least 8 characters long.", 400);
        }
        if (firstname.length > 50 || lastname.length > 50) {
            return sendError("ERR_INVALID_NAME", "Name must be under 50 characters.", 400);
        }
        let resp = await users.findOne({
            where: {
                email
            }
        });

        if (resp) {
            return sendError("ERR_USER_FOUND", "Email already exist, please login to continue", 400);
        } else {

            let securedPassword = await encryptPassword({ password: password });

            if (!securedPassword) {
                return sendError("ERR_SERVER_ERROR", "There is an issue with encrypting the password", 500);
            }

            let create = await users.create({
                firstname,
                lastname,
                email,
                password: securedPassword
            })

            if (!create) {
                return sendError("ERR_SERVER_ERROR", "There is an issue with new user creation", 500);
            }

            let payload = {
                id: create.id,
                email: email
            };
            let token = await generateAccessToken(payload);

            if (!token) {
                return sendError("ERR_SERVER_ERROR", "There is an issue with generating token", 500);
            }

            return sendSuccess(token, 200);
        }
    } catch (err) {
        return sendError("ERR_SERVER_ERROR", "Server error, please check backend", 500);
    }
}