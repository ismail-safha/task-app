import Head from "next/head";

import Header from "@/Components/Header";
import FormSearch from "@/Components/FormSearch";
import ProductList from "@/Components/ProductList";
interface HomeProps {
  posts: any[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <>
      <Head>
        <title>Task-App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto">
        <Header />
        {/* formSearch */}
        <FormSearch />
        <ProductList posts={posts} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const authToken = process.env.ACCESS_KEY;

  const query = `
        query GetGenericCatalytics {
          getGenericCatalytics {
            ...Catalytic
          }
        }

        fragment Catalytic on Catalytic {
          _id
          maker
          brand
          ref
          type
          images
          price
          yesterdayPrice
        }
  `;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    body: JSON.stringify({ query }),
  };
  const response = await fetch(
    "https://api.catalyticworks.com/graphql",
    options
  );
  const data = await response.json();
  return {
    props: { posts: data.data.getGenericCatalytics },
  };
}
