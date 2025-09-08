import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, Download, Filter, BarChart3, PieChart, Activity } from "lucide-react";

const reportData = {
  productivity: [
    { month: "Jan", value: 85, change: "+5%" },
    { month: "Feb", value: 92, change: "+8%" },
    { month: "Mar", value: 78, change: "-15%" },
    { month: "Apr", value: 89, change: "+14%" },
    { month: "May", value: 95, change: "+7%" },
    { month: "Jun", value: 88, change: "-7%" }
  ],
  teamPerformance: [
    { name: "Design Team", completed: 28, total: 32, efficiency: 87.5 },
    { name: "Development", completed: 45, total: 50, efficiency: 90.0 },
    { name: "Marketing", completed: 22, total: 25, efficiency: 88.0 },
    { name: "QA Team", completed: 18, total: 20, efficiency: 90.0 }
  ],
  projectStatus: [
    { status: "Completed", count: 12, percentage: 40 },
    { status: "In Progress", count: 15, percentage: 50 },
    { status: "Planning", count: 3, percentage: 10 }
  ]
};

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

const Reports = () => {
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
              <h1 className="text-3xl font-bold text-foreground mb-2">Reports & Analytics</h1>
              <p className="text-muted-foreground">Comprehensive insights into team and project performance</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Button className="dashboard-gradient hover:opacity-90">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Key Metrics */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="card-shadow hover:card-shadow-hover transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Revenue</p>
                  <p className="text-2xl font-bold text-foreground">$45,231</p>
                  <div className="flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3 text-success" />
                    <span className="text-xs text-success">+12%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-shadow hover:card-shadow-hover transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-success/10 rounded-lg">
                  <Activity className="w-6 h-6 text-success" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Productivity</p>
                  <p className="text-2xl font-bold text-foreground">88%</p>
                  <div className="flex items-center gap-1 mt-1">
                    <TrendingDown className="w-3 h-3 text-error" />
                    <span className="text-xs text-error">-3%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-shadow hover:card-shadow-hover transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <PieChart className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Projects</p>
                  <p className="text-2xl font-bold text-foreground">30</p>
                  <div className="flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3 text-success" />
                    <span className="text-xs text-success">+5</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-shadow hover:card-shadow-hover transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-info/10 rounded-lg">
                  <Activity className="w-6 h-6 text-info" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Team Members</p>
                  <p className="text-2xl font-bold text-foreground">24</p>
                  <div className="flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3 text-success" />
                    <span className="text-xs text-success">+2</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {/* Productivity Trends */}
          <motion.div variants={itemVariants}>
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle>Productivity Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {reportData.productivity.map((item, index) => (
                    <div key={item.month} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                      <div className="flex items-center gap-3">
                        <div className="font-medium">{item.month}</div>
                        <Progress value={item.value} className="w-32" />
                        <span className="text-sm font-medium">{item.value}%</span>
                      </div>
                      <Badge 
                        variant={item.change.startsWith('+') ? 'default' : 'secondary'}
                        className={item.change.startsWith('+') ? 'bg-success text-success-foreground' : 'bg-error text-error-foreground'}
                      >
                        {item.change}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Team Performance */}
          <motion.div variants={itemVariants}>
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle>Team Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {reportData.teamPerformance.map((team, index) => (
                    <div key={team.name} className="p-4 border border-border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{team.name}</h4>
                        <span className="text-sm text-muted-foreground">
                          {team.efficiency}% efficiency
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Progress value={(team.completed / team.total) * 100} className="flex-1" />
                        <span className="text-sm font-medium">
                          {team.completed}/{team.total}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Project Status Overview */}
        <motion.div variants={itemVariants}>
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle>Project Status Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {reportData.projectStatus.map((status, index) => (
                  <motion.div
                    key={status.status}
                    whileHover={{ scale: 1.02 }}
                    className="text-center p-6 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="text-3xl font-bold text-primary mb-2">{status.count}</div>
                    <div className="text-sm text-muted-foreground mb-3">{status.status}</div>
                    <Progress value={status.percentage} className="w-full" />
                    <div className="text-xs text-muted-foreground mt-2">{status.percentage}% of total</div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </DashboardLayout>
  );
};

export default Reports;