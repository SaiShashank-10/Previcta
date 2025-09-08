import { TrendingUp } from "lucide-react";

export const EarningsCard = () => {
  return (
    <div className="bg-info/10 border border-info/20 rounded-2xl p-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-info/5 to-info/10"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-muted-foreground">Average Earning</h3>
          <div className="w-12 h-12 bg-info/20 rounded-full flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-info" />
          </div>
        </div>
        
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-foreground">$9,583.99</span>
        </div>
        
        <p className="text-xs text-muted-oteground mt-1">
          Update: March 30, 2023
        </p>
        
        {/* Circular progress indicator */}
        <div className="absolute bottom-4 right-4">
          <div className="w-16 h-16 relative">
            <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="75, 100"
                className="text-info opacity-30"
              />
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeDasharray="60, 100"
                className="text-info"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};