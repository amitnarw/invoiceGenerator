import fs from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';
import { sendSuccess, sendError } from '@/app/utils/responseHandling';
import { checkToken } from '@/app/utils/tokenHandling';
import { users, invoices, invoiceitems } from '../../../../../../db/models';
import sequelize from '../../../../../../db/dbConnect';
const pump = promisify(pipeline);


export const POST = async (req: any, res: Response) => {
    try {
        const formData = await req.formData();
        const logo = formData.getAll('logo')[0];
        const body = JSON.parse(formData.getAll('body')[0]);
        const headers = await req.headers.get('Authorization').split("Bearer ")[1];
        if (!body) {
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

            let filePath;
            let filePath2;

            if (logo) {
                let newURL = logo ? `${new Date().getMilliseconds().toString()}-${logo.name}` : "";
                filePath = `./uploads/${newURL}`;
                filePath2 = `/uploads/${newURL}`;
                await pump(logo.stream(), fs.createWriteStream(filePath));
            }

            if (resp) {
                let {
                    currency,
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
                    paymentTermsTxt,
                    dueDate,
                    dueDateTxt,
                    poNumber,
                    poNumberTxt,
                    item,
                    HSN,
                    taxDrop,
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
                    discountType,
                    shipping,
                    shippingTxt,
                    total,
                    totalTxt,
                    amountPaid,
                    amountPaidTxt,
                    balanceDue,
                    balanceDueTxt, } = body;

                let resp = await invoices.create({
                    userId: check?.data?.id,
                    logo: filePath2,
                    currency,
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
                    paymentTermsTxt,
                    dueDate,
                    dueDateTxt,
                    poNumber,
                    poNumberTxt,
                    item,
                    HSN,
                    taxDrop,
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
                    discountType,
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
                    let newList = body?.list.map((item: any) => {
                        return {
                            userId: check?.data?.id,
                            invoiceId: resp?.id,
                            itemTxt: item?.itemTxt,
                            HSNTxt: Number(item?.HSNTxt),
                            taxDropTxt: JSON.stringify(item?.taxDropTxt),
                            quantityTxt: Number(item?.quantityTxt),
                            rateTxt: Number(item?.rateTxt),
                            amountTxt: Number(item?.amountTxt)
                        }
                    });
                    await invoiceitems.bulkCreate(newList,
                        { transaction });
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