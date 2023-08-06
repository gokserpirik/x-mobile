import { Avatar } from "../components/";
const avatarss = [
    {
  
      alt: "Sand Dollar",
      color: "$emerald600",
    },
    {  alt: "Arjen Schat",
        color: "$cyan600" },
    {
  
      alt: "Joshua Tree",
      color: "$indigo600",
    },
    {  alt: "Joshua Tea",
    color: "$gray600" },
    {  alt: "Charles Taylor",
    color: "$red400" },
  ];
  const extraAvatarss = avatarss.slice(3);
  const remainingCountt = extraAvatarss.length;
  
 export default function AvatarGroup({
    avatars = avatarss,
    remainingCount = remainingCountt,
  }: {
    avatars: any;
    remainingCount: number;
  }) {
    return (
      <Avatar.Group>
        {avatars.slice(0, 3).map((avatar, index) => {
          return (
            <Avatar
              key={index}
              size="sm"
              borderColor="$white"
              borderWidth="$2"
              bg={avatar.color}
              sx={{
                _dark: {
                  borderColor: "$black",
                },
              }}
            >
              <Avatar.FallbackText>{avatar.alt}</Avatar.FallbackText>
            </Avatar>
          );
        })}
        <Avatar
          size="sm"
          borderColor="$white"
          borderWidth="$2"
          bg="$gray600"
          sx={{
            _dark: {
              borderColor: "$black",
            },
          }}
        >
          <Avatar.FallbackText>{"+ " + remainingCount + ""}</Avatar.FallbackText>
        </Avatar>
      </Avatar.Group>
    );
  }
  

  export {avatarss, remainingCountt}