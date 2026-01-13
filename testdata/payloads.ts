import { getCurrentDateFormatted, getDatePlusDaysFormatted } from "../tests/api/helpers/authHelper";

export const validSignin = {
    email: 'vishal.thakur1@caeliusconsulting.com',
    password: 'Test@123'
};

export const invalidSignin = {
    email: 'invalid@example.com',
    password: 'wrong'
};

export const apllyLeavePayload = {
    considerLeave: false,
    considerLeaveType: "",
    endDate: getDatePlusDaysFormatted(2),
    reasonOfLeave: "asdad",
    startDate: getDatePlusDaysFormatted(1),
    typeOfLeave: "HalfDayLeave"
}
