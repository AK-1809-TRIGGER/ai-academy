export default function LearningCard({ title, progress, tags }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 mb-4">
      <h3 className="font-semibold">{title}</h3>
      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((tag, i) => (
          <span key={i} className="text-xs bg-gray-200 rounded-full px-2 py-1">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-blue-500 h-2 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
