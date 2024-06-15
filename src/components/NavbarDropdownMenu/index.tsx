import { Menu, Transition } from "@headlessui/react"
import { House, ListBullets } from "@phosphor-icons/react"
import { Fragment } from "react"

export default function NavbarDropdownMenu() {
  return (
    <div className="flex justify-start items-start border-none outline-none overflow-hidden">
      <Menu as="div" className="w-full relative border-none outline-none">
        {({ open }) => (
          <Fragment>
            <Menu.Button className="inline-flex justify-items-start rounded-md text-zinc-100 border-none outline-none">
              <ListBullets
                size={68}
                weight="bold"
                className={`py-4 border-none outline-none hover:cursor-pointer text-zinc-100`}
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
              <Menu.Items className="w-full min-h-screen justify-center items-center bg-zinc-100/95 z-50">
                <div className="w-full flex-col justify-center items-center">
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`
                           flex
                           justify-center
                           items-center                                                       
                           ${active
                            ? "bg-gradient-to-tr from-lime-500 via-lime-600 to-lime-500 border-none cursor-pointer text-zinc-400 font-bold hover:rounded-r-2xl"
                            : "text-zinc-400 font-bold"
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
                          <House size={32} weight="bold" className={`text-zinc-400`} />
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
                            ? "text-zinc-400 font-bold hover:cursor-none"
                            : "text-zinc-400 font-bold"
                          }
                         `}
                      >
                        <p
                          className={`
                             flex
                             items-center
                             px-4
                             py-2
                             text-3xl
                             hover:cursor-none
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
                            ? "bg-gradient-to-tr from-lime-500 via-lime-600 to-lime-500 border-none cursor-pointer text-zinc-100 text-center font-bold hover:rounded-r-2xl"
                            : "text-zinc-400 font-bold"
                          }
                         `}
                      >
                        <a
                          href="#terapia"
                          className={`
                             flex
                             items-center
                             px-2
                             py-2
                             text-xl
                             xl:text-2xl  
                           `}
                        >
                          Terapia
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
                            ? "bg-gradient-to-tr from-lime-500 via-lime-600 to-lime-500 border-none cursor-pointer text-zinc-100 text-center font-bold hover:rounded-r-2xl"
                            : "text-zinc-400 font-bold"
                          }
                         `}
                      >
                        <a
                          href="#levezaSelvagem"
                          className={`
                             flex
                             items-center
                             text-center
                             px-2
                             py-2
                             text-xl
                             xl:text-2xl
                           `}
                        >
                          Leveza Selvagem
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
                            ? "bg-gradient-to-tr from-lime-500 via-lime-600 to-lime-500 border-none cursor-pointer text-zinc-100 font-bold hover:rounded-r-2xl hover:xl:text-2xl"
                            : "text-zinc-400 font-bold"
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
                             text-xl
                             xl:text-2xl
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
                            ? "text-zinc-400 font-bold hover:cursor-none"
                            : "text-zinc-400 font-bold"
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
                             text-3xl
                             gap-3
                             font-bold
                             hover:cursor-none
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
                            ? "bg-gradient-to-tr from-lime-500 via-lime-600 to-lime-500 border-none cursor-pointer text-zinc-100 font-bold hover:rounded-r-2xl hover:xl:text-2xl"
                            : "text-zinc-400 font-bold"
                          }
                         `}
                      >
                        <a
                          href="#caixinhaDaLeveza"
                          className={`
                             flex
                             items-center
                             px-4
                             py-2
                             text-xl
                             xl:text-2xl
                             text-center
                           `}
                        >
                          Caixinha da Leveza
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
                            ? "bg-gradient-to-tr from-lime-500 via-lime-600 to-lime-500 border-none cursor-pointer text-zinc-100 font-bold hover:rounded-r-2xl"
                            : "text-zinc-400 font-bold"
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
                             gap-3
                             text-xl
                             xl:text-3xl
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