import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Airbnb: Vacation Rentals, Cabins, Beach Houses, Unique Homes &
          Experinces
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  );
}
