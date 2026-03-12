//Conditional rendering(if,&&,?,:)
/*
Operator
function Welcome({ isLoggedIn}){
    return(
        <div> (if true show A:orB) 
            {isLoggedIn ? <h1> Welcome back!</h1>:<h1>Please sign in.</h1>}
        </div>
    );
}
export default Welcome;

Logic AND Operator
(Only if a condition is true, and show nothing if it's false.)
[]  ensures unreadMessages is at least an empty array
function Mailbox({ unreadMessages =[]}){
    return(
        <div>
            <h1>isfivbdivbsoidfb</h1>
            <h1>helloo</h1>
            {unreadMessages.length > 0 &&(
                <h2>You have {unreadMessages.length} unread messages.</h2>
            )}
        </div>
    );
}
export default Mailbox;

Early Return" 

function UserStatus({ isLoggedIn }) {
  if (!isLoggedIn) {
    return <h1>Please log in</h1>;
  }

  return <h1>Welcome back!</h1>;
}
export default UserStatus;*/