import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Clock, Star, Users, Calendar } from "lucide-react";

const myTasks = [
  {
    id: 1,
    title: "Website Redesign",
    description: "Complete redesign of the company website with modern UI/UX",
    progress: 75,
    priority: "High",
    dueDate: "2024-01-15",
    team: 4,
    status: "In Progress"
  },
  {
    id: 2,
    title: "Mobile App Development", 
    description: "Develop cross-platform mobile application",
    progress: 45,
    priority: "Medium",
    dueDate: "2024-02-01",
    team: 6,
    status: "In Progress"
  },
  {
    id: 3,
    title: "Marketing Campaign",
    description: "Launch Q1 marketing campaign across all channels",
    progress: 90,
    priority: "High",
    dueDate: "2024-01-10",
    team: 3,
    status: "Review"
  },
  {
    id: 4,
    title: "API Integration",
    description: "Integrate third-party APIs for enhanced functionality",
    progress: 30,
    priority: "Low",
    dueDate: "2024-02-15",
    team: 2,
    status: "Planning"
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

const MyWork = () => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "bg-error text-error-foreground";
      case "Medium": return "bg-warning text-warning-foreground";
      case "Low": return "bg-success text-success-foreground";
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
          <h1 className="text-3xl font-bold text-foreground mb-2">My Work</h1>
          <p className="text-muted-foreground">Manage and track your assigned tasks</p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="card-shadow hover:card-shadow-hover transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Active Tasks</p>
                  <p className="text-2xl font-bold text-foreground">12</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-shadow hover:card-shadow-hover transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-success/10 rounded-lg">
                  <Star className="w-6 h-6 text-success" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Completed</p>
                  <p className="text-2xl font-bold text-foreground">28</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-shadow hover:card-shadow-hover transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Team Projects</p>
                  <p className="text-2xl font-bold text-foreground">6</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-shadow hover:card-shadow-hover transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-warning/10 rounded-lg">
                  <Calendar className="w-6 h-6 text-warning" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Due Today</p>
                  <p className="text-2xl font-bold text-foreground">3</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Tasks List */}
        <motion.div variants={itemVariants}>
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle>Current Tasks</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {myTasks.map((task, index) => (
                <motion.div
                  key={task.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">{task.title}</h3>
                      <p className="text-sm text-muted-foreground">{task.description}</p>
                    </div>
                    <Badge className={getPriorityColor(task.priority)}>
                      {task.priority}
                    </Badge>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-muted-foreground">Progress</span>
                        <span className="text-sm font-medium">{task.progress}%</span>
                      </div>
                      <Progress value={task.progress} className="h-2" />
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4 text-muted-foreground" />
                          <span className="text-muted-foreground">{task.team} members</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span className="text-muted-foreground">{task.dueDate}</span>
                        </div>
                      </div>
                      <Badge variant="outline">{task.status}</Badge>
                    </div>
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </DashboardLayout>
  );
};

export default MyWork;