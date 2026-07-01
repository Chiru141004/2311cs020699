import java.util.Comparator;

public class NotificationPriorityComparator implements Comparator<Notification> {

    @Override
    public int compare(Notification a, Notification b) {

        if (a.getWeight() != b.getWeight()) {
            return Integer.compare(a.getWeight(), b.getWeight());
        }

        return a.getTimestamp().compareTo(b.getTimestamp());
    }
}