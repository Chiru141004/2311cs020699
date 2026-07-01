import axios from "axios";

const BASE_URL =
  "http://4.224.186.213/evaluation-service/notifications";

// For local testing only.
// Before pushing to GitHub, replace with:
// const TOKEN = import.meta.env.VITE_ACCESS_TOKEN;
const TOKEN = "PASTE_YOUR_ACCESS_TOKEN_HERE";

export async function fetchNotifications(
  page = 1,
  limit = 10,
  notificationType = "All"
) {
  try {
    const params = {
      page,
      limit,
    };

    if (notificationType !== "All") {
      params.notification_type = notificationType.toLowerCase();
    }

    const response = await axios.get(BASE_URL, {
      params,
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Notification API Error:", error.response?.data || error.message);
    throw error;
  }
}