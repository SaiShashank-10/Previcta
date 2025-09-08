import { motion } from "framer-motion";
import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Search, Plus, Edit, Trash2, Tag, Calendar, Star, FileText } from "lucide-react";

const notes = [
  {
    id: 1,
    title: "Project Meeting Notes",
    content: "Discussed the new feature roadmap and timeline for Q1. Key points: implement user authentication, improve dashboard performance, add real-time notifications.",
    tags: ["meeting", "project", "roadmap"],
    date: "2024-01-15",
    favorite: true,
    category: "work"
  },
  {
    id: 2,
    title: "Design System Ideas",
    content: "Ideas for improving the design system: consistent spacing, better color palette, unified typography scale. Consider adding dark mode support.",
    tags: ["design", "ui", "system"],
    date: "2024-01-14",
    favorite: false,
    category: "design"
  },
  {
    id: 3,
    title: "Team Feedback",
    content: "Feedback from the team standup: need better communication tools, improve task tracking, consider weekly retrospectives.",
    tags: ["team", "feedback", "improvement"],
    date: "2024-01-13",
    favorite: true,
    category: "team"
  },
  {
    id: 4,
    title: "Research Notes",
    content: "User research findings: users want simpler navigation, better mobile experience, faster loading times. Priority should be mobile optimization.",
    tags: ["research", "user", "mobile"],
    date: "2024-01-12",
    favorite: false,
    category: "research"
  }
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

const Notes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Notes", count: notes.length },
    { id: "work", name: "Work", count: notes.filter(n => n.category === "work").length },
    { id: "design", name: "Design", count: notes.filter(n => n.category === "design").length },
    { id: "team", name: "Team", count: notes.filter(n => n.category === "team").length },
    { id: "research", name: "Research", count: notes.filter(n => n.category === "research").length },
  ];

  const filteredNotes = notes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "all" || note.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
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
              <h1 className="text-3xl font-bold text-foreground mb-2">Notes</h1>
              <p className="text-muted-foreground">Organize your thoughts and ideas</p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="dashboard-gradient hover:opacity-90">
                  <Plus className="w-4 h-4 mr-2" />
                  New Note
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Create New Note</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <Input placeholder="Note title..." />
                  <Textarea placeholder="Write your note here..." rows={6} />
                  <div className="flex gap-2">
                    <Input placeholder="Add tags (comma separated)" />
                    <Button>Save Note</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <motion.div variants={itemVariants} className="lg:w-64 space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search notes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Categories */}
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center justify-between p-2 rounded-lg text-left transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-muted/50'
                    }`}
                  >
                    <span>{category.name}</span>
                    <Badge variant="secondary">{category.count}</Badge>
                  </button>
                ))}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="card-shadow">
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Total Notes</span>
                    <span className="font-medium">{notes.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Favorites</span>
                    <span className="font-medium">{notes.filter(n => n.favorite).length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">This Week</span>
                    <span className="font-medium">8</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Notes Grid */}
          <div className="flex-1">
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {filteredNotes.map((note) => (
                <motion.div
                  key={note.id}
                  variants={itemVariants}
                  whileHover={{ y: -2 }}
                  className="group"
                >
                  <Card className="card-shadow hover:card-shadow-hover transition-all cursor-pointer h-full">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {/* Header */}
                        <div className="flex items-start justify-between">
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                            {note.title}
                          </h3>
                          <div className="flex items-center gap-1">
                            {note.favorite && (
                              <Star className="w-4 h-4 text-accent fill-accent" />
                            )}
                            <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                              <Edit className="w-3 h-3" />
                            </Button>
                            <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity text-error">
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>

                        {/* Content */}
                        <p className="text-sm text-muted-foreground line-clamp-3">
                          {note.content}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {note.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              <Tag className="w-2 h-2 mr-1" />
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-2 border-t border-border">
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            {note.date}
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {note.category}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {filteredNotes.length === 0 && (
              <motion.div
                variants={itemVariants}
                className="text-center py-12"
              >
                <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-semibold text-foreground mb-2">No notes found</h3>
                <p className="text-muted-foreground mb-4">
                  {searchTerm ? "Try adjusting your search terms" : "Create your first note to get started"}
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="w-4 h-4 mr-2" />
                      Create Note
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Create New Note</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <Input placeholder="Note title..." />
                      <Textarea placeholder="Write your note here..." rows={6} />
                      <div className="flex gap-2">
                        <Input placeholder="Add tags (comma separated)" />
                        <Button>Save Note</Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </DashboardLayout>
  );
};

export default Notes;