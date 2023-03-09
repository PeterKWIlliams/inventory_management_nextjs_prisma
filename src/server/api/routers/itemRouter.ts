import { createTRPCRouter, publicProcedure } from "../trpc";
import { Prisma } from "@prisma/client";
import z from "zod";

const itemRouter = createTRPCRouter({
    getAll: publicProcedure.query(async({ctx})=>{
        try{
            return await ctx.prisma.item.findMany({
                select:{
                    name:true,
                    
                    
                }
            })
        }
    })
})
