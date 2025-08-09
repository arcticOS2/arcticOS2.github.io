import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Brain, BarChart3, Laptop, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Python", "R", "SQL", "C", "LaTeX", "HTML"],
      color: "text-batman-gold"
    },
    {
      icon: Database,
      title: "Tools & Libraries",
      skills: ["TensorFlow", "Scikit-Learn", "Power BI", "BeautifulSoup", "Git", "GitHub"],
      color: "text-batman-gold"
    },
    {
      icon: Brain,
      title: "Machine Learning",
      skills: ["Deep Learning", "NLP", "Computer Vision", "Time Series", "Regression", "Classification"],
      color: "text-batman-gold"
    },
    {
      icon: BarChart3,
      title: "Data Science",
      skills: ["Statistical Analysis", "Data Visualization", "Predictive Modeling", "A/B Testing", "Feature Engineering", "Model Deployment"],
      color: "text-batman-gold"
    },
    {
      icon: Laptop,
      title: "Development",
      skills: ["Jupyter Notebooks", "R Shiny", "Dashboard Creation", "API Integration", "Web Scraping", "Version Control"],
      color: "text-batman-gold"
    },
    {
      icon: Globe,
      title: "Domains",
      skills: ["Finance", "E-commerce", "Entertainment", "Sports Analytics", "Market Research", "Statistical Modeling"],
      color: "text-batman-gold"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gotham-dark">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-4">
            Skills & <span className="text-batman-gold">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for turning raw data into actionable insights and building 
            intelligent solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="bg-gradient-card border-gotham-gray hover:border-batman-gold/50 transition-all duration-300 hover:shadow-batman group"
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-batman-gold/10 rounded-lg group-hover:bg-batman-gold/20 transition-colors">
                      <IconComponent className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <h3 className="text-xl font-montserrat font-bold text-foreground group-hover:text-batman-gold transition-colors">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="outline" 
                        className="border-gotham-gray text-muted-foreground hover:border-batman-gold hover:text-batman-gold transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Interests Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-card border-gotham-gray max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-montserrat font-bold text-foreground mb-4">
                Areas of <span className="text-batman-gold">Interest</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Passionate about exploring the cutting edge of data science and artificial intelligence
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {["Machine Learning", "Deep Learning", "Natural Language Processing", "Computer Vision", "Statistical Modeling", "Data Visualization", "Predictive Analytics", "Time Series Analysis"].map((interest, index) => (
                  <Badge 
                    key={index} 
                    className="bg-batman-gold/10 text-batman-gold border-batman-gold/30 hover:bg-batman-gold hover:text-gotham-black transition-colors cursor-default text-sm py-2 px-4"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;