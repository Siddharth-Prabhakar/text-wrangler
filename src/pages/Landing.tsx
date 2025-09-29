import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Code, FileText, Search, Copy, Zap } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { useNavigate } from "react-router";

export default function Landing() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const features = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Auto Format Detection",
      description: "Automatically detects JSON, CSV, code snippets, and plain text"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Pretty Print Everything",
      description: "Beautiful formatting with syntax highlighting and proper indentation"
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "Regex Search & Filter",
      description: "Powerful search with regex support to find exactly what you need"
    },
    {
      icon: <Copy className="h-8 w-8" />,
      title: "One-Click Copy",
      description: "Copy formatted results instantly to your clipboard"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-pink-500 via-green-400 to-blue-500"
    >
      {/* Navigation */}
      <nav className="p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="./logo.svg"
              alt="Text Formatter Pro"
              width={48}
              height={48}
              className="cursor-pointer"
              onClick={() => navigate("/")}
            />
            <h1 className="text-2xl font-bold text-white tracking-tight">
              Text Formatter Pro
            </h1>
          </motion.div>
          
          <div className="flex gap-4">
            <Button
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
              onClick={() => window.open('/index.html', '_blank')}
            >
              <Zap className="mr-2 h-4 w-4" />
              Launch App
            </Button>
            {!isAuthenticated ? (
              <Button
                onClick={() => navigate("/auth")}
                className="bg-white text-black hover:bg-white/90 font-bold"
              >
                Sign In
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button
                onClick={() => navigate("/dashboard")}
                className="bg-white text-black hover:bg-white/90 font-bold"
              >
                Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight transform -rotate-1">
            FORMAT
            <span className="block text-black bg-yellow-400 px-4 py-2 transform rotate-2 inline-block mx-4 border-4 border-black shadow-[8px_8px_0px_0px_#000]">
              ANYTHING
            </span>
            INSTANTLY
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 font-bold">
            The ultimate text formatting tool. Paste JSON, CSV, code, or logs - 
            get beautiful, searchable results in seconds. No signup required!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => window.open('/index.html', '_blank')}
              className="bg-yellow-400 text-black hover:bg-yellow-300 font-black text-lg px-8 py-4 border-4 border-black shadow-[8px_8px_0px_0px_#000] transform hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_#000] transition-all"
            >
              <Zap className="mr-2 h-5 w-5" />
              TRY IT NOW - FREE!
            </Button>
            <p className="text-white/80 font-bold">
              ⚡ No installation • No signup • Works offline
            </p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 1 : -1 }}
              className="bg-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_#000] transform rotate-1 hover:rotate-0 transition-all"
            >
              <div className="text-pink-500 mb-4">{feature.icon}</div>
              <h3 className="font-black text-lg mb-2 tracking-tight">{feature.title}</h3>
              <p className="text-gray-700 font-medium">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Demo Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-black border-4 border-white p-8 transform -rotate-1 shadow-[12px_12px_0px_0px_#fff]"
        >
          <h2 className="text-4xl font-black text-green-400 mb-6 text-center">
            SUPPORTS EVERYTHING
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-green-400 font-mono">
            <div>
              <h3 className="text-pink-400 font-black mb-2">📄 JSON</h3>
              <p className="text-sm">Pretty-print with syntax highlighting</p>
            </div>
            <div>
              <h3 className="text-yellow-400 font-black mb-2">📊 CSV</h3>
              <p className="text-sm">Tabular formatting with column alignment</p>
            </div>
            <div>
              <h3 className="text-blue-400 font-black mb-2">💻 CODE</h3>
              <p className="text-sm">Syntax highlighting for popular languages</p>
            </div>
            <div>
              <h3 className="text-green-400 font-black mb-2">📝 LOGS</h3>
              <p className="text-sm">Search and filter through any text</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-blue-500 border-4 border-black p-8 transform rotate-1 shadow-[8px_8px_0px_0px_#000] inline-block">
            <h2 className="text-4xl font-black text-white mb-4">
              READY TO FORMAT?
            </h2>
            <Button
              size="lg"
              onClick={() => window.open('/index.html', '_blank')}
              className="bg-yellow-400 text-black hover:bg-yellow-300 font-black text-xl px-12 py-6 border-4 border-black shadow-[8px_8px_0px_0px_#000] transform hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_#000] transition-all"
            >
              LAUNCH TEXT FORMATTER PRO
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="bg-black border-t-4 border-white p-6 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white font-bold">
            Built with ❤️ by{" "}
            <a
              href="https://vly.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 underline hover:text-yellow-300 transition-colors"
            >
              vly.ai
            </a>
          </p>
        </div>
      </footer>
    </motion.div>
  );
}