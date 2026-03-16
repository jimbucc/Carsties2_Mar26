using System;
using AuctionService.Data;
using Contracts;
using MassTransit;

namespace AuctionService.Consumers;

public class AuctionFinishedConsumer(AuctionDbContext auctionDbContext) : IConsumer<AuctionFinished>
{
    public async Task Consume(ConsumeContext<AuctionFinished> context)
    {
        Console.WriteLine("---> Consuming AuctionFinished");
        var auction = await auctionDbContext.Auctions.FindAsync(Guid.Parse(context.Message.AuctionId));

        if(context.Message.ItemSold)
        {
            auction.Winner = context.Message.Winner;
            auction.SoldAmount = context.Message.Amount;
        }

        auction.Status = 
            auction.SoldAmount > auction.ReservedPrice 
            ? Entities.Status.Finished 
            : Entities.Status.ReserveNotMet;
            
        await auctionDbContext.SaveChangesAsync();
    }
}
