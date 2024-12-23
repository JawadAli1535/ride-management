"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "@/context/authContext";
import NavBar from "@/components/navbar";
import { useRouter } from "next/router";

export default function Dashboard() {
  const router = useRouter();
  const { user, logout, token } = useAuth();
  console.log("🚀 ~ Dashboard ~ user:", user, token);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/login");
    } else {
      fetchData();
    }
  }, [router]);

  return (
    <div>
      <NavBar />
      <div className="max-w-7xl mx-auto p-6">
        <div className="mt-6">
          {loading ? (
            <>Data is Loading...</>
          ) : (
            <table className="min-w-full table-auto">
              <thead>
                <tr>
                  <th className="px-4 my-2 border">ID</th>
                  <th className="px-4 my-2 border">Name</th>
                  <th className="px-4 my-2 border">Email</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="px-4 py-2 border">{user.id}</td>
                    <td className="px-4 py-2 border">{user.name}</td>
                    <td className="px-4 py-2 border">{user.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
