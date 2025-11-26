import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface CaseStudyTestimonialProps {
  testimonial: string;
  author: string;
  role: string;
  client: string;
}

const CaseStudyTestimonial = ({ testimonial, author, role, client }: CaseStudyTestimonialProps) => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="p-8 md:p-12 border-2 shadow-xl">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Quote className="w-8 h-8 text-primary" />
            </div>
          </div>
          
          <blockquote className="text-xl md:text-2xl text-center font-medium mb-8 leading-relaxed">
            "{testimonial}"
          </blockquote>
          
          <div className="text-center">
            <p className="font-bold text-lg">{author}</p>
            <p className="text-muted-foreground">{role} - {client}</p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CaseStudyTestimonial;
