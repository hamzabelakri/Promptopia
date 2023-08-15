import { connectToDB } from '@utils/database';
import User from '@models/user';


export const GET = async (request) => {
    try {
        await connectToDB()

        const allUsers = await User.find({});


        return new Response(JSON.stringify(allUsers), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all allUsers", { status: 500 })
    }
} 