import _ from 'lodash';

// BEGIN
export default function calculateAverage(...args) {
    if (args.length === 0) {
      return null;
    }
    const sum = args.reduce((acc, number) => acc + number, 0);
    return sum / args.length;
  }
// END