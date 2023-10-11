"use client";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./table.module.css";
import { usePathname } from "next/navigation";

const BookingTable = () => {
  const path = usePathname();
  const [bookings, setBookings] = useState([]);
  let i = 0;

  const fetchAppointment = async () => {
    const res = await fetch("/api/appointments", { cache: "no-store" });
    const data = await res.json();

    setBookings(data);
  };

  const handleDelete = async (appointment) => {
    const res = await fetch(`/api/appointments/${appointment._id.toString()}`, {
      method: "DELETE",
    });
    setBookings(bookings.filter((a) => a._id !== appointment._id));

    res.ok && alert("deleted");
  };

  useEffect(() => {
    fetchAppointment();
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
                  Conatct
                </th>
                <th id={styles.title} scope="col">
                  Appointment Date
                </th>
                <th id={styles.title} scope="col">
                  car model
                </th>
                <th id={styles.title} scope="col">
                  City
                </th>
                <th id={styles.title} scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((appointment) => (
                <tr key={appointment._id}>
                  <th id={styles.title} scope="row">
                    {++i}
                  </th>
                  <td id={styles.desc}>{appointment.name}</td>
                  <td id={styles.desc}>{appointment.email}</td>
                  <td id={styles.desc}>{appointment.contact}</td>
                  <td id={styles.desc}>{appointment.date.substring(0, 10)}</td>
                  <td id={styles.desc}>{appointment.model}</td>
                  <td id={styles.desc}>{appointment.city}</td>
                  <td
                    className={styles.delete}
                    onClick={() => handleDelete(appointment)}
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

export default BookingTable;
