import PropertyCard from '@/components/PropertyCard';
import { fetchProperties } from '@/utils/requests';




const PropertiesPage =  async () => {
  const propertie = await fetchProperties()
  const properties = propertie.sort((a, b) => {
    b.square_feet - a.square_feet;
  });


  // sort properties according to date

  

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


