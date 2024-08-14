import { sendSuccess, sendError } from '@/app/utils/responseHandling';
import { users } from '../../../../../db/models';
import invoices from '../../../../../db/models/invoices';
import { checkToken } from '@/app/utils/tokenHandling';


export const POST = async (req: any, res: Response) => {
    try {
        const { userId, data } = await req.json();
        const headers = await req.headers.get('Authorization');
        if (!userId || !data) {
            return sendError("ERR_MISSING_FIELDS", "Please provide userId and data.", 400);
        }
        let token = await checkToken(headers);
        console.log(headers, token, "TOKEN")
        // let resp = await users.findOne({
        //     where: {
        //         userId
        //     }
        // });
        // if (resp) {
        //     await invoices.create({
        //         userId,
        //         logo: "",
        //         whoIsThisFrom: "",
        //         billTo: "",
        //         billToTxt: "",
        //         shipTo: "",
        //         shipToTxt: "",
        //         placeOfSupply: "",
        //         invoiceTxt: "",
        //         page: "",
        //         pageSymbol: "",
        //         date: "",
        //         dateTxt: "",
        //         paymentTerms: "",
        //         paymenTermsTxt: "",
        //         dueDate: "",
        //         dueDateTxt: "",
        //         poNumber: "",
        //         poNumberTxt: "",
        //         item: "",
        //         HSN: "",
        //         tax: "",
        //         quantity: "",
        //         rate: "",
        //         amount: "",
        //         itemTxt: "",
        //         HSNTxt: "",
        //         taxTxt: "",
        //         quantityTxt: "",
        //         rateTxt: "",
        //         amountTxt: "",
        //         paymentDetails: "",
        //         paymentDetailsTxt: "",
        //         terms: "",
        //         termsTxt: "",
        //         subtotal: "",
        //         subtotalTxt: "",
        //         discount: "",
        //         discountTxt: "",
        //         discountSymbol: "",
        //         shipping: "",
        //         shippingTxt: "",
        //         total: "",
        //         totalTxt: "",
        //         amountPaid: "",
        //         amountPaidTxt: "",
        //         balanceDue: "",
        //         balanceDueTxt: "",
        //     })
        //     return sendSuccess("Invoice saved", 200);
        // } else {
        //     return sendError("ERR_USER_NOT_FOUND", "Email not found. Please register and try again.", 404);
        // }
        // return sendSuccess(data, 200)
    } catch (err) {
        return sendError("ERR_SERVER_ERROR", "Server error, please check backend", 400);
    }
}