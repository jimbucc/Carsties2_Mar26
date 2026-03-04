using System;
using AutoMapper;
using Contracts;
using MassTransit;
using MongoDB.Entities;
using SearchService.Models;

namespace SearchService.Consumers;

public class AuctionCreatedConsumer(IMapper mapper) : IConsumer<AuctionCreated>
{
    public async Task Consume(ConsumeContext<AuctionCreated> context)
    {
        Console.WriteLine("---> Consuming AuctionCreated: " + context.Message.Id);

        // Create a new Item that is the AuctionCreated contract in the context.Message
        var item = mapper.Map<Item>(context.Message);

        if( item.Model == "Foo") throw new Exception("Cannot sell cars with name of Foo");

        // Save the item into MongoDb
        await item.SaveAsync();
    }
}
