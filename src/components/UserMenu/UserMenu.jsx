import { useDispatch } from 'react-redux';

import { Container, Title, Button } from './UserMenu.styled';
import { useAuth } from 'hooks/useAuth';
import { logOut } from '../../redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Container>
      <Title>Welcome, {user.name}</Title>
      <Button type="button" onClick={handleLogOut}>
        logout
      </Button>
    </Container>
  );
};
