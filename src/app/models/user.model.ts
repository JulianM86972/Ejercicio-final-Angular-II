export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      city: string;
      zipcode: string;
    };
    phone: string;
    website: string;
    company: {
      name: string;
    };
  }
  
  export interface CreateUserDto {
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      city: string;
      zipcode: string;
    };
    phone: string;
    website: string;
    company: {
      name: string;
    };
  }



  