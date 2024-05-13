import connectDB from "@/config/database";
import Property from "@/models/Property";

//GET route to get the data from database using the Property  model 
//  /api/properties/:id
export const GET = async (request,{ params }) => {
    try {
        await connectDB();


        const property = await Property.findById(params.id);

        if(!property) return new Response("Property Not Found")
       
        
        return new Response(JSON.stringify(property),{status:200});
        
    } catch (error) {
        return new Response("An error occurred",{status:500});
    }
    

};
