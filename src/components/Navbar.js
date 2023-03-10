import React from 'react';

const Navbar = () => {
    return (
        <nav class="bg-slate-100 shadow-md">
            <div
                class="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3 items-center"
            >
                <a href="index.html">
                    <img
                        class="h-10"
                        src="https://raw.githubusercontent.com/Learn-with-Sumit/think-in-a-redux-way/batch1-3.10/html_template/assets/lws.svg"
                        alt="Learn with Sumit"
                    />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;