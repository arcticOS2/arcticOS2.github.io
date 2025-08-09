import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Trophy, Target } from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "M.Sc. Statistics",
      institution: "IIT Kanpur",
      year: "2024 – Present",
      achievement: "Pursuing advanced studies in statistical methods and machine learning"
    },
    {
      degree: "B.Sc. (Hons.) Statistics",
      institution: "St. Xavier's College, Kolkata",
      year: "2023",
      achievement: "Graduated with distinction"
    },
    {
      degree: "12th Grade",
      institution: "Ramakrishna Mission Vidyapeeth, Purulia",
      year: "2020",
      achievement: "Top 1% in state board examinations"
    },
    {
      degree: "10th Grade",
      institution: "Marokhana High School",
      year: "2018",
      achievement: "School topper with 93% marks"
    }
  ];

  const achievements = [
    "IIT JAM 2024 - All India Rank 30",
    "Top 1% in state board examinations",
    "Multiple academic excellence awards",
    "Frequent contributor to data science community",
    "Active movie critic"
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-4">
            About <span className="text-batman-gold">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A passionate data scientist and statistician with a deep love for machine learning, 
            movies, and transforming complex data into meaningful insights.
          </p>
          <p className="text-batman-gold font-inter italic mt-4">
            "Data scientist by day, cinema enthusiast by night"
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Bio Section */}
          <div className="space-y-6 order-2 lg:order-1">
            <Card className="bg-gradient-card border-gotham-gray">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-6 h-6 text-batman-gold" />
                  <h3 className="text-2xl font-montserrat font-bold text-foreground">My Journey</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Currently pursuing M.Sc. Statistics at IIT Kanpur, I'm deeply passionate about 
                  the intersection of statistics, machine learning, and real-world problem solving. 
                  My journey began with a fascination for numbers and patterns, which evolved into 
                  a career focused on extracting actionable insights from complex datasets.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Beyond academics, I'm a movie enthusiast who enjoys analyzing storytelling patterns 
                  and narrative structures - skills that surprisingly translate well to data analysis 
                  and presentation.
                </p>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="bg-gradient-card border-gotham-gray">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Trophy className="w-6 h-6 text-batman-gold" />
                  <h3 className="text-2xl font-montserrat font-bold text-foreground">Key Achievements</h3>
                </div>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-batman-gold rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">{achievement}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-batman-gold shadow-glow-gold">
                <img 
                  src="/lovable-uploads/9b168380-4115-49d0-91c9-32109dab3bb8.png" 
                  alt="Arpan Samanta Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-card border border-batman-gold rounded-lg px-6 py-2">
                <p className="text-batman-gold font-montserrat font-semibold text-sm">Arpan Samanta</p>
              </div>
            </div>
          </div>
        </div>

        {/* Education Timeline - moved below */}
        <div className="mb-16">
          <div>
            <Card className="bg-gradient-card border-gotham-gray">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-8">
                  <GraduationCap className="w-6 h-6 text-batman-gold" />
                  <h3 className="text-2xl font-montserrat font-bold text-foreground">Education</h3>
                </div>
                
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="relative pl-6 border-l-2 border-batman-gold/30 last:border-l-0">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-batman-gold rounded-full"></div>
                      <div className="pb-6">
                        <Badge variant="outline" className="mb-2 border-batman-gold text-batman-gold">
                          {edu.year}
                        </Badge>
                        <h4 className="text-lg font-montserrat font-semibold text-foreground mb-1">
                          {edu.degree}
                        </h4>
                        <p className="text-batman-gold font-medium mb-2">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground">{edu.achievement}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
