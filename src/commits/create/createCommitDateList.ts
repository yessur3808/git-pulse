import { addDays, isWeekend } from "date-fns";

interface CreateCommitDateListOptions {
    commitsPerDay: string[],
    workdaysOnly: boolean,
    startDate: Date,
    endDate: Date
}

function createCommitDateList(options: CreateCommitDateListOptions): Date[] {
    const { commitsPerDay, workdaysOnly, startDate, endDate } = options;
    let currentDate = startDate;
    let dates: Date[] = [];

    while (currentDate < endDate) {
        if (!workdaysOnly || !isWeekend(currentDate)) {
            for (let i = 0; i < commitsPerDay.length; i++) {
                dates.push(currentDate);
            }
        }
        currentDate = addDays(currentDate, 1);
    }

    return dates;
}

export default createCommitDateList;