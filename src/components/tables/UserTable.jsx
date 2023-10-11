"use client";
import React, { useEffect, useState } from "react";
import styles from "./table.module.css";
import "bootstrap/dist/css/bootstrap.css";
const UserTable = () => {
  const [users, setUsers] = useState([]);
  let i = 0;
  const fetchUsers = async () => {
    const res = await fetch("/api/users", { cache: "no-store" });
    const data = await res.json();

    setUsers(data);
  };

  const handleDelete = async (user) => {
    const res = await fetch(`/api/users/${user._id.toString()}`, {
      method: "DELETE",
    });
    setUsers(users.filter((p) => p._id !== user._id));
    res.ok && alert("deleted");
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.board}>
          <table className="table table-striped">
            <thead>
              <tr>
                <th id={styles.title} scope="col">
                  #
                </th>
                <th id={styles.title} scope="col">
                  Name
                </th>
                <th id={styles.title} scope="col">
                  Email
                </th>
                <th id={styles.title} scope="col">
                  Created At
                </th>
                <th id={styles.title} scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <th id={styles.title} scope="row">
                    {++i}
                  </th>
                  <td id={styles.desc}>{user.name}</td>
                  <td id={styles.desc}>{user.email}</td>
                  <td id={styles.desc}>{user.createdAt.substring(0, 10)}</td>
                  <td
                    className={styles.delete}
                    onClick={() => handleDelete(user)}
                  >
                    Delete ❌
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserTable;
