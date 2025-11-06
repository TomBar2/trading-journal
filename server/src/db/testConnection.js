import prisma from './prismaClient.js'

async function main() {
    try {
        const result = await prisma.$queryRaw`SELECT NOW()`
        console.log('Database connected:', result[0].now)
    } catch (error) {
        console.error('Connection failed:', error)
    } finally {
        await prisma.$disconnect()
    }
}

main()
