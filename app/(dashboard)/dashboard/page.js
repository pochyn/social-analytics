"use client";

import Grid from "@/components/Grid";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

function Home() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      // redirect("/signin?callbackUrl=/protected/client");
      redirect("/");
    },
  });

  return (
    <div className="">
      <Grid />
    </div>
  );
}

export default Home;
