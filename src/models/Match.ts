export interface Match {
  _id: string;
  product_name: string;
  requesterId: string;
  requesterDetails?: {
    first_name: string;
    last_name: string;
    email: string;
    created_date: Date;
    postal_code: string;
  };
  requesteeId: string;
  requesteeDetails?: {
    first_name: string;
    last_name: string;
    email: string;
    created_date: Date;
    postal_code: string;
  };
  created_date: Date;
  status: string;
}
