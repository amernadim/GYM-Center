import React from 'react';

const Question = () => {
  return (
    <div className='w-9/12 mx-auto mt-6'>

      <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-medium">
        How does react work?
        </div>
        <div className="collapse-content"> 
        <p> React is a declarative, efficient, and flexible JavaScript library for building user interfaces. ‘V’ denotes the view in MVC. ReactJS is an open-source, component-based front end library responsible only for the view layer of the application. It is maintained by Facebook.
       
        A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. A component may also maintain an internal state – for example, a TabList component may store a variable corresponding to the currently open tab.

        Note: React is not a framework. It is just a library developed by Facebook to solve some problems that we were facing earlier.
        Prerequisites: Download Node packages with their latest version.</p>
        </div>
      </div>

      <div tabIndex={1} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-medium">
        Difference between props and state.
        </div>
        <div className="collapse-content"> 
        <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
        </div>
      </div>

      <div tabIndex={2} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-medium">
        What is useEffect to do without API data loadinig?
        </div>
        <div className="collapse-content"> 
        <p>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.</p>
        </div>
      </div>

    </div>
  );
};

export default Question;