type Props = {
  user: {
    id: number;
    name: string;
    username: string;
    email: string;
  };
};

export const UserInfo = ({ user }: Props) => {
  return (
    <a href={`mailto:${user.email}`} className="UserInfo">
      {user.name}
    </a>
  );
};
