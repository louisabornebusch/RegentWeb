import { redirect } from 'next/navigation';

export default function RootPage() {
  // Redirect to Swedish as default
  redirect('/sv');
}