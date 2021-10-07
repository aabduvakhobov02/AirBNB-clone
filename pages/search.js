import Footer from "../components/Footer";
import Header from "../components/Header";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";

function Search({ searchResults }) {
  const router = useRouter();
  const { location, endDate, startDate, noOfGuests } = router.query;
  const formattedStartDate = format(new Date(startDate), "MMM dd");
  const formattedEndDate = format(new Date(endDate), "MMM dd");
  const range = `${formattedStartDate} - ${formattedEndDate}`;
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-lg">
            300+ stays - {range} - {noOfGuests} guests
          </p>
          <h1 className=" text-4xl font-bold mb-6 mt-2">Stays in {location}</h1>

          <div className="hidden text-lg lg:inline-flex my-4 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>

          <p className="text-lg mt-3 mb-6 pb-6 border-b">
            Review COVID-19 travel restrictions before you book.{" "}
            <a href="" className="underline">
              Learn more
            </a>
          </p>
          <div className="flex flex-col">
            {searchResults.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
