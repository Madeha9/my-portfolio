import myPhoto from '../assets/me.jpg';

function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <img
        src={myPhoto}
        alt="Madeha"
        className="w-40 h-40 rounded-full object-cover mb-4 shadow-lg"
      />
      <h1 className="text-3xl font-bold text-gray-800">Hi, I'm Madeha</h1>
      <p className="text-lg text-gray-600 text-center max-w-xl mt-4">
        I’m a software developer with a strong academic background in Computer Science (BSc) and Applied Mathematics (MSc).  
        I’m passionate about software development and database design. During my studies, I built full systems including both UI and database components.  
        I am authorized to work in Austria and currently building my portfolio while seeking exciting professional opportunities here.
      </p>
    </div>
  );
}

export default Home;
