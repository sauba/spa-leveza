import { Menu, Transition } from "@headlessui/react"
import { House, ListBullets } from "@phosphor-icons/react"
import { Fragment } from "react"

export default function NavbarDropdownMenu() {
  return (
    <div className="flex justify-start items-start border-none outline-none min-h-screen">
      <Menu as="div" className="relative">
        {({ open }) => (
          <Fragment>
            <Menu.Button className="inline-flex justify-items-start rounded-md text-red-50 border-none outline-none">
              <ListBullets
                size={68}
                weight="thin"
                color="white"
                className={`py-4`}
              />
            </Menu.Button>

            {/* Menu Items */}
            <Transition
              show={open}
              enter="transform transition duration-100 ease-in"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transform transition duration-75 ease-out"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-left absolute left-0 w-full bg-transparent">
                <div className="flex-col justify-start items-start">
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`
                          flex
                          justify-center
                          items-center
                                                       
                          ${active
                            ? "bg-purple-800 text-red-50 text-2xl font-bold animate-wiggle"
                            : "bg-purple-800 text-red-50 font-bold"
                          }
                        `}
                      >
                        <a
                          href="/"
                          className={`
                            flex
                            items-center
                            px-4
                            py-2
                            text-sm
                            hover:text-lg
                          `}
                        >
                          <House size={32} weight="thin" color="white" className={`hover:animate-wiggle hover:transition-transform hover:scale-125`} />
                        </a>
                      </div>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`
                          flex
                          justify-center
                          items-center
                                                      
                          ${active
                            ? "bg-purple-800 text-red-50 text-2xl font-bold animate-wiggle"
                            : "bg-purple-800 text-red-50 font-bold"
                          }
                        `}
                      >
                        <a
                          href="#about"
                          className={`
                            flex
                            items-center
                            px-4
                            py-2
                            text-sm
                            hover:text-lg
                          `}
                        >
                          Sobre
                        </a>
                      </div>
                    )}
                  </Menu.Item>


                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`
                          flex
                          
                          justify-center
                          items-center
                          ${active
                            ? "bg-purple-500 text-red-50 text-2xl font-bold hover:cursor-none"
                            : "bg-purple-500 text-red-50 font-bold"
                          }
                        `}
                      >
                        <p
                          className={`
                            flex
                            items-center
                            px-4
                            py-2
                            text-sm
                            gap-3
                            hover:font-bold
                            hover:text-lg
                          `}
                        >
                          Serviços
                        </p>
                      </div>
                    )}
                  </Menu.Item>


                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`
                          flex
                          
                          justify-center
                          items-center
                          ${active
                            ? "bg-purple-800 text-red-50 text-xl font-bold animate-wiggle"
                            : "bg-purple-800 text-red-50 font-bold"
                          }
                        `}
                      >
                        <a
                          href="#levetarot"
                          className={`
                            flex
                            items-center
                            px-4
                            py-2
                            text-sm
                            gap-3
                            hover:font-bold
                            hover:text-lg
                          `}
                        >
                          Leve Tarot
                        </a>
                      </div>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`
                          flex
                          
                          justify-center
                          items-center
                          ${active
                            ? "bg-purple-800 text-red-50 text-2xl text-center font-bold animate-wiggle"
                            : "bg-purple-800 text-red-50 font-bold"
                          }
                        `}
                      >
                        <a
                          href="#terapiasholisticas"
                          className={`
                            flex
                            items-center
                            px-2
                            py-2
                            text-sm
                            gap-3
                            hover:font-bold
                            hover:text-lg
                          `}
                        >
                          Terapias Holísticas
                        </a>
                      </div>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`
                          flex
                          
                          justify-center
                          items-center
                          ${active
                            ? "bg-purple-800 text-red-50 text-2xl text-center font-bold animate-wiggle"
                            : "bg-purple-800 text-red-50 font-bold"
                          }
                        `}
                      >
                        <a
                          href="#gruposdeterapias"
                          className={`
                            flex
                            items-center
                            px-2
                            py-2
                            text-sm
                            gap-3
                            hover:font-bold
                            hover:text-lg
                          `}
                        >
                          Grupos de Terapias
                        </a>
                      </div>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`
                          flex
                          
                          justify-center
                          items-center
                          ${active
                            ? "bg-purple-500 text-red-50 text-2xl font-bold hover:cursor-none"
                            : "bg-purple-500 text-red-50 font-bold"
                          }
                        `}
                      >
                        <a
                          href="#produtos"
                          className={`
                            flex
                            items-center
                            px-4
                            py-2
                            text-sm
                            gap-3
                            hover:font-bold
                            hover:text-lg
                          `}
                        >
                          Produtos
                        </a>
                      </div>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`
                          flex
                          
                          justify-center
                          items-center
                          ${active
                            ? "bg-purple-800 text-red-50 text-2xl font-bold animate-wiggle"
                            : "bg-purple-800 text-red-50 font-bold"
                          }
                        `}
                      >
                        <a
                          href="#contato"
                          className={`
                            flex
                            items-center
                            px-4
                            py-2
                            text-sm
                            gap-3
                            hover:font-bold
                            hover:text-lg
                          `}
                        >
                          Contato
                        </a>
                      </div>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Fragment>
        )}
      </Menu>
    </div>
  )
}