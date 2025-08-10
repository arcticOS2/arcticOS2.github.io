import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, ExternalLink } from "lucide-react";

const CV = () => {
  const handleDownloadCV = () => {
    window.open("https://drive.google.com/file/d/1bbsXuoUuxndO__7V7hBQCTp3AflTxkd5/view?usp=drive_link", '_blank');
  };

  const handleViewCV = () => {
    window.open("https://drive.google.com/file/d/1bbsXuoUuxndO__7V7hBQCTp3AflTxkd5/view?usp=drive_link", '_blank');
  };

  return (
    <section id="cv" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-4">
            My <span className="text-batman-gold">Resume</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Download or view my complete curriculum vitae to learn more about my educational background, 
            skills, and professional experience.
          </p>
        </div>

        <Card className="bg-gradient-card border-gotham-gray max-w-2xl mx-auto">
          <CardHeader className="text-center pb-6">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-batman-gold/10 rounded-full">
                <FileText className="w-12 h-12 text-batman-gold" />
              </div>
            </div>
            <h3 className="text-2xl font-montserrat font-bold text-foreground">
              Curriculum Vitae
            </h3>
            <p className="text-muted-foreground">
              Complete overview of my academic and professional journey
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="bg-gotham-black/30 rounded-lg p-6 border border-gotham-gray">
              <h4 className="text-lg font-montserrat font-semibold text-foreground mb-3">
                What's Included:
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-batman-gold rounded-full"></div>
                  Educational background and achievements
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-batman-gold rounded-full"></div>
                  Technical skills and programming languages
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-batman-gold rounded-full"></div>
                  Project portfolio and research experience
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-batman-gold rounded-full"></div>
                  Certifications and accomplishments
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="flex-1"
                onClick={handleViewCV}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                View Online
              </Button>
              <Button 
                variant="batman" 
                size="lg" 
                className="flex-1"
                onClick={handleDownloadCV}
              >
                <Download className="w-5 h-5 mr-2" />
                Download PDF
              </Button>
            </div>

            <p className="text-sm text-muted-foreground text-center">
              Last updated: January 2025
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CV;
