import { motion } from "framer-motion";
import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { User, Bell, Shield, Palette, Globe, Save, Camera } from "lucide-react";

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

const Settings = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    desktop: true,
    weekly: true
  });

  const [profile, setProfile] = useState({
    name: "David Stevenson",
    email: "david@managex.com",
    title: "Project Manager",
    bio: "Passionate about building great products and leading amazing teams."
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
          <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
          <p className="text-muted-foreground">Manage your account preferences and configurations</p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="appearance">Appearance</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
            </TabsList>

            {/* Profile Settings */}
            <TabsContent value="profile" className="space-y-6">
              <Card className="card-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Profile Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="relative">
                      <Avatar className="w-24 h-24">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>DS</AvatarFallback>
                      </Avatar>
                      <Button
                        size="sm"
                        className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0"
                      >
                        <Camera className="w-3 h-3" />
                      </Button>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{profile.name}</h3>
                      <p className="text-muted-foreground">{profile.title}</p>
                      <Badge variant="secondary" className="mt-1">Pro Plan</Badge>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={profile.name}
                        onChange={(e) => setProfile({...profile, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profile.email}
                        onChange={(e) => setProfile({...profile, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="title">Job Title</Label>
                      <Input
                        id="title"
                        value={profile.title}
                        onChange={(e) => setProfile({...profile, title: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="bio">Bio</Label>
                      <Input
                        id="bio"
                        value={profile.bio}
                        onChange={(e) => setProfile({...profile, bio: e.target.value})}
                      />
                    </div>
                  </div>

                  <Button className="dashboard-gradient hover:opacity-90">
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Notifications Settings */}
            <TabsContent value="notifications" className="space-y-6">
              <Card className="card-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="w-5 h-5" />
                    Notification Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Email Notifications</Label>
                        <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                      </div>
                      <Switch
                        checked={notifications.email}
                        onCheckedChange={(checked) => 
                          setNotifications({...notifications, email: checked})
                        }
                      />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Push Notifications</Label>
                        <p className="text-sm text-muted-foreground">Receive push notifications on mobile</p>
                      </div>
                      <Switch
                        checked={notifications.push}
                        onCheckedChange={(checked) => 
                          setNotifications({...notifications, push: checked})
                        }
                      />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Desktop Notifications</Label>
                        <p className="text-sm text-muted-foreground">Show notifications on desktop</p>
                      </div>
                      <Switch
                        checked={notifications.desktop}
                        onCheckedChange={(checked) => 
                          setNotifications({...notifications, desktop: checked})
                        }
                      />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Weekly Report</Label>
                        <p className="text-sm text-muted-foreground">Receive weekly productivity reports</p>
                      </div>
                      <Switch
                        checked={notifications.weekly}
                        onCheckedChange={(checked) => 
                          setNotifications({...notifications, weekly: checked})
                        }
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Security Settings */}
            <TabsContent value="security" className="space-y-6">
              <Card className="card-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Security & Privacy
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label>Change Password</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                        <Input type="password" placeholder="Current password" />
                        <Input type="password" placeholder="New password" />
                      </div>
                      <Button variant="outline" className="mt-2">
                        Update Password
                      </Button>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Two-Factor Authentication</Label>
                        <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                      </div>
                      <Button variant="outline">Enable</Button>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Login Sessions</Label>
                        <p className="text-sm text-muted-foreground">Manage your active sessions</p>
                      </div>
                      <Button variant="outline">Manage</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Appearance Settings */}
            <TabsContent value="appearance" className="space-y-6">
              <Card className="card-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Palette className="w-5 h-5" />
                    Appearance & Theme
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label className="text-base">Theme</Label>
                      <div className="grid grid-cols-3 gap-4 mt-3">
                        <div className="p-4 border border-border rounded-lg cursor-pointer hover:bg-muted/50">
                          <div className="w-full h-8 bg-white border rounded mb-2"></div>
                          <p className="text-sm text-center">Light</p>
                        </div>
                        <div className="p-4 border border-primary rounded-lg cursor-pointer bg-primary/5">
                          <div className="w-full h-8 bg-gray-800 rounded mb-2"></div>
                          <p className="text-sm text-center">Dark</p>
                        </div>
                        <div className="p-4 border border-border rounded-lg cursor-pointer hover:bg-muted/50">
                          <div className="w-full h-8 bg-gradient-to-r from-white to-gray-800 rounded mb-2"></div>
                          <p className="text-sm text-center">Auto</p>
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <Label className="text-base">Color Scheme</Label>
                      <div className="flex gap-3 mt-3">
                        <div className="w-8 h-8 rounded-full bg-primary cursor-pointer ring-2 ring-primary ring-offset-2"></div>
                        <div className="w-8 h-8 rounded-full bg-blue-500 cursor-pointer hover:ring-2 hover:ring-blue-500 hover:ring-offset-2"></div>
                        <div className="w-8 h-8 rounded-full bg-green-500 cursor-pointer hover:ring-2 hover:ring-green-500 hover:ring-offset-2"></div>
                        <div className="w-8 h-8 rounded-full bg-red-500 cursor-pointer hover:ring-2 hover:ring-red-500 hover:ring-offset-2"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Advanced Settings */}
            <TabsContent value="advanced" className="space-y-6">
              <Card className="card-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5" />
                    Advanced Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label>Language & Region</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                        <Input value="English (US)" />
                        <Input value="UTC-5 (EST)" />
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Data Export</Label>
                        <p className="text-sm text-muted-foreground">Download your account data</p>
                      </div>
                      <Button variant="outline">Export Data</Button>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-red-500">Delete Account</Label>
                        <p className="text-sm text-muted-foreground">Permanently delete your account and all data</p>
                      </div>
                      <Button variant="destructive">Delete</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </motion.div>
    </DashboardLayout>
  );
};

export default Settings;