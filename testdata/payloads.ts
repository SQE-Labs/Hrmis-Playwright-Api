import { generateRandomFutureDate, genreateRandomTodayDate } from "../src/helper";

export const applyleavePayload = {
    "considerLeave": false,
    "considerLeaveType": "",
    "endDate": generateRandomFutureDate(1),
    "reasonOfLeave": "asdsad",
    "startDate": genreateRandomTodayDate(),
    "typeOfLeave": "HalfDayLeave"
};


