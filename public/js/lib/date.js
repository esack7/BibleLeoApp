import format from 'date-fns/format';

const todayDate = () => format(new Date(), 'YYYY-MM-DD');

export default todayDate;