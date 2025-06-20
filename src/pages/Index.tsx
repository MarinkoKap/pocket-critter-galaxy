
import { useState } from 'react';
import { MonsterGrid } from '@/components/MonsterGrid';
import { CatchingArea } from '@/components/CatchingArea';
import { CollectionStats } from '@/components/CollectionStats';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const [caughtMonsters, setCaughtMonsters] = useState<string[]>([]);
  
  const handleMonsterCaught = (monsterId: string) => {
    if (!caughtMonsters.includes(monsterId)) {
      setCaughtMonsters(prev => [...prev, monsterId]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-cyan-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Monster Collector
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover, catch, and collect amazing monsters in this exciting adventure!
          </p>
        </div>

        <CollectionStats caughtMonsters={caughtMonsters} />

        <Tabs defaultValue="catch" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="catch" className="text-lg">Catch Monsters</TabsTrigger>
            <TabsTrigger value="collection" className="text-lg">My Collection</TabsTrigger>
          </TabsList>
          
          <TabsContent value="catch">
            <CatchingArea onMonsterCaught={handleMonsterCaught} />
          </TabsContent>
          
          <TabsContent value="collection">
            <MonsterGrid caughtMonsters={caughtMonsters} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
