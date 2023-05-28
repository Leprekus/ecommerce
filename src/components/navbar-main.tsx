import Image from 'next/image'
import React from 'react'
import List from './List'
import HoverMenu from './hover-menu'
import User from './User'

export default function NavbarMain() {
  return (
    <nav className='max-w-7xl inset-x-0 mx-auto fixed w-full flex flex-col items-center gap-2'>
        <div className='w-full h-fit bg-orange-500 flex justify-between p-4 items-center text-white'>
            <Image src='https://cdn.shopify.com/s/files/1/0702/9579/files/Petland_Canada_white_8dcf7ab2-89ef-4f11-af2b-8b3650511386_175x.png?v=1681105249' width={200} height={200} alt='logo'/>
            <div className='flex gap-4'>
                <p>search</p>
                <User/>
                <p>cart</p>
            </div>
        </div>
        <ul className='flex text-slate-800'>
            <li className='hover-menu py-2 px-2 w-24 h-10 text-center hover:bg-orange-100 transition-all delay-75 rounded-md'>
                <p>Dog</p>
                <HoverMenu position='right-0'>

                <List color='orange'>
                    <p>Food Center</p>
                    <p>Health Care</p>
                    <p>Toys</p>
                </List>

                <div className='min-h-full bg-slate-300 w-[1px]'/>
                
                <List color='orange'>
                    <p>Grooming</p>
                    <p>Kennels, Gates & Doors</p>
                    <p>Bowls and Feeders</p>
                </List>

                <div className='min-h-full bg-slate-300 w-[1px]'/>

                <List color='orange'>
                    <p>Outdoor & Travel</p>
                    <p>Treats</p>
                    <p>Collars, Leashes & Tags</p>
                </List>

                <List color='orange'>
                    <p>Training & Behavior</p>
                    <p>Beds & Furniture</p>
                    <p>Clothes & Boots</p>
                </List>

                <div className='min-h-full bg-slate-300 w-[1px]'/>

                <List color='orange'>
                    <p>Boutique</p>
                </List>

                </HoverMenu>
            </li>
            <li className='hover-menu py-2 px-2 w-24 h-10 text-center hover:bg-purple-100 transition-all delay-75 rounded-md'>
                Cat
                <HoverMenu position='right-10'>
                <List color='purple'>
                    <p>Food Center</p>
                    <p>Treats</p>
                    <p>Collars, Leashes & Tags</p>
                </List>

                <div className='min-h-full bg-slate-300 w-[1px]'/>

                <List color='purple'>
                    <p>Kennels Gates & Doors</p>
                    <p>Toys</p>
                    <p>Bowls & Feeders</p>
                </List>

                <div className='min-h-full bg-slate-300 w-[1px]'/>

                <List color='purple'>
                    <p>Grooming</p>
                    <p>Training Behavior</p>
                    <p>Health Care</p>
                </List>


                <List color='purple'>
                    <p>Litter & Accessories</p>
                    <p>Beds Furniture & Scratchers</p>
                    <p>Pet Costumes</p>
                </List>

                <div className='min-h-full bg-slate-300 w-[1px]'/>

                </HoverMenu>
            </li>
            <li className='hover-menu py-2 px-2 w-24 h-10 text-center hover:bg-cyan-100 transition-all delay-75 rounded-md'>
                Fish
                <HoverMenu position='right-10'>


                <List color='cyan'>
                    <p>Food</p>
                    <p>Filtration & Circulation</p>
                    <p>Aquariums & Kits</p>
                </List>

                <div className='min-h-full bg-slate-300 w-[1px]'/>

                <List color='cyan'>
                    <p>Cleaning & Maintenance</p>
                    <p>Lighting & Fixtures</p>
                    <p>Heating</p>
                </List>

                <div className='min-h-full bg-slate-300 w-[1px]'/>

                <List color='cyan'>
                    <p>Pumps & Accessories</p>
                    <p>Decor</p>
                    <p>Marine Care</p>
                </List>

                
                <List color='cyan'>
                    <p>Water Condditioners</p>
                    <p>Substrates</p>
                    <p>Pond Accessories</p>
                </List>
                </HoverMenu>
            </li>
            <li className='hover-menu py-2 px-2 w-24 h-10 text-center hover:bg-yellow-100 transition-all delay-75 rounded-md'>
                Small Pet
                <HoverMenu position='right-10'>
                <List color='yellow'>
                    <p>Food</p>
                    <p>Hays & Grasses</p>
                    <p>Toys</p>
                </List>

                <div className='min-h-full bg-slate-300 w-[1px]'/>

                <List color='yellow'>
                    <p>Grooming</p>
                    <p>Treats</p>
                    <p>Accessories</p>
                </List>

                <div className='min-h-full bg-slate-300 w-[1px]'/>

                <List color='yellow'>
                    <p>Substrates</p>
                    <p>Feeders & Waterers</p>
                    <p>Habitats & Cages</p>
                </List>


                <List color='yellow'>
                    <p>Health Care</p>
                </List>
                </HoverMenu>
                </li>
            <li className='hover-menu py-2 px-2 w-24 h-10 text-center hover:bg-lime-100 transition-all delay-75 rounded-md'>
                Reptile
                <HoverMenu position='right-10'>

                <List color='lime'>
                    <p>Food</p>
                    <p>Filtration & Circulation</p>
                    <p>Vitamins & Health Care</p>
                </List>

                <div className='min-h-full bg-slate-300 w-[1px]'/>

                <List color='lime'>
                    <p>Decor</p>
                    <p>Feeding & Watering</p>
                    <p>Heating & Ligthning</p>
                </List>

                <div className='min-h-full bg-slate-300 w-[1px]'/>

                <List color='lime'>
                    <p>Cleaning & Maintenance</p>
                    <p>Accessories</p>
                    <p>Habitats</p>
                </List>

                
                <List color='lime'>
                    <p>Substrates</p>
                    <p>Hermit Crab Supplies</p>
                </List>
                </HoverMenu>
            </li>
            <li className='hover-menu py-2 px-2 w-24 h-10 text-center hover:bg-sky-100 transition-all delay-75 rounded-md'>
                Bird
                <HoverMenu position='right-10'>
                <List color='sky'>
                    <p>Food</p>
                    <p>Treats</p>
                    <p>Toys</p>
                </List>

                <div className='min-h-full bg-slate-300 w-[1px]'/>

                <List color='sky'>
                    <p>Health Care</p>
                    <p>Feeders & Waterers</p>
                    <p>Accesories</p>
                </List>

                <div className='min-h-full bg-slate-300 w-[1px]'/>

                <List color='sky'>
                    <p>Cages and Stands</p>
                </List>
                </HoverMenu>
            </li>

            <li className='hover-menu py-2 px-2 w-24 text-center hover:bg-slate-100 transition-all rounded-md'>
                Discover
                <HoverMenu position='right-10'>
                    <List color='slate'>
                    <p>Tags</p>
                    <p>Store Locations</p>
                    <p>Gift Cards</p>
                    </List>
                    
                    <div className='min-h-full bg-slate-300 w-[1px]'/>

                    <List color='slate'>
                        <p>Pet Tips</p>
                        <p>Petland Parties</p>
                        <p>Services</p>
                    </List>

                    <div className='min-h-full bg-slate-300 w-[1px]'/>

                    <List color='slate'>
                        <p>Careers</p>
                    </List>
                </HoverMenu>
            </li>
        </ul></nav>
  )
}

/*
<ul className=''>
        <li className='hover-menu my-4 py-2 px-2 w-72 h-12 bg-slate-100 hover:bg-slate-200 transition-all delay-75 rounded-md'>Tags</li>
        <li className='hover-menu my-4 py-2 px-2 w-72 h-12 bg-slate-100 hover:bg-slate-200 transition-all delay-75 rounded-md'>Store Locations</li>
        <li className='hover-menu my-4 py-2 px-2 w-72 h-12 bg-slate-100 hover:bg-slate-200 transition-all delay-75 rounded-md'>Gift Cards</li>
    </ul>
    
    <div className='min-h-full bg-slate-300 w-[1px]'/>

    <ul>
        <li className='hover-menu my-4 py-2 px-2 w-72 h-12 bg-slate-100 hover:bg-slate-200 transition-all delay-75 rounded-md'>Pet Tips</li>
        <li className='hover-menu my-4 py-2 px-2 w-72 h-12 bg-slate-100 hover:bg-slate-200 transition-all delay-75 rounded-md'>Petland Parties</li>
        <li className='hover-menu my-4 py-2 px-2 w-72 h-12 bg-slate-100 hover:bg-slate-200 transition-all delay-75 rounded-md'>Services</li>
    </ul>

    <div className='min-h-full bg-slate-300 w-[1px]'/>

    <ul>
        <li className='hover-menu my-4 py-2 px-2 w-72 h-12 bg-slate-100 hover:bg-slate-200 transition-all delay-75 rounded-md'>Careers</li>
    </ul>
*/