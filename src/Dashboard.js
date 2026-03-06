function Dashboard({ user }) {
  // 🛑 Safety check: prevents "cannot read properties of undefined"
  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="dashboard">
      {/* User Info */}
      <h1>Welcome, {user.name}</h1>
      <p>Age: {user.age}</p>

      {/* Conditional Rendering */}
      <p>
        Status: {user.age >= 18 ? "Adult" : "Minor"}
      </p>

      {/* Conditional Block */}
      {user.isLoggedIn ? (
        <div>
          <h2>Your Hobbies</h2>

          <ul>
            {user.hobbies && user.hobbies.length > 0 ? (
              user.hobbies.map((hobby) => (
                <li key={hobby}>{hobby}</li>
              ))
            ) : (
              <li>No hobbies found</li>
            )}
          </ul>
        </div>
      ) : (
        <p>Please login to see your hobbies</p>
      )}
    </div>
  );
}

export default Dashboard;
