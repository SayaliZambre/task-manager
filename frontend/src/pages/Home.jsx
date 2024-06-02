import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Tasks from '../components/Tasks';
import MainLayout from '../layouts/MainLayout';

const Home = () => {
  const authState = useSelector((state) => state.authReducer);
  const { isLoggedIn } = authState;

  useEffect(() => {
    document.title = authState.isLoggedIn ? `${authState.user.name}'s tasks` : "Task Manager";
  }, [authState]);

  return (
    <MainLayout>
      {!isLoggedIn ? (
        <div className="bg-blue-600 text-white h-[40vh] flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold mb-6">Welcome to Task Manager App</h1>
          <Link
            to="/signup"
            className="mt-10 text-2xl flex items-center space-x-2 hover:space-x-4 transition-all duration-300"
          >
            <span className="transition-[margin]">Join now to manage your tasks</span>
            <span className="relative ml-4 text-base transition-[margin]">
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </Link>
        </div>
      ) : (
        <div className="bg-blue-100 min-h-screen">
          <h1 className="text-2xl mt-8 mx-8 border-b-2 border-blue-300 pb-2">Welcome {authState.user.name}</h1>
          <Tasks />
        </div>
      )}
    </MainLayout>
  );
};

export default Home;
