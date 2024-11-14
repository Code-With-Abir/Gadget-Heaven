
const Footer = () => {
    return (
<div className="bg-slate-100 mt-4">

<div className="w-10/12 mx-auto py-10 ">
            <div className="text-center pb-4 ">
                <h1 className="font-bold text-3xl mb-2">Gadget Heaven</h1>
                <p className="">Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full space-y-10 md:space-x-0 mx-auto">
                <div className="1 text-center">
                    <h1 className="font-bold text-lg pb-3">Services</h1>
                    <ul className="space-y-1">
                        <li className="font-semibold text-sm ">Product Support</li>
                        <li className="font-semibold text-sm ">Order Tracking</li>
                        <li className="font-semibold text-sm ">Hipping & Delivery</li>
                        <li className="font-semibold text-sm ">Returns</li>
                    </ul>
                </div>

                <div className="2 text-center">
                    <h1 className="font-bold text-lg pb-3">Company</h1>
                    <ul className="space-y-1">
                        <li className="font-semibold text-sm ">About Us</li>
                        <li className="font-semibold text-sm ">Careers</li>
                        <li className="font-semibold text-sm ">Contacts</li>
                    </ul>
                </div>

                <div className="3 text-center">
                    <h1 className="font-bold text-lg pb-3">Legal</h1>
                    <ul className="space-y-1">
                        <li className="font-semibold text-sm ">Terms of Service</li>
                        <li className="font-semibold text-sm ">Privacy Policy</li>
                        <li className="font-semibold text-sm ">Cookie Policy</li>
                    </ul>
                </div>
            </div>
        </div>
</div>
    );
};

export default Footer;