import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import SEO from "@/components/SEO";
import { useContactFormDialog } from "@/contexts/ContactFormDialogContext";

const Blog = () => {
  const { openContactDialog } = useContactFormDialog();

  return (
    <>
      <SEO
        title="Blog | LumiPath Education Solutions - Education & Career Insights"
        description="Expert insights on college admissions, career counselling, NEET preparation, engineering courses, and education guidance in India. Stay updated with LumiPath."
        keywords="education blog, college admission tips, career counselling, NEET preparation, engineering colleges India"
        canonicalUrl="https://www.lumipath.in/blog"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Education & Career Insights
            </h1>
            <p className="text-lg text-muted-foreground">
              Expert guidance, tips, and latest updates on college admissions, 
              career counselling, and educational opportunities in India.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
                <Link to={`/blog/${post.slug}`}>
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Link>
                <CardHeader className="pb-3">
                  <Badge variant="secondary" className="w-fit mb-2">
                    {post.category}
                  </Badge>
                  <Link to={`/blog/${post.slug}`}>
                    <h2 className="text-xl font-semibold text-foreground hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                  </Link>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                </CardContent>
                <CardFooter className="pt-0">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Need Personalized Guidance?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our expert counsellors are here to help you navigate your educational journey.
          </p>
          <button
            onClick={openContactDialog}
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Get Free Consultation
          </button>
        </div>
      </section>
    </>
  );
};

export default Blog;
