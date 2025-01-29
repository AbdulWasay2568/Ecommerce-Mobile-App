export interface CreateOrderDto {
    paymentID: number;
    order_date: Date;
    order_status: 'processing' | 'shipped' | 'delivered' | 'cancelled';
}

export interface UpdateOrderDto {
    paymentID?: number;
    order_date?: Date;
    order_status?: 'processing' | 'shipped' | 'delivered' | 'cancelled';
}
