import Link from "next/link";
import { HomeIcon, UserGroupIcon, ShoppingCartIcon, CashIcon, ChartBarIcon } from '@heroicons/react/outline';

export default function Sidebar() {
    return (
        <div className="flex flex-col h-full w-72 p-4">
            <div className="flex flex-col justify-between p-8 h-full w-full bg-zinc-900 rounded-lg border border-zinc-700">
                <ul className="flex flex-col gap-8">
                    <li>
                        <Link href="/" className="flex items-center"><HomeIcon className="h-5 w-5 mr-2" />Home</Link>
                    </li>
                    <hr className="border-zinc-700" />
                    <li>
                        <Link href="/users" className="flex items-center"><UserGroupIcon className="h-5 w-5 mr-2" />Usuários</Link>
                    </li>
                    <hr className="border-gray-700" />
                    <li>
                        <Link href="/products" className="flex items-center"><ShoppingCartIcon className="h-5 w-5 mr-2" />Produtos</Link>
                    </li>
                    <hr className="border-zinc-700" />
                    <li>
                        <Link href="/sales" className="flex items-center"><CashIcon className="h-5 w-5 mr-2" />Vendas</Link>
                    </li>
                    <hr className="border-zinc-700" />
                    <li>
                        <Link href="/reports" className="flex items-center"><ChartBarIcon className="h-5 w-5 mr-2" />Relatórios</Link>
                    </li>
                </ul>
                <h2 className="text-2xl font-bold">Barzinho App</h2>
            </div>
        </div>
    );
}
