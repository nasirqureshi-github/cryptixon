'use client'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useDialogStore } from "@/app/store/store"
import { toast } from "sonner";

export function Dialogs() {
     const { isOpen, closeDialog } = useDialogStore();
  return (
    <Dialog open={isOpen} onOpenChange={closeDialog}>
      <form>
        <DialogContent className="sm:max-w-[425px] ">
          <DialogHeader>
            <DialogTitle>Send message</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <div htmlFor="name-1">Name</div>
              <Input id="name-1" name="name" placeholder="name" />
            </div>
            <div className="grid gap-3">
             <div htmlFor="Email">Email</div>
              <Input id="Email" name="username" placeholder="email" />
            </div>
            <div className="grid gap-3">
             <div htmlFor="message">Message</div>
              <textarea className=" px-2 py-2 border-1 border-gray-200" placeholder="Type your message..." required></textarea>
            </div>
            
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" className="cursor-pointer">Cancel</Button>
            </DialogClose>
            <Button onClick={(()=>toast.success("Thank you for contacting us. We'll get in touch with you soon."))} type="submit" className="cursor-pointer">send message</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
