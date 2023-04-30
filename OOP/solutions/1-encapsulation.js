import _ from 'lodash';

export const getMutualFriends = (user1, user2) => {
const friends1 = user1.getFriends();
const friends2 = user2.getFriends();
return _.intersectionBy(friends1, friends2, 'id');
};

export default ({ id = null, friends = [] } = {}) => ({
friends,
id,
getFriends() {
return this.friends.slice(); // возвращение копии массива, чтобы его не изменили извне
},
});