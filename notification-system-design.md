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

---

## Future Improvements

- Dynamic Top N based on user preference.
- Personalized weights.
- Machine Learning based ranking.
- Redis cache for distributed systems.
- Kafka for streaming notifications.