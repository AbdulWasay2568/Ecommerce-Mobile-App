export interface CreatePaymentDto {
    cartID: number;
    payment_amount: number;
    payment_date?: Date;
    payment_method: 'cash' | 'card';
    payment_status: 'completed' | 'pending';
}

export interface UpdatePaymentDto {
    cartID?: number;
    payment_amount?: number;
    payment_date?: Date;
    payment_method?: 'cash' | 'card';
    payment_status?: 'completed' | 'pending';
}
