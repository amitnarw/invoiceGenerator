import { sendSuccess, sendError } from '@/app/utils/responseHandling';
import { users, invoices, invoiceitems } from '../../../../../../db/models';
import { checkToken } from '@/app/utils/tokenHandling';


export const GET = async (req: any, res: Response) => {
    try {
        const headers = await req.headers.get('Authorization').split("Bearer ")[1];
        let check: any = await checkToken(headers);
        if (check?.success) {
            let resp = await users.findOne({
                where: {
                    id: check?.data?.id
                }
            });
            if (resp) {
                let resp2 = await invoices.findAll({
                    where: {
                        userId: check?.data?.id
                    },
                    include: [invoiceitems]
                });
                return sendSuccess(resp2, 200);
            } else {
                return sendError("ERR_USER_NOT_FOUND", "Email not found. Please register and try again.", 404);
            }
        } else {
            return sendError("ERR_INVALID_TOKEN", "Token is invalid.", 404);
        }
    } catch (err) {
        return sendError("ERR_SERVER_ERROR", "Server error, please check backend", 400);
    }
}