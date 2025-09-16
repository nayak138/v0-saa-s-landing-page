import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content:
      "StreamLine has transformed how we manage our projects. The intuitive interface and powerful features have increased our team productivity by 40%.",
    rating: 5,
    avatar: "/professional-woman-ceo.png",
  },
  {
    name: "Michael Chen",
    role: "Operations Manager, GrowthCorp",
    content:
      "The automation features are incredible. What used to take hours now happens automatically. StreamLine has been a game-changer for our operations.",
    rating: 5,
    avatar: "/professional-operations-manager.png",
  },
  {
    name: "Emily Rodriguez",
    role: "Project Director, InnovateLab",
    content:
      "Outstanding customer support and a platform that actually delivers on its promises. Our team collaboration has never been better.",
    rating: 5,
    avatar: "/professional-woman-project-director.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">Trusted by Industry Leaders</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
            See what our customers have to say about their experience with StreamLine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-card-foreground mb-6 leading-relaxed">"{testimonial.content}"</blockquote>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
