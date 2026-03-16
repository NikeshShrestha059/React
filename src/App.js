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
export default Add;*/

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