"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Copy, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserNav } from "@/components/dash/UserNav"

export default function ReceiveMoneyPage() {
  const [amount, setAmount] = useState("")
  const [note, setNote] = useState("")
  const [copied, setCopied] = useState(false)
  const [requestLink, setRequestLink] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")

  const handleCreateRequest = (e: React.FormEvent) => {
    e.preventDefault()
    // Generate a fake payment request link
    setRequestLink(`https://cashflow.example/pay/req_${Math.random().toString(36).substring(2, 10)}`)
  }

  const copyToClipboard = () => {
    if (requestLink) {
      navigator.clipboard.writeText(requestLink)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-background border-b">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Link href="/">
              <span className="text-primary">Cash</span>Flow
            </Link>
          </div>
          <UserNav />
        </div>
      </header>
      <main className="flex-1 p-4 md:p-8 pt-6">
        <div className="mx-auto max-w-md">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/dashboard">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Link>
          </Button>

          <Card>
            <CardHeader>
              <CardTitle>Receive Money</CardTitle>
              <CardDescription>Create a payment request or share your details</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="request" className="space-y-4">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="request">Request Money</TabsTrigger>
                  <TabsTrigger value="share">Share Details</TabsTrigger>
                </TabsList>
                <TabsContent value="request" className="space-y-4">
                  {requestLink ? (
                    <div className="space-y-4">
                      <div className="rounded-lg bg-muted p-4 text-center">
                        <p className="text-sm text-muted-foreground">Payment Request Created</p>
                        <p className="text-2xl font-bold">Ksh.{amount}</p>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="payment-link">Payment Link</Label>
                        <div className="flex items-center space-x-2">
                          <Input id="payment-link" value={requestLink} readOnly className="flex-1" />
                          <Button size="icon" variant="outline" onClick={copyToClipboard} title="Copy to clipboard">
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                        {copied && <p className="text-xs text-green-500">Copied to clipboard!</p>}
                      </div>
                      {phoneNumber && (
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Phone Number:</span>
                          <span>{phoneNumber}</span>
                        </div>
                      )}
                      <div className="flex justify-center space-x-2">
                        <Button variant="outline" onClick={() => setRequestLink("")}>
                          Create New
                        </Button>
                        <Button>
                          <Share2 className="mr-2 h-4 w-4" />
                          Share
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleCreateRequest} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="amount">Amount</Label>
                        <div className="flex">
                          <div className="flex items-center justify-center rounded-l-md border border-r-0 bg-muted px-3 text-sm">
                            Ksh.
                          </div>
                          <Input
                            id="amount"
                            type="number"
                            placeholder="0.00"
                            className="rounded-l-none"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            required
                            min="0.01"
                            step="0.01"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(254) 7456-7890"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="note">Note (Optional)</Label>
                        <Input
                          id="note"
                          placeholder="What's this for?"
                          value={note}
                          onChange={(e) => setNote(e.target.value)}
                        />
                      </div>
                      
                      <Button type="submit" className="w-full">
                        Create Payment Request
                      </Button>
                    </form>
                  )}
                </TabsContent>
                <TabsContent value="share" className="space-y-4">
                  <div className="space-y-2">
                    <Label>Your Username</Label>
                    <div className="flex items-center space-x-2">
                      <Input value="@johndoe" readOnly />
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => {
                          navigator.clipboard.writeText("@johndoe")
                          setCopied(true)
                          setTimeout(() => setCopied(false), 2000)
                        }}
                        title="Copy to clipboard"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Your Payment Link</Label>
                    <div className="flex items-center space-x-2">
                      <Input value="cashflow.example/pay/johndoe" readOnly />
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => {
                          navigator.clipboard.writeText("cashflow.example/pay/johndoe")
                          setCopied(true)
                          setTimeout(() => setCopied(false), 2000)
                        }}
                        title="Copy to clipboard"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                    {copied && <p className="text-xs text-green-500">Copied to clipboard!</p>}
                  </div>
                  <div className="rounded-lg border p-4">
                    <h4 className="font-medium mb-2">QR Code</h4>
                    <div className="bg-white p-4 rounded flex items-center justify-center">
                      <div className="w-32 h-32 bg-gray-200 flex items-center justify-center text-xs text-gray-500">
                        QR Code Placeholder
                      </div>
                    </div>
                    <Button className="w-full mt-4">
                      <Share2 className="mr-2 h-4 w-4" />
                      Share QR Code
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="border-t pt-4">
              <p className="text-xs text-muted-foreground">
                Payments you receive will be added to your M-pesa balance and can be transferred to your bank account.
              </p>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}


