import { useState, useEffect } from "react";
import { fetchNotifications } from "../api/notifications";

export function useNotifications(page = 1, limit = 10, filter = "All") {
  const [notifications, setNotifications] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);

        const data = await fetchNotifications(page, limit, filter);

        setNotifications(data.notifications || []);
        setTotal(data.total || 0);
        setTotalPages(data.totalPages || 1);

        setError("");
      } catch (err) {
        setError("Failed to load notifications.");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [page, limit, filter]);

  return {
    notifications,
    total,
    totalPages,
    loading,
    error,
  };
}