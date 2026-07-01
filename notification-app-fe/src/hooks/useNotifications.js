import { useState, useEffect } from "react";
import { fetchNotifications } from "../api/notifications"; // Change to ../apis if that's your actual folder

export function useNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);

        const data = await fetchNotifications();

        const list = data.notifications ?? data;

        setNotifications(list);
        setTotal(list.length);
      } catch (err) {
        setError("Failed to load notifications.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const totalPages = Math.ceil(total / 10);

  return {
    notifications,
    total,
    totalPages,
    loading,
    error,
  };
}