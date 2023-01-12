import React from 'react';

const Block = () => {
    return (
        <>
            <section className="dark:bg-gray-800 dark:text-gray-100 mt-[65px] md:pb-20 pb-5">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">Welcom to my block page</p>
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">So Let's start with Questions to Ans:</h2>
                    <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">01. What are the different ways to manage a state in a React application?</summary>
                            <div className="px-4 pb-4">
                                <p>Which state management is best in React? React's useState is the best option for local state management. If you need a global state solution, the most popular ones are Redux, MobX, and the built-in Context API. Your choice will depend on the size of your project, your needs, and your engineers' expertise.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">How does prototypical inheritance work?</summary>
                            <div className="px-4 pb-4">
                                <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">What is a unit test? Why should we write unit tests?</summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>

                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">React vs. Angular vs. Vue?</summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p>React : One of the main reasons for the popularity of React is that it works very efficiently with the DOM. Vue also uses the virtual DOM, but compared to React, Vue has better performance and stability. According to this data, Vue and React's performance difference is subtle since it is only a few milliseconds.</p>
                                <p>Angular : Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your applications.</p>
                                <p>Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.</p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Block;