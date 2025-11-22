// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Button } from '@/components/ui/button';
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { toast } from 'react-toastify';
// import { supabase } from '@/lib/supabase-client';

// export function Login() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [isLoading, setIsLoading] = useState(false);
//     const navigate = useNavigate();

//     const handleLogin = async (e: React.FormEvent) => {
//         e.preventDefault();
//         setIsLoading(true);

//         try {
//             console.log('emial', email);
//             console.log('password', password);
//             const { data, error } = await supabase.auth.signInWithPassword({
//                 email,
//                 password,
//             });

//             if (error) {
//                 console.log('Login error:', error);
//                 toast.error('Credenciais inválidas. Verifique seu e-mail e senha.');
//                 return;
//             }

//             console.log('Login successful:', data.user);

//             localStorage.setItem('user', JSON.stringify({id: data.user?.id, token: data.session?.access_token}) || '');
//             toast.success('Login realizado com sucesso!');
//             navigate('/products');
//         } catch (error) {
//             toast.error('Ocorreu um erro ao fazer login.'+error);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-50">
//             <Card className="w-[400px]">
//                 <CardHeader>
//                     <CardTitle className="text-center text-lg">Login</CardTitle>
//                     <CardDescription className="text-center">
//                         Insira seu e-mail e senha abaixo para entrar
//                     </CardDescription>
//                 </CardHeader>

//                 <CardContent>
//                     <form onSubmit={handleLogin}>
//                         <div className="flex flex-col gap-6">
//                             <div className="grid gap-2">
//                                 <Label htmlFor="email">E-mail</Label>
//                                 <Input id="email"
//                                     type="email"
//                                     placeholder="Digite seu e-mail"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     required/>
//                             </div>

//                             <div className="grid gap-2">
//                                 <Label htmlFor="password">Senha</Label>
//                                 <Input id="password"
//                                     type="password"
//                                     value={password}
//                                     placeholder="************"
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     required/>
//                             </div>
//                         </div>

//                         <CardFooter className="flex-col gap-2 mt-10">
//                             <Button type="submit"
//                                     disabled={isLoading}
//                                     className="w-full cursor-pointer">
//                                 {isLoading ? 'Entrando...' : 'Login'}
//                             </Button>

//                             <a href='/register'
//                                className='self-center mt-3 text-sm text-primary hover:underline'>
//                                 Não possui uma conta? Registre-se
//                             </a>
//                         </CardFooter>
//                     </form>
//                 </CardContent>
//             </Card>
//         </div>
//     );
// }

// export default Login;



import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'react-toastify';
import { supabase } from '@/lib/supabase-client';
import bgImage from "@/assets/imagem.png"; 


export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const { data, error } = await supabase.auth.signInWithPassword({ email, password });

            if (error) {
                toast.error('Credenciais inválidas. Verifique seu e-mail e senha.');
                return;
            }

            localStorage.setItem(
                'user',
                JSON.stringify({ id: data.user?.id, token: data.session?.access_token }) || ''
            );
            toast.success('Login realizado com sucesso!');
            navigate('/products');
        } catch (error) {
            toast.error('Ocorreu um erro ao fazer login.' + error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen">
            <div
                className="hidden md:flex flex-1 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${bgImage})`,
                }}
            ></div>

            {/* Formulário de login */}
            <div className="flex flex-1 justify-center items-center p-8 bg-gray-50">
                <Card className="w-full max-w-md shadow-2xl rounded-3xl p-8">
                    <CardHeader className="mb-6 text-center">
                        <CardTitle className="text-2xl font-bold">Login</CardTitle>
                        <CardDescription>
                            Insira seu e-mail e senha para entrar
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <form onSubmit={handleLogin} className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="email">E-mail</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Digite seu e-mail"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <Label htmlFor="password">Senha</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="************"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>

                            <CardFooter className="flex flex-col gap-4 mt-6">
                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full text-white bg-primary hover:bg-primary/90 transition"
                                >
                                    {isLoading ? 'Entrando...' : 'Login'}
                                </Button>
                                <a
                                    href="/register"
                                    className="text-center text-sm text-primary hover:underline"
                                >
                                    Não possui uma conta? Registre-se
                                </a>
                            </CardFooter>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default Login;
