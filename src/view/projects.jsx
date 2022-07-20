import React from 'react';
import { PROJECTS } from '../constant/project';
import { TbExternalLink } from 'react-icons/tb';

export default function Projects() {
    const style = {
        sticker: 'px-2 py-1 mx-1 text-xs md:px-3 md:py-1 md:mx-2  rounded-2xl text-center',
    };

    return (
        <ol className="list-disc">
            {PROJECTS.map((item) => (
                <li className="mb-20" key={item.name}>
                    <div className="flex items-center text-xl">
                        <a href={item.url} target="_" className="flex text-xl hover:text-blue-400">
                            {item.name}
                            <span className="ml-3 pt-1">
                                <TbExternalLink />
                            </span>
                        </a>
                    </div>

                    <div className="mt-4">{item.description}</div>
                    <div className="mt-4">
                        {item.stickers} :
                        {item.stacks.map((stack, index) => (
                            <span
                                key={item.position + stack.name}
                                className={style.sticker}
                                style={{ backgroundColor: stack.color }}
                            >
                                {stack.name}
                            </span>
                        ))}
                    </div>
                </li>
            ))}
        </ol>
    );
}
