export interface CreateShippingInfoDto {
    orderID: number;
    shipping_address: string;
    shipping_method: string;
    tracking_number?: string;
    shipped_date?: Date;
    delivered_date?: Date;
}

export interface UpdateShippingInfoDto {
    orderID?: number;
    shipping_address?: string;
    shipping_method?: string;
    tracking_number?: string;
    shipped_date?: Date;
    delivered_date?: Date;
}
