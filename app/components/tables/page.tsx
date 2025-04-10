import * as React from "react";
import { Metadata } from "next";
import ComponentExample from "@/components/component-example";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const metadata: Metadata = {
  title: "Tables",
  description: "Tabular data display with support for sorting, selection, and pagination."
};

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
];

const stories = [
  {
    id: "STR001",
    title: "First Day of School",
    date: "Apr 2, 2025",
    duration: "5m 30s",
    status: "Published",
  },
  {
    id: "STR002",
    title: "Wedding Anniversary",
    date: "Mar 15, 2025",
    duration: "8m 45s",
    status: "Draft",
  },
  {
    id: "STR003",
    title: "Family Reunion",
    date: "Feb 28, 2025",
    duration: "12m 10s",
    status: "Published",
  },
  {
    id: "STR004",
    title: "Birthday Party",
    date: "Jan 10, 2025",
    duration: "4m 22s",
    status: "Published",
  },
];

const tableExample = `import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function InvoicesTable() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$1,750.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}`;

const selectableTableExample = `import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function SelectableTable() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Duration</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {stories.map((story) => (
          <TableRow 
            key={story.id}
            isSelectable
            isSelected={story.id === selectedId}
            onClick={() => setSelectedId(story.id)}
          >
            <TableCell className="font-medium">{story.id}</TableCell>
            <TableCell>{story.title}</TableCell>
            <TableCell>{story.date}</TableCell>
            <TableCell>{story.duration}</TableCell>
            <TableCell>{story.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}`;

const sortableTableExample = `import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function SortableTable() {
  const [sortColumn, setSortColumn] = useState<string>("title");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  
  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };
  
  // Sort the data
  const sortedStories = [...stories].sort((a, b) => {
    const aValue = a[sortColumn as keyof typeof a];
    const bValue = b[sortColumn as keyof typeof b];
    
    if (sortDirection === "asc") {
      return aValue.localeCompare(bValue);
    }
    return bValue.localeCompare(aValue);
  });
  
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead 
            isSortable 
            sortDirection={sortColumn === "id" ? sortDirection : null}
            onClick={() => handleSort("id")}
          >
            ID
          </TableHead>
          <TableHead 
            isSortable 
            sortDirection={sortColumn === "title" ? sortDirection : null}
            onClick={() => handleSort("title")}
          >
            Title
          </TableHead>
          <TableHead 
            isSortable 
            sortDirection={sortColumn === "date" ? sortDirection : null}
            onClick={() => handleSort("date")}
          >
            Date
          </TableHead>
          <TableHead 
            isSortable 
            sortDirection={sortColumn === "duration" ? sortDirection : null}
            onClick={() => handleSort("duration")}
          >
            Duration
          </TableHead>
          <TableHead 
            isSortable 
            sortDirection={sortColumn === "status" ? sortDirection : null}
            onClick={() => handleSort("status")}
          >
            Status
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sortedStories.map((story) => (
          <TableRow key={story.id}>
            <TableCell className="font-medium">{story.id}</TableCell>
            <TableCell>{story.title}</TableCell>
            <TableCell>{story.date}</TableCell>
            <TableCell>{story.duration}</TableCell>
            <TableCell>{story.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}`;

export default function TablesPage() {
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const [sortColumn, setSortColumn] = React.useState<string>("title");
  const [sortDirection, setSortDirection] = React.useState<"asc" | "desc">("asc");

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  // Sort the data
  const sortedStories = [...stories].sort((a, b) => {
    const aValue = a[sortColumn as keyof typeof a];
    const bValue = b[sortColumn as keyof typeof b];
    
    if (sortDirection === "asc") {
      return aValue.localeCompare(bValue);
    }
    return bValue.localeCompare(aValue);
  });

  return (
    <div className="container py-10">
      <h1 className="text-display font-faro font-bold mb-4">Tables</h1>
      <p className="text-body font-atkinson mb-8">
        Tables display structured data in rows and columns with support for sorting, 
        selection, and pagination. Tables provide a familiar interface for scanning, 
        comparing, and taking action on tabular data.
      </p>

      <div className="space-y-12">
        <section className="space-y-4">
          <h2 className="text-title-1 font-faro font-bold">Basic Table</h2>
          <p className="text-body font-atkinson">
            A basic table with header, body, footer, and caption for displaying 
            structured data.
          </p>

          <ComponentExample
            title="Basic Usage"
            description="A standard table with header, body, footer, and caption."
            code={tableExample}
          >
            <div className="rounded-m border">
              <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.map((invoice) => (
                    <TableRow key={invoice.invoice}>
                      <TableCell className="font-medium">{invoice.invoice}</TableCell>
                      <TableCell>{invoice.paymentStatus}</TableCell>
                      <TableCell>{invoice.paymentMethod}</TableCell>
                      <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$1,750.00</TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </div>
          </ComponentExample>

          <h3 className="text-headline font-faro font-medium mt-8">Anatomy</h3>
          <ul className="list-disc pl-6 space-y-2 font-atkinson text-body">
            <li><strong>Table</strong>: The root container component.</li>
            <li><strong>TableHeader</strong>: Contains the header row(s).</li>
            <li><strong>TableBody</strong>: Contains the data rows.</li>
            <li><strong>TableFooter</strong>: Contains the footer row(s).</li>
            <li><strong>TableRow</strong>: A single row within the table.</li>
            <li><strong>TableHead</strong>: A header cell within a row.</li>
            <li><strong>TableCell</strong>: A data cell within a row.</li>
            <li><strong>TableCaption</strong>: A descriptive caption for the table.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-title-1 font-faro font-bold">Selectable Rows</h2>
          <p className="text-body font-atkinson">
            Tables can have selectable rows, allowing users to select and interact 
            with specific data entries.
          </p>

          <ComponentExample
            title="Selectable Rows"
            description="A table with selectable rows that highlight on click."
            code={selectableTableExample}
          >
            <div className="rounded-m border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {stories.map((story) => (
                    <TableRow 
                      key={story.id}
                      isSelectable
                      isSelected={story.id === selectedId}
                      onClick={() => setSelectedId(story.id)}
                    >
                      <TableCell className="font-medium">{story.id}</TableCell>
                      <TableCell>{story.title}</TableCell>
                      <TableCell>{story.date}</TableCell>
                      <TableCell>{story.duration}</TableCell>
                      <TableCell>{story.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </ComponentExample>

          <h3 className="text-headline font-faro font-medium mt-8">Selection Props</h3>
          <p className="text-body font-atkinson mb-4">
            TableRow component accepts the following selection-related props:
          </p>
          <ul className="list-disc pl-6 space-y-2 font-atkinson text-body">
            <li><strong>isSelectable</strong>: Boolean indicating if the row is selectable.</li>
            <li><strong>isSelected</strong>: Boolean indicating if the row is currently selected.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-title-1 font-faro font-bold">Sortable Columns</h2>
          <p className="text-body font-atkinson">
            Tables can have sortable columns, allowing users to sort data by specific columns.
          </p>

          <ComponentExample
            title="Sortable Columns"
            description="A table with sortable columns that can be clicked to change sort direction."
            code={sortableTableExample}
          >
            <div className="rounded-m border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead 
                      isSortable 
                      sortDirection={sortColumn === "id" ? sortDirection : null}
                      onClick={() => handleSort("id")}
                    >
                      ID
                    </TableHead>
                    <TableHead 
                      isSortable 
                      sortDirection={sortColumn === "title" ? sortDirection : null}
                      onClick={() => handleSort("title")}
                    >
                      Title
                    </TableHead>
                    <TableHead 
                      isSortable 
                      sortDirection={sortColumn === "date" ? sortDirection : null}
                      onClick={() => handleSort("date")}
                    >
                      Date
                    </TableHead>
                    <TableHead 
                      isSortable 
                      sortDirection={sortColumn === "duration" ? sortDirection : null}
                      onClick={() => handleSort("duration")}
                    >
                      Duration
                    </TableHead>
                    <TableHead 
                      isSortable 
                      sortDirection={sortColumn === "status" ? sortDirection : null}
                      onClick={() => handleSort("status")}
                    >
                      Status
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedStories.map((story) => (
                    <TableRow key={story.id}>
                      <TableCell className="font-medium">{story.id}</TableCell>
                      <TableCell>{story.title}</TableCell>
                      <TableCell>{story.date}</TableCell>
                      <TableCell>{story.duration}</TableCell>
                      <TableCell>{story.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </ComponentExample>

          <h3 className="text-headline font-faro font-medium mt-8">Sorting Props</h3>
          <p className="text-body font-atkinson mb-4">
            TableHead component accepts the following sorting-related props:
          </p>
          <ul className="list-disc pl-6 space-y-2 font-atkinson text-body">
            <li><strong>isSortable</strong>: Boolean indicating if the column is sortable.</li>
            <li><strong>sortDirection</strong>: One of "asc", "desc", or null to indicate the current sort direction.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-title-1 font-faro font-bold">Responsive Behavior</h2>
          <p className="text-body font-atkinson">
            Tables automatically adapt to available space, with horizontal scrolling on smaller screens.
          </p>

          <div className="rounded-m border">
            <div className="p-4 border-b bg-surface-tertiary">
              <div className="text-body font-atkinson">
                <strong>Note:</strong> The table container has a <code>w-full</code> class by default with <code>overflow-auto</code>
                to handle horizontal scrolling on smaller screens. You may need to adjust column widths or use responsive utilities
                to optimize for different device sizes.
              </div>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">ID</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead className="w-[150px]">Date</TableHead>
                  <TableHead className="w-[150px]">Duration</TableHead>
                  <TableHead className="w-[150px]">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {stories.map((story) => (
                  <TableRow key={story.id}>
                    <TableCell className="font-medium">{story.id}</TableCell>
                    <TableCell>{story.title}</TableCell>
                    <TableCell>{story.date}</TableCell>
                    <TableCell>{story.duration}</TableCell>
                    <TableCell>{story.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-title-1 font-faro font-bold">Accessibility</h2>
          <p className="text-body font-atkinson">
            Tables follow established accessibility patterns for data tables.
          </p>

          <ul className="list-disc pl-6 space-y-2 font-atkinson text-body">
            <li>Semantic HTML tags are used for table structure (<code>table</code>, <code>thead</code>, <code>tbody</code>, etc.).</li>
            <li>Selectable rows have appropriate <code>aria-selected</code> states.</li>
            <li>Sortable columns use <code>aria-sort</code> to indicate sort direction.</li>
            <li>Tables with complex data should include a caption explaining the table contents.</li>
            <li>For tables with many columns, consider implementing a responsive solution or horizontal scrolling.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
