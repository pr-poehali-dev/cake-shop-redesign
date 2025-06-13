import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCatalog from "@/components/ProductCatalog";
import TrendingProducts from "@/components/TrendingProducts";
import SocialReviews from "@/components/SocialReviews";
import Fillings from "@/components/Fillings";
import FAQ from "@/components/FAQ";
import Advantages from "@/components/Advantages";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TrendingProducts />
      <ProductCatalog />
      <Advantages />
      <Fillings />
      <SocialReviews />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
