import React from 'react'
import axios from '@/utils/axios'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Fonts } from './SliderHotels';

const HotSaleSlider: React.FC<Fonts> = ({ roboto }) => {

	const [paris, setParis] = useState(null);
	const [bali, setBali] = useState(null);

	
const router = useRouter()
	

	useEffect(() => {
		const fetchParis = async () => {
		  try {
			const token = process.env.NEXT_PUBLIC_TOKEN_FETCH
	
			const response = await axios.get('/hotel/findhotel?name=Hotel du Collectionneur', {
			  headers: {
				Authorization: `Bearer ${token}`
			  }
			});
			setParis(response.data[0]); 
		  } catch (error) {
			console.error('Error en la petición:', error);
		  }
		};
	
		const fetchBali = async () => {
		  try {
			const token = process.env.NEXT_PUBLIC_TOKEN_FETCH
	
			const response = await axios.get('/hotel/findhotel?name=The Kayon Valley Resort', {
			  headers: {
				Authorization: `Bearer ${token}`
			  }
			});
			setBali(response.data[0]); 
		  } catch (error) {
			console.error('Error en la petición:', error);
		  }
		};
	
		fetchParis();
		fetchBali();
	  }, []);

	
	  


	return (
		<div className=' grid grid-cols-2 mt-5 gap-5'>
			<div className='flex flex-col justify-between'>
				

				<button className='relative h-56 shadow-img rounded-3xl'
				onClick={()=> {
					router.push(`/detail/${paris.id}`)
				}}>
					<img
						src={paris?.image}
						alt=''
                        className=' rounded-3xl h-full object-cover'
					/>
					<div className={` text-white absolute bottom-3 w-full p-3 pb-0 h-20 leading-4`}>
						<h2 className={`${roboto.className} tracking-wide  text-sm `}>{paris?.name}</h2>
						<div className='flex justify-between items-center'>
							<h2 className={`${roboto.className} tracking-wider text-sm`}>Paris</h2>
							<h3>$400</h3>
						</div>
						<div className='flex justify-between items-center text-xs'>
							<p className=''>France</p>
							<p className=''>/per night</p>
						</div>
					</div>
                </button>
				
                <div className=' bg-orangeBg w-full text-white h-24 mt-5 rounded-3xl shadow-img flex justify-center items-center'>
                   
                   <div className='w-full text-center text-sm'>
                    <p className='w-full'>Holiday Deals</p>
                    <p className='w-full'>50% off</p>
                    </div> 
                </div>
			</div>
			<div className='flex flex-col justify-between'>
				<div className=' bg-orangeBg w-full h-24 text-white mb-5 rounded-3xl shadow-img flex justify-center items-center'>
                <div className='w-full text-center text-sm'>
                    <p className='w-full'>Holiday Deals</p>
                    <p className='w-full'>50% off</p>
                    </div> 
                </div>

				<button className='relative  h-56 shadow-img rounded-3xl'
				onClick={()=> {
					router.push(`/detail/${bali.id}`)
				}}>
					<img
						src={bali?.image}
						alt=''
                        className=' rounded-3xl h-full object-cover'
					/>
					<div className={` text-white absolute bottom-3 w-full p-3 pb-0 h-20 leading-4`}>
						<h2 className={`${roboto.className} tracking-wide  text-sm `}>The Kayon Valley Resort</h2>
						<div className='flex justify-between items-center  '>
							<h2 className={`${roboto.className} tracking-wider text-sm`}>Bali</h2>
							<h3>$200</h3>
						</div>
						<div className='flex justify-between items-center text-xs'>
							<p className=''>Indonesia</p>
							<p className=''>/per night</p>
						</div>
					</div>
				</button>
			</div>
		</div>
	);
};

export default HotSaleSlider;
