
import React from 'react';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import NotificationsIcon from 'material-ui-icons/Notifications';
import HistoryIcon from 'material-ui-icons/History';
import EmailIcon from 'material-ui-icons/Email';
import Drawer from 'material-ui/Drawer';
import Badge from 'material-ui/Badge';

const Footer = () => {
  return (
    <footer>
      <Drawer
        anchor='bottom'
        variant='permanent'
        open={true}>
        <BottomNavigation showLabels>
          <BottomNavigationAction label='Alerts' icon={
            <Badge badgeContent={4} color='error'>
              <NotificationsIcon color='primary' />
            </Badge>
          } />
          <BottomNavigationAction label='Favorites' icon={<HistoryIcon color='primary' />} />
          <BottomNavigationAction label='Messages' icon={<EmailIcon color='primary' />} />
        </BottomNavigation>
      </Drawer>
    </footer>
  )
}

export default Footer