'use client';

import { Settings, User } from "lucide-react";
import { Inbox } from "lucide-react";
import { CreditCard } from "lucide-react";
import { Bell } from "lucide-react";
import { Cookie } from "lucide-react";
import { MessageSquare } from "lucide-react";
//import UserItem from "./UserItem";
import UserItem from "useritem";
import { Command, CommandGroup, CommandItem, CommandList } from "./ui/command";
import Link from "next/link";

export default function Sidebar() {
    const menuList = [
        {
            group: "General",
            items: [
                {
                    link: "/",
                    icon: <User />,
                    text: "Profile"
                },
                {
                    link: "/",
                    icon: <Inbox />,
                    text: "Inbox"
                },
                {
                    link: "/",
                    icon: <CreditCard />,
                    text: "Billing"
                },
                {
                    link: "/",
                    icon: <Bell />,
                    text: "Notifications"
                }
            ]
        },
        {
            group: "Settings",
            items: [
                {
                    link: "/",
                    icon: <Settings />,
                    text: "General Settings"
                },
                {
                    link: "/",
                    icon: <Cookie />,
                    text: "Privacy"
                },
                {
                    link: "/",
                    icon: <MessageSquare />,
                    text: "Logs"
                }
            ]
        }
    ];
    return <div className="fixed flex flex-col gap-4 w-[300px] min-w-[300px] p-4
    min-h-screen">
        <div>
            <UserItem
                title="John Doe"
                description="johndoe@mail.com"
                shadow={false}
            />
        </div>
        <div className="grow">
            <Command style={{ overflow: 'visible' }}>
                <CommandList style={{ overflow: 'visible' }}>
                    {menuList.map((menu: any, key: number) => (
                        <CommandGroup key={key} heading={menu.group}>
                            {menu.items.map((option: any, optionKey: number) =>
                                <CommandItem key={optionKey} className="flex-gap-2 cursor-pointer">
                                    {option.icon}
                                    {option.text}
                                </CommandItem>)}
                        </CommandGroup>))}
                </CommandList>
            </Command>

        </div>
        <div>
            <Link href="/team" className="flex items-center gap-2">
                <Settings/>
                <span>Team Settings</span>
            </Link>
            </div>
    </div>;
}