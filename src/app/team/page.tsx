'use client';

import dynamic from "next/dynamic";
import UserItem from 'useritem';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
type Member = {
    email: string;
    full_name: string;
    backgroundColor: string;
    role: string;
    status?: string;
}
export default function TeamSettings() {
    const [members, setMembers] = useState<Member[]>([
        {
            email: "susman@gmail.com",
            full_name: "Sus Man",
            backgroundColor: "rgba(125,24,66,1)",
            role: "admin"
        }, {
            email: "susgirl@gmail.com",
            full_name: "Sus Girl",
            backgroundColor: "rgba(15,24,66,1)",
            role: "viewer"
        }
        , {
            email: "ricksanchez@gmail.com",
            full_name: "Rick Sanchez",
            backgroundColor: "rgba(1,93,66,1)",
            role: "admin"
        }, {
            email: "filip@gmail.com",
            full_name: "Filip Filipowski",
            backgroundColor: "rgba(98,0,166,1)",
            role: "viewer",
            status: "pending"
        }
    ])
    return <div className="grid-gap-4">
        <header>
            <h2 className="text-[36px] font-[1000]">Members</h2>
        </header>
        <div className="grid gap-5">
            <div>
                <div className="flex items-center justify-between gap-2">
                    <Command className="rounded-lg border">
                        <CommandInput className="border-none" placeholder="Search employee...
                        " />
                    </Command>
                    <Button variant="secondary">Add a new member</Button>
                </div>
            </div>
            <div className="border rounded">
                {members.length ===0 && <div className="p-4">There are no members yet</div>}
                {members && members.map((member: Member, key: number) => <div className="grid grid-cols-6
                border-b
                last:border-b-0 items-center justify-between pr-2"key={key}>
                    <div className="col-span-2">
                        <UserItem
                            backgroundColor={member.backgroundColor}
                            title={member.full_name}
                            description={member.email}
                            shadow={false}
                            border={false}
                        />
                    </div>
                    <div className="col-span-3 flex gap-2">
                        <Badge className={`tag capitalize ${member.role}`}>{member.role}</Badge>
                        {member.status && <Badge className={`tag ${member.status}`}>{member.status}</Badge>}
                    </div>
                    <div className="col-span-1 flex justify-end">
                        <Button variant="ghost">Remove</Button>
                    </div>
                </div>)}
            </div>
        </div>
    </div>;
}