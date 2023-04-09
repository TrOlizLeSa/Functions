// BEGIN
export default function convertDatesToStrings(...dates) {
    if (dates.length === 0) {
      return [];
    }
    return dates.map(date => {
      const [year, month, day] = date;
      const dateObj = new Date(year, month, day);
      return dateObj.toDateString();
    });
  }
// END