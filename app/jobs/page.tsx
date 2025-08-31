"use client"

import { useState } from "react"
import { PageLayout } from "@/components/layout/page-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Search, MapPin, Briefcase, Clock, Euro, Filter, Heart, Building2, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [location, setLocation] = useState("")
  const [sortBy, setSortBy] = useState("newest")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([])
  const [salaryRange, setSalaryRange] = useState("")

  const categories = ["Technology", "Marketing", "Sales", "Design", "Finance", "Healthcare", "Education", "Engineering"]

  const jobTypes = ["Full-time", "Part-time", "Contract", "Freelance", "Internship"]

  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp GmbH",
      location: "Berlin, Germany",
      salary: "€70,000 - €90,000",
      type: "Full-time",
      category: "Technology",
      description: "We are looking for an experienced Frontend Developer to join our dynamic team...",
      postedDate: "2 days ago",
      featured: true,
      logo: "/abstract-tech-logo.png",
      applicants: 45,
    },
    {
      id: 2,
      title: "Product Manager",
      company: "StartupXYZ",
      location: "Munich, Germany",
      salary: "€60,000 - €80,000",
      type: "Full-time",
      category: "Technology",
      description: "Join our product team and help shape the future of our innovative platform...",
      postedDate: "1 week ago",
      featured: false,
      logo: "/abstract-startup-logo.png",
      applicants: 23,
    },
    {
      id: 3,
      title: "UX Designer",
      company: "DesignStudio",
      location: "Hamburg, Germany",
      salary: "€50,000 - €65,000",
      type: "Full-time",
      category: "Design",
      description: "Create amazing user experiences for our clients' digital products...",
      postedDate: "3 days ago",
      featured: false,
      logo: "/design-studio-logo.png",
      applicants: 67,
    },
    {
      id: 4,
      title: "Marketing Specialist",
      company: "MarketPro",
      location: "Frankfurt, Germany",
      salary: "€45,000 - €55,000",
      type: "Full-time",
      category: "Marketing",
      description: "Drive our marketing campaigns and help us reach new audiences...",
      postedDate: "5 days ago",
      featured: true,
      logo: "/marketing-agency-logo.png",
      applicants: 34,
    },
    {
      id: 5,
      title: "Data Scientist",
      company: "DataTech Solutions",
      location: "Cologne, Germany",
      salary: "€65,000 - €85,000",
      type: "Full-time",
      category: "Technology",
      description: "Analyze complex datasets and provide actionable insights...",
      postedDate: "1 day ago",
      featured: false,
      logo: "/data-company-logo.png",
      applicants: 12,
    },
    {
      id: 6,
      title: "Sales Representative",
      company: "SalesForce Pro",
      location: "Stuttgart, Germany",
      salary: "€40,000 - €60,000",
      type: "Full-time",
      category: "Sales",
      description: "Build relationships with clients and drive revenue growth...",
      postedDate: "4 days ago",
      featured: false,
      logo: "/sales-company-logo.png",
      applicants: 28,
    },
  ]

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category])
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
    }
  }

  const handleJobTypeChange = (jobType: string, checked: boolean) => {
    if (checked) {
      setSelectedJobTypes([...selectedJobTypes, jobType])
    } else {
      setSelectedJobTypes(selectedJobTypes.filter((t) => t !== jobType))
    }
  }

  return (
    <PageLayout>

        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Find Your Dream Job</h1>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Job title, keywords, or company"
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="City, state, or postal code"
                  className="pl-10"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>
            <Button size="lg" className="px-8">
              <Search className="h-4 w-4 mr-2" />
              Search Jobs
            </Button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-80">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Filter className="h-5 w-5 mr-2" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Sort By */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Sort By</label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="oldest">Oldest First</SelectItem>
                      <SelectItem value="salary-high">Salary: High to Low</SelectItem>
                      <SelectItem value="salary-low">Salary: Low to High</SelectItem>
                      <SelectItem value="relevance">Most Relevant</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Separator />

                {/* Categories */}
                <div>
                  <label className="text-sm font-medium mb-3 block">Categories</label>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox
                          id={category}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                        />
                        <label htmlFor={category} className="text-sm cursor-pointer">
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Job Type */}
                <div>
                  <label className="text-sm font-medium mb-3 block">Job Type</label>
                  <div className="space-y-2">
                    {jobTypes.map((jobType) => (
                      <div key={jobType} className="flex items-center space-x-2">
                        <Checkbox
                          id={jobType}
                          checked={selectedJobTypes.includes(jobType)}
                          onCheckedChange={(checked) => handleJobTypeChange(jobType, checked as boolean)}
                        />
                        <label htmlFor={jobType} className="text-sm cursor-pointer">
                          {jobType}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Salary Range */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Salary Range</label>
                  <Select value={salaryRange} onValueChange={setSalaryRange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-30k">€0 - €30,000</SelectItem>
                      <SelectItem value="30k-50k">€30,000 - €50,000</SelectItem>
                      <SelectItem value="50k-70k">€50,000 - €70,000</SelectItem>
                      <SelectItem value="70k-100k">€70,000 - €100,000</SelectItem>
                      <SelectItem value="100k+">€100,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button variant="outline" className="w-full bg-transparent">
                  Clear All Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Job Listings */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                Showing <span className="font-semibold">{jobs.length}</span> jobs
              </p>
              <Button variant="outline" asChild>
                <Link href="/jobs/post">Post a Job</Link>
              </Button>
            </div>

            <div className="space-y-4">
              {jobs.map((job) => (
                <Card key={job.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        <img
                          src={job.logo || "/placeholder.svg"}
                          alt={`${job.company} logo`}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <Link href={`/jobs/${job.id}`}>
                                <h3 className="text-lg font-semibold hover:text-accent transition-colors">
                                  {job.title}
                                </h3>
                              </Link>
                              <p className="text-muted-foreground flex items-center mt-1">
                                <Building2 className="h-4 w-4 mr-1" />
                                {job.company}
                              </p>
                            </div>
                            <Button variant="ghost" size="sm">
                              <Heart className="h-4 w-4" />
                            </Button>
                          </div>

                          <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {job.location}
                            </div>
                            <div className="flex items-center">
                              <Euro className="h-4 w-4 mr-1" />
                              {job.salary}
                            </div>
                            <div className="flex items-center">
                              <Briefcase className="h-4 w-4 mr-1" />
                              {job.type}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {job.postedDate}
                            </div>
                          </div>

                          <p className="text-sm text-muted-foreground mt-3 line-clamp-2">{job.description}</p>

                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center space-x-2">
                              <Badge variant={job.featured ? "default" : "secondary"}>{job.category}</Badge>
                              {job.featured && <Badge className="bg-accent text-accent-foreground">Featured</Badge>}
                            </div>
                            <div className="flex items-center space-x-4">
                              <span className="text-sm text-muted-foreground">{job.applicants} applicants</span>
                              <Button asChild>
                                <Link href={`/jobs/${job.id}`}>View Details</Link>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center space-x-2 mt-8">
              <Button variant="outline" disabled>
                Previous
              </Button>
              <Button variant="outline" className="bg-primary text-primary-foreground">
                1
              </Button>
              <Button variant="outline" className="bg-transparent">
                2
              </Button>
              <Button variant="outline" className="bg-transparent">
                3
              </Button>
              <Button variant="outline" className="bg-transparent">
                Next
              </Button>
            </div>
          </div>
        </div>
    </PageLayout>
  )
}
