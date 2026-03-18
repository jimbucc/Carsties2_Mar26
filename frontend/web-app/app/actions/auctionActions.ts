'use server'

import { fetchWrapper } from "@/lib/fetchWrapper";
import { Auction, Bid, PagedResult } from "@/types";
import { FieldValues } from "react-hook-form";

export const getData = async (query: string): Promise<PagedResult<Auction>> => {
    return fetchWrapper.get(`search${query}`)
}

export const updateAuctionTest = async (): Promise<{status: number, message: string}> => {
    const data =  {
        mileage: Math.floor(Math.random() * 1000) + 1
    }

    return fetchWrapper.put('auctions/6a5011a1-fe1f-47df-9a32-b5346b289391', data)    
}

export const createAuction = async (data: FieldValues) => {
    return fetchWrapper.post('auctions', data)
}

export const getDetailedViewData = async (id: string): Promise<Auction> => {
    return fetchWrapper.get(`auctions/${id}`);
}

export const updateAuction = async (data: FieldValues, id: string) => {
    return fetchWrapper.put(`auctions/${id}`, data)
}

export const deleteAuction = async (id: string) => {
    console.log("id is:", id)
    return fetchWrapper.del(`auctions/${id}`)
}
export const getBidsForAuction = async (id: string): Promise<Bid[]> => {
    return fetchWrapper.get(`bids/${id}`);
}

export const placeBidForAuction = async (auctionId: string, amount: number) => {
    return fetchWrapper.post(`bids?auctionId=${auctionId}&amount=${amount}`, {})
}