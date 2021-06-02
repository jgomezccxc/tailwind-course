import { Fragment } from 'react';

export default function Home() {
    return (
        <Fragment>
            <header id="header" className="h-20 text-white bg-black bebas">
                <div className="container flex flex-row w-11/12 mx-auto">
                    <div id="logo" className="flex-1">
                        <div className="mt-4 ml-5 w-64 pt-0.5 pb-0.5 text-center tracking-wider cursor-pointer overflow-hidden transition duration-300 rounded-sm bg-azul-claro hover:text-black hover:bg-gray-200">
                            <span className="block float-left mt-1 text-3xl symbol ml-11">
                                S
                            </span>
                            <h3 className="block float-right text-4xl mt-1.5 mr-16 transition duration-100">
                                Tailwind
                            </h3>
                        </div>
                    </div>

                    <nav className="flex-1">
                        <ul className="flex flex-row items-center justify-end h-20 text-2xl text-center">
                            <li className="menu-item">
                                <a className="menu-item-a" href="#">
                                    Inicio
                                </a>
                            </li>
                            <li className="menu-item">
                                <a className="menu-item-a" href="#">
                                    Blog
                                </a>
                            </li>
                            <li className="menu-item">
                                <a className="menu-item-a" href="#">
                                    Formación
                                </a>
                            </li>
                            <li className="menu-item">
                                <a className="menu-item-a" href="#">
                                    Contacto
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </Fragment>
    );
}
