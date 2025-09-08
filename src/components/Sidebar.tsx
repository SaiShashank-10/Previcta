import { cn } from "@/lib/utils";
import { 
  Home,
  Briefcase,
  CheckSquare,
  FolderOpen,
  Calendar,
  BarChart3,
  Settings,
  FileText,
  Users,
  Files,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const sidebarItems = [
  { icon: Home, label: "Dashboard", path: "/" },
  { icon: Briefcase, label: "My Work", path: "/my-work" },
  { icon: CheckSquare, label: "All Tasks", path: "/all-tasks" },
  { icon: FolderOpen, label: "Portfolio", path: "/portfolio" },
  { icon: Calendar, label: "Calendar", path: "/calendar" },
  { icon: BarChart3, label: "Reports", path: "/reports" },
  { icon: Settings, label: "Settings", path: "/settings" },
  { icon: FileText, label: "Notes", path: "/notes" },
  { icon: Users, label: "Team", path: "/team" },
  { icon: Files, label: "Files", path: "/files" },
];

interface SidebarProps {
  className?: string;
  isMobileOpen?: boolean;
  onMobileClose?: () => void;
}

export const Sidebar = ({ className, isMobileOpen = false, onMobileClose }: SidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string, label: string) => {
    navigate(path);
    onMobileClose?.();
  };

  return (
    <>
      {/* Mobile overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onMobileClose}
        />
      )}
      
      <div className={cn(
        "w-64 h-screen bg-sidebar-bg border-r border-border sidebar-shadow fixed left-0 top-0 z-50 transform transition-transform duration-300 ease-in-out",
        !isMobileOpen && "-translate-x-full lg:translate-x-0",
        isMobileOpen && "translate-x-0",
        className
      )}>
        {/* Mobile close button */}
        <button
          onClick={onMobileClose}
          className="absolute top-4 right-4 lg:hidden p-2 text-muted-foreground hover:text-foreground"
        >
          <X className="w-5 h-5" />
        </button>
        
        {/* Logo */}
        <div className="flex items-center gap-2 p-6 border-b border-border">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <span className="text-accent-foreground font-bold text-lg">M</span>
          </div>
          <span className="text-xl font-bold text-foreground">ManageX</span>
        </div>
        
        {/* Navigation Items */}
        <nav className="p-4 space-y-1">
          {sidebarItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.path, item.label)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200",
                  isActive 
                    ? "bg-sidebar-active text-primary-foreground shadow-sm" 
                    : "text-muted-foreground hover:bg-sidebar-hover hover:text-foreground"
                )}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
        
        {/* ... keep existing code (Upgrade Banner) */}
        <div className="absolute bottom-6 left-4 right-4">
          <div className="bg-gradient-to-br from-accent/10 to-accent/20 rounded-xl p-4 border border-accent/20">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground text-lg">🚀</span>
              </div>
            </div>
            <p className="text-sm text-foreground font-medium mb-1">
              You're on the Free plan.
            </p>
            <p className="text-xs text-muted-foreground mb-3">
              Upgrade to go Pro.
            </p>
            <button className="w-full bg-accent hover:bg-accent-dark text-accent-foreground text-sm font-medium py-2 px-4 rounded-lg transition-colors">
              Upgrade
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
        
        {/* Upgrade Banner */}
        <div className="absolute bottom-6 left-4 right-4">
          <div className="bg-gradient-to-br from-accent/10 to-accent/20 rounded-xl p-4 border border-accent/20">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground text-lg">🚀</span>
              </div>
            </div>
            <p className="text-sm text-foreground font-medium mb-1">
              You're on the Free plan.
            </p>
            <p className="text-xs text-muted-foreground mb-3">
              Upgrade to go Pro.
            </p>
            <button className="w-full bg-accent hover:bg-accent-dark text-accent-foreground text-sm font-medium py-2 px-4 rounded-lg transition-colors">
              Upgrade
            </button>
          </div>
        </div>
      </div>
    </>
  );
};