"use client";

import Link from "next/link";
import { Phone, Send, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserNav } from "@/components/dash/UserNav";
import { useState } from "react";
import { usePaymentHook } from "@/hook/paymenthook/usePaymnetHook";


export default function MoneyTransferPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");

  const { mutate, isPending, error } = usePaymentHook();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(
      { phone: phoneNumber, amount: Number(amount), email },
      {
        onSuccess: (data) => {
          alert(`STK push sent successfully! Reference: ${data?.data?.reference}`);
        },
        onError: (error) => {
          alert(`Payment failed: ${error.message}`);
        },
      }
    );
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <header className="bg-white border-b">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2 font-bold text-xl md:px-20 px-5">
            <Link href="/">
              <span className="text-primary">Cash</span>Flow
            </Link>
          </div>
          <UserNav />
        </div>
      </header>

      <main className="flex-1 container max-w-4xl mx-auto p-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Send Money</h1>
          <p className="text-gray-500">Send money quickly and securely via mobile STK push</p>
        </div>

        <div className="grid gap-6 md:grid-cols-5">
          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle>Transfer Details</CardTitle>
              <CardDescription>Enter recipient phone number to send an STK push</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Recipient Phone Number</Label>
                  <div className="flex">
                    <div className="bg-gray-100 flex items-center px-3 rounded-l-md border border-r-0">
                      <Phone className="h-4 w-4 text-gray-500" />
                    </div>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+254 700 000000"
                      className="rounded-l-none"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="flex">
                    <div className="bg-gray-100 flex items-center px-3 rounded-l-md border border-r-0">
                      <span className="text-gray-500 font-medium">📧</span>
                    </div>
                    <Input
                      id="email"
                      type="email"
                      placeholder="abc@abc.com"
                      className="rounded-l-none"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="amount">Amount</Label>
                  <div className="flex">
                    <div className="bg-gray-100 flex items-center px-3 rounded-l-md border border-r-0">
                      <span className="text-gray-500 font-medium">Ksh.</span>
                    </div>
                    <Input
                      id="amount"
                      type="number"
                      placeholder="0.00"
                      className="rounded-l-none"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="note">Note (Optional)</Label>
                  <Input id="note" placeholder="What's this payment for?" />
                </div>

                {error && <p className="text-red-500">{error.message}</p>}

                <Button type="submit" className="w-full" disabled={isPending}>
                  {isPending ? (
                    <>Processing<Clock className="ml-2 h-4 w-4 animate-spin" /></>
                  ) : (
                    <>Send STK Push<Send className="ml-2 h-4 w-4" /></>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Transaction Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-gray-500">Amount</span>
                <span className="font-medium">Ksh.{amount || '0.00'}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-gray-500">Transaction Fee</span>
                <span className="font-medium">Ksh.0.00</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="font-medium">Total</span>
                <span className="font-bold text-lg">
                  Ksh.{amount ? (parseFloat(amount) + 0.00).toFixed(2) : '0.00'}
                </span>
              </div>
            </CardContent>
            <CardFooter className="bg-gray-50 rounded-b-lg flex flex-col items-start gap-2">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Shield className="h-4 w-4" />
                <span>Secure STK push technology</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Clock className="h-4 w-4" />
                <span>Instant processing</span>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}
