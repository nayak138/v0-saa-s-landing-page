import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-secondary-foreground/80 text-pretty mb-8 leading-relaxed">
            Join thousands of businesses that have already streamlined their operations with our platform. Start your
            free trial today and see the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10 px-8 bg-transparent"
            >
              Schedule a Demo
            </Button>
          </div>
          <p className="text-sm text-secondary-foreground/60 mt-6">
            No credit card required • Setup in minutes • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}
