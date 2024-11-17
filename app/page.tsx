import { AppHeader } from "@/components/layouts/app-header";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="p-3" >
      <Card className="flex flex-col shadow-none
      p-2" >
        <AppHeader />
      </Card>
    </div>
  );
}
