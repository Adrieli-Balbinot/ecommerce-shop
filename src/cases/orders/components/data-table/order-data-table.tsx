import { orderColumns } from "./order-columns";
import { useCustomers } from "@/cases/customers/hooks/use-customer";
import { DataTable } from "@/components/ui/data-table";
import { useOrders } from "../../hooks/use-orders";

export function OrderDataTable() {
    const { data: customers } = useCustomers();
    const { data: orders, isLoading } = useOrders();

    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const userId = user?.id;
    const customer = customers?.find((customer) => customer.id === userId);

    const filteredOrders =  orders?.filter(order => {
        if (!customer) return false;

        if (typeof order.custommer === "string") {
            return order.custommer === customer.id;
        }

        return order.custommer?.id === customer.id;
    }) ?? [];

    return (
        <div>
            {isLoading ? (
                <p>Carregando...</p>
            ) : filteredOrders.length === 0 ? (
                <p>Nenhum pedido encontrado.</p>
            ) : (
                <div className="max-h-[40vh] overflow-y-auto rounded-md">
                    <DataTable columns={orderColumns} data={filteredOrders} />
                </div>
            )}
        </div>
    );
}