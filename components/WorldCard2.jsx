const WorldCard2 = ({ onClose }) => {
  const handleCloseClick = () => {
    onClose();
  };

  return (
    <div class='fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50'>
      <div class='max-w-lg w-full mx-4 bg-white rounded-lg overflow-hidden shadow-lg'>
        <div class='p-6'>
          <h1 class='text-3xl text-grey-800 font-bold text-center mb-4'>
            Frontend Developer
          </h1>
          <h2 class='text-xl text-grey-800 text-center mb-6'>
            Victoria's MakeUp | February 2021 - April 2021
          </h2>
          <p class='text-gray-800 text-center mb-8'>
            I built a makeup website using React JS, SASS, and Node.js, creating
            a seamless and engaging user experience. Leveraging React's
            responsive framework, the website delivers fast load times and
            smooth transitions. The visually appealing design is enhanced with
            SASS, streamlining CSS development. With Node.js powering the
            backend, the website handles high traffic volumes and complex data
            processing. This makeup website showcases the capabilities of modern
            web development technology, providing a top destination for makeup
            enthusiasts worldwide.
          </p>
          <div className='flex flex-row justify-around'>
            <a
              href='https://beauty-planner-2db0e.web.app/'
              rel='noopener'
              target='_blank'
              class='inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
              Link to proyect
            </a>
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

export default WorldCard2;
