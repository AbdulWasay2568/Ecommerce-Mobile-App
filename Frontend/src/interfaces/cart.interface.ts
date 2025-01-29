export interface CreateCartDto {
    userID: number;
    productID: number;
    quantity: number;
    total_amount: number;
    created_at?: Date;
}

export interface UpdateCartDto {
    userID?: number;
    productID?: number;
    quantity?: number;
    total_amount?: number;
    created_at?: Date;
}

export interface CartData {
    id: number;
    productID: number;
    Product: {
      name: string;
      image_url: string;
      price: number;
    };
    quantity: number;
    total_amount: number;
  }