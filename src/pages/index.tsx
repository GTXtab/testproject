import React from "react";
import App from "./_app";
import { Overview } from "../components/Overview/Overview";

export default function Home({children}) {
  return (
    <>
      <Overview />
    </>
  );
}