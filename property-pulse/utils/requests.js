const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null
const fetchProperties = async () => {
    try{
        // Handle the case if the public api domain is not available
        if(!apiDomain){
            return [];
        }
        const response = await fetch(`${apiDomain}/properties`);
        if(!response.ok){
        throw new Error("Failed to fetch properties");
        }
        return response.json();
    } catch (error) {
      console.error(error);
      return [];
    }
  };

const fetchProperty = async (id) =>{
    
    try{
        // Handle the case if the public api domain is not available
        if(!apiDomain){
            return null;
        }
        const response = await fetch(`${apiDomain}/properties/${id}`)
        if(!response.ok){
            throw new Error("Failed to fetch the property data")
        }
        return response.json()
    }catch(error){
        console.log("Error occur during fetching the data",error)
        return null;
    }
}



export {fetchProperties,fetchProperty}