import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div tabIndex={0} className=" mt-20 collapse w-2/3 mx-auto collapse-open border border-base-300 bg-base-100">
                <div className="collapse-title text-xl font-medium">
                    Q.What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <p className='text-justify'>In React apps, there are several ways to handle the state.  Let us briefly explore a few of them in this part.<br/>

                        <b>URL:</b><br/>
                        We can use URL to store some data:<br/>
                        The id of the current item, being viewed<br />
                        Filter parameters<br />
                        Pagination offset and limit<br />
                        Sorting data.<br />

                        <b>Web Storage:</b><br />
                        The second option is to store the state in the browser via web storage. This is useful when we want to persist state between reloads and reboots. Examples include cookies, local storage, and IndexedDB. These are native browser technologies.
                        We avoid storing sensitive data in the browser since the user may access the app on a shared machine. Some examples of where web storage might be most useful include storing a user’s shopping cart, saving partially completed form data or storing JWT token in HttpOnly Cookie.<br />

                        <b>Local State:</b><br />
                        The third option is to use store state locally. It is useful when one component needs the state.<br />

                        <b>Lifted State:</b><br />
                        The Fourth option is to define the state in the parent component. Often, the same state is used across multiple components. In those cases, it is useful to lift the state to a common parent. The lifting state is a two‑step process. First, we declare the state in a common parent component, and then we pass the state down to child components via props.<br />

                        <b>Derived State:</b><br />

                        The fifth option is to compute the new state based on the available state and we do not need to declare a state at all. If there are existing values that can be composed to give us the information we need, then we can calculate that information on each render instead of storing it. 

</p>
                </div>
            </div>
            <div tabIndex={1} className="collapse w-2/3 mx-auto collapse-open border border-base-300 bg-base-100">
                <div className="collapse-title text-xl font-medium">
                    Q. How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <p className='text-justify'>Prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.<br />All JavaScript objects inherit properties and methods from a prototype:<span className='font-semibold'><br />Date objects inherit from Date.<br />prototype.
                        Array objects inherit from Array.prototype.<br/>
                        Player objects inherit from Player.prototype.<br /></span>
                        The Object.prototype is on top of the prototype inheritance chain. ​ Date objects, Array objects, and Player objects all inherit from Object.prototype.
                        
                        
</p>
                </div>
            </div>
            <div tabIndex={2} className="collapse w-2/3 mx-auto collapse-open border border-base-300 bg-base-100">
                <div className="collapse-title text-xl font-medium">
                    Q. What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content">
                    <p className='text-justify'>Usually, developers write unit tests first, then write the software code. This approach is known as test-driven development (TDD). In TDD, the requirements are turned into specific test cases, then the software is improved to pass the new tests.<br />Benefits of Unit Tests:<br /><span className='font-semibold'>
                        Unit tests help to find and fix bugs quickly and easily.<br />
                        Unit tests contribute to higher code quality.<br />
                        Unit tests contribute to better application architecture.<br />
                        Unit tests act as documentation.<br /></span></p>
                </div>
            </div>
            <div tabIndex={3} className="collapse w-2/3 mx-auto collapse-open border border-base-300 bg-base-100">
                <div className="collapse-title text-xl font-medium">
                    Q. React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content">
                    <p className='text-justify'><span className='font-semibold'>React:</span><br />The most popular project for JavaScript state management is Redux. Most developers use the official React bindings for Redux, which are maintained by the Redux team.<br />Because of React’s popularity, finding input components and ready-to-use elements is extremely easy. They’re all just a Google or GitHub search away.<br />The React ecosystem also includes React Native that allows you to build native iOS and Android applications from a single codebase written in React. So, React can be a great choice for building mobile applications using web technologies, too.<br />React is part of the MERN stack, which contains MongoDB, ExpressJS, React, and NodeJS. The great thing about this combination is that a single language JavaScript  powers the whole application.<br /><span className='font-semibold'>Vue:</span><br/>
                        Even though Redux can be used in Vue, there are no official bindings. But that should not worry you because Vuex is the official state management library made specifically for Vue applications. Aside from integrating very well with Vue, it’s easy to debug using Vue’s developer tools.<br/>

                        In the early days of Vue, it was harder to find ready-to-use components. Since the community has grown, there’s a wide range of input components and advanced elements that you can use to speed up your development.<br/>

                        For mobile app development, there’s an up and coming project called Weex. Weex is developed and used by Alibaba, but it’s not as mature and powerful as React Native. What’s more, since the project is developed and used more in China, it’s harder to find documentation and solutions to issues in English.<br /><span className='font-semibold'>Angular:</span><br/>

                        For state management in Angular, you can use the NgRx project. It has been inspired by Redux, but it’s specifically created for Angular.<br/>

                        As in the case of Vue and React, there are many ready-to-use components that you can import into your projects. What’s slightly different about Angular is that there are many official components in the Angular Material project. This is an official project by Google that offers Material Design components for Angular applications.<br/>

                        You can build cross-platform mobile applications in Angular using NativeScript. It supports Vue as well, but the Angular support is more mature.<br/>

                        Angular is part of the well-known MEAN stack that combines Angular with MongoDB, ExpressJS, and NodeJS. Similar to the MERN stack, it relies entirely on JavaScript for both the front-end and back-end.<br/>
</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;