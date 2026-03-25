import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FAQSchema } from '@/components/seo/StructuredData';

interface FAQ {
  q: string;
  a: string;
}

interface ServiceFAQProps {
  faqs: FAQ[];
  title?: string;
}

const ServiceFAQ = ({ faqs, title = "Questions fréquentes" }: ServiceFAQProps) => {
  return (
    <>
      <FAQSchema faqs={faqs.map(f => ({ question: f.q, answer: f.a }))} />
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">{title}</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-6 bg-card">
                  <AccordionTrigger className="text-left text-foreground font-medium hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceFAQ;
