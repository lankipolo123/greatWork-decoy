import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useNavigate } from "react-router";

type LogOutDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm?: () => void;
};

export function LogOutDialog({ open, onOpenChange, onConfirm }: LogOutDialogProps) {
  const navigate = useNavigate();  // Hook to navigate

  const handleLogOut = () => {
    onConfirm?.();  // Call the optional confirm function if provided
    navigate("/login");  // Navigate to the login page
    onOpenChange(false);  // Close the dialog
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent
        className="sm:max-w-md fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action will log you out of your account.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-red-900"onClick={handleLogOut}>Log out</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
