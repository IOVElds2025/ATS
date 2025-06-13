import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const UserProfile = ({ name }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 cursor-pointer focus:outline-none">
        <Avatar className="w-8 h-8">
          <AvatarImage
            src={`https://ui-avatars.com/api/?name=${name.replace(" ", "+")}&background=0D8ABC&color=fff`}
            alt={name}
          />
          <AvatarFallback>{name.split(" ")[0][0]}{name.split(" ")[1][0]}</AvatarFallback>
        </Avatar>
        <span className="font-semibold">{name}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserProfile;
