import { Button } from "@/components/ui/button";

export const WelcomeCard = () => {
  return (
    <div className="dashboard-gradient rounded-2xl p-6 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute right-0 top-0 w-32 h-32 opacity-20">
        <div className="absolute inset-0 bg-white/20 rounded-full blur-xl transform translate-x-8 -translate-y-8"></div>
        <div className="absolute inset-4 bg-white/30 rounded-full blur-lg transform translate-x-4 -translate-y-4"></div>
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <h2 className="text-xl font-bold">Welcome to Previcta Service</h2>
          <span className="text-xl">👋</span>
        </div>
        <h3 className="text-2xl font-bold mb-4">Management Dashboard 😊</h3>
        
        <Button 
          variant="secondary" 
          className="bg-white/20 hover:bg-white/30 text-white border-white/20 backdrop-blur-sm"
        >
          Get Started
        </Button>
      </div>
      
      {/* Decorative handshake illustration */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 text-6xl opacity-80">
        🤝
      </div>
    </div>
  );
};