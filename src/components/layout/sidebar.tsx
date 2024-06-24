import Link from "next/link";
import React, { useState } from "react";
import { useDashboardState } from '@/app/dashboard/_context';
import { HomeIcon, UserGroupIcon, ShoppingCartIcon, CashIcon } from '@heroicons/react/outline';
import { Storefront } from '@mui/icons-material';

export default function Sidebar() {
    const { activePage, setActivePage } = useDashboardState();
    const [collapsed, setCollapsed] = useState(true);

    return (
        <div onMouseEnter={() => setCollapsed(false)} onMouseLeave={() => setCollapsed(true)} className={`flex flex-col justify-between align-middle item-center py-8 p-4 h-full ${collapsed ? 'w-20' : 'w-72'} rounded-lg border border-border bg-background transition-all duration-500 ease-in-out`}>
            <ul className="flex flex-col gap-8">
                <li>
                    <Link onClick={() => setActivePage('reports')} href="javascript:;" className={`flex items-center ${collapsed ? 'justify-center': ''}`}>
                        <span><HomeIcon className="h-5 w-5" /></span>
                        <p className={`text-primary ${activePage === 'reports' ? 'font-bold' : ''} transition-all duration-500 ease-in-out ${collapsed ? 'w-0 opacity-0' : 'w-auto ml-4 opacity-100'}`}>Home</p>
                    </Link>
                </li>
                <hr className="border-border" />
                <li>
                    <Link onClick={() => setActivePage('sales')} href="javascript:;" className={`flex items-center ${collapsed ? 'justify-center': ''}`}>
                        <span><CashIcon className="h-5 w-5" /></span>
                        <p className={`text-primary ${activePage === 'sales' ? 'font-bold' : ''} transition-all duration-500 ease-in-out ${collapsed ? 'w-0 opacity-0' : 'w-auto ml-4 opacity-100'}`}>Vendas</p>
                    </Link>
                </li>
                <hr className="border-border" />
                <li>
                    <Link onClick={() => setActivePage('users')} href="javascript:;" className={`flex items-center ${collapsed ? 'justify-center': ''}`}>
                        <span><UserGroupIcon className="h-5 w-5" /></span>
                        <p className={`text-primary ${activePage === 'users' ? 'font-bold' : ''} transition-all duration-500 ease-in-out ${collapsed ? 'w-0 opacity-0' : 'w-auto ml-4 opacity-100'}`}>Usuários</p>
                    </Link>
                </li>
                <hr className="border-border" />
                <li>
                    <Link onClick={() => setActivePage('products')} href="javascript:;" className={`flex items-center ${collapsed ? 'justify-center': ''}`}>
                        <span><ShoppingCartIcon className="h-5 w-5" /></span>
                        <p className={`text-primary ${activePage === 'products' ? 'font-bold' : ''} transition-all duration-500 ease-in-out ${collapsed ? 'w-0 opacity-0' : 'w-auto ml-4 opacity-100'}`}>Produtos</p>
                    </Link>
                </li>
            </ul>
            <div className="flex justify-center items-center transition-all duration-500 ease-in-out">
                <span className={`transition-opacity duration-500 ease-in-out ${collapsed ? 'w-auto opacity-100' : 'w-0 opacity-0'}`}>
                    <Storefront className="h-5 w-5" />
                </span>
                <h2 className={`text-2xl text-center font-bold transition-opacity duration-500 ease-in-out ${collapsed ? 'w-0 opacity-0' : 'w-auto opacity-100'}`}>
                    Barzinho App
                </h2>
            </div>
        </div>
    );
}
