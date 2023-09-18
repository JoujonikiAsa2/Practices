// How to added html element by javascript?


// Where to add
const placeList = document.getElementById("place-list");
// console.log(placeList);

// What to be added
const li = document.createElement('li');
li.innerText = "Shree Mangal";
const li1 = document.createElement('li');
li1.innerText = "Tanguar Hawor";
const li2 = document.createElement('li');
li2.innerText = "Jinda Park";

// console.log(li);

// add the child
placeList.appendChild(li);
placeList.appendChild(li1);
placeList.appendChild(li2);

// Add new section

// where to add
const mainContainer = document.getElementById("main-container");

// what to be added
const newSection = document.createElement('section');
const newH1 = document.createElement('h1');
newH1.innerText = "My favorite person";
newSection.appendChild(newH1);

const newUl = document.createElement('ul');
newSection.appendChild(newUl);

const newLi = document.createElement('li');
newLi.innerText = "Swami Bibekanannda";
newUl.appendChild(newLi)

const newLi1 = document.createElement('li');
newLi1.innerText = "Ram Krisna Paramahangsho Dev";
newUl.appendChild(newLi1)

const newLi2 = document.createElement('li');
newLi2.innerText = "Ma Sarada";
newUl.appendChild(newLi2);

const newLi3 = document.createElement('li');
newLi3.innerText = "Vagini Nibedita";
newUl.appendChild(newLi3);
mainContainer.appendChild(newSection);

// another way of create innerHTML
const dressSection = document.createElement('section');
dressSection.innerHTML = `
<h1>My favorite dress</h1>
<ul>
    <li>Scart</li>
    <li>Three piece</li>
    <li>Froq</li>
</ul>
`
mainContainer.appendChild(dressSection);
const sections = document.querySelectorAll('section');
for (const section of sections) {
    section.style.color = 'blue';
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px';
    section.style.paddingLeft = '7px';
    // section.style.backgroundColor='lightgray';


}
parentN