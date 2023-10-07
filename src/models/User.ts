export interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  created_date: Date;
}

export const getFullName = (user: User) => {
  return `${user.first_name} ${user.last_name}`;
};
