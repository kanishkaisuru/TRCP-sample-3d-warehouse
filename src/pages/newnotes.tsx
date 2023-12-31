import { type NextPage } from "next";
import Head from "next/head";

export const NewNotes: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center md:container mx-auto min-h-screen flex-col">
       form for add new note
      </main>
    </>
  );
};

export default NewNotes;
