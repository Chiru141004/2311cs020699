import java.util.*;

public class NotificationService {

    private static final int TOP_N = 10;

    private PriorityQueue<Notification> priorityQueue =
            new PriorityQueue<>(TOP_N, new NotificationPriorityComparator());

    public void addNotification(Notification notification) {

        if (notification.isRead()) {
            return;
        }

        if (priorityQueue.size() < TOP_N) {
            priorityQueue.offer(notification);
        } else {

            Notification lowest = priorityQueue.peek();

            NotificationPriorityComparator comparator =
                    new NotificationPriorityComparator();

            if (comparator.compare(notification, lowest) > 0) {
                priorityQueue.poll();
                priorityQueue.offer(notification);
            }
        }
    }

    public List<Notification> getTopNotifications() {

        List<Notification> list = new ArrayList<>(priorityQueue);

        list.sort((a, b) -> {

            if (a.getWeight() != b.getWeight()) {
                return Integer.compare(b.getWeight(), a.getWeight());
            }

            return b.getTimestamp().compareTo(a.getTimestamp());

        });

        return list;
    }
}