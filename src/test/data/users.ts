type UserType = 'admin' | 'invalid' | 'guest';

export const users = {
  admin: {
    username: 'Admin',
    password: 'admin123'
  },
  invalid: {
    username: 'Admin',
    password: 'wrongPass'
  },
   guest: {
    username: 'Guest',
    password: 'guestpass'
  }
};