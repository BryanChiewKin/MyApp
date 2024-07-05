'use client';
import { useState, useEffect } from "react";
import UserItem from 'useritem';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Command,
    CommandInput,
} from "@/components/ui/command";

// Define the type for a team member
type Member = {
    email: string;
    full_name: string;
    backgroundColor: string;
    role: string;
    status?: string;
};

// Define the props for the component
interface TeamPageProps {
    team: Member[];
}

export default function TeamSettings() {
    const [members, setMembers] = useState<Member[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchTeamData = async () => {
            try {
                const res = await fetch('https://api.example.com/team');
                if (!res.ok) {
                    throw new Error('Failed to fetch team data');
                }
                const data: Member[] = await res.json();
                setMembers(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchTeamData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="grid-gap-4">
            <header>
                <h2 className="text-[36px] font-[1000]">Members</h2>
            </header>
            <div className="grid gap-5">
                <div>
                    <div className="flex items-center justify-between gap-2">
                        <Command className="rounded-lg border">
                            <CommandInput className="border-none" placeholder="Search employee..." />
                        </Command>
                        <Button variant="secondary">Add a new member</Button>
                    </div>
                </div>
                <div className="border rounded">
                    {members.length === 0 && <div className="p-4">There are no members yet</div>}
                    {members.map((member: Member, key: number) => (
                        <div
                            className="grid grid-cols-6 border-b last:border-b-0 items-center justify-between pr-2"
                            key={key}
                        >
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
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
