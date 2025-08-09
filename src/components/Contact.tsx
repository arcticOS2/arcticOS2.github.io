import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Github, Linkedin, Send, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "Portfolio Contact",
          message: formData.message,
          to: "samantaa22j@gmail.com"
        }),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      // Fallback to mailto
      const subject = encodeURIComponent(formData.subject || "Portfolio Contact");
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      
      window.location.href = `mailto:samantaa22j@gmail.com?subject=${subject}&body=${body}`;
      
      toast({
        title: "Email client opened",
        description: "Your default email client has been opened with the message.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "arpans24@iitk.ac.in",
      link: "mailto:arpans24@iitk.ac.in"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-7076648870",
      link: "tel:+917076648870"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/arcticOS2",
      link: "https://github.com/arcticOS2"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/arcticos",
      link: "https://linkedin.com/in/arcticos"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gotham-dark">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-4">
            Get In <span className="text-batman-gold">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on your next data science project? Let's discuss how we can 
            turn your data challenges into actionable insights.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gradient-card border-gotham-gray">
            <CardHeader>
              <h3 className="text-2xl font-montserrat font-bold text-foreground">
                Send a Message
              </h3>
              <p className="text-muted-foreground">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-gotham-black border-gotham-gray focus:border-batman-gold text-foreground"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-gotham-black border-gotham-gray focus:border-batman-gold text-foreground"
                    />
                  </div>
                </div>
                
                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-gotham-black border-gotham-gray focus:border-batman-gold text-foreground"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="bg-gotham-black border-gotham-gray focus:border-batman-gold text-foreground resize-none"
                  />
                </div>
                
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="bg-gradient-card border-gotham-gray">
              <CardHeader>
                <h3 className="text-2xl font-montserrat font-bold text-foreground">
                  Contact Information
                </h3>
                <p className="text-muted-foreground">
                  Reach out through any of these channels
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <div key={index} className="flex items-center gap-4 group">
                      <div className="p-3 bg-batman-gold/10 rounded-lg group-hover:bg-batman-gold/20 transition-colors">
                        <IconComponent className="w-5 h-5 text-batman-gold" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{contact.label}</p>
                        <a 
                          href={contact.link}
                          target={contact.link.startsWith('http') ? '_blank' : undefined}
                          rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-foreground hover:text-batman-gold transition-colors font-medium"
                        >
                          {contact.value}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="bg-gradient-card border-gotham-gray">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-batman-gold/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-batman-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-montserrat font-semibold text-foreground">Location</h4>
                    <p className="text-muted-foreground">IIT Kanpur, Uttar Pradesh, India</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Currently based in Kanpur while pursuing M.Sc. Statistics. 
                  Open to remote collaborations and relocation opportunities.
                </p>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="bg-gradient-card border-gotham-gray">
              <CardContent className="p-8">
                <h4 className="text-lg font-montserrat font-semibold text-foreground mb-6">
                  Quick Links
                </h4>
                <div className="flex gap-4">
                  <Button 
                    variant="batman" 
                    size="sm"
                    onClick={() => window.open("https://github.com/arcticOS2", '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                  <Button 
                    variant="gotham" 
                    size="sm"
                    onClick={() => window.open("https://linkedin.com/in/arcticos", '_blank')}
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;