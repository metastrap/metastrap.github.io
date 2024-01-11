'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function MessagePreview() {
  const [messagePreview, setMessagePreview] = useState<boolean>(true);
  return (
    messagePreview
      ? (
        <div className="flex border rounded-lg border-gray-500 mt-8 mb-12">
          <p className="p-4">
            This is a dev tool to bootstrap Next.Js project using various features,
            configurations and frameworks, similar to
            <Link href="https://spring.io">Spring Initializr</Link>
            . Select required options, download the zip and start coding!
          </p>
          <button
            type="button"
            className="p-4"
            onClick={() => setMessagePreview(false)}
          >
            x
          </button>
        </div>
      )
      : null
  );
}
