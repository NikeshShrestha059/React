/* const fruits = ['Apple','Banana','Orange'];
function FruitList(){
    return(
        <ul>
            {fruits.map((fruits)=>
            <li key={fruits}>{fruits}</li>)}
        </ul>
    );
}
export default FruitList;

const Fish = ['Oscar','Channa','Betta'];
function Fishes(){
    return(
        <ul>
            {Fish.map((item,index) =>
              <li key={index}>{item}</li>)}
        </ul>

    )
}
export default Fishes;

const Fish = ['Oscar','Channa','Betta'];
function Fishes(){
    return(
        <ul>
            {Fish.map((item,index) =>
              <li key={index}>{index}={item}</li>)}
        </ul>

    )
}
export default Fishes;

const number=[1,2,3,4,5,6,7,8,9];
function Add(){
    return(
        <ul>
             {number.map((item,index)=>(

        
        <li key ={index}>{index}:{index + index}</li>
             ))}
        </ul>
       );
}
export default Add;

const number=[1,2,3,4,5,6,7,8,9];
function Add(){
    return(
        <ul>
            {number.map((item, index, array)=>(
            <li key={index}>
                Current Index: {index} +
                New Index: {index + 1}=
                {index + (index + 1)}
            </li>
        ))}
        </ul>
    );
}

export default Add;

import React from "react";

const StudentDetail=[
  {id:101, name:"Nikesh", faculty:"BCA", sem:"6TH", grade:"4.00"},
  {id:102, name:"Nikesh", faculty:"BCA", sem:"6TH", grade:"4.00"},
  {id:103, name:"Nikesh", faculty:"BCA", sem:"6TH", grade:"4.00"}
  ];
  
function StudentId(){
  return(
    <div>
      <ul>
        {StudentDetail.map((student)=>(
        <li key={student.id}>
          Id:{student.id}    Name: {student.name}   Faculty:{student.faculty}   Semester: {student.sem}   Grade: {student.grade}
          </li>)
        )}
      </ul>
    </div>
    );
}

export default StudentId;
  
import React, {useState} from "react";

const StudentId=[
  {id:101, name:"Nikesh Rai", faculty:"BCA", sem:"6TH", grade:"4.00"},
  {id:102, name:"Anish Darnal", faculty:"BCA", sem:"6TH", grade:"4.00"},
  {id:103, name:"Nikesh Shrestha", faculty:"BCA", sem:"6TH", grade:"4.00"},
  {id:104, name:"Monisha Lama", faculty:"BCA", sem:"6TH", grade:"4.00"},
  {id:105, name:"Puku Haggu", faculty:"BCA", sem:"6TH", grade:"4.00"},
  {id:106, name:"Santos Chor", faculty:"BCA", sem:"6TH", grade:"4.00"},
  {id:107, name:"Hari Gopal", faculty:"BCA", sem:"6TH", grade:"4.00"},
  {id:108, name:"Anil Sapkota", faculty:"BCA", sem:"6TH", grade:"4.00"},
  {id:109, name:"Gita Kapur", faculty:"BCA", sem:"6TH", grade:"4.00"},
  {id:110, name:"Sita Kapur", faculty:"BCA", sem:"6TH", grade:"4.00"}
  ];
  
function ShowDetail(){
  const[searchTerm, setSearchTerm] = useState("");
  return(
    <div style={{padding: "20px"}}>
      <label>
      Search Student:
      <input 
          type="text" 
          placeholder="Type a name..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
      </label>
      <hr/>
      {StudentId.filter((student)=>
      student.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      
        .map((student)=>
        <div key={student.id} style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>ID:</strong> {student.id} | <strong>GPA:</strong> {student.grade}</p>
        </div>)
      }
    </div>
    );
}
export default ShowDetail;
 */
  
