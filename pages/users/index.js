import Link from "next/link";
import React from "react";

const Users = ({ users }) => {
  return (
    <div>
      <h2>Total User {users.length}</h2>

      <div>
        {users.map((user) => (
          <>
            <h2>{user.name}</h2>
            <Link href={`/users/${user.id}`}>
              <button>Info</button>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default Users;

export async function getServerSideProps(context) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { users: data }, // will be passed to the page component as props
  };
}
