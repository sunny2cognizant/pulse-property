import connectDB from "@/config/database";
import Property from "@/models/Property";

//GET route to get the data ffrom database using the Property  model
export const GET = async (request) => {
    try {
        await connectDB();
        const properties = await Property.find({});
        console.log("Connected to MongoDB");
        return new Response(JSON.stringify(properties),{status:200});
        
    } catch (error) {
        return new Response("An error occurred",{status:500});
    }
    

};
