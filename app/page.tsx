'use client'

import AdSection from "./components/AdSection/AdSection";
import Categories from "./components/Categories/Categories";
import CategoriesTwo from "./components/CategoriesTwo/CategoriesTwo";
import CTA from "./components/CTA/CTA";
import Hero from "./components/Hero/Hero"
import Services from "./components/Services/Services";
import SuperVipSection from "./components/SuperVipSection/SuperVipSection";
import VipSection from "./components/VipSection/Vipsection";

export default function Home() {
  return (
    <>
    <Hero/>
    <Categories/>
    <SuperVipSection/>
    <AdSection/>
    <CTA/>
    <CategoriesTwo/>
    <VipSection/>
    <Services/>

    </>
  );
} 