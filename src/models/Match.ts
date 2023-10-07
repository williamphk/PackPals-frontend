export interface Match {
  id: string;
  product_name: string;
  requesterDetails?: {
    first_name: string;
    last_name: string;
    email: string;
    created_date: Date;
  };
  requesteeDetails?: {
    first_name: string;
    last_name: string;
    email: string;
    created_date: Date;
  };
  created_date: Date;
  status: string;
}
