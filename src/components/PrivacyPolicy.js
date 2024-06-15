import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
    return(
        <div className="p-2 m-2 h-dvh text-justify">
            <h1 className="text-4xl font-bold p-1 ">Privacy Policy</h1>
            <h5 className="text-l font-semibold p-2">Effective Date: 15th July 2024</h5>
            <h3 className="text-m font-bold">1. Introduction</h3>
            <p>Welcome to <span className="text-l font-semibold">Recipe Retreat</span>. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines the types of personal information we collect, how we use it, and the steps we take to ensure it is protected.</p>
            <h3 className="text-m font-bold">2. Information We Collect</h3>
            <p>
            We may collect the following types of information:
            Personal Information: When you register on our website, subscribe to our newsletter, or interact with us in other ways, we may collect personal information such as your name, email address, and any other details you provide. Usage Data: We collect information about your interactions with our website, such as your IP address, browser type, pages visited, and the time and date of your visit. This helps us understand how you use our site and improve your experience.
            </p>
            <h3 className="text-m font-bold">3. How We Use Your Information</h3>
            <p>
            We use your information for the following purposes:
                To Provide and Improve Our Services: We use your information to deliver the services you request, such as sending newsletters, providing recipes, and responding to your inquiries.
                To Personalize Your Experience: We may use your information to tailor our website and communications to your interests and preferences.
                To Analyze and Improve Our Website: We use usage data to understand how our website is used and to make improvements.
            
            </p>
            <h3 className="text-m font-bold">4. Sharing Your Information</h3>
            <p>
            We do not sell, trade, or otherwise transfer your personal information to outside parties except as described below: Service Providers: We may share your information with third-party service providers who assist us in operating our website, conducting our business, or serving our users, as long as those parties agree to keep this information confidential. Legal Requirements: We may disclose your information if required to do so by law or in response to valid requests by public authorities.
            </p>
            <h3 className="text-m font-bold">5. Data Security</h3>
            <p>We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.</p>
            <h3 className="text-m font-bold">6. Cookies</h3>
            <p>
            We use cookies and similar tracking technologies to track the activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
            </p>
            <button type="submit" class=" p-2 m-3 text-sm font-medium text-center text-black rounded-lg bg-blue-600 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"><Link to="/contact">Contact Us</Link></button>
            <button type="submit" class=" p-2 m-3 text-sm font-medium text-center text-black rounded-lg bg-blue-600 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"><Link to="/">Back Home</Link></button>
        </div>
    );
};


export default PrivacyPolicy;