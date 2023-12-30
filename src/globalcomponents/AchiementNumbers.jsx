const AchievementNumbers =()=>{
    return (
      <div className="flex flex-wrap items-center">
        <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
          <div className="p-6 bg-white">
            <span className="text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-file-earmark-text w-10 h-10"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
              </svg>
            </span>
            <p className="mt-4 mb-2 text-3xl font-bold text-gray-700">2</p>
            <h2 className="text-sm text-gray-700">Cohorts</h2>
          </div>
        </div>
        <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
          <div className="p-6 bg-white">
            <span className="text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-people-fill w-10 h-10"
                viewBox="0 0 16 16"
              >
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                <path
                  fill-rule="evenodd"
                  d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                />
                <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
              </svg>
            </span>
            <p className="mt-4 mb-2 text-3xl font-bold text-gray-700">50+</p>
            <h2 className="text-sm text-gray-700">Events</h2>
          </div>
        </div>
        <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
          <div className="p-6 bg-white">
            <span className="text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-person-fill w-10 h-10"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
            </span>
            <p className="mt-4 mb-2 text-3xl font-bold text-gray-700">1000+</p>
            <h2 className="text-sm text-gray-700">Members</h2>
          </div>
        </div>
        <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
          <div className="p-6 bg-white">
            <span className="text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-alarm-fill w-10 h-10"
                viewBox="0 0 16 16"
              >
                <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z" />
              </svg>
            </span>
            <p className="mt-4 mb-2 text-3xl font-bold text-gray-700">1000+</p>
            <h2 className="text-sm text-gray-700">Trained</h2>
          </div>
        </div>
      </div>
    );
}
export default AchievementNumbers