import apiMessage from "./api_message.js";

export default function APIResponse(message = apiMessage.success, data = null, errors = []) {
    return {
        message,
        data,
        errors
    }
}