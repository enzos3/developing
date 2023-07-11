const WorldCard3 = ({ onClose }) => {
  const handleCloseClick = () => {
    onClose();
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50'>
      <div className='max-w-lg w-full mx-4 bg-white rounded-lg overflow-hidden shadow-lg'>
        <div className='p-6'>
          <h1 className='text-3xl text-grey-800 font-bold text-center mb-4'>
            'SEO Developer - Fullstack Developer'
          </h1>
          <h2 className='text-xl text-grey-800 text-center mb-6'>
            'SOUP Agency LTDA | January 2022 - June 2023'
          </h2>
          <p className='text-gray-800 text-center mb-8'>
            'The Haircare E-Commerce project is an online platform that offers a
            wide range of hair care products. Developed with modern technologies
            like React, Node.js, and MongoDB, it prioritizes user-friendliness
            and efficiency. Key features include personalized customer profiles,
            purchase history, and a powerful search engine. The platform
            supports multiple payment methods and focuses on scalability and
            security. Measures such as data encryption and two-factor
            authentication are implemented to protect customer data.'
          </p>
          <div className='flex flex-row justify-around'>
            <a
              href='https://pumphaircare.com/'
              rel='noopener'
              target='_blank'
              className='inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
              Link to proyect
            </a>
            <button
              onClick={handleCloseClick}
              className='inline-block px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-full'>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldCard3;
