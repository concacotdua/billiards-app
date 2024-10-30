import { FaFacebook, FaTwitter, FaGoogle, FaInstagram } from "react-icons/fa";

const FollowsUs = () => {
    const socialLinks = [
        {
            icon: <FaFacebook className="text-[2.2rem]" />,
            url: "https://www.facebook.com",
            label: "Follow us on Facebook",
            bgColor: "bg-blue-700"
        },
        {
            icon: <FaTwitter className="text-[2.2rem]" />,
            url: "https://www.twitter.com",
            label: "Follow us on Twitter",
            bgColor: "bg-blue-400"
        },
        {
            icon: <FaGoogle className="text-[2.2rem]" />,
            url: "https://www.google.com",
            label: "Follow us on Google",
            bgColor: "bg-red-400"
        },
        {
            icon: <FaInstagram className="text-[2.2rem]" />,
            url: "https://www.instagram.com",
            label: "Follow us on Instagram",
            bgColor: "bg-black/70"
        }
    ];

    return (
        <div className="flex items-center gap-4 justify-center w-full h-full text-white my-6">
            {socialLinks.map(({ icon, url, label, bgColor }) => (
                <a 
                    key={label} 
                    href={url} 
                    aria-label={label} 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <div className={`${bgColor} rounded-full p-12 hover:scale-105 transition-transform`}>
                        {icon}
                    </div>
                </a>
            ))}
        </div>
    );
}

export default FollowsUs;
