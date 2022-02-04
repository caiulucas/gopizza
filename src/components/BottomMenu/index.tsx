import React from 'react';

import { Container, Notification, Title, Quantity } from './styles';

interface BottomMenuProps {
  title: string;
  color: string;
  notifications?: string | undefined;
}

export const BottomMenu: React.FC<BottomMenuProps> = ({
  title,
  color,
  notifications,
}) => {
  const hasNotifications = Number(notifications) > 0;
  return (
    <Container>
      <Title color={color}>{title}</Title>
      {notifications && (
        <Notification hasNotification={hasNotifications}>
          <Quantity hasNotification={hasNotifications}>
            {notifications}
          </Quantity>
        </Notification>
      )}
    </Container>
  );
};

BottomMenu.defaultProps = {
  notifications: undefined,
};
