export default class DateTime {
    static getCurrentDate() {
        const date = new Date();
        const day = date.getDate();
        // Turns the month into its actual name instead of just a number
        const month = date.toLocaleString("default", { "month": "long" });
        const year = date.getFullYear();
        const actualDate = `${month} ${day}, ${year}`;
        return actualDate;
    }
}