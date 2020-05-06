const Query =  {
    hello: () => 'Hello world!',

    async users(parent, args, ctx, info) {
        return await ctx.prisma.user.findMany();
    }
}

module.exports = Query;