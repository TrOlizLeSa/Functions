     import get from 'lodash/get.js';

const freeEmailDomains = [
  "gmail.com",
  "yandex.ru",
  "hotmail.com",
  "yahoo.com",
];

// BEGIN
import _ from 'lodash';


export default (emails) => {
  return emails.reduce((acc, email) => {
    const [, domain] = email.split('@');
    if (freeEmailDomains.includes(domain)) {
      return { ...acc, [domain]: _.get(acc, domain, 0) + 1 };
    }
    return acc;
  }, {});
};

// END