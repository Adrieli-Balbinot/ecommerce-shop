import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ShoppingCart, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartContext } from "@/cases/cart/hooks/use-cart.context";

export function CartSidebar() {
    const { cart, removeFromCart } = useCartContext();

    return (
        <Sheet>
            <SheetTrigger asChild>
                <div className="relative cursor-pointer">
                    <div className="bg-black text-white flex w-10 h-10 items-center justify-center rounded-xl">
                        <ShoppingCart className="w-5 h-5" />
                    </div>

                    {cart.length > 0 && (
                        <span className=" absolute -top-2 -right-2 bg-red-600 text-white w-5 h-5 flex items-center justify-center  text-xs font-bold rounded-full">
                            {cart.length}
                        </span>
                    )}
                </div>
            </SheetTrigger>

            <SheetContent
                side="right"
                className="w-80 sm:w-96 p-0 bg-white shadow-xl"
            >
                <h2 className="text-xl font-semibold p-4 border-b">Meu Carrinho</h2>

                <ScrollArea className="h-[80vh] p-4">
                    {cart.length === 0 ? (
                        <p className="text-gray-500 text-center mt-10">Carrinho vazio</p>
                    ) : (
                        <div className="flex flex-col gap-4">
                            {cart.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex justify-between items-center border rounded-lg p-3"
                                >
                                    <div>
                                        <p className="font-medium">{item.name}</p>
                                        <p className="text-sm text-gray-600">Qtd: {item.quantity}</p>
                                        <p className="font-bold">R$ {item.price}</p>
                                    </div>

                                    <Button
                                        size="icon"
                                        className="bg-red-600 hover:bg-red-700 text-white"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        <Trash className="w-4 h-4" />
                                    </Button>
                                </div>
                            ))}
                        </div>
                    )}
                </ScrollArea>

                {cart.length > 0 && (
                    <div className="p-4 border-t">
                        <Button
                            className="w-full bg-green-600 hover:bg-green-700 text-white"
                        >
                            Finalizar Compra
                        </Button>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    );
}