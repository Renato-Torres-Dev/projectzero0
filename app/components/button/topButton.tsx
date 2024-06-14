'use client'
export const TopButton = () => {
  return (
    <button
      type="button"
      data-twe-ripple-init
      data-twe-ripple-color="light"
      className="!fixed bottom-5 end-5 rounded-full bg-fuchsia-600 p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-fuchsia-800 hover:shadow-lg focus:bg-fuchsia-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-fuchsia-500 active:shadow-lg"
      id="btn-back-to-top"
      onClick={() => {
        window.scrollTo({ top: 0 , behavior: "smooth" })
      }}
    >
      <span className="[&>svg]:w-4">
        <svg
          xmlns="https://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="3"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
          />
        </svg>
      </span>
    </button>
  )
}