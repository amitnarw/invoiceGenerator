import { sendError, sendSuccess } from "@/app/utils/responseHandling";
import singlesaves from "../../../../../../db/models/singlesaves";
import { checkToken } from "@/app/utils/tokenHandling";

export const POST = async (req: any) => {
    try {
        const {name, value} = await req.json();
        const headers = await req.headers.get('Authorization').split("Bearer ")[1];
        if (!name || !value) {
            return sendError("ERR_MISSING_FIELDS", "Please provide name and value both.", 400);
        }
        let check: any = await checkToken(headers);
        console.log(check, "CHECK")
        if (check?.success) {
            let resp = singlesaves.create({
            userId: check?.data?.id,
            key: name,
            value
        });
        return sendSuccess(resp, 200);
        } else {
            return sendError("ERR_INVALID_TOKEN", "Token is invalid.", 404);
        }
    } catch (err) {
        console.log(err)
        return sendError("ERR_SERVER_ERR", "Please check backend for error", 404);
    }
}