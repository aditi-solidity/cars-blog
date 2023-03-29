import React from "react";

export const Layout = ({ children }) => {
  return (
    <div class="flex min-h-screen flex-col justify-between bg-neutral-50 text-neutral-900">
      <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:max-w-4xl">{children}</div>
        </div>
      </div>
    </div>
  );
};
