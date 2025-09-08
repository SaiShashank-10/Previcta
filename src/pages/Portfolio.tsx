import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink, Github, Star, Eye } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    status: "Completed",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    date: "Dec 2023",
    stars: 124,
    views: 2400
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
    status: "In Progress",
    tech: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
    date: "Jan 2024",
    stars: 89,
    views: 1800
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Modern weather application with interactive charts and forecasts",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop",
    status: "Completed",
    tech: ["React", "Chart.js", "OpenWeather API"],
    date: "Nov 2023",
    stars: 67,
    views: 1200
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description: "Analytics dashboard for social media performance tracking",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    status: "Planning",
    tech: ["Angular", "D3.js", "Python", "Firebase"],
    date: "Feb 2024",
    stars: 45,
    views: 890
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

const Portfolio = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-success text-success-foreground";
      case "In Progress": return "bg-info text-info-foreground";
      case "Planning": return "bg-warning text-warning-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <DashboardLayout>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        <motion.div variants={itemVariants}>
          <h1 className="text-3xl font-bold text-foreground mb-2">Portfolio</h1>
          <p className="text-muted-foreground">Showcase of completed and ongoing projects</p>
        </motion.div>

        {/* Portfolio Stats */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="card-shadow hover:card-shadow-hover transition-shadow">
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary mb-2">24</h3>
                <p className="text-sm text-muted-foreground">Total Projects</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-shadow hover:card-shadow-hover transition-shadow">
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-success mb-2">18</h3>
                <p className="text-sm text-muted-foreground">Completed</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-shadow hover:card-shadow-hover transition-shadow">
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-accent mb-2">325</h3>
                <p className="text-sm text-muted-foreground">Total Stars</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="card-shadow hover:card-shadow-hover transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <Badge 
                    className={`absolute top-4 right-4 ${getStatusColor(project.status)}`}
                  >
                    {project.status}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{project.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          <span>{project.stars}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>{project.views}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </DashboardLayout>
  );
};

export default Portfolio;