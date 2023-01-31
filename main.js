let myLibrary=[
  {
    title:'title 1',
    author:'author 1',
    pages:100,
    read:true,
  },
  {
    title:'title 2',
    author:'author 2',
    pages:100,
    read:false,
  },
  {
    title:'title 3',
    author:'author 3',
    pages:100,
    read:true,
  },
];

function Book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}

function showLibrary(){
  const newHeadingRow=document.createElement('tr');
  document.querySelector('table').appendChild(newHeadingRow);
  for(let x=0;x<Object.keys(myLibrary[0]).length;x++){
    const newHeadingCell=document.createElement('th');
    newHeadingRow.appendChild(newHeadingCell);
    newHeadingCell.textContent=Object.keys(myLibrary[0])[x];
  }
  for(let i=0;i<myLibrary.length;i++){
    const newRow=document.createElement('tr');
    document.querySelector('table').appendChild(newRow);
    
    for(let y=0;y<Object.values(myLibrary[i]).length;y++){
      const newCell=document.createElement('td');
      newRow.appendChild(newCell);
      newCell.textContent=Object.values(myLibrary[i])[y];

    }
    const deleteButton=document.createElement('button');
    deleteButton.textContent='Remove';
    newRow.appendChild(deleteButton);
    deleteButton.addEventListener('click',removeRow);
    function removeRow(){
      myLibrary.splice(i,1);
      clear();
      showLibrary();
      console.log(i);
    }

    const readButton=document.createElement('button');
    readButton.textContent='read status toggle';
    newRow.appendChild(readButton);
    readButton.addEventListener('click',readToggle);
    function readToggle(){
      if(myLibrary[i].read===true){
        myLibrary[i].read=false;
      } else{
        myLibrary[i].read=true;
      }
      clear();
      showLibrary();
    }
  }
}

showLibrary();
function clear(){
  const row = document.querySelectorAll('tr');
  for(let i=0;i<row.length;i++){
    row[i].remove();
  }
}
const newBookButton=document.querySelector('.newBook');
const form=document.querySelector('form');
newBookButton.addEventListener('click',showForm);
function showForm(e){
  if(form.style.display==='block'){
    form.style.display='none';
  }
  else{
    form.style.display='block';
  }
  e.preventDefault();
}

const submitButton=document.querySelector('.submit');
const title=document.querySelector('.title');
const author=document.querySelector('.author');
const pages=document.querySelector('.pages');
const read=document.querySelector('.status');

submitButton.addEventListener('click',submitForm)
function submitForm(e){
  const newBook = new Book(title.value,author.value,pages.value,read.checked);
  if(title.value.trim()&&author.value.trim()&&pages.value.trim()!==''){
    myLibrary.push(newBook);
    title.value='';
    author.value='';
    pages.value='';
    read.checked=false;
  }
  clear();
  showLibrary();
  e.preventDefault();
}
