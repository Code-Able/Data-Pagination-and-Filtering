/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
@author Barbara Vega
*/

/*
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage(list, page) {
   // create two variables which will represent the index for the first and last student on the page
  const startIndex = (page * 9) - 9;
  const endIndex = page * 9;
  // select the element with a class of `student-list` and assign it to a variable
  const studentList = document.querySelector('.student-list');

  studentList.innerHTML = '';

   // loops over the length of the `list` parameter
     // inside the loop is a conditional to display the proper students
       // inside the conditional:
         // created the elements needed to display the student information


   for (i = 0; i < list.length; i++){
    if (i >= startIndex && i < endIndex){
      const studentItem = `
      <li class="student-item cf">
      <div class="student-details">
        <img class="avatar" src="${list[i].picture.thumbnail}" alt="Profile Picture">
        <h3>${list[i].name.title} ${list[i].name.first} ${list[i].name.last}</h3>
        <span class="email">${list[i].email}</span>
      </div>
      <div class="joined-details">
        <span class="date">Joined ${list[i].registered.date}</span>
      </div> 
      </li>
      `;

      studentList.insertAdjacentHTML("beforeend", studentItem);

    } 
   }
 }

/*
This 'addPagination' function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
   // create a variable to calculate the number of pages needed
 const numOfPages = Math.ceil(list.length / 9);

 const linkList = document.querySelector('.link-list'); 
 linkList.innerHTML = '';


   // loop for the number of pages needed and displays pagination buttons
   for (i = 1; i < (numOfPages + 1); i++){
     button = `
        <li>
         <button type="button">${i}</button>
         </li>
        `;

      linkList.insertAdjacentHTML("beforeend", button);

      // gives the first pagination button a class of "active"
 
      activeButton = document.querySelector('Button');
      activeButton.className = 'active';
        
      // created an event listener on the `link-list` element
      // if the click target is a button:
      // it removes the "active" class from the previous button
         
      linkList.addEventListener('click', (e) => {
         
         if (e.target.tagName === 'BUTTON'){
            document.querySelector('.active').className = '';
            e.target.className = 'active';
            showPage(list, e.target.textContent);
         }
      });
   }
 }

 
// Calls functions created previously
showPage(data,1);
addPagination(data);