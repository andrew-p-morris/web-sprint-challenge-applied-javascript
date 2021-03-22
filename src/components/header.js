const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>n
  //
  
  let divHeader = document.querySelector(".header") 
  
  let headerTag = document.createElement('div');
  headerTag.classList.add = 'header'
  
  let dateTag = document.createElement('span');
  dateTag.classList.add("date")
  dateTag.textContent =date
  
  let hOne = document.createElement ("h1")
  hOneTitle.textContent(title)

  let tempTag = document.createElement('span');
  tempTag.classList.add("temp")
  tempTag.textContent =temp

  divHeader.append(dateTag, hOne,tempTag)
}
// console.log(Header("Drew", "2/20","98 Degrees"))

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  let stylingHeader = document.querySelector(Header)

  let cssHeader = document.createElement("header")
  stylingHeader.style.
  
}

// /display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-direction: row;
//   background-color: #fff;
//   border-bottom: 1px solid lightgrey;
//   width: 100%;
//   height: 120px;
//   padding-bottom: 15px;
export { Header, headerAppender }

