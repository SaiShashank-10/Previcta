import { motion } from "framer-motion";
import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { 
  Search, Upload, FolderPlus, MoreHorizontal, Download, Trash2, 
  FileText, Image, File, Folder, Grid3X3, List, Star, Calendar 
} from "lucide-react";

const files = [
  {
    id: 1,
    name: "Project Proposal.pdf",
    type: "pdf",
    size: "2.4 MB",
    modified: "2024-01-15",
    owner: "John Doe",
    folder: "Documents",
    favorite: true,
    thumbnail: null
  },
  {
    id: 2,
    name: "Design Mockups",
    type: "folder",
    size: "12 items",
    modified: "2024-01-14",
    owner: "Jane Smith",
    folder: "root",
    favorite: false,
    thumbnail: null
  },
  {
    id: 3,
    name: "hero-banner.jpg",
    type: "image",
    size: "1.8 MB",
    modified: "2024-01-13",
    owner: "Mike Johnson",
    folder: "Images",
    favorite: false,
    thumbnail: "https://images.unsplash.com/photo-1518085250887-2f903c200fee?w=100&h=100&fit=crop"
  },
  {
    id: 4,
    name: "Meeting Notes.docx",
    type: "document",
    size: "856 KB",
    modified: "2024-01-12",
    owner: "Sarah Wilson",
    folder: "Documents",
    favorite: true,
    thumbnail: null
  },
  {
    id: 5,
    name: "Budget Spreadsheet.xlsx",
    type: "spreadsheet",
    size: "1.2 MB",
    modified: "2024-01-11",
    owner: "David Brown",
    folder: "Finance",
    favorite: false,
    thumbnail: null
  },
  {
    id: 6,
    name: "team-photo.png",
    type: "image",
    size: "3.1 MB", 
    modified: "2024-01-10",
    owner: "Lisa Davis",
    folder: "Images",
    favorite: false,
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=100&h=100&fit=crop"
  }
];

const folders = [
  { name: "Documents", count: 24, color: "bg-blue-500" },
  { name: "Images", count: 16, color: "bg-green-500" },
  { name: "Finance", count: 8, color: "bg-yellow-500" },
  { name: "Projects", count: 12, color: "bg-purple-500" }
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

const Files = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchTerm, setSearchTerm] = useState("");

  const getFileIcon = (type: string) => {
    switch (type) {
      case "folder": return <Folder className="w-8 h-8 text-yellow-500" />;
      case "pdf": return <FileText className="w-8 h-8 text-red-500" />;
      case "image": return <Image className="w-8 h-8 text-green-500" />;
      case "document": return <FileText className="w-8 h-8 text-blue-500" />;
      case "spreadsheet": return <File className="w-8 h-8 text-green-600" />;
      default: return <File className="w-8 h-8 text-muted-foreground" />;
    }
  };

  const filteredFiles = files.filter(file =>
    file.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    file.owner.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              <h1 className="text-3xl font-bold text-foreground mb-2">Files</h1>
              <p className="text-muted-foreground">Manage and organize your files and folders</p>
            </div>
            <div className="flex gap-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">
                    <FolderPlus className="w-4 h-4 mr-2" />
                    New Folder
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Create New Folder</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <Input placeholder="Folder name" />
                    <Button>Create Folder</Button>
                  </div>
                </DialogContent>
              </Dialog>
              
              <Button className="dashboard-gradient hover:opacity-90">
                <Upload className="w-4 h-4 mr-2" />
                Upload Files
              </Button>
            </div>
          </div>
        </motion.div>

        {/* File Stats */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="card-shadow hover:card-shadow-hover transition-shadow">
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold text-primary mb-1">2.4 GB</h3>
              <p className="text-sm text-muted-foreground">Storage Used</p>
            </CardContent>
          </Card>
          
          <Card className="card-shadow hover:card-shadow-hover transition-shadow">
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold text-success mb-1">186</h3>
              <p className="text-sm text-muted-foreground">Total Files</p>
            </CardContent>
          </Card>
          
          <Card className="card-shadow hover:card-shadow-hover transition-shadow">
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold text-accent mb-1">24</h3>
              <p className="text-sm text-muted-foreground">Shared Files</p>
            </CardContent>
          </Card>
          
          <Card className="card-shadow hover:card-shadow-hover transition-shadow">
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold text-info mb-1">12</h3>
              <p className="text-sm text-muted-foreground">Folders</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Access Folders */}
        <motion.div variants={itemVariants}>
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle>Quick Access</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {folders.map((folder) => (
                  <motion.div
                    key={folder.name}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg ${folder.color} flex items-center justify-center text-white`}>
                        <Folder className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{folder.name}</h4>
                        <p className="text-sm text-muted-foreground">{folder.count} files</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Search and View Controls */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search files and folders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("grid")}
            >
              <Grid3X3 className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("list")}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        {/* Files Display */}
        <motion.div variants={itemVariants}>
          {viewMode === "grid" ? (
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4"
            >
              {filteredFiles.map((file) => (
                <motion.div
                  key={file.id}
                  variants={itemVariants}
                  whileHover={{ y: -2 }}
                  className="group cursor-pointer"
                >
                  <Card className="card-shadow hover:card-shadow-hover transition-all">
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        {/* File Preview */}
                        <div className="relative">
                          {file.thumbnail ? (
                            <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                              <img
                                src={file.thumbnail}
                                alt={file.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ) : (
                            <div className="aspect-square rounded-lg bg-muted/50 flex items-center justify-center">
                              {getFileIcon(file.type)}
                            </div>
                          )}
                          
                          {file.favorite && (
                            <Star className="absolute top-2 right-2 w-4 h-4 text-accent fill-accent" />
                          )}
                          
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <MoreHorizontal className="w-3 h-3" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                              <DropdownMenuItem>
                                <Download className="w-4 h-4 mr-2" />
                                Download
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Star className="w-4 h-4 mr-2" />
                                Add to Favorites
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-error">
                                <Trash2 className="w-4 h-4 mr-2" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>

                        {/* File Info */}
                        <div>
                          <h4 className="font-medium text-foreground text-sm truncate" title={file.name}>
                            {file.name}
                          </h4>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs text-muted-foreground">{file.size}</span>
                            <Badge variant="secondary" className="text-xs">{file.type}</Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <Card className="card-shadow">
              <CardContent className="p-0">
                <div className="divide-y divide-border">
                  {filteredFiles.map((file) => (
                    <motion.div
                      key={file.id}
                      variants={itemVariants}
                      className="flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors cursor-pointer"
                    >
                      <div className="flex-shrink-0">
                        {file.thumbnail ? (
                          <img
                            src={file.thumbnail}
                            alt={file.name}
                            className="w-10 h-10 rounded object-cover"
                          />
                        ) : (
                          <div className="w-10 h-10 rounded bg-muted/50 flex items-center justify-center">
                            {getFileIcon(file.type)}
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium text-foreground truncate">{file.name}</h4>
                          {file.favorite && <Star className="w-4 h-4 text-accent fill-accent flex-shrink-0" />}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{file.size}</span>
                          <span>{file.owner}</span>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{file.modified}</span>
                          </div>
                        </div>
                      </div>
                      
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Star className="w-4 h-4 mr-2" />
                            Add to Favorites
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-error">
                            <Trash2 className="w-4 h-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </motion.div>
      </motion.div>
    </DashboardLayout>
  );
};

export default Files;