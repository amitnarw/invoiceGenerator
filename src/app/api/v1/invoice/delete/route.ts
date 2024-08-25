import { sendSuccess, sendError } from '@/app/utils/responseHandling';
import { checkToken } from '@/app/utils/tokenHandling';
import sequelize from '../../../../../../db/dbConnect';
import { users, invoices, invoiceitems } from '../../../../../../db/models';


export const POST = async (req: any, res: Response) => {
    try {
        let { id } = await req.json();
        if (!id) {
            return sendError("ERR_MISSING_FIELDS", "Please provide invoice id", 400);
        }
        const headers = await req.headers.get('Authorization').split("Bearer ")[1];
        let check: any = await checkToken(headers);
        const transaction = await sequelize.transaction();
        if (check?.success) {
            let resp = await users.findOne({
                where: {
                    id: check?.data?.id
                }
            });
            
            if (resp) {
                let resp2 = await invoices.destroy({
                    where: {
                        id
                    },
                    transaction
                });
                if (resp2) {
                    await invoiceitems.destroy({
                        where: {
                            invoiceId: id
                        },
                        transaction
                    })
                }
                await transaction.commit();
                return sendSuccess("Invoice deleted successfully", 200);
            } else {
                await transaction.rollback();
                return sendError("ERR_USER_NOT_FOUND", "Email not found. Please register and try again.", 404);
            }
        } else {
            await transaction.rollback();
            return sendError("ERR_INVALID_TOKEN", "Token is invalid.", 404);
        }
    } catch (err) {
        console.log(err)
        return sendError("ERR_SERVER_ERROR", "Server error, please check backend", 400);
    }
}