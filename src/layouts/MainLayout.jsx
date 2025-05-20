// src/layouts/MainLayout.tsx
import React from "react";
import Header from "./Header";
import Footer from "./Footer";


export default function MainLayout ({ children }){
  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-grow container mx-auto px-4 py-6">{children}</main>

    </div>
  );
};

