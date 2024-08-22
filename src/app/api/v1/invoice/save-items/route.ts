import { sendSuccess, sendError } from '@/app/utils/responseHandling';
import { users } from '../../../../../../db/models';
import invoices from '../../../../../../db/models/invoices';
import { checkToken } from '@/app/utils/tokenHandling';


export const POST = async (req: any, res: Response) => {
    try {
        const { data } = await req.json();
        const headers = await req.headers.get('Authorization').split("Bearer ")[1];
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
                    taxTxt,
                    quantityTxt,
                    rateTxt,
                    amountTxt
                } = data;

                await invoices.create({
                    userId: check?.data?.id,
                    invoiceId,
                    itemTxt,
                    HSNTxt,
                    taxTxt,
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