import PropertyCard from '@/components/PropertyCard';
// import properties from '@/properties.json'

const fetchProperties = async () => {
  try{
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/properties`);
  if(!response.ok){
    throw new Error("Failed to fetch properties");
  }
  return response.json();
  } catch (error) {
    console.error(error);
  }
};


const PropertiesPage =  async () => {
  const properties = await fetchProperties();
  console.log(properties);

  // sort properties according to date

  properties.sort((a, b) => { new Date(a.createdAt) - new Date(b.createdAt) });

  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {properties.length === 0 ? (<p>No 
          Property Found.
        </p>) :(<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property._id}  property={property}/>
          ))}
          </div>)}
          </div>
          </section>
  );
};

export default PropertiesPage;


