import { ArrowDown, ArrowUp } from "lucide-react"

interface Transaction {
  id: string
  date: string
  name: string
  amount: number
  type: "incoming" | "outgoing"
  status: "completed" | "pending" | "failed"
}

interface TransactionHistoryProps {
  limit?: number
}

const transactions: Transaction[] = [
  {
    id: "TX123456",
    date: "2025-03-10",
    name: "Sarah Johnson",
    amount: 250.0,
    type: "incoming",
    status: "completed",
  },
  {
    id: "TX123457",
    date: "2025-03-09",
    name: "Coffee Shop",
    amount: 4.5,
    type: "outgoing",
    status: "completed",
  },
  {
    id: "TX123458",
    date: "2025-03-08",
    name: "Michael Chen",
    amount: 120.0,
    type: "outgoing",
    status: "completed",
  },
  {
    id: "TX123459",
    date: "2025-03-07",
    name: "Grocery Store",
    amount: 65.32,
    type: "outgoing",
    status: "completed",
  },
  {
    id: "TX123460",
    date: "2025-03-06",
    name: "Payroll Deposit",
    amount: 1250.0,
    type: "incoming",
    status: "completed",
  },
  {
    id: "TX123461",
    date: "2025-03-05",
    name: "Electric Bill",
    amount: 85.75,
    type: "outgoing",
    status: "completed",
  },
  {
    id: "TX123462",
    date: "2025-03-04",
    name: "Alex Rivera",
    amount: 35.0,
    type: "incoming",
    status: "completed",
  },
  {
    id: "TX123463",
    date: "2025-03-03",
    name: "Online Store",
    amount: 49.99,
    type: "outgoing",
    status: "completed",
  },
  {
    id: "TX123464",
    date: "2025-03-02",
    name: "Restaurant",
    amount: 78.5,
    type: "outgoing",
    status: "completed",
  },
  {
    id: "TX123465",
    date: "2025-03-01",
    name: "Emma Wilson",
    amount: 200.0,
    type: "incoming",
    status: "completed",
  },
]

export function TransactionHistory({ limit }: TransactionHistoryProps) {
  const displayTransactions = limit ? transactions.slice(0, limit) : transactions

  return (
    <div className="space-y-4">
      {displayTransactions.length === 0 ? (
        <p className="text-center text-muted-foreground py-4">No transactions found</p>
      ) : (
        <div className="space-y-2">
          {displayTransactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between rounded-lg border p-3 hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div
                  className={`rounded-full p-2 ${
                    transaction.type === "incoming" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                  }`}
                >
                  {transaction.type === "incoming" ? (
                    <ArrowDown className="h-4 w-4" />
                  ) : (
                    <ArrowUp className="h-4 w-4" />
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium">{transaction.name}</p>
                  <p className="text-xs text-muted-foreground">{new Date(transaction.date).toLocaleDateString()}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`text-sm font-medium ${transaction.type === "incoming" ? "text-green-600" : ""}`}>
                  {transaction.type === "incoming" ? "+" : "-"}${transaction.amount.toFixed(2)}
                </p>
                <p className="text-xs text-muted-foreground capitalize">{transaction.status}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

