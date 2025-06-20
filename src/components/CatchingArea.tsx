
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { monsters } from '@/data/monsters';
import { Monster } from '@/types/monster';
import { toast } from '@/hooks/use-toast';

interface CatchingAreaProps {
  onMonsterCaught: (monsterId: string) => void;
}

export const CatchingArea = ({ onMonsterCaught }: CatchingAreaProps) => {
  const [currentMonster, setCurrentMonster] = useState<Monster | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [isCatching, setIsCatching] = useState(false);

  const searchForMonster = () => {
    setIsSearching(true);
    setCurrentMonster(null);
    
    setTimeout(() => {
      const randomMonster = monsters[Math.floor(Math.random() * monsters.length)];
      setCurrentMonster(randomMonster);
      setIsSearching(false);
    }, 2000);
  };

  const attemptCatch = () => {
    if (!currentMonster) return;
    
    setIsCatching(true);
    
    setTimeout(() => {
      const catchSuccess = Math.random() > 0.3; // 70% catch rate
      
      if (catchSuccess) {
        onMonsterCaught(currentMonster.id);
        toast({
          title: "Success!",
          description: `You caught ${currentMonster.name}!`,
        });
        setCurrentMonster(null);
      } else {
        toast({
          title: "Oh no!",
          description: `${currentMonster.name} escaped! Try again.`,
          variant: "destructive",
        });
      }
      setIsCatching(false);
    }, 1500);
  };

  return (
    <div className="max-w-md mx-auto">
      <Card className="mb-6">
        <CardContent className="p-8 text-center">
          {isSearching ? (
            <div className="animate-pulse">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <p className="text-lg font-semibold text-gray-600">Searching for monsters...</p>
            </div>
          ) : currentMonster ? (
            <div className="animate-scale-in">
              <img
                src={currentMonster.image}
                alt={currentMonster.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-lg"
              />
              <h3 className="text-2xl font-bold mb-2">{currentMonster.name}</h3>
              <p className="text-gray-600 mb-4">A wild {currentMonster.name} appeared!</p>
              <div className="flex justify-center gap-2 mb-4">
                {currentMonster.types.map((type) => (
                  <span key={type} className={`px-3 py-1 rounded-full text-sm bg-${currentMonster.color}-100 text-${currentMonster.color}-800`}>
                    {type}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <div className="w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl text-gray-400">?</span>
              </div>
              <p className="text-lg text-gray-600">Ready to search for monsters!</p>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex gap-4 justify-center">
        <Button
          onClick={searchForMonster}
          disabled={isSearching || isCatching}
          className="flex-1 max-w-xs bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold py-3"
        >
          {isSearching ? 'Searching...' : 'Search for Monster'}
        </Button>
        
        {currentMonster && (
          <Button
            onClick={attemptCatch}
            disabled={isCatching}
            className="flex-1 max-w-xs bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-3"
          >
            {isCatching ? 'Catching...' : 'Catch Monster!'}
          </Button>
        )}
      </div>
    </div>
  );
};
