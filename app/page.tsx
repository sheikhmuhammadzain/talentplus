import { PageLayout } from "@/components/layout/page-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Briefcase, ShoppingBag, TrendingUp, Users, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const featuredJobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp",
      location: "Berlin, Germany",
      salary: "€70,000 - €90,000",
      type: "Full-time",
      featured: true,
    },
    {
      id: 2,
      title: "Product Manager",
      company: "StartupXYZ",
      location: "Munich, Germany",
      salary: "€60,000 - €80,000",
      type: "Full-time",
      featured: false,
    },
    {
      id: 3,
      title: "UX Designer",
      company: "DesignStudio",
      location: "Hamburg, Germany",
      salary: "€50,000 - €65,000",
      type: "Full-time",
      featured: false,
    },
  ]

  const topDeals = [
    {
      id: 1,
      title: "MacBook Pro M3",
      originalPrice: "€2,499",
      currentPrice: "€2,199",
      discount: "12%",
      store: "TechStore",
      rating: 4.8,
    },
    {
      id: 2,
      title: "iPhone 15 Pro",
      originalPrice: "€1,199",
      currentPrice: "€1,099",
      discount: "8%",
      store: "MobileShop",
      rating: 4.9,
    },
    {
      id: 3,
      title: "Sony WH-1000XM5",
      originalPrice: "€399",
      currentPrice: "€299",
      discount: "25%",
      store: "AudioWorld",
      rating: 4.7,
    },
  ]

  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Interview Tips for 2024",
      excerpt: "Master your next job interview with these proven strategies...",
      category: "Career Tips",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Remote Work Trends in Germany",
      excerpt: "How the job market is adapting to remote work opportunities...",
      category: "Market Insights",
      readTime: "8 min read",
    },
    {
      id: 3,
      title: "Best Tech Deals This Month",
      excerpt: "Don't miss these incredible technology deals and discounts...",
      category: "Deals",
      readTime: "3 min read",
    },
  ]

  return (
    <PageLayout showBackButton={false} containerClassName="">
      <main className=" sm:pt-6">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background to-muted/50 py-10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Find Your Next
              <span className="text-accent"> Opportunity</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover thousands of jobs and compare the best deals all in one place. Your career and savings start
              here.
            </p>

            {/* Hero Search */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Input type="search" placeholder="Search jobs, companies, or deals..." className="h-12 text-lg" />
                </div>
                <Button size="lg" className="h-12 px-8">
                  <Search className="h-5 w-5 mr-2" />
                  Search
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">50K+</div>
                <div className="text-sm text-muted-foreground">Active Jobs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">100K+</div>
                <div className="text-sm text-muted-foreground">Daily Deals</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">25K+</div>
                <div className="text-sm text-muted-foreground">Happy Users</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Jobs Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">Featured Jobs</h2>
                <p className="text-muted-foreground">Hand-picked opportunities from top companies</p>
              </div>
              <Button variant="outline" asChild>
                <Link href="/jobs">
                  View All Jobs
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredJobs.map((job) => (
                <Card key={job.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{job.title}</CardTitle>
                        <CardDescription>{job.company}</CardDescription>
                      </div>
                      {job.featured && <Badge variant="secondary">Featured</Badge>}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Briefcase className="h-4 w-4 mr-2" />
                        {job.location}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-accent">{job.salary}</span>
                        <Badge variant="outline">{job.type}</Badge>
                      </div>
                    </div>
                    <Button className="w-full mt-4 bg-transparent" variant="outline">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Top Deals Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">Top Deals</h2>
                <p className="text-muted-foreground">Best prices from trusted retailers</p>
              </div>
              <Button variant="outline" asChild>
                <Link href="/deals">
                  View All Deals
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topDeals.map((deal) => (
                <Card key={deal.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{deal.title}</CardTitle>
                      <Badge className="bg-accent text-accent-foreground">-{deal.discount}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-accent">{deal.currentPrice}</span>
                        <span className="text-sm text-muted-foreground line-through">{deal.originalPrice}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{deal.store}</span>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                          <span className="text-sm">{deal.rating}</span>
                        </div>
                      </div>
                    </div>
                    <Button className="w-full mt-4" >
                      <ShoppingBag className="h-4 w-4 mr-2" />
                      View Deal
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">Latest Insights</h2>
                <p className="text-muted-foreground">Career tips, market trends, and more</p>
              </div>
              <Button variant="outline" asChild>
                <Link href="/blog">
                  View All Posts
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-lg">{post.title}</CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full bg-transparent">
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of professionals who trust WIRsuchen for their career growth and savings.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Users className="h-5 w-5 mr-2" />
                Find Jobs
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <TrendingUp className="h-5 w-5 mr-2" />
                Browse Deals
              </Button>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  )
}
