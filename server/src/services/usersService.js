import prismaClient from '../db/prismaClient.js';

export async function createUserService(email, hashedPassword) {
    return prismaClient.users.create({
        data: {email: email, password_hash: hashedPassword}
    });
}

export async function getUsersService() {
    return prismaClient.users.findMany();
}

export async function getUserByIdService(userId) {
    return await prismaClient.users.findUnique({
        where: {id: userId},
    });
}

export async function deleteUserService(userId) {
    return await prismaClient.users.delete({
        where: {id: userId},
    });
}
