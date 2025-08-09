import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, TrendingUp, Brain, Search, Star } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Cinema Ticket Sales Prediction",
      description: "Advanced regression modeling to predict movie ticket sales with 87% accuracy. Implemented multiple ML algorithms and feature engineering techniques to analyze box office performance patterns.",
      icon: TrendingUp,
      metrics: ["87% R² Score", "Multiple Models", "Feature Engineering"],
      technologies: ["Python", "Scikit-Learn", "Pandas", "Matplotlib"],
      github: "https://github.com/arcticOS2/Cinema-Ticket-Sale-Prediction-using-Linear-Regression",
      featured: true
    },
    {
      title: "Amazon Stock Price Forecasting",
      description: "Time-series analysis using AR, MA, ARMA, ARIMA, and ARIMAX models to forecast Amazon stock prices. Incorporated external economic indicators for improved prediction accuracy.",
      icon: TrendingUp,
      metrics: ["AR/MA/ARMA/ARIMA/ARIMAX", "Time Series", "Economic Indicators"],
      technologies: ["R", "Time Series", "Statistical Modeling", "Financial Data"],
      github: "https://github.com/arcticOS2/Time-Series-Project-Forecasting-Amazon-Stock-Prices",
      featured: true
    },
    {
      title: "Google Play Store Apps Analysis",
      description: "Comprehensive analysis of 10,000+ apps using R Shiny dashboard. Provided actionable insights leading to 60% UX improvement recommendations for app developers.",
      icon: Search,
      metrics: ["10,000+ Apps", "R Shiny Dashboard", "60% UX Improvement"],
      technologies: ["R", "Shiny", "ggplot2", "Data Mining"],
      github: "https://github.com/dootika/mth-208-course-project-group-16",
      featured: false
    },
    {
      title: "Movie Verdict Detector",
      description: "API-powered movie review classification system with 92% accuracy. Built comprehensive Power BI dashboard for real-time movie sentiment tracking and analysis.",
      icon: Brain,
      metrics: ["92% Accuracy", "API Integration", "Power BI Dashboard"],
      technologies: ["Python", "API Integration", "Power BI", "Machine Learning"],
      github: "https://github.com/arcticOS2/Classification-Project-Movie-Verdict-Detector",
      featured: false
    },
    {
      title: "Car Price Prediction using MLR",
      description: "Multiple Linear Regression model to predict car prices with high accuracy. Comprehensive analysis using statistical methods and validation techniques.",
      icon: TrendingUp,
      metrics: ["80.43% R² Score", "Multiple Linear Regression", "Statistical Analysis"],
      technologies: ["R", "Minitab", "MS Word/Excel", "Statistical Modeling"],
      github: "https://github.com/arcticOS2/Prediction-of-Car-Price-Using-Multiple-Linear-Regression",
      featured: false
    },
    {
      title: "Credit Card Fraud Detection",
      description: "Machine learning-based fraud detection system achieving exceptional performance. Implemented various ML algorithms with comprehensive evaluation metrics.",
      icon: Brain,
      metrics: ["98% AUC Score", "Fraud Detection", "ML Classification"],
      technologies: ["R", "R Studio", "R Markdown", "HTML", "Machine Learning"],
      github: "https://github.com/arcticOS2/Credit-Card-Fraud-Detection-Using-ML",
      featured: false
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-4">
            Featured <span className="text-batman-gold">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of data science projects demonstrating expertise in machine learning, 
            statistical analysis, and real-world problem solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={index} 
                className={`bg-gradient-card border-gotham-gray hover:border-batman-gold/50 transition-all duration-300 hover:shadow-batman group ${
                  project.featured ? 'lg:col-span-1 border-batman-gold/30' : ''
                }`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-batman-gold/10 rounded-lg group-hover:bg-batman-gold/20 transition-colors">
                        <IconComponent className="w-6 h-6 text-batman-gold" />
                      </div>
                      <div>
                        <h3 className="text-xl font-montserrat font-bold text-foreground group-hover:text-batman-gold transition-colors">
                          {project.title}
                        </h3>
                        {project.featured && (
                          <div className="flex items-center gap-1 mt-1">
                            <Star className="w-4 h-4 text-batman-gold fill-current" />
                            <span className="text-sm text-batman-gold font-medium">Featured</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Metrics */}
                  <div>
                    <h4 className="text-sm font-montserrat font-semibold text-batman-gold mb-3">Key Achievements</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.metrics.map((metric, metricIndex) => (
                        <Badge 
                          key={metricIndex} 
                          className="bg-batman-gold/10 text-batman-gold border-batman-gold/30 text-xs"
                        >
                          {metric}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-montserrat font-semibold text-foreground mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline"
                          className="border-gotham-gray text-muted-foreground hover:border-batman-gold hover:text-batman-gold transition-colors text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button 
                      variant="batman" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                    <Button 
                      variant="gotham" 
                      size="sm"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-card border-gotham-gray max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-montserrat font-bold text-foreground mb-4">
                Interested in <span className="text-batman-gold">Collaboration?</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how data science can drive your next big breakthrough
              </p>
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => window.open("https://github.com/arcticOS2", '_blank')}
              >
                <Github className="w-5 h-5 mr-2" />
                Explore More Projects
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;