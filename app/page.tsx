import MetaStrap from '@metastrap/core';
import fs from 'node:fs';
import Form from "components/form";
import { enums } from "@metastrap/core";

export default async function Home() {
  return (
    <main>
      <h1>MetaStrap</h1>
      <Form />
    </main>
  );
}
