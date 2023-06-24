import Grid from "@/components/Grid";
import WidgetsList from "@/components/WidgetsList";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

function Home() {
  return (
    <div>
      <WidgetsList />
      <Grid />
    </div>
  );
}

export default Home;
