import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-navbar-light dark:bg-navbar-dark h-10 border-t dark:border-none overflow-hidden'>
        <div className=' flex container mx-auto w-full whitespace-nowrap justify-between'>
            <ul className='flex w-1/3 justify-end gap-6'>
                <li>
                    <button className='flex items-center h-full justify-center w-7 rounded-lg hover:bg-slate-100 dark:hover:bg-[#333333] duration-75'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" zoomAndPan="magnify" viewBox="0 0 30 30.000001" height="40" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="id1"><path d="M 2.371094 2.394531 L 26 2.394531 L 26 26 L 2.371094 26 Z M 2.371094 2.394531 " clipRule="nonzero"/></clipPath></defs><g clipPath="url(#id1)"><path fill="rgb(27.059937%, 39.99939%, 55.688477%)" d="M 13.496094 2.597656 C 10.730469 2.804688 8.210938 3.941406 6.230469 5.875 C 3.625 8.414062 2.375 12.011719 2.839844 15.625 C 3.414062 20.140625 6.601562 23.902344 10.976562 25.234375 C 14.359375 26.265625 18.125 25.652344 20.992188 23.613281 C 24.515625 21.101562 26.347656 16.9375 25.804688 12.675781 C 25.230469 8.15625 22.042969 4.394531 17.667969 3.0625 C 16.304688 2.660156 14.914062 2.503906 13.496094 2.601562 Z M 14.378906 9.773438 C 14.96875 9.832031 15.265625 9.925781 15.398438 10.097656 C 15.433594 10.144531 15.488281 10.261719 15.523438 10.359375 C 15.589844 10.5625 15.59375 10.792969 15.550781 12.527344 C 15.523438 13.609375 15.539062 13.945312 15.628906 14.183594 C 15.726562 14.460938 15.960938 14.585938 16.164062 14.480469 C 16.347656 14.382812 16.777344 13.914062 17.058594 13.492188 C 17.707031 12.53125 18.101562 11.789062 18.574219 10.640625 C 18.671875 10.414062 18.800781 10.261719 18.933594 10.226562 C 18.984375 10.210938 19.742188 10.199219 20.667969 10.195312 L 22.308594 10.191406 L 22.449219 10.25 C 22.632812 10.304688 22.714844 10.429688 22.695312 10.621094 C 22.695312 10.980469 22.320312 11.722656 21.675781 12.625 C 21.585938 12.75 21.253906 13.195312 20.933594 13.613281 C 20.230469 14.535156 20.078125 14.75 19.972656 14.976562 C 19.835938 15.257812 19.871094 15.492188 20.082031 15.765625 C 20.140625 15.84375 20.453125 16.15625 20.769531 16.460938 C 21.65625 17.3125 22.058594 17.757812 22.386719 18.246094 C 22.621094 18.601562 22.714844 18.859375 22.675781 19.085938 C 22.65625 19.207031 22.535156 19.355469 22.394531 19.425781 C 22.230469 19.511719 21.976562 19.527344 20.582031 19.546875 L 19.261719 19.5625 L 19.046875 19.492188 C 18.503906 19.3125 18.140625 19.007812 17.316406 18.054688 C 16.859375 17.527344 16.519531 17.265625 16.285156 17.265625 C 16.070312 17.265625 15.789062 17.550781 15.679688 17.910156 C 15.597656 18.148438 15.570312 18.335938 15.542969 18.75 C 15.515625 19.246094 15.457031 19.355469 15.15625 19.480469 C 15.046875 19.53125 13.683594 19.546875 13.324219 19.507812 C 12.601562 19.429688 11.933594 19.199219 11.269531 18.8125 C 10.304688 18.25 9.714844 17.742188 9.082031 16.9375 C 7.984375 15.53125 7.234375 14.335938 6.324219 12.535156 C 5.976562 11.832031 5.558594 10.925781 5.492188 10.707031 C 5.425781 10.484375 5.519531 10.300781 5.738281 10.230469 C 5.8125 10.207031 6.234375 10.195312 7.191406 10.179688 L 8.539062 10.167969 L 8.695312 10.226562 C 8.941406 10.320312 9.042969 10.445312 9.214844 10.851562 C 9.359375 11.195312 10.136719 12.753906 10.378906 13.191406 C 10.628906 13.628906 10.890625 14 11.121094 14.214844 C 11.402344 14.492188 11.527344 14.558594 11.726562 14.542969 C 11.894531 14.527344 11.9375 14.488281 12.042969 14.261719 C 12.296875 13.714844 12.335938 11.867188 12.109375 11.140625 C 11.980469 10.726562 11.785156 10.570312 11.246094 10.453125 C 11.152344 10.433594 11.152344 10.398438 11.238281 10.273438 C 11.445312 9.976562 11.816406 9.832031 12.523438 9.773438 C 12.910156 9.742188 14.058594 9.738281 14.375 9.773438 Z M 14.378906 9.773438 " fillOpacity="1" fillRule="nonzero"/></g></svg>
                    </button>
                </li>
                <li>
                    <button className='flex items-center h-full justify-center w-7 rounded-lg hover:bg-slate-100 dark:hover:bg-[#333333] duration-75'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telegram" viewBox="0 0 16 16"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/> </svg>
                    </button>
                </li>
                <li>
                    <button className='flex items-center h-full justify-center w-7 rounded-lg hover:bg-slate-100 dark:hover:bg-[#333333] duration-75'>

                    </button>
                </li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer