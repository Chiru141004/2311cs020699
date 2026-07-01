import java.time.LocalDateTime;

public class Notification {

    private int id;
    private String title;
    private String type;
    private LocalDateTime timestamp;
    private boolean read;

    public Notification(int id, String title, String type,
                        LocalDateTime timestamp, boolean read) {
        this.id = id;
        this.title = title;
        this.type = type;
        this.timestamp = timestamp;
        this.read = read;
    }

    public int getWeight() {
        switch (type.toLowerCase()) {
            case "placement":
                return 3;
            case "result":
                return 2;
            case "event":
                return 1;
            default:
                return 0;
        }
    }

    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getType() {
        return type;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public boolean isRead() {
        return read;
    }

    @Override
    public String toString() {
        return id +
                " | " +
                type +
                " | " +
                title +
                " | " +
                timestamp;
    }
}