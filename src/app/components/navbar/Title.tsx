'use client';

import { useRouter } from "next/navigation";

const Title = () => {
    const router = useRouter();
    return ( 
        <div className="text text-lg font-bold cursor-default">
            thinesjs {String.fromCodePoint(Number('0x1F3C2'))}
        </div>
     );
}
 
export default Title;