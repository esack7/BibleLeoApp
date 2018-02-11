import format from 'date-fns/format';
import differenceInDays from 'date-fns/difference_in_days';

export const todayDate = () => format(new Date(), 'YYYY-MM-DD');
export const dateDiff = start => differenceInDays(new Date(), start);

// export default todayDate;
