import { AI_PROJECTS } from '@/lib/constants/aiProjects';

export const AiLabSection = () => {
  return (
    <section id="ai-lab" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">AI Lab Showcase</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AI_PROJECTS.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
              <div className="mb-4">
                <p className="font-semibold">API Usage: <span className="font-normal">{project.apiUsage}</span></p>
              </div>
              <div className="flex justify-between">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Live Demo</a>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


