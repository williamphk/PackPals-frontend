export interface User {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  postal_code: string;
}

export const getFullName = (user: User) => {
  return `${user.first_name} ${user.last_name}`;
};
