'use client';

import { useRouter } from "next/navigation";

const Title = () => {
    const router = useRouter();
    return ( 
        <div className="text text-lg font-bold cursor-default">
            thinesjs
        </div>
     );
}
 
export default Title;