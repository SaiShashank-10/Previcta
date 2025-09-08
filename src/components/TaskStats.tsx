import { TrendingUp, TrendingDown } from "lucide-react";

const statsData = [
  {
    label: "Completed Task",
    value: "2,530",
    change: "+3.5%",
    trend: "up",
    color: "chart-1"
  },
  {
    label: "Incomplete Task", 
    value: "1,241",
    change: "+2.4%",
    trend: "up",
    color: "chart-2"
  },
  {
    label: "Overdue Task",
    value: "2,875", 
    change: "-4.1%",
    trend: "down",
    color: "chart-3"
  },
  {
    label: "Total Task",
    value: "8,576",
    change: "+28.3%", 
    trend: "up",
    color: "chart-4"
  }
];

export const TaskStats = () => {
  return (
    <div className="space-y-6">
      {/* Task by assignee chart */}
      <div className="bg-card rounded-2xl p-6 card-shadow">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-foreground">Task by assignee</h3>
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-info rounded-full"></div>
              <span className="text-muted-foreground">New</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-warning rounded-full"></div>
              <span className="text-muted-foreground">In Progress</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-error rounded-full"></div>
              <span className="text-muted-foreground">Review</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span className="text-muted-foreground">Done</span>
            </div>
          </div>
        </div>
        
        {/* Stacked bar chart */}
        <div className="flex items-end gap-2 h-32 mb-4">
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} className="flex-1 flex flex-col justify-end gap-1">
              <div className="bg-success h-4 rounded-t-sm"></div>
              <div className="bg-error h-6 rounded-sm"></div>
              <div className="bg-warning h-8 rounded-sm"></div>
              <div className="bg-info h-12 rounded-b-sm"></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-4">
        {statsData.map((stat, index) => (
          <div key={index} className="bg-card rounded-xl p-4 card-shadow">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">{stat.label}</span>
              <div className="flex items-center gap-1">
                {stat.trend === "up" ? (
                  <TrendingUp className="w-3 h-3 text-success" />
                ) : (
                  <TrendingDown className="w-3 h-3 text-error" />
                )}
                <span className={`text-xs font-medium ${
                  stat.trend === "up" ? "text-success" : "text-error"
                }`}>
                  {stat.change}
                </span>
              </div>
            </div>
            <div className="text-2xl font-bold text-foreground">{stat.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};