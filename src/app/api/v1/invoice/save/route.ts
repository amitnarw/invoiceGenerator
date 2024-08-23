import { sendSuccess, sendError } from '@/app/utils/responseHandling';
import { users } from '../../../../../../db/models';
import invoices from '../../../../../../db/models/invoices';
import { checkToken } from '@/app/utils/tokenHandling';
import invoiceitems from '../../../../../../db/models/invoiceitems';
import sequelize from '../../../../../../db/dbConnect';


export const POST = async (req: any, res: Response) => {
    try {
        const { data } = await req.json();
        const headers = await req.headers.get('Authorization').split("Bearer ")[1];
        console.log(data)

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
            const transaction = await sequelize.transaction();
            if (resp) {
                let { logo,
                    whoIsThisFrom,
                    billTo,
                    whoIsThisTo,
                    shipTo,
                    shipToTxt,
                    placeOfSupply,
                    invoice,
                    page,
                    pageSymbol,
                    date,
                    dateTxt,
                    paymentTerms,
                    paymenTermsTxt,
                    dueDate,
                    dueDateTxt,
                    poNumber,
                    poNumberTxt,
                    item,
                    HSN,
                    tax,
                    quantity,
                    rate,
                    amount,
                    paymentDetails,
                    paymentDetailsTxt,
                    terms,
                    termsTxt,
                    subtotal,
                    subtotalTxt,
                    discount,
                    discountTxt,
                    discountSymbol,
                    shipping,
                    shippingTxt,
                    total,
                    totalTxt,
                    amountPaid,
                    amountPaidTxt,
                    balanceDue,
                    balanceDueTxt, } = data;

                let resp = await invoices.create({
                    userId: check?.data?.id,
                    logo,
                    whoIsThisFrom,
                    billTo,
                    whoIsThisTo,
                    shipTo,
                    shipToTxt,
                    placeOfSupply,
                    invoice,
                    page,
                    pageSymbol,
                    date,
                    dateTxt,
                    paymentTerms,
                    paymenTermsTxt,
                    dueDate,
                    dueDateTxt,
                    poNumber,
                    poNumberTxt,
                    item,
                    HSN,
                    tax,
                    quantity,
                    rate,
                    amount,
                    paymentDetails,
                    paymentDetailsTxt,
                    terms,
                    termsTxt,
                    subtotal,
                    subtotalTxt,
                    discount,
                    discountTxt,
                    discountSymbol,
                    shipping,
                    shippingTxt,
                    total,
                    totalTxt,
                    amountPaid,
                    amountPaidTxt,
                    balanceDue,
                    balanceDueTxt,
                },
                    { transaction })
                if (resp) {
                    let newData = {
                        userId: check?.data?.id,
                        invoiceId: resp.id,
                        ...data?.list
                    }
                    await invoiceitems.bulkCreate(newData,
                        { transaction })
                }
                await transaction.commit();
                return sendSuccess("Invoice saved", 200);
            } else {
                await transaction.rollback();
                return sendError("ERR_USER_NOT_FOUND", "Email not found. Please register and try again.", 404);
            }
        } else {
            return sendError("ERR_INVALID_TOKEN", "Token is invalid.", 404);
        }
    } catch (err) {
        console.log(err)
        return sendError("ERR_SERVER_ERROR", "Server error, please check backend", 400);
    }
}