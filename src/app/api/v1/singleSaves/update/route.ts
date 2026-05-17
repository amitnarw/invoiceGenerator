import { sendError, sendSuccess } from "@/app/utils/responseHandling";
import { singlesaves } from '../../../../../../db/models';
import { checkToken } from "@/app/utils/tokenHandling";

export const POST = async (req: any) => {
    try {
        const {id, value} = await req.json();
        const authHeader = req.headers.get('Authorization');
        if (!authHeader) {
            return sendError("ERR_NO_TOKEN", "No authorization token provided.", 401);
        }
        const headers = authHeader.split("Bearer ")[1];
        if (!id || !value) {
            return sendError("ERR_MISSING_FIELDS", "Please provide id and value both.", 400);
        }
        let check: any = await checkToken(headers);
        if (check?.success) {
            let existing = await singlesaves.findOne({ where: { id } });
            if (!existing || existing.userId !== check?.data?.id) {
                return sendError("ERR_NOT_FOUND", "Item not found or not owned by user.", 404);
            }
            let resp = await singlesaves.update({
            value
        }, {
            where: {
                id,
                userId: check?.data?.id
            }
        });
        return sendSuccess(resp, 200);
        } else {
            return sendError("ERR_INVALID_TOKEN", "Token is invalid.", 404);
        }
    } catch (err) {
        return sendError("ERR_SERVER_ERR", "Please check backend for error", 404);
    }
}