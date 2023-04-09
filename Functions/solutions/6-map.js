// BEGIN
export default function getChildren(users) {    
    return users.map((user) => user.children).flat();
  }
// END