import {
  Card,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";

export function NotificationCard({ notification }) {
  const typeColor = {
    Placement: "success",
    Result: "primary",
    Event: "warning",
  };

  return (
    <Card elevation={2}>
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={1}
        >
          <Chip
            label={notification.type}
            color={typeColor[notification.type] || "default"}
            size="small"
          />

          <Chip
            label={notification.read ? "Read" : "Unread"}
            color={notification.read ? "default" : "error"}
            size="small"
          />
        </Stack>

        <Typography variant="h6">
          {notification.message}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          mt={1}
        >
          {new Date(notification.timestamp).toLocaleString()}
        </Typography>
      </CardContent>
    </Card>
  );
}