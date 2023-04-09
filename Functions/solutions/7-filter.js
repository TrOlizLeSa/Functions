// BEGIN
const getGirlFriends = (users) => {
    const friends = users.map(({ friends }) => friends);
    return friends.flat().filter(({ gender }) => gender === 'female');
  };
  
  export default getGirlFriends;
  
// END