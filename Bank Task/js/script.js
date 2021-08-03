//first, we start with an empty array for users
var users = [];

// then we write a function to add users
function addUser(name, id, balance) {
  // we ask the user for their name
  name = prompt("Please enter your first name");
  // we check how many users we have and make the id same as the array index
  id = prompt("please enter your id");
  // we ask the user for the initial balance
  balance = prompt("Please enter your initial balance");
  // we add the new user to the end of the array
  users.push({
    userName: name,
    userId: id,
    userBalance: balance,
  })
  showAllUsers();
}
// shows all the users (shows the whole array)
function showAllUsers() {
  console.table(users);
}

// shows the users by their id

function showUserById(id) {
  // here item means the index of the users array
  // id means the input that I take from the user
  id = prompt("please enter your id");
  // we check each element in the array to see which one has the id that we entered
  users.forEach((item) => {
    if (id === item.userId) {
      console.log(item);
    }
  });
}

// edits the user balance
function editBalance(id, newBalance) {
  id = prompt("please enter your id");
  newBalance = prompt("please enter your new balance");
  // we want to change the balance from inside the object
  // we check each element in the array to see which one has the id that we entered
  users.forEach((item) => {
    if (id === item.userId) {
      item.userBalance = newBalance;
    }
  })

  showAllUsers();
}

// deleting the user by their ID

function deleteUserById(id) {
  id = prompt("please enter your id");
  users.forEach((item, i) => {
    if (id === item.userId) {
      users.splice(i, 1);
    }

  });

  showAllUsers();
}

addUser();
addUser();
addUser();
editBalance();
deleteUserById();
showUserById()
showAllUsers();
