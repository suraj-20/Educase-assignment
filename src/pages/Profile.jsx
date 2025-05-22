
const Profile = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const name = user?.name || 'Guest User';
    const email = user?.email || 'Not logged in';
    const company = user?.company || '';

    return (
        <div className="min-h-screen bg-gray-50 flex items-start justify-center">
            <div className="w-full max-w-md mx-4 mt-8">
                <div className="bg-white rounded-t-xl shadow-none">
                    <h2 className="text-lg font-semibold p-6 pb-3 text-left border-b-1 border-gray-300">Account Settings</h2>
                    <div className="bg-[#e4e4e463]">
                        <div className="flex items-center gap-4 px-6 pt-5 pb-2">
                            <div className="relative">
                                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="profile" className="rounded-full w-16 h-16 object-cover border" />
                                <span className="absolute bottom-0 right-0 bg-violet-600 p-1 rounded-full border-2 border-white">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M4 13V7l6-4 6 4v6l-6 4-6-4z" />
                                    </svg>
                                </span>
                            </div>
                            <div className="flex flex-col justify-center">
                                <span className="font-semibold text-sm mb-1">{name}</span>
                                <span className="text-gray-500 text-xs">{email}</span>
                                {company && (
                                    <span className="text-gray-400 text-xs mt-0.5">{company}</span>
                                )}
                            </div>
                        </div>
                        <div className="px-6 pb-6 pt-2">
                            <p className="text-sm text-gray-600 font-medium">
                                Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquam Erat, Sed Diam
                            </p>
                        </div>
                        <div className="border-t border-gray-400 border-dashed py-4"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;