import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Plus, Mail, Phone, MapPin, Calendar, Award, TrendingUp } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "Frontend Developer",
    email: "john@managex.com",
    phone: "+1 (555) 123-4567",
    location: "New York, US",
    avatar: "https://github.com/shadcn.png",
    status: "active",
    projects: 8,
    completedTasks: 45,
    productivity: 92,
    joinDate: "2023-06-15",
    skills: ["React", "TypeScript", "UI/UX"]
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Backend Developer",
    email: "jane@managex.com", 
    phone: "+1 (555) 234-5678",
    location: "San Francisco, US",
    avatar: "https://github.com/shadcn.png",
    status: "active",
    projects: 12,
    completedTasks: 67,
    productivity: 88,
    joinDate: "2023-04-20",
    skills: ["Node.js", "Python", "AWS"]
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "UI/UX Designer",
    email: "mike@managex.com",
    phone: "+1 (555) 345-6789",
    location: "Los Angeles, US",
    avatar: "https://github.com/shadcn.png",
    status: "active",
    projects: 6,
    completedTasks: 32,
    productivity: 95,
    joinDate: "2023-08-10",
    skills: ["Figma", "Adobe XD", "Prototyping"]
  },
  {
    id: 4,
    name: "Sarah Wilson",
    role: "Project Manager",
    email: "sarah@managex.com",
    phone: "+1 (555) 456-7890", 
    location: "Chicago, US",
    avatar: "https://github.com/shadcn.png",
    status: "away",
    projects: 15,
    completedTasks: 89,
    productivity: 89,
    joinDate: "2023-02-05",
    skills: ["Agile", "Scrum", "Leadership"]
  }
];

const departments = [
  { name: "Engineering", members: 12, color: "bg-primary" },
  { name: "Design", members: 6, color: "bg-accent" },
  { name: "Marketing", members: 8, color: "bg-success" },
  { name: "Operations", members: 4, color: "bg-info" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

const Team = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-success";
      case "away": return "bg-warning";
      case "busy": return "bg-error";
      default: return "bg-muted";
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
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Team</h1>
              <p className="text-muted-foreground">Manage team members and track performance</p>
            </div>
            <Button className="dashboard-gradient hover:opacity-90">
              <Plus className="w-4 h-4 mr-2" />
              Add Member
            </Button>
          </div>
        </motion.div>

        {/* Team Overview */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="card-shadow hover:card-shadow-hover transition-shadow">
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold text-primary mb-1">24</h3>
              <p className="text-sm text-muted-foreground">Total Members</p>
            </CardContent>
          </Card>
          
          <Card className="card-shadow hover:card-shadow-hover transition-shadow">
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold text-success mb-1">18</h3>
              <p className="text-sm text-muted-foreground">Active Today</p>
            </CardContent>
          </Card>
          
          <Card className="card-shadow hover:card-shadow-hover transition-shadow">
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold text-accent mb-1">4</h3>
              <p className="text-sm text-muted-foreground">Departments</p>
            </CardContent>
          </Card>
          
          <Card className="card-shadow hover:card-shadow-hover transition-shadow">
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold text-info mb-1">91%</h3>
              <p className="text-sm text-muted-foreground">Avg Productivity</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Tabs defaultValue="members" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="members">Team Members</TabsTrigger>
              <TabsTrigger value="departments">Departments</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
            </TabsList>

            {/* Team Members */}
            <TabsContent value="members" className="space-y-6">
              <div className="flex gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input placeholder="Search team members..." className="pl-10" />
                </div>
                <Button variant="outline">Filter</Button>
              </div>

              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
              >
                {teamMembers.map((member) => (
                  <motion.div
                    key={member.id}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <Card className="card-shadow hover:card-shadow-hover transition-all">
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          {/* Profile Header */}
                          <div className="flex items-center gap-4">
                            <div className="relative">
                              <Avatar className="w-12 h-12">
                                <AvatarImage src={member.avatar} />
                                <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                              </Avatar>
                              <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-card ${getStatusColor(member.status)}`}></div>
                            </div>
                            <div>
                              <h3 className="font-semibold text-foreground">{member.name}</h3>
                              <p className="text-sm text-muted-foreground">{member.role}</p>
                            </div>
                          </div>

                          {/* Contact Info */}
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Mail className="w-3 h-3" />
                              <span>{member.email}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <MapPin className="w-3 h-3" />
                              <span>{member.location}</span>
                            </div>
                          </div>

                          {/* Stats */}
                          <div className="grid grid-cols-2 gap-4 text-center">
                            <div>
                              <p className="text-lg font-bold text-foreground">{member.projects}</p>
                              <p className="text-xs text-muted-foreground">Projects</p>
                            </div>
                            <div>
                              <p className="text-lg font-bold text-foreground">{member.completedTasks}</p>
                              <p className="text-xs text-muted-foreground">Tasks</p>
                            </div>
                          </div>

                          {/* Productivity */}
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm text-muted-foreground">Productivity</span>
                              <span className="text-sm font-medium">{member.productivity}%</span>
                            </div>
                            <Progress value={member.productivity} className="h-2" />
                          </div>

                          {/* Skills */}
                          <div className="flex flex-wrap gap-1">
                            {member.skills.map((skill) => (
                              <Badge key={skill} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>

                          {/* Actions */}
                          <div className="flex gap-2 pt-2">
                            <Button variant="outline" size="sm" className="flex-1">
                              <Mail className="w-3 h-3 mr-2" />
                              Message
                            </Button>
                            <Button variant="ghost" size="sm">
                              View Profile
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            {/* Departments */}
            <TabsContent value="departments" className="space-y-6">
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {departments.map((dept, index) => (
                  <motion.div key={dept.name} variants={itemVariants}>
                    <Card className="card-shadow hover:card-shadow-hover transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-lg ${dept.color} flex items-center justify-center text-white font-bold text-lg`}>
                            {dept.name[0]}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground">{dept.name}</h3>
                            <p className="text-sm text-muted-foreground">{dept.members} members</p>
                          </div>
                          <Button variant="outline" size="sm">
                            View Team
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            {/* Performance */}
            <TabsContent value="performance" className="space-y-6">
              <Card className="card-shadow">
                <CardHeader>
                  <CardTitle>Team Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {teamMembers.map((member) => (
                      <div key={member.id} className="flex items-center gap-4 p-4 border border-border rounded-lg">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={member.avatar} />
                          <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground">{member.name}</h4>
                          <p className="text-sm text-muted-foreground">{member.role}</p>
                        </div>
                        
                        <div className="flex items-center gap-6">
                          <div className="text-center">
                            <p className="font-bold text-foreground">{member.completedTasks}</p>
                            <p className="text-xs text-muted-foreground">Tasks</p>
                          </div>
                          
                          <div className="w-32">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs text-muted-foreground">Productivity</span>
                              <span className="text-xs font-medium">{member.productivity}%</span>
                            </div>
                            <Progress value={member.productivity} className="h-2" />
                          </div>
                          
                          <div className="flex items-center gap-1">
                            <TrendingUp className="w-4 h-4 text-success" />
                            <span className="text-sm font-medium text-success">+5%</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </motion.div>
    </DashboardLayout>
  );
};

export default Team;