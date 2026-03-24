import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PortfolioCTA = () => {
  return (
    <div className="text-center mt-8">
      <Button 
        asChild
        size="lg" 
        className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 font-semibold shadow-lg"
      >
        <Link to="/portfolio">
          Découvrir le portfolio
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </Button>
    </div>
  );
};

export default PortfolioCTA;
