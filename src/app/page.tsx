"use client";
import { QueryClientProvider, useQuery } from "@tanstack/react-query";
import { queryClient } from "@/services/queryClient";
import Store from "./store";
import Header from "./components/header";
import "./main.scss";
import Footer from "./components/footer";
import { AuthProvider } from "./context";

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div className="container">
          <Header />
          <Store />
          <Footer />
        </div>
      </AuthProvider>
    </QueryClientProvider>
  );
}
