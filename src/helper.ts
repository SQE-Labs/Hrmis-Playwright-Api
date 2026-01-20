export const genreateRandomTodayDate = (): string => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    console.log('Generated Today Date:', `${year}-${month}-${day}`);
    return `${year}-${month}-${day}`;

};

export const generateRandomFutureDate = (daysInFuture: number): string => {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + daysInFuture);
    const year = futureDate.getFullYear();
    const month = String(futureDate.getMonth() + 1).padStart(2, '0');
    const day = String(futureDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};  