'use client';

import { ReactNode, useState } from 'react';

export default function MessagePreview({
  children,
}: {
  children: ReactNode | ReactNode[];
}) {
  const [messagePreview, setMessagePreview] = useState<boolean>(true);
  return (
    messagePreview
      ? (
        <div className="flex justify-between border rounded-lg border-gray-500 mt-8 mb-12">
          <p className="p-4 text-gray-300">{children}</p>
          <button
            type="button"
            className="p-4 flex"
            aria-label="Close message"
            onClick={() => setMessagePreview(false)}
          >
            <i className="icon-clear" />
          </button>
        </div>
      )
      : null
  );
}
