import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

const activeTasks = [
  {
    name: "Website Design",
    team: ["👩‍💼", "👨‍💻", "👩‍🎨"],
    progress: 85,
    status: "High",
    statusColor: "bg-error"
  },
  {
    name: "Graphic Design", 
    team: ["👨‍💼"],
    progress: 60,
    status: "Medium",
    statusColor: "bg-primary"
  },
  {
    name: "UI/UX Design",
    team: ["👩‍💼", "👨‍💻", "👩‍🎨"],
    progress: 75,
    status: "Medium", 
    statusColor: "bg-info"
  },
  {
    name: "Brand Identity",
    team: ["👨‍💼", "👩‍🎨"],
    progress: 50,
    status: "Low",
    statusColor: "bg-success"
  }
];

const TaskProgress = ({ progress }: { progress: number }) => (
  <div className="w-full bg-muted rounded-full h-2">
    <div 
      className="bg-primary h-2 rounded-full transition-all duration-300"
      style={{ width: `${progress}%` }}
    ></div>
  </div>
);

export const ActiveTasks = () => {
  return (
    <div className="space-y-6">
      {/* Task completion status */}
      <div className="bg-card rounded-2xl p-6 card-shadow">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-foreground">All Task by completion status</h3>
          <Button variant="ghost" size="sm">
            Filter
          </Button>
        </div>
        
        <div className="text-center mb-6">
          <div className="text-sm text-muted-foreground mb-2">121 / 143</div>
          <div className="text-xs text-muted-foreground">Tasks completed</div>
        </div>
        
        {/* Circular progress */}
        <div className="flex justify-center mb-4">
          <div className="relative w-32 h-32">
            <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeDasharray="100, 100"
                className="text-muted opacity-30"
              />
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeDasharray="85, 100"
                className="text-success"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl">📊</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Active Tasks List */}
      <div className="bg-card rounded-2xl p-6 card-shadow">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-foreground">Active Tasks</h3>
          <span className="text-sm text-muted-foreground">Today</span>
        </div>
        
        <div className="space-y-4">
          {activeTasks.map((task, index) => (
            <div key={index} className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-foreground">{task.name}</h4>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
                
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex -space-x-2">
                    {task.team.map((member, memberIndex) => (
                      <div 
                        key={memberIndex}
                        className="w-6 h-6 rounded-full bg-muted border-2 border-card flex items-center justify-center text-xs"
                      >
                        {member}
                      </div>
                    ))}
                  </div>
                  
                  <span className={`text-xs px-2 py-1 rounded-full text-white ${task.statusColor}`}>
                    {task.status}
                  </span>
                </div>
                
                <div className="flex items-center gap-3">
                  <TaskProgress progress={task.progress} />
                  <span className="text-sm text-muted-foreground min-w-[3rem]">
                    {task.progress}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};