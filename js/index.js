
function addNewE()
{
    var listTodo = document.createElement("a")
    listTodo.id= 'to-do';
    listTodo.textContent='TODO list';
    document.body.appendChild(listTodo);
}

import { getDatabase, ref, child, get } from "firebase/database";

const dbRef = ref(getDatabase());
get(child(dbRef, `users/${userId}`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});