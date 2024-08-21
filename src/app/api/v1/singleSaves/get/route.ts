import { sendError, sendSuccess } from "@/app/utils/responseHandling";
import singlesaves from "../../../../../../db/models/singlesaves";
import { checkToken } from "@/app/utils/tokenHandling";

export const POST = async (req: any) => {
    try {
        const { key } = await req.json();
        const headers = await req.headers.get('Authorization').split("Bearer ")[1];
        if (!key) {
            return sendError("ERR_MISSING_FIELDS", "Please provide key.", 400);
        }
        let check: any = await checkToken(headers);
        if (check?.success) {
            let resp = await singlesaves.findAll({
                where: {
                    userId: check?.data?.id,
                    key
                }
            });
            return sendSuccess(resp, 200);
        } else {
            return sendError("ERR_INVALID_TOKEN", "Token is invalid.", 404);
        }
    } catch (err) {
        return sendError("ERR_INVALID_TOKEN", "Token is invalid.", 404);
    }
}