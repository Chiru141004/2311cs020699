const notifications = [
  {
    id: 1,
    type: "Placement",
    message: "Google Hiring Drive",
    timestamp: "2026-07-01T10:30:00",
    read: false,
  },
  {
    id: 2,
    type: "Result",
    message: "Mid Semester Results",
    timestamp: "2026-07-01T09:00:00",
    read: false,
  },
  {
    id: 3,
    type: "Event",
    message: "Hackathon Registration",
    timestamp: "2026-07-01T08:00:00",
    read: true,
  },
  {
    id: 4,
    type: "Placement",
    message: "Amazon Placement Drive",
    timestamp: "2026-07-01T11:15:00",
    read: false,
  },
  {
    id: 5,
    type: "Event",
    message: "Farewell Event",
    timestamp: "2026-07-01T07:00:00",
    read: true,
  },
];

export async function fetchNotifications() {
  return notifications;
}