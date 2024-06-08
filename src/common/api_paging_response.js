export default function APIPagingResponse(page, pageSize, totalPages, data) {
    return {
        page,
        pageSize,
        totalPages,
        data
    }
}