import dynamic from 'next/dynamic';
import React from 'react'

const Services = () => {
    const Footer = dynamic(() => import('@/components/Footer'),{ssr :true});
  return (
    <>
    
    <h2 className='text-center py-4 font-bold text-3xl dark:text-teal-300 text-gray-600'>Services</h2>
        <div className="flex flex-wrap justify-center max-sm:pb-10 sm:pb-10 md:pb-20 lg:pb-32 overflow-x-hidden overflow-y-hidden scroll">
            <div className="p-4 max-w-sm animate-fade-up">
                <div className="flex rounded-lg h-full dark:bg-gray-600 bg-white border dark:border-gray-700 p-8 flex-col">
                    <div className="flex items-center mb-3 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className='fill-gray-600 dark:fill-gray-300 ' viewBox="0 0 64 64" id="web-development">
                        <path d="M59 6H5a3.111 3.111 0 0 0-3 3.205V42.8A3.111 3.111 0 0 0 5 46h22v4h-7a1 1 0 0 0-1 1v5h-2v2h30v-2h-2v-5a1 1 0 0 0-1-1h-7v-4h22a3.111 3.111 0 0 0 3-3.2V9.205A3.111 3.111 0 0 0 59 6ZM5 8h54a1.119 1.119 0 0 1 1 1.205V38H4V9.205A1.119 1.119 0 0 1 5 8Zm38 48H21v-4h22Zm-8-6h-6v-4h6Zm24-6H5a1.119 1.119 0 0 1-1-1.2V40h56v2.8a1.119 1.119 0 0 1-1 1.2Z"></path>
                        <path d="M55 41h2v2h-2zM34 26h2.522a9.266 9.266 0 0 0 .362.873L35.1 28.657a1 1 0 0 0 0 1.414l2.829 2.829a1 1 0 0 0 1.414 0l1.784-1.783a9.266 9.266 0 0 0 .873.362V34a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2.522a9.266 9.266 0 0 0 .873-.362l1.784 1.784a1 1 0 0 0 1.414 0l2.829-2.829a1 1 0 0 0 0-1.414l-1.783-1.784a9.266 9.266 0 0 0 .361-.873H56a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2.522a9.266 9.266 0 0 0-.362-.873l1.784-1.784a1 1 0 0 0 0-1.414L52.071 13.1a1 1 0 0 0-1.414 0l-1.784 1.783a9.266 9.266 0 0 0-.873-.361V12a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v2.522a9.266 9.266 0 0 0-.873.362L39.343 13.1a1 1 0 0 0-1.414 0L35.1 15.929a1 1 0 0 0 0 1.414l1.783 1.784a9.266 9.266 0 0 0-.362.873H34a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1Zm1-4h2.262a1 1 0 0 0 .968-.75 7 7 0 0 1 .745-1.8 1 1 0 0 0-.154-1.216l-1.6-1.6 1.414-1.414 1.6 1.6a1 1 0 0 0 1.216.154 7 7 0 0 1 1.8-.745 1 1 0 0 0 .75-.968V13h2v2.262a1 1 0 0 0 .75.968 7 7 0 0 1 1.8.745 1 1 0 0 0 1.216-.154l1.6-1.6 1.414 1.414-1.6 1.6a1 1 0 0 0-.154 1.216 7 7 0 0 1 .745 1.8 1 1 0 0 0 .968.75H55v2h-2.262a1 1 0 0 0-.968.75 7 7 0 0 1-.745 1.8 1 1 0 0 0 .154 1.216l1.6 1.6-1.414 1.414-1.6-1.6a1 1 0 0 0-1.216-.154 7 7 0 0 1-1.8.745 1 1 0 0 0-.75.968V33H44v-2.262a1 1 0 0 0-.75-.968 7 7 0 0 1-1.8-.745 1 1 0 0 0-1.216.154l-1.6 1.6-1.414-1.414 1.6-1.6a1 1 0 0 0 .154-1.216 7 7 0 0 1-.745-1.8 1 1 0 0 0-.968-.75H35Z"></path>
                        <path d="M45 28a5 5 0 1 0-5-5 5.006 5.006 0 0 0 5 5zm0-8a3 3 0 1 1-3 3 3 3 0 0 1 3-3zM9.293 16.707l1.414-1.414L9.414 14l1.293-1.293-1.414-1.414-2 2a1 1 0 0 0 0 1.414zM12.2 15.4l3-4 1.6 1.2-3 4zM19.707 16.707l2-2a1 1 0 0 0 0-1.414l-2-2-1.414 1.414L19.586 14l-1.293 1.293ZM24 15h2v2h-2zM9 19h4v2H9zM15 19h2v2h-2zM19 19h6v2h-6zM27 19h2v2h-2zM11 23h2v2h-2zM15 23h4v2h-4zM21 23h2v2h-2zM25 23h4v2h-4zM9 29h4v2H9zM15 29h2v2h-2zM19 29h6v2h-6zM27 29h2v2h-2zM11 33h2v2h-2zM15 33h4v2h-4zM21 33h2v2h-2zM25 33h4v2h-4z"></path>
                        </svg>
                    </div>
                    <div className="grid grid-cols-1 gap-y-14">
                        <h2 className='text-2xl font-extrabold text-gray-600 dark:text-teal-300 '>Web Development</h2>
                        <p className="text-sm font-normal text-gray-500 dark:text-gray-300 ">
                        Build custom web application from scratch up using the latest technology.
                        </p>
                    </div>
                </div>
            </div>
            <div className="p-4 max-w-sm animate-fade-up">
                <div className="flex rounded-lg h-full dark:bg-gray-600 bg-white border dark:border-gray-700 p-8 flex-col">
                    <div className="flex items-center mb-3 ">
                    <svg fill="#000000" version="1.1" id="Layer_1" className='fill-gray-600 dark:fill-gray-300 px-5 pt-6 pb-8' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 241" enableBackground="new 0 0 256 241" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M254,188V2H2v186h111v29H75v22h106v-22h-38v-29H254z M19,19h217v151H19L19,19z M169.385,132.8 c0.131,1.179,0,2.575-0.306,3.885l-11.131-10.258l-10.04,10.957l11.262,10.214c-1.31,0.437-2.575,0.742-3.885,0.742 c-3.885,0.131-7.203-1.048-10.04-3.623c-2.837-2.706-4.365-5.849-4.496-9.734c0-1.353,0.131-2.881,0.437-4.191l-2.706-2.575 l-16.195-14.798l-27.413,30.207c-1.659,2.226-4.234,3.754-7.203,3.754c-4.802,0-8.687-3.885-8.687-8.687 c0-2.575,1.004-4.933,2.968-6.591l28.461-29.509L93.213,86.835c-1.353,0.611-2.881,0.917-4.191,0.917 c-3.885,0.131-7.203-1.048-10.04-3.623s-4.365-5.718-4.496-9.603c-0.131-1.179,0-2.575,0.306-3.885l11.262,10.214l9.953-10.913 L84.745,59.728c1.179-0.437,2.575-0.742,3.885-0.742c3.885-0.131,7.203,1.048,10.04,3.623c2.837,2.532,4.365,5.849,4.496,9.734 c0.131,1.31,0,2.575-0.306,3.885l17.723,16.238l12.965-14.012l-19.381-17.068l17.592-20.036l49.807,43.826l-17.592,20.036 l-19.905-17.548l-12.528,14.798l19.469,17.81c1.31-0.437,2.575-0.742,3.885-0.742c3.885-0.131,7.203,1.048,10.04,3.623 C167.77,125.685,169.298,128.828,169.385,132.8z"></path> </g></svg>
                    </div>
                    <div className="grid grid-cols-1 gap-y-6">
                        <h2 className='text-2xl font-extrabold text-gray-600 dark:text-teal-300 '>Website Support and Maintenance</h2>
                        <p className="text-sm font-normal text-gray-500 dark:text-gray-300 ">
                        Provide technical support such as bug fixing, performance enhancement, server configuration, deployment and maintenance.
                        </p>
                    </div>
                </div>
            </div>
            <div className="p-4 max-w-sm animate-fade-up">
                <div className="flex rounded-lg h-full dark:bg-gray-600 bg-white border dark:border-gray-700 p-8 flex-col">
                    <div className="flex items-center mb-3 ">
                    <svg fill="#000000" version="1.1" id="Capa_1" className='fill-gray-600 dark:fill-gray-300 px-5 pb-10'  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 380 380" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M91.425,157.435c-1.065-2.297-3.366-3.767-5.897-3.767c-0.005,0-0.01,0-0.015,0c-2.537,0.006-4.839,1.487-5.895,3.794 L47.402,227.83c-1.494,3.264-0.06,7.122,3.204,8.616c0.877,0.401,1.797,0.591,2.702,0.591c2.464,0,4.821-1.409,5.914-3.796 l8.08-17.649h36.75l8.193,17.677c1.51,3.257,5.373,4.674,8.631,3.164c3.257-1.51,4.673-5.374,3.164-8.631L91.425,157.435z M73.254,202.592l12.311-26.888l12.462,26.888H73.254z"></path> <path d="M166.496,152.865H135.07c-3.59,0-6.5,2.91-6.5,6.5v71.17c0,3.59,2.91,6.5,6.5,6.5c3.59,0,6.5-2.91,6.5-6.5V203.5h24.926 c13.96,0,25.316-11.357,25.316-25.316C191.813,164.223,180.456,152.865,166.496,152.865z M166.496,190.5H141.57v-24.635h24.926 c6.792,0,12.316,5.526,12.316,12.318C178.813,184.975,173.288,190.5,166.496,190.5z"></path> <path d="M203.313,152.865c-3.59,0-6.5,2.91-6.5,6.5v71.17c0,3.59,2.91,6.5,6.5,6.5s6.5-2.91,6.5-6.5v-71.17 C209.813,155.775,206.902,152.865,203.313,152.865z"></path> <path d="M368.317,46.487H11.684C5.241,46.487,0,51.73,0,58.173v263.656c0,6.442,5.241,11.684,11.684,11.684h356.634 c6.442,0,11.683-5.242,11.683-11.684V58.173C380,51.73,374.76,46.487,368.317,46.487z M280.949,259.268 c5.162-12.192,17.053-20.07,30.295-20.07c4.411,0,8.721,0.878,12.813,2.61c16.696,7.072,24.529,26.408,17.461,43.105 c-5.167,12.191-17.058,20.068-30.294,20.068c0,0,0,0-0.001,0c-4.411,0-8.721-0.878-12.81-2.611 c-8.089-3.424-14.361-9.793-17.659-17.935C277.455,276.294,277.524,267.356,280.949,259.268z M320.868,79.771 c6.844,0,12.387,5.547,12.387,12.387c0,6.842-5.543,12.387-12.387,12.387c-6.839,0-12.385-5.545-12.385-12.387 C308.483,85.318,314.029,79.771,320.868,79.771z M283.715,79.771c6.839,0,12.386,5.547,12.386,12.387 c0,6.842-5.547,12.387-12.386,12.387c-6.839,0-12.387-5.545-12.387-12.387C271.328,85.318,276.876,79.771,283.715,79.771z M246.561,79.771c6.839,0,12.381,5.547,12.381,12.387c0,6.842-5.542,12.387-12.381,12.387c-6.844,0-12.387-5.545-12.387-12.387 C234.175,85.318,239.718,79.771,246.561,79.771z M21.27,314.01V141.424H358.73v67.274c-1.537-2.202-3.677-4.02-6.327-5.143 l-20.614-8.726c-1.835-0.778-3.771-1.172-5.754-1.172c-5.956,0-11.303,3.54-13.623,9.02l-1.253,2.959 c-9.227,0.129-18.381,2.255-26.728,6.193l-2.426-2.107c-1.174-1.018-2.499-1.841-3.932-2.447c-1.841-0.779-3.782-1.174-5.771-1.174 c-4.276,0-8.341,1.858-11.154,5.099l-14.671,16.915c-2.583,2.986-3.855,6.794-3.581,10.735c0.285,3.941,2.084,7.535,5.064,10.115 l2.417,2.098c-2.755,8.849-3.563,18.179-2.365,27.344l-2.749,1.654c-6.981,4.2-9.242,13.302-5.039,20.293L249.044,315H22.26 C21.714,315,21.27,314.556,21.27,314.01z"></path> </g> </g></svg>
                    </div>
                    <div className="grid grid-cols-1 gap-y-14">
                        <h2 className='text-2xl font-extrabold text-gray-600 dark:text-teal-300 '>API Integration</h2>
                        <p className="text-sm font-normal text-gray-500 dark:text-gray-300 ">
                        Build custom web application from ground up using the latest technology.
                        </p>
                    </div>
                </div>
            </div>
            <div className="p-4 max-w-sm animate-fade-up">
                <div className="flex rounded-lg h-full dark:bg-gray-600 bg-white border dark:border-gray-700 p-8 flex-col">
                    <div className="grid grid-cols-2 mb-3 pb-10 px-5 gap-5 animate-wiggle animate-infinite">
                    <svg fill="#000000" version="1.1" className='fill-gray-600 dark:fill-gray-300' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="5151e0c8492e5103c096af88a51e2ea6"> <path display="inline" d="M401.054,224c3.714,4.115,4.595,11.181,2.653,21.19c-2.029,10.425-5.935,17.862-11.723,22.32 c-5.793,4.458-14.602,6.687-26.432,6.687h-17.849l10.957-56.37h20.103C389.913,217.827,397.34,219.886,401.054,224z M149.754,217.827h-20.103l-10.958,56.37h17.848c11.827,0,20.639-2.229,26.432-6.687c5.789-4.458,9.694-11.896,11.723-22.32 c1.942-10.01,1.06-17.075-2.653-21.19C168.33,219.886,160.903,217.827,149.754,217.827z M511.5,256 c0,74.229-114.393,134.403-255.5,134.403S0.5,330.229,0.5,256c0-74.228,114.393-134.403,255.5-134.403S511.5,181.772,511.5,256z M198.542,265.286c3.04-5.448,5.203-11.461,6.483-18.037c3.102-15.967,0.761-28.403-7.024-37.313 c-7.781-8.91-20.165-13.363-37.136-13.363h-56.423L78.265,331.261h29.342l6.958-35.805h25.134c11.087,0,20.21-1.164,27.372-3.497 c7.161-2.329,13.669-6.233,19.528-11.719C191.514,275.72,195.493,270.738,198.542,265.286z M301.814,295.456l12.181-62.682 c2.479-12.747,0.619-21.971-5.572-27.664c-6.196-5.688-17.449-8.537-33.768-8.537h-25.933l6.961-35.81h-29.11l-26.182,134.692 h29.11l14.996-77.165h23.267c7.448,0,12.317,1.232,14.604,3.698c2.287,2.467,2.773,7.091,1.455,13.869l-11.581,59.598H301.814z M427.011,209.937c-7.78-8.91-20.164-13.363-37.135-13.363h-56.424l-26.178,134.688h29.343l6.957-35.805h25.135 c11.086,0,20.21-1.164,27.371-3.497c7.161-2.329,13.669-6.233,19.528-11.719c4.92-4.521,8.896-9.502,11.943-14.954 c3.044-5.448,5.202-11.461,6.483-18.037C437.137,231.282,434.796,218.846,427.011,209.937z"> </path> </g> </g></svg>
                    <svg fill="#000000" version="1.1" className='fill-gray-600 dark:fill-gray-300' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="5151e0c8492e5103c096af88a51e75c7"> <path display="inline" fillRule="evenodd" clipRule="evenodd" d="M1.008,0.5C0.438,0.583,0.48,1.27,0.521,1.958 c0,169.668,0,339.31,0,508.974c169.364,1.135,340.808,0.162,510.979,0.486c0-170.309,0-340.61,0-510.918 C341.342,0.5,171.167,0.5,1.008,0.5z M259.893,452.167c-11.822,11.919-30.478,18.938-53.429,18.938 c-37.643,0-58.543-18.34-71.884-43.711c12.842-8.2,25.966-16.122,39.344-23.795c5.456,15.262,23.886,32.42,44.683,21.857 c13.183-6.699,11.661-27.01,11.661-49.054c0-45.773,0-98.578,0-139.872c-0.042-0.688-0.083-1.375,0.482-1.458 c15.707,0,31.413,0,47.116,0c0,36.788,0,78.402,0,117.529C277.866,395.199,280.91,430.988,259.893,452.167z M470.696,409.917 c-2.674,39.884-35.243,61.063-79.17,61.188c-43.062,0.124-70.624-19.013-87.433-48.567c12.085-8.317,25.778-15.017,38.375-22.822 c10.08,15.761,27.537,30.91,53.429,28.652c16.131-1.406,34.856-14.555,24.285-34.482c-5.127-9.66-17.516-14.567-28.656-19.425 c-35.352-15.424-76.828-29.571-72.861-84.992c1.327-18.514,9.852-31.525,20.889-40.796c11.311-9.5,26.46-15.867,46.629-16.511 c36.629-1.173,56.723,15.12,70.429,37.884c-11.664,8.891-24.514,16.608-37.401,24.281c-4.229-12.995-24.644-25.658-41.772-17.969 c-7.789,3.493-14.788,13.761-10.684,26.224c3.66,11.115,18.589,17.199,30.599,22.344 C433.706,340.486,474.331,355.693,470.696,409.917z"> </path> </g> </g></svg>
                    
                    <svg version="1.1"  className='fill-gray-600 dark:fill-gray-300' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 40">
                        <rect x="10" y="0" width="20" height="40" rx="10" ry="5" mask="url(#lines)"/>
                        <rect x="0" y="10" width="40" height="20" rx="5" ry="10" mask="url(#lines)"/>
                        <circle cx="14.5" cy="5" r="1.85" fill="white" />
                        <circle cx="25.5" cy="35" r="1.85" fill="white" />
                        <mask id="lines">
                        <rect id="bg" x="0" y="0" width="100%" height="100%" fill="white"/>
                        <line x1="10" y1="9.5" x2="20" y2="9.5" stroke="black" />
                        <line x1="20" y1="30.5" x2="30" y2="30.5" stroke="black" />
                        <path d="m 9.5,30 c 0,-10 2.5,-10 10,-10 8.5,0 11,0 11,-10" stroke="black" fill="none" />
                        </mask>
                    </svg>                  
                    <svg viewBox="0 0 48 48" className='fill-gray-600 dark:fill-gray-300' xmlns="http://www.w3.org/2000/svg"  fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>java</title> <g id="Layer_2" data-name="Layer 2"> <g id="invisible_box" data-name="invisible box"> <rect width="48" height="48" fill="none"></rect> </g> <g id="Q3_icons" data-name="Q3 icons"> <g> <path d="M28.6,2.2a4.6,4.6,0,0,1,1.1,4.2,9.5,9.5,0,0,1-2.4,4.4,25.2,25.2,0,0,1-3,2.7A11.9,11.9,0,0,0,21,16.9a4.1,4.1,0,0,0-.4,3.7c.7,2.1,2.5,3.6,3.4,5.5-1-.8-2-1.8-3-2.7A14,14,0,0,1,18.4,20a4.2,4.2,0,0,1-.3-2.9,6.4,6.4,0,0,1,1.8-2.5c2-1.9,4.5-3.3,6.5-5.3a7.8,7.8,0,0,0,2.3-3.9,6.9,6.9,0,0,0-.1-3.2Z"></path> <path d="M27,14.3a23.3,23.3,0,0,1,7.2-3.2,38.3,38.3,0,0,0-5.9,4,5.9,5.9,0,0,0-1.5,2,3.1,3.1,0,0,0,.1,1.9,27.5,27.5,0,0,0,1.9,2.8,2.9,2.9,0,0,1,.2,2.7,6.5,6.5,0,0,1-3,2.9c-.1.1-.2.3-.4.3A3.8,3.8,0,0,0,27,25a3.5,3.5,0,0,0-1-2.1c-1.1-1.3-2.1-2.9-1.9-4.5A6.3,6.3,0,0,1,27,14.3Z"></path> <path d="M34.6,26.6a3.4,3.4,0,0,1,1.9-.7,4.1,4.1,0,0,1,3.4.9,3.1,3.1,0,0,1,1,2.6,5.4,5.4,0,0,1-1.8,2.7,14,14,0,0,1-5.5,2.3l.4-.3a11.4,11.4,0,0,0,4-2.9,3.1,3.1,0,0,0,1-2.7,2.9,2.9,0,0,0-2.7-2.1,5,5,0,0,0-1.7.2Z"></path> <path d="M12.2,27.6a16.1,16.1,0,0,1,6.5-1.3,19.4,19.4,0,0,0-3.9,1.2,1.6,1.6,0,0,0-.8.6c0,.2.2.3.4.4a9.3,9.3,0,0,0,2.4.4,61.7,61.7,0,0,0,8.6-.1,79.8,79.8,0,0,0,8.4-.9,6.1,6.1,0,0,0-1.8.9,3.8,3.8,0,0,1-1,.3,60.1,60.1,0,0,1-10.4,1H16.5a21.2,21.2,0,0,1-4.4-.6,2.2,2.2,0,0,1-1.2-.5.3.3,0,0,1-.1-.5,3.9,3.9,0,0,1,1.4-.8Z"></path> <path d="M14.8,32.2a7.5,7.5,0,0,1,2-1c-.2.3-.6.5-.6.9a.7.7,0,0,0,.4.5l1.2.3a46.6,46.6,0,0,0,6.5.2c1.9-.1,3.9-.4,5.9-.7A7.8,7.8,0,0,0,32,33.5a43.3,43.3,0,0,1-7.2,1.2,39.8,39.8,0,0,1-6.9-.2,12,12,0,0,1-2.7-.8,1.4,1.4,0,0,1-.8-.7.7.7,0,0,1,.4-.8Z"></path> <path d="M16.1,36.8a5.8,5.8,0,0,1,1.8-.8c-.2.2-.6.5-.4.8a2.5,2.5,0,0,0,1.3.5,36.2,36.2,0,0,0,5.7.2,30.3,30.3,0,0,0,4.2-.6,14.2,14.2,0,0,0,2.5,1.2,19.3,19.3,0,0,1-4.1,1.2,22.4,22.4,0,0,1-7.3.1,11.1,11.1,0,0,1-3.1-.9,1.6,1.6,0,0,1-.9-.9.8.8,0,0,1,.3-.8Z"></path> <path d="M9.9,39.8a11.3,11.3,0,0,1,3.2-.6,2.3,2.3,0,0,1,1.2.2,10.2,10.2,0,0,0-3.7,1,1.1,1.1,0,0,0-.7.6c0,.3.4.4.7.5a17,17,0,0,0,5,.9,97.7,97.7,0,0,0,15.3-.1,37.5,37.5,0,0,0,5.7-.9,3.7,3.7,0,0,0,1.6-.9.7.7,0,0,0-.2-.9c.4.2,1,.4.9.9a2.6,2.6,0,0,1-1.2,1.1,23.2,23.2,0,0,1-4.5,1.3,58.8,58.8,0,0,1-13.9.9,74.6,74.6,0,0,1-10.4-1,2.6,2.6,0,0,1-1.7-.7.7.7,0,0,1,.2-1,7.5,7.5,0,0,1,2.5-1.3Z"></path> <path d="M37.8,43.5a8.3,8.3,0,0,0,3.1-1.6c-.1.9-1,1.5-1.8,1.9A17.7,17.7,0,0,1,34,45.3a60.7,60.7,0,0,1-11.3.6,39.4,39.4,0,0,1-7.7-.6,5.6,5.6,0,0,1-1.8-.7,38.2,38.2,0,0,0,6.8.6,84.8,84.8,0,0,0,11.3-.4,46.7,46.7,0,0,0,6.5-1.3Z"></path> </g> </g> </g> </g></svg>                            
                </div>
                    <div className="grid grid-cols-1 gap-y-6">
                        <h2 className='text-2xl font-extrabold text-gray-600 dark:text-teal-300 '>Programming Languages</h2>
                        <p className="text-sm font-normal text-gray-500 dark:text-gray-300 ">
                        Programming languages are versatile, powerful, flexible, customizable, efficient, and dynamic tools that help create a wide range of applications and automate tasks, making them incredibly helpful in various domains.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    <Footer />
    </>
  )
}

export default Services