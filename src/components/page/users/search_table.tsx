'use client'

import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

export default function SearchTable({ searchField, setSearchField }: { searchField: string, setSearchField: (value: string) => void }) {
    return (
        <div className="flex gap-4 w-full">
            <Select defaultValue={searchField} onValueChange={(value: string) => setSearchField(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Prioridade" />
                </SelectTrigger>
                <SelectContent className="bg-fiord-75">
                  <SelectItem value="name">Nome</SelectItem>
                  <SelectItem value="age">Idade</SelectItem>
                  <SelectItem value="valor_reservado_caixa">Valor Reservado</SelectItem>
                </SelectContent>
            </Select>
            <Input type="text" placeholder="Pesquise por nome ou número" className="w-72" />
        </div>
    )
}