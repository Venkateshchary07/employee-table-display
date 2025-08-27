//creating table data using  JSON
const employee1={
    'name':'Akaram Venkatesh Chary',
    'age' : '23',
    'jobtitle':"developer",
    'Location':"Secundrabad"
}
const employee2={
    'name':'Amar Lingam',
    'age' : '23',
    'jobtitle':"Engineer",
    'Location':"Bibinagar"
}
const employee3={
    'name':"Naveen",
    'age' : '24',
    'jobtitle':"Manager",
    'Location':"Ghatkesar"
}
const employee4={
    'name':"Bhanu",
    'age' : '22',
    'jobtitle':"Project Engineer",
    'Location':"Rampally"
}
const employee5={
    'name':"Vinay",
    'age' : '23',
    'jobtitle':"Business",
    'Location':"Gudur"
}
const employee6={
    'name':'Srikanth',
    'age'  :'28',
    'jobtitle':'Business',
    'Location':'Jainapally'
}
// Load the data into the LocalStorage
let arrayOfEmployees=[employee1,employee2,employee3,employee4,employee5,employee6];
function uploaddata(employee){
    localStorage.clear();
    console.log(employee);
    for(let i in employee){
        localStorage.setItem(i,JSON.stringify(employee[i]));
    }
}
uploaddata(arrayOfEmployees);
//create the row in a table structure
const tableStruct = document.querySelector('.table-container');
function creatingRow() {
    let class_names_array = ['col-name', 'col-age', 'col-job', 'col-location'];
    let arrays_table_head = ['name', 'age', 'jobtitle', 'Location'];

    // Get all employees from localStorage
    let employees = [];
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let employee = JSON.parse(localStorage.getItem(key));
        employees.push(employee);
    }

    // Loop through each employee and create a row
    let  row_color_changer=true;
    for (let emp of employees) {
        const create_div = document.createElement('div');
        create_div.classList.add('row');
        if(row_color_changer){
            create_div.style.backgroundColor='rgba(238, 233, 233, 0.3)';
            row_color_changer=false;
        }else{
            row_color_changer=true;
        }

        tableStruct.appendChild(create_div);

        for (let j = 0; j < class_names_array.length; j++) {
            const create_span = document.createElement('span');
            create_span.classList.add(class_names_array[j]);
            create_span.innerText = emp[arrays_table_head[j]];
            create_div.appendChild(create_span);
        }
    }
}

//fetching the data and adding to the tabl
creatingRow();





