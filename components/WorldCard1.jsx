const WorldCard = ({ onClose }) => {
  const handleCloseClick = () => {
    onClose();
  };

  return (
    <div class='fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50'>
      <div class='max-w-lg w-full mx-4 bg-white rounded-lg overflow-hidden shadow-lg'>
        <div class='p-6'>
          <h1 class='text-3xl text-grey-800 font-bold text-center mb-4'>
            Developer
          </h1>
          <h2 class='text-xl text-grey-800 text-center mb-6'>
            Autodidact | January 2020 - Today
          </h2>
          <p class='text-gray-800 text-center mb-8'>
            Experienced Autodidact Frontend Developer proficient in HTML5, CSS,
            JavaScript, ReactJS, SASS, Redux, TypeScript, and Next.js. Skilled
            in creating responsive designs, implementing state management, and
            building efficient user interfaces. Knowledge of jQuery, Bootstrap,
            and Styled Components. Passionate about self-learning and staying
            updated with industry trends.
          </p>
          <div className='flex flex-row justify-around'>
            <button
              onClick={handleCloseClick}
              class='inline-block px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-full'>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldCard;
