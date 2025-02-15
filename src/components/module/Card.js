import Image from "next/image";
import Link from "next/link";

function Card(props) {
    const {id, title, image, price ,options, fleetVehicle} = props;

    return(
        <div className="w-[278px] h-[277px] my-10 border rounded-[10px] bg-[#fff]">
            <Image
                className="w-[278px] h-[159px] rounded-t-[10px]"
                src={image}
                alt="image"
                width={280}
                height={280}
            />
            <div className=" overflow-x-auto mt-2">
                <h1 className="px-2 text-[22px] font-normal">{title}</h1>
                <div className="flex w-[255px] mt-1 px-2 text-[15px] font-normal text-gray-500 overflow-x-auto">
                    <h2>{`${fleetVehicle} - ${options}`}</h2>
                </div>
                <div className="flex flex-row-reverse items-center justify-between mt-2 p-2 border-t rounded-b-[10px]">
                    <h3 className="flex items-center text-[#009ECA] text-base font-normal">
                        {price}
                        <p className="mr-2 text-xs text-gray-500">تومان</p>
                    </h3>
                    <button className="w-[64px] h-[25px] text-[#fff] bg-[#28A745] hover:bg-green-700 rounded">
                        <Link href={`/tours/${id}`}> رزرو</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card