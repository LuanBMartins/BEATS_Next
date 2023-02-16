export interface strategy {
    protocol_number: string,
    date_required: string,
    type: number,
    state: number,
    rejection_text: string,
    relating_strategy: string,
    recurrence_number: number,
    accept_count: number,
    accept_with_suggestions_count: number,
    reject_count: number
}