import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Navbar from './Navbar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import axios from "axios";
import toast from 'react-hot-toast';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [todos, setTodos] = useState([]);

    const changeHandler = (e) => {
        if (e.target.name === "title") {
            setTitle(e.target.value);
        } else {
            setDescription(e.target.value);
        }
    };

    const addToDoHandler = async () => {
        console.log(title, description);
        try {
            const res = await axios.post("http://localhost:3000/api/v1/todo", { title, description }, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            });
            console.log("API Response:", res.data);

            if (res.data.message) {
                // toast.success(res.data.message);
                setTodos([...todos, res.data.todo]);
                toast.success("Todo created ..");
                setTitle("");
                setDescription("");
            }
        }
        catch (error) {
            toast.error(error.response?.data?.message || "Failed to add todo");
        }
    };

    useEffect(() => {
        const fetchToDo = async () => {
            try {
                const res = await axios.get("http://localhost:3000/api/v1/todo");
                if (res.data.success) {
                    setTodos(res.data.todos);
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchToDo();
    }, []);


    return (
        <div>
            <Navbar />
            <div className='flex items-center gap-5 mt-5'>
                <Input type="text" name="title" placeholder="add to do.." className="w-fit" value={title} onChange={changeHandler} />
                <Button onClick={addToDoHandler}> Add to do</Button>
            </div>
            <Textarea name="description" placeholder="write a description" className="w-1/4 mt-3" value={description} onChange={changeHandler} />

            <div className='grid grid-cols-5 gap-2 mt-5'>
                {
                    todos.map((todo) => (
                        <Card key={todo._id} className="bg-gray-800 text-white p-4">
                            <CardHeader>
                                <CardTitle>{todo.title}</CardTitle>
                                <CardDescription>{todo.description}</CardDescription>
                            </CardHeader>
                        </Card>
                    ))
                }
            </div>

        </div>
    );
}
