import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/error-404.png'
import { FaDumbbell, FaArrowLeft } from 'react-icons/fa6';

const NotFound = () => {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
            {/* Card Container */}
            <div className="bg-[#121316] border border-zinc-800/80 p-8 sm:p-12 rounded-3xl max-w-md w-full shadow-2xl flex flex-col items-center gap-5 relative overflow-hidden">
                
                {/* Glow Effect */}
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#ccff00]/10 rounded-full blur-3xl pointer-events-none" />

                {/* Gym Icon */}
                <div className="w-16 h-16 bg-[#ccff00]/10 border border-[#ccff00]/20 rounded-2xl flex items-center justify-center text-[#ccff00] text-3xl mb-2">
                    <FaDumbbell className="transform -rotate-12" />
                </div>

                {/* Error Image */}
                <Image 
                    src={Logo}
                    alt="Error 404"
                    width={400}
                    height={300}
                    className="w-full h-auto object-contain"
                />

                {/* Action Button */}
                <Link
                    href="/"
                    className="mt-4 inline-flex items-center gap-2 bg-[#ccff00] text-black font-extrabold px-6 py-3 rounded-full hover:bg-[#bce600] transition-colors text-sm uppercase tracking-wider"
                >
                    <FaArrowLeft className="w-4 h-4" />
                    <span>Back to Workouts</span>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;