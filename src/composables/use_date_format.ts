export function useDateFormat(date: Date) {
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
}
