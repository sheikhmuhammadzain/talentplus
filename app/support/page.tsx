import { MessageCircle, Mail, Phone, Clock, Search, FileText, Users, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { PageLayout } from "@/components/layout/page-layout"
import Link from "next/link"

export default function SupportPage() {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "24/7",
      action: "Start Chat",
      primary: true,
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message",
      availability: "Response within 24h",
      action: "Send Email",
      primary: false,
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our team",
      availability: "Mon-Fri 9AM-6PM EST",
      action: "Call Now",
      primary: false,
    },
  ]

  const faqCategories = [
    {
      icon: Users,
      title: "Account & Profile",
      count: 12,
      questions: [
        "How do I create an account?",
        "How to update my profile information?",
        "Can I delete my account?",
        "How to change my password?",
      ],
    },
    {
      icon: Search,
      title: "Job Search",
      count: 18,
      questions: [
        "How do job alerts work?",
        "Can I save job listings?",
        "How to apply for jobs?",
        "What are the search filters?",
      ],
    },
    {
      icon: Zap,
      title: "Deals & Offers",
      count: 8,
      questions: [
        "How do I find the best deals?",
        "Are the prices accurate?",
        "How do affiliate links work?",
        "Can I get price alerts?",
      ],
    },
    {
      icon: FileText,
      title: "Billing & Plans",
      count: 15,
      questions: [
        "How to upgrade my plan?",
        "What payment methods are accepted?",
        "Can I get a refund?",
        "How to download invoices?",
      ],
    },
  ]

  return (
    <PageLayout containerClassName="">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">How Can We Help You ?</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get the support you need, when you need it. Our team is here to help you succeed.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Input
              type="search"
              placeholder="Search for help articles, guides, and FAQs..."
              className="pl-12 h-12 text-lg"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Button className="absolute right-2 top-2 h-8">Search</Button>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => (
              <Card key={index} className={`text-center ${method.primary ? "border-primary shadow-lg" : ""}`}>
                <CardHeader>
                  <method.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center mb-4">
                    <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{method.availability}</span>
                  </div>
                  <Button className="w-full" variant={method.primary ? "default" : "outline"}>
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {faqCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <category.icon className="h-6 w-6 mr-3 text-primary" />
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                    </div>
                    <Badge variant="secondary">{category.count} articles</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.questions.map((question, qIndex) => (
                      <li key={qIndex}>
                        <Link
                          href="#"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {question}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" className="mt-4 p-0 h-auto text-primary">
                    View all articles →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-muted-foreground">
              Can't find what you're looking for? Send us a message and we'll get back to you within 24 hours.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Contact Form</CardTitle>
              <CardDescription>
                Fill out the form below and our support team will get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">First Name</label>
                  <Input placeholder="Enter your first name" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Last Name</label>
                  <Input placeholder="Enter your last name" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input type="email" placeholder="Enter your email address" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Subject</label>
                <Input placeholder="What's this about?" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea placeholder="Describe your issue or question in detail..." rows={6} />
              </div>
              <Button className="w-full">Send Message</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Status Page */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">System Status</h2>
          <p className="text-muted-foreground mb-6">
            Check the current status of our services and any ongoing maintenance.
          </p>
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium">All systems operational</span>
          </div>
          <Link href="#">
            <Button variant="outline">View Status Page</Button>
          </Link>
        </div>
      </section>
    </PageLayout>
  )
}
