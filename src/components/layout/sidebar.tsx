import Link from "next/link";
import React from "react";
import { useDashboardState } from '@/app/dashboard/_context';
import { HomeIcon, UserGroupIcon, ShoppingCartIcon, CashIcon, ChartBarIcon } from '@heroicons/react/outline';

export default function Sidebar() {
    const { activePage, setActivePage } = useDashboardState();

    return (
        <div className="flex flex-col justify-between p-8 h-full w-72 rounded-lg border border-border bg-background">
            <ul className="flex flex-col gap-8">
                <li>
                    <Link onClick={() => setActivePage('reports')} href="javascript:;" className="flex items-center"><HomeIcon className="h-5 w-5 mr-2" /><p className={`text-primary ${activePage === 'reports' ? 'font-bold' : ''}`}>Home</p></Link>
                </li>
                <hr className="border-border" />
                <li>
                    <Link onClick={() => setActivePage('sales')} href="javascript:;" className="flex items-center"><CashIcon className="h-5 w-5 mr-2" /><p className={`text-primary ${activePage === 'sales' ? 'font-bold' : ''}`}>Vendas</p></Link>
                </li>
                <hr className="border-border" />
                <li>
                    <Link onClick={() => setActivePage('users')} href="javascript:;" className="flex items-center"><UserGroupIcon className="h-5 w-5 mr-2" /><p className={`text-primary ${activePage === 'users' ? 'font-bold' : ''}`}>Usuários</p></Link>
                </li>
                <hr className="border-border" />
                <li>
                    <Link onClick={() => setActivePage('products')} href="javascript:;" className="flex items-center"><ShoppingCartIcon className="h-5 w-5 mr-2" /><p className={`text-primary ${activePage === 'products' ? 'font-bold' : ''}`}>Produtos</p></Link>
                </li>
            </ul>
            <h2 className="text-2xl text-center font-bold">Barzinho App</h2>
        </div>
    );
}
