import { DashboardLayout } from "@/components/DashboardLayout";
import { WelcomeCard } from "@/components/WelcomeCard";
import { EarningsCard } from "@/components/EarningsCard";
import { TaskStats } from "@/components/TaskStats";
import { ActiveTasks } from "@/components/ActiveTasks";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Top Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <WelcomeCard />
          </div>
          <div>
            <EarningsCard />
          </div>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2">
            <TaskStats />
          </div>
          <div>
            <ActiveTasks />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;