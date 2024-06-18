import General from "@/components/Cards/General";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Calendar from "@/components/Cards/Calendar";
import Lines from "@/components/Cards/Lines";
import { TableDemo } from "@/components/Cards/Table";
import { DataTableDemo } from "@/components/Cards/DataTable";

export default function Home() {
  return <div className="grid gap-[32px]">
    <div className="grid grid-cols-2 gap-[32px]">
      <General />
      <div className="grid gap-[32px]">
        <Calendar />
        <Calendar />
      </div>
    </div>
    <div className="grid lg:grid-cols-3 gap-[32px] lg:h-[300px]
    overflow-hidden">
      <Lines />
      <Card className="p-[32px] overflow-y-scroll">
        <CardHeader>
          <CardTitle>Transactions</CardTitle>
          <CardDescription>These are the transactions of this month.</CardDescription>
        </CardHeader>
        <div className="px-4">
          <TableDemo />
        </div>

      </Card>
      <Card className="p-[32px] overflow-y-scroll">
        <CardHeader>
          <CardTitle>Employees</CardTitle>
          <CardDescription>These are the employees of this month.</CardDescription>
        </CardHeader>
        <div className="px-4">
          <DataTableDemo />
        </div>

      </Card>
    </div>
  </div>
}
