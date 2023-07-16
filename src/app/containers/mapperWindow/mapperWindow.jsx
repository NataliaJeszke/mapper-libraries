'use client'
import Tag from "../../components/tag";
import {useState} from 'react';
import {useDrop} from 'react-dnd';

export default function MapperWindow(){
    const [board, setBoard] = useState([])
    const [{isOver}, drop] = useDrop(() => ({
        accept: "tag",
        drop: (item) => { addTagtoBoard(item.id) },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }))

    const addTagtoBoard = (id) => {
        const newTag = {id: id, tagKey: id, tagValue: id}
        setBoard([...board, newTag])
    }
    return (
        <div className="bg-slate-200 rounded basis-1/2 w-64 shadow-sm" ref={drop}>
            <h1>Mapper Window</h1>
            {board.map((tag) => {
                return (
                    <Tag
                        key={tag.id}
                        tagKey={tag.tagKey}
                        tagValue={tag.tagValue}
                        className="flex m-2 border-solid border-2 border-slate-950 rounded-md justify-center flex-wrap hover:bg-red-700 hover:text-white hover:cursor-pointer"
                    />
                )
            })}
        </div>
    )
}