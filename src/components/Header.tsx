import Container from "./Container.tsx";
import TV from "./icons/TV.tsx";
import {Bars3Icon, MagnifyingGlassIcon, XMarkIcon} from "@heroicons/react/24/outline";
import {Dialog} from "@headlessui/react";
import {useState} from "react";

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <Container>
                <nav className="flex items-center justify-between py-6" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="/" className="flex items-center -m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <TV/>
                            <span className={'ml-2 font-semibold text-xl text-white'}>MovieBox</span>
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                        </button>
                    </div>
                    <div
                        className="hidden lg:flex items-center flex-1 max-w-md border relative p-2 rounded-md lg:gap-x-2">
                        <input type={"text"} placeholder={"What do you want to watch?"}
                               className={"bg-transparent text-white outline-none focus:outline-none w-full"}/>
                        <MagnifyingGlassIcon className="h-6 absolute pointer-events-auto right-2 w-6 text-white"
                                             aria-hidden="true"/>
                    </div>
                    <div className="hidden items-center gap-4 lg:flex lg:flex-1 lg:justify-end">
                        <a href="#" className="text-sm font-semibold leading-6 text-white">
                            Sign in
                        </a>
                        <button className={"bg-red-700 p-2 rounded-full"}>
                            <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true"/>
                        </button>
                    </div>
                </nav>
            </Container>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50"/>
                <Dialog.Panel
                    className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                alt=""
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-400"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/25">
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>    )
}

export default Header