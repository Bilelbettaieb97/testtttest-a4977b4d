import { Card } from "@/components/ui/card";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface ChartData {
  name: string;
  before: number;
  after: number;
}

interface CaseStudyChartsProps {
  title: string;
  data: ChartData[];
}

const CaseStudyCharts = ({ title, data }: CaseStudyChartsProps) => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: chartsRef, isVisible: chartsVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: summaryRef, isVisible: summaryVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="py-16 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div 
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <TrendingUp className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Évolution des Métriques</h2>
          <p className="text-xl text-muted-foreground">
            Comparaison avant/après en chiffres
          </p>
        </div>

        <div 
          ref={chartsRef}
          className={`grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto transition-all duration-700 delay-200 ${
            chartsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Bar Chart */}
          <Card className="p-6 border-2">
            <h3 className="text-xl font-bold mb-6 text-center">Comparaison Avant/Après</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="name" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--background))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Bar dataKey="before" fill="hsl(var(--muted))" name="Avant" radius={[8, 8, 0, 0]} />
                <Bar dataKey="after" fill="hsl(var(--primary))" name="Après" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          {/* Line Chart */}
          <Card className="p-6 border-2">
            <h3 className="text-xl font-bold mb-6 text-center">Tendance de Croissance</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="name" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--background))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="before"
                  stroke="hsl(var(--muted-foreground))"
                  strokeWidth={2}
                  name="Avant"
                  dot={{ fill: "hsl(var(--muted-foreground))", r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="after"
                  stroke="hsl(var(--primary))"
                  strokeWidth={3}
                  name="Après"
                  dot={{ fill: "hsl(var(--primary))", r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Summary Cards */}
        <div 
          ref={summaryRef}
          className={`grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8 transition-all duration-700 delay-300 ${
            summaryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {data.map((item, index) => {
            const growth = ((item.after - item.before) / item.before) * 100;
            return (
              <Card key={index} className="p-6 text-center border-2 hover:border-primary/50 transition-colors">
                <div className="text-sm text-muted-foreground mb-2">{item.name}</div>
                <div className="text-3xl font-bold text-primary mb-2">+{growth.toFixed(0)}%</div>
                <div className="text-xs text-muted-foreground">
                  {item.before} → {item.after}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyCharts;
