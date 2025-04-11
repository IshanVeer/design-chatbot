import DesignControls from "@/components/design/DesignControls";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div>
      <Tabs defaultValue="chat" className="w-full">
        <TabsList className="w-full rounded-sm ">
          <TabsTrigger className="w-full rounded-[2px]" value="chat">
            Chat
          </TabsTrigger>
          <TabsTrigger className="w-full rounded-[2px]" value="controls">
            Design Controls
          </TabsTrigger>
        </TabsList>
        <TabsContent value="chat">chat</TabsContent>
        <TabsContent value="controls">
          <DesignControls />
        </TabsContent>
      </Tabs>
    </div>
  );
}
