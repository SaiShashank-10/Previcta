import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/DashboardLayout";
import { WelcomeCard } from "@/components/WelcomeCard";
import { EarningsCard } from "@/components/EarningsCard";
import { TaskStats } from "@/components/TaskStats";
import { ActiveTasks } from "@/components/ActiveTasks";
import { AnimatedScene } from "@/components/3D/AnimatedScene";
import { Suspense } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const Dashboard = () => {
  return (
    <DashboardLayout>
      <motion.div
        variants={containerVariants}
        initial="hidden" 
        animate="visible"
        className="space-y-6"
      >
        {/* Animated 3D Header */}
        <motion.div variants={itemVariants} className="mb-8">
          <Suspense fallback={<div className="h-64 bg-muted/30 rounded-xl animate-pulse" />}>
            <AnimatedScene />
          </Suspense>
        </motion.div>

        {/* Top Cards with Enhanced Animations */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div 
            className="lg:col-span-2"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <WelcomeCard />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02, rotateY: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <EarningsCard />
          </motion.div>
        </motion.div>
        
        {/* Main Content with Staggered Animation */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <motion.div 
            className="xl:col-span-2"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <TaskStats />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.01, x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ActiveTasks />
          </motion.div>
        </motion.div>
      </motion.div>
    </DashboardLayout>
  );
};

export default Dashboard;