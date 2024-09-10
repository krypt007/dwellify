// import prisma from "@/lib/prisma";
// import Image from "next/image";
// import PropertyCard from "@/components/template/PropertyCard";
// import PropertyContainer from "@/components/template/PropertyContainer";
import Search from "@/components/template/Search";
import Header from "@/components/Header";
import MapFilterItems from "@/components/MapFilterItems";
const PAGE_SIZE = 8;

interface Props {
  searchParams: { [key: string]: string | string[] | undefined };
}
export default async function Home({ searchParams }: Props) {
  // const pagenum = searchParams.pagenum ?? 0;
  // const query = searchParams.query ?? "";
  // const propertiesPromise = prisma.property.findMany({
  //   select: {
  //     id: true,
  //     name: true,
  //     price: true,
  //     images: {
  //       select: {
  //         url: true,
  //       },
  //     },
  //     location: {
  //       select: {
  //         city: true,
  //         state: true,
  //       },
  //     },
  //   },
  //   ...(!!query && {
  //     where: {
  //       name: {
  //         contains: String(query),
  //       },
  //     },
  //   }),
  //   skip: +pagenum * PAGE_SIZE,
  //   take: PAGE_SIZE,
  // });
  // const totalPropertiesPromise = prisma.property.count({
  //   ...(!!query && {
  //     where: {
  //       name: {
  //         contains: String(query),
  //       },
  //     },
  //   }),
  // });

  // const [properties, totalProperties] = await Promise.all([
  //   propertiesPromise,
  //   totalPropertiesPromise,
  // ]);

  // const totalPages = Math.floor(totalProperties / PAGE_SIZE);

  return (
    <div>
      <Header />
      <div className="flex h-16 py-3" />
      <Search />
      {/* <PropertyContainer totalPages={totalPages} currentPage={+pagenum}>
        {properties.map((propertyItem) => (
          <PropertyCard property={propertyItem} key={propertyItem.id} />
        ))}
      </PropertyContainer> */}
        <div className='container mx-auto px-5 lg:px-10'>
          <MapFilterItems />
        </div>
    </div>
  );
}
