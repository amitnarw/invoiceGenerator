import { sendSuccess, sendError } from '@/app/utils/responseHandling';
import { users, invoiceitems } from '../../../../../../db/models';
import { checkToken } from '@/app/utils/tokenHandling';


export const POST = async (req: any, res: Response) => {
    try {
        const { data } = await req.json();
        const authHeader = req.headers.get('Authorization');
        if (!authHeader) {
            return sendError("ERR_NO_TOKEN", "No authorization token provided.", 401);
        }
        const headers = authHeader.split("Bearer ")[1];
        if (!data) {
            return sendError("ERR_MISSING_FIELDS", "Please provide data.", 400);
        }
        let check: any = await checkToken(headers);
        if (check?.success) {
            let resp = await users.findOne({
                where: {
                    id: check?.data?.id
                }
            });
            if (resp) {
                let {
                    invoiceId,
                    itemTxt,
                    HSNTxt,
                    taxDropTxt,
                    quantityTxt,
                    rateTxt,
                    amountTxt
                } = data;

                await invoiceitems.create({
                    userId: check?.data?.id,
                    invoiceId,
                    itemTxt,
                    HSNTxt,
                    taxDropTxt,
                    quantityTxt,
                    rateTxt,
                    amountTxt,
                })
                return sendSuccess("Invoice saved", 200);
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