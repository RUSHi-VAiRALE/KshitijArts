import React,{Fragment,useState} from "react";
import {useNavigate } from "react-router-dom";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import cartComp from "../icons/cart-shopping-solid (2).svg"
import userIcon from "../icons/user-solid.svg"
import { useSelector,useDispatch } from "react-redux";
import {logout} from "../redux/userLogin"
import { logoutProducts } from "../redux/userCart";
import CartPop from "./cartPopUp"
import { setProduct } from "../redux/apiCalls";
import Popup from "reactjs-popup";


const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Products', href: '/products', current: false },
  { name: 'About', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

    const quantity = useSelector((state)=>state.cart.quantity);
    const user = useSelector((state)=>state.user.userName)
    const cartId = useSelector((state)=>state.user.currentUser)
    const [isPop , setPopUp] = useState(true)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleItems = () =>{
        if(user!==""){
            // const vis = document.getElementById("navCartDiv")
            // if(vis.style.visibility === "hidden"){
            //     vis.style.visibility = "visible"
            // }
            // else if(vis.style.visibility === "visible"){
            //     vis.style.visibility = "hidden"
            // }
            navigate("/cart")
        }

        else{
            alert("Please Sign First!");
            handleSignIN();
        }
    }


    const handleLogout=()=>{
        dispatch(logout())
        dispatch(logoutProducts())
        navigate("/")
    }

    const handleSignIN = () =>{
        console.log('first')
        navigate("/login");
    };



    // const ShowLogin = () => {
    //     const p = document.getElementById("divd")
    //     if (p != null) {
    //         p.style.visibility="visible"
    //     }
    //     if (isShowLogin) {
    //         return(
    //         <Login/>
    //     )
    //     }
    // }


    const checkConditionally=()=>{
        if(user!==""){
            return(
                <Menu.Button className="relative flex rounded-full bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={userIcon}
                        alt=""
                      />
                </Menu.Button>
            )
        }
        else{
            return(
                <div className="py-6">
                <a
                  onClick={()=>{
                    navigate('/login')
                  }}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base cursor-pointer font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            )
        }
    }

    const createDiv=()=>{
        if(quantity!==0){
            return(
                <p className="btnName" style={{
                    marginRight:"2px"
                }}>
                    {quantity}
                </p>
            )
        }
    }

    return (
    <Disclosure as="nav" className="bg-[#F7F7F7] w-full h-full">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 space-x-10 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  {/* <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  /> */}
                  <h1 className="text-2xl font-bold text-gray-900 tracking-[-0.05em] leading-[25px] text-[28px] text-black font-palanquin-dark font-normal font-inherit w-18 h-6 whitespace-nowrap">
              Kshitij.World
            </h1>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-10">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-black-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div onClick={handleItems} className="cartBag ml-4 flow-root lg:ml-6">
                  <a href="#" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
                {/* <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    {checkConditionally()}
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right cursor-pointer rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            onClick={handleItems}
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Cart
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            onClick={handleLogout}
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-black-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar;
