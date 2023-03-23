import Link from 'next/link'
import {ArrowUturnLeftIcon} from "@heroicons/react/24/solid";
function StudioNavbar(props: any) {
  return (
    <div>
        <div className="flex items-center justify-between p-5">
            <Link href="/" className="text-[#F4A261] flex items-center">
                <ArrowUturnLeftIcon className="h-6 w-6 text-[#F4A261] mr-2"/>
                Go to Website
            </Link>
            <div className="text-[#F4A261] font-bold uppercase tracking-[5px]">Stevie Productions</div>
        </div>
        <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNavbar