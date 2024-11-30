function ProjectCard({ title, description, imageUrl, isReversed }) {
    const cardClasses = `flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] overflow-hidden rounded-xl`;
    
    return (
      <div className={cardClasses}>
        <div className="md:w-1/2">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h3 className="text-3xl font-bold mb-4">{title}</h3>
          <p className="text-gray-600 mb-6">{description}</p>
          <div className="flex">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full flex items-center group hover:bg-orange-600 transition-colors duration-300">
              Learn More
              <svg
                className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default ProjectCard;