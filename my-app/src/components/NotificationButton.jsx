import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotificationButton = () => {
  return (
    <Button variant="ghost" size="icon" className="text-gray-600 hover:text-blue-600">
      <Bell className="w-5 h-5" />
    </Button>
  );
};

export default NotificationButton;
