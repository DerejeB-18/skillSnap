import { Zap, Shield, BarChart3, Globe } from "lucide-react"

const features = [
  {
    title: "Instant Integration",
    description: "Connect your GitHub and GitLab accounts in seconds to sync your latest projects.",
    icon: <Zap className="w-6 h-6 text-blue-500" />,
  },
  {
    title: "Skill Verification",
    description: "Our AI analyzes your code quality to provide verified skill badges for your profile.",
    icon: <Shield className="w-6 h-6 text-emerald-500" />,
  },
  {
    title: "Growth Analytics",
    description: "Visualize your learning journey with deep insights into language and framework usage.",
    icon: <BarChart3 className="w-6 h-6 text-purple-500" />,
  },
  {
    title: "Developer Network",
    description: "Connect with thousands of developers and find collaborators for your next big idea.",
    icon: <Globe className="w-6 h-6 text-orange-500" />,
  },
]

export default function Features() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Powerful Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to showcase your professional growth and land your dream job in tech.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl border border-border bg-card/50 hover:bg-card hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 group"
            >
              <div className="mb-4 p-3 rounded-2xl bg-secondary w-fit group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}