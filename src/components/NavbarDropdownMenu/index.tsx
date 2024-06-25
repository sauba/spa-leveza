import { Menu, Transition } from "@headlessui/react"
import { House, ListBullets } from "@phosphor-icons/react"
import { Fragment } from "react"

export default function NavbarDropdownMenu() {
  return (
    <div className="flex justify-center items-center border-none outline-none overflow-hidden">
      <Menu as="div" className="w-full relative border-none outline-none">
        {({ open }) => (
          <Fragment>
            <Menu.Button className="inline-flex justify-center items-center rounded-md text-zinc-100 border-none outline-none">
              <ListBullets
                size={56}
                weight="bold"
                className={`px-2 border-none outline-none hover:cursor-pointer text-zinc-100`}
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
              <Menu.Items className="w-full min-h-screen justify-center items-center bg-zinc-100 z-50">
                <div className="w-full flex-col justify-center items-center">
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`
                           flex
                           justify-center
                           items-center                                                       
                           ${active
                            ? "bg-zinc-400 border-none cursor-pointer text-zinc-400 font-thin hover:rounded-x-2xl"
                            : "text-zinc-400 font-thin"
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
                          <House size={32} weight="bold" className={`text-zinc-200`} />
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
                            ? "bg-zinc-400 border-none cursor-pointer text-zinc-100 text-center font-thin hover:rounded-x-2xl"
                            : "text-zinc-400 font-thin"
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
                             text-2xl
                             xl:text-3xl
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
                            ? "bg-zinc-400 border-none cursor-pointer text-zinc-100 font-thin hover:rounded-x-2xl hover:xl:text-2xl"
                            : "text-zinc-400 font-thin"
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
                             text-2xl
                             xl:text-3xl
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
                            ? "bg-zinc-400 border-none cursor-pointer text-zinc-100 font-thin hover:rounded-x-2xl"
                            : "text-zinc-400 font-thin"
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
                             text-2xl
                             xl:text-3xl
                             gap-3
                             font-thin
                             hover:cursor-none
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
                            ? "bg-zinc-400 border-none cursor-pointer text-zinc-100 font-thin hover:rounded-x-2xl"
                            : "text-zinc-400 font-thin"
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
                             text-2xl
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