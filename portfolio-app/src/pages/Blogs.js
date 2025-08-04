import React from 'react';
import { motion } from 'framer-motion';
import CodeBlock from '../components/CodeBlock';

const Blogs = () => {
  const codeSnippet = {
    code: `const blog = engineer.publishThoughts('AI, Agents, Automation');
blog.share();`,
    output: '✍️ Insights from the frontier of LLMs'
  };

  const blogPosts = [
    {
      title: "Building Multi-Agent Systems with LangGraph",
      excerpt: "Exploring the architecture and implementation of intelligent agent orchestration for complex AI workflows.",
      date: "Coming Soon",
      tags: ["AI", "LangGraph", "Multi-Agent"]
    },
    {
      title: "The Future of AI-Powered Healthcare",
      excerpt: "How AI agents are revolutionizing patient care and medical decision-making through personalized therapy systems.",
      date: "Coming Soon",
      tags: ["Healthcare", "AI", "Machine Learning"]
    },
    {
      title: "From RAG to Agent: Evolution of AI Systems",
      excerpt: "A deep dive into the progression from simple retrieval systems to intelligent, context-aware AI agents.",
      date: "Coming Soon",
      tags: ["RAG", "AI Agents", "NLP"]
    }
  ];

  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold text-neon-blue mb-8 text-center">Blogs</h1>
      
      {/* Code Block */}
      <div className="max-w-2xl mx-auto mb-12">
        <CodeBlock code={codeSnippet.code} output={codeSnippet.output} />
      </div>

      {/* Blog Posts */}
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-dark-gray border border-neon-green/30 rounded-lg p-6 hover:border-neon-green/60 transition-colors"
            >
              <h3 className="text-xl font-semibold text-neon-green mb-2">{post.title}</h3>
              <p className="text-light-gray mb-4 text-sm">{post.excerpt}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="px-2 py-1 text-xs bg-neon-green/20 text-neon-green rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="text-xs text-gray-400">{post.date}</div>
            </motion.article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-light-gray">
            🚧 Blog posts coming soon! Stay tuned for insights on AI, automation, and cutting-edge technology.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Blogs;
