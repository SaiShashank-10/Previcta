import { motion } from "framer-motion";
import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter, Plus, Calendar, User, Flag } from "lucide-react";

const allTasks = [
  { id: 1, title: "Website Redesign", assignee: "John Doe", status: "In Progress", priority: "High", dueDate: "2024-01-15", category: "Design" },
  { id: 2, title: "Mobile App Development", assignee: "Jane Smith", status: "Planning", priority: "Medium", dueDate: "2024-02-01", category: "Development" },
  { id: 3, title: "Marketing Campaign", assignee: "Mike Johnson", status: "Review", priority: "High", dueDate: "2024-01-10", category: "Marketing" },
  { id: 4, title: "API Integration", assignee: "Sarah Wilson", status: "In Progress", priority: "Low", dueDate: "2024-02-15", category: "Development" },
  { id: 5, title: "User Testing", assignee: "David Brown", status: "Completed", priority: "Medium", dueDate: "2024-01-05", category: "QA" },
  { id: 6, title: "Database Optimization", assignee: "Lisa Davis", status: "Planning", priority: "High", dueDate: "2024-01-20", category: "Backend" },
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

const AllTasks = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-success text-success-foreground";
      case "In Progress": return "bg-info text-info-foreground";
      case "Review": return "bg-warning text-warning-foreground";
      case "Planning": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "text-error";
      case "Medium": return "text-warning";
      case "Low": return "text-success";
      default: return "text-muted-foreground";
    }
  };

  const filteredTasks = allTasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         task.assignee.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (activeTab === "all") return matchesSearch;
    return matchesSearch && task.status.toLowerCase().replace(" ", "") === activeTab;
  });

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
              <h1 className="text-3xl font-bold text-foreground mb-2">All Tasks</h1>
              <p className="text-muted-foreground">Manage and oversee all project tasks</p>
            </div>
            <Button className="dashboard-gradient hover:opacity-90">
              <Plus className="w-4 h-4 mr-2" />
              New Task
            </Button>
          </div>
        </motion.div>

        {/* Search and Filters */}
        <motion.div variants={itemVariants} className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search tasks or assignees..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </motion.div>

        {/* Task Tabs */}
        <motion.div variants={itemVariants}>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="inprogress">In Progress</TabsTrigger>
              <TabsTrigger value="review">Review</TabsTrigger>
              <TabsTrigger value="planning">Planning</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>
            
            <TabsContent value={activeTab} className="mt-6">
              <Card className="card-shadow">
                <CardHeader>
                  <CardTitle>
                    {activeTab === "all" ? "All Tasks" : `${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Tasks`}
                    <Badge variant="secondary" className="ml-2">
                      {filteredTasks.length}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.div
                    variants={containerVariants}
                    className="space-y-3"
                  >
                    {filteredTasks.map((task, index) => (
                      <motion.div
                        key={task.id}
                        variants={itemVariants}
                        whileHover={{ scale: 1.01 }}
                        className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-all cursor-pointer"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-semibold text-foreground">{task.title}</h3>
                              <Badge className={getStatusColor(task.status)}>
                                {task.status}
                              </Badge>
                              <Flag className={`w-4 h-4 ${getPriorityColor(task.priority)}`} />
                            </div>
                            
                            <div className="flex items-center gap-6 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <User className="w-4 h-4" />
                                <span>{task.assignee}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <span>{task.dueDate}</span>
                              </div>
                              <Badge variant="outline" className="text-xs">
                                {task.category}
                              </Badge>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm">
                              Edit
                            </Button>
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </motion.div>
    </DashboardLayout>
  );
};

export default AllTasks;