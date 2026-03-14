const fruits = ['Apple','Banana','Orange'];
function FruitList(){
    return(
        <ul>
            {fruits.map((fruits)=>
            <li key={fruits}>{fruits}</li>)}
        </ul>
    );
}
export default FruitList;