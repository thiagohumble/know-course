import { Course } from '@/data/courses';

interface CourseContentProps {
  steps: Course['steps'];
}

const CourseContent: React.FC<CourseContentProps> = ({ steps }) => {
  if (!steps || steps.length === 0) {
    return <p className="text-zinc-400">O conteúdo deste curso ainda não foi detalhado.</p>;
  }

  return (
    <div className="bg-gray-800 rounded-lg p-6 mt-8">
      <h2 className="text-xl font-bold text-orange-500 mb-4">Conteúdo do Curso</h2>
      <ul className="space-y-3">
        {steps.map(step => (
          <li key={step.id} className="flex items-center justify-between text-zinc-300">
            <div className="flex items-center gap-2">
              <span className="text-orange-400 font-semibold">{step.id}.</span>
              <span>{step.title}</span>
            </div>
            {step.duration && <span className="text-sm text-gray-500">{step.duration}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseContent;