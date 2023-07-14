import Grid from "@/components/Grid";
import WidgetsList from "@/components/WidgetsList";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

function Home() {
  return (
    <div>
      <Hero />
      <WidgetsList />
      <Grid />

      <Pricing />
    </div>
  );
}

export default Home;
