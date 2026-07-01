# Stage 1

# Priority Inbox Design

## Problem

Users receive a large number of notifications and often miss important ones.

The Priority Inbox should always display the Top 10 unread notifications.

Priority is determined using:

1. Notification Weight
   - Placement = 3
   - Result = 2
   - Event = 1

2. Recency
   - Newer notifications receive higher priority when weights are equal.

---

## Algorithm

A Min Heap (PriorityQueue) of size 10 is maintained.

When a notification arrives:

- Ignore if already read.
- If heap size is less than 10:
  - Insert directly.
- Otherwise:
  - Compare with the minimum priority notification.
  - If new notification has higher priority:
    - Remove minimum.
    - Insert new notification.

The heap always contains the Top 10 unread notifications.

---

## Time Complexity

Insertion:
O(log 10)

Retrieving Top 10:
O(10 log 10)

Memory:
O(10)

---

## Why Min Heap?

Instead of sorting every notification repeatedly, the heap stores only the best 10 notifications.

Even if millions of notifications arrive, memory remains constant.

This approach is highly scalable and suitable for real-time systems.




# Stage 2

# Campus Notifications Frontend Design

## Problem

The frontend application should provide students with a simple and responsive interface to view campus notifications.

The application should display:

1. All Notifications
2. Priority Notifications (Top 10)
3. Notification Type Filter
4. Pagination
5. Read / Unread Status

The UI should use Material UI components and communicate with the Notifications API.

---

## Frontend Architecture

The application follows a simple component-based architecture.

App

↓

NotificationsPage

↓

useNotifications()

↓

fetchNotifications()

↓

NotificationCard

↓

NotificationFilter

The API layer is separated from the UI, making the application modular and easier to maintain.

---

## Priority Logic

Priority notifications are determined using the following weights:

- Placement = 3
- Result = 2
- Event = 1

If two notifications have the same weight, the notification with the latest timestamp receives higher priority.

The Priority section always displays the Top 10 notifications after sorting.

---

## Filtering

Users can filter notifications using the following options:

- All
- Placement
- Result
- Event

Filtering is performed on the client side after notifications are fetched from the API.

---

## Pagination

Notifications are displayed page-wise.

Each page contains a fixed number of notifications.

Users can navigate using Material UI Pagination.

---

## Read / Unread Status

Each notification displays its current status.

- Unread notifications are highlighted.
- Read notifications are displayed with a separate badge.

The unread notification count is shown beside the notification icon.

---

## Error Handling

The application handles common scenarios gracefully.

- Loading Spinner while fetching notifications.
- Error Alert if API request fails.
- Information message when no notifications are available.

---

## Component Structure

- App.jsx
- NotificationsPage.jsx
- NotificationCard.jsx
- NotificationFilter.jsx
- useNotifications.js
- notifications.js

Each component has a single responsibility, making the code reusable and maintainable.

---

## Time Complexity

Fetching Notifications:
O(n)

Filtering:
O(n)

Sorting Priority Notifications:
O(n log n)

Displaying Top 10:
O(10)

Memory:
O(n)

---

## Why This Design?

The frontend separates presentation, business logic, and API communication into different layers.

This approach improves:

- Readability
- Maintainability
- Reusability
- Scalability

The use of React Hooks simplifies state management, while Material UI provides a clean, responsive, and consistent user interface suitable for production-ready applications.
