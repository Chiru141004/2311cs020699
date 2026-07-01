import java.time.LocalDateTime;
import java.util.List;

public class Main {

    public static void main(String[] args) {

        NotificationService service = new NotificationService();

        service.addNotification(new Notification(1,
                "Amazon Hiring",
                "placement",
                LocalDateTime.now().minusMinutes(2),
                false));

        service.addNotification(new Notification(2,
                "Semester Result Published",
                "result",
                LocalDateTime.now().minusMinutes(5),
                false));

        service.addNotification(new Notification(3,
                "Hackathon",
                "event",
                LocalDateTime.now().minusHours(1),
                false));

        service.addNotification(new Notification(4,
                "Microsoft Placement",
                "placement",
                LocalDateTime.now().minusMinutes(10),
                false));

        service.addNotification(new Notification(5,
                "Workshop",
                "event",
                LocalDateTime.now().minusMinutes(20),
                false));

        service.addNotification(new Notification(6,
                "TCS Hiring",
                "placement",
                LocalDateTime.now().minusMinutes(1),
                false));

        service.addNotification(new Notification(7,
                "Internal Results",
                "result",
                LocalDateTime.now().minusMinutes(30),
                false));

        service.addNotification(new Notification(8,
                "Sports Event",
                "event",
                LocalDateTime.now().minusMinutes(15),
                false));

        service.addNotification(new Notification(9,
                "Infosys Drive",
                "placement",
                LocalDateTime.now().minusMinutes(40),
                false));

        service.addNotification(new Notification(10,
                "Exam Results",
                "result",
                LocalDateTime.now().minusMinutes(3),
                false));

        service.addNotification(new Notification(11,
                "Google Placement",
                "placement",
                LocalDateTime.now(),
                false));

        service.addNotification(new Notification(12,
                "Cultural Fest",
                "event",
                LocalDateTime.now().minusMinutes(8),
                false));

        List<Notification> top = service.getTopNotifications();

        System.out.println("========== TOP 10 PRIORITY NOTIFICATIONS ==========\n");

        for (Notification n : top) {
            System.out.println(n);
        }
    }
}