import { Code, Layout, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: <Layout className="h-8 w-8" />,
    title: "Modern UI Components",
    description: "Beautiful, responsive components built with Tailwind CSS and shadcn/ui."
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "Next.js 13",
    description: "Built on the latest version of Next.js with App Router and Server Components."
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Type Safety",
    description: "Full TypeScript support for a robust development experience."
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="mb-4 text-primary">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}