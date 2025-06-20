
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Monster } from '@/types/monster';

interface MonsterCardProps {
  monster: Monster;
  isCaught: boolean;
}

export const MonsterCard = ({ monster, isCaught }: MonsterCardProps) => {
  return (
    <Card className={`overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl ${
      isCaught ? 'bg-gradient-to-br from-green-50 to-emerald-100 border-green-300' : 'bg-gray-100 opacity-60'
    }`}>
      <CardContent className="p-0">
        <div className="relative">
          <img
            src={monster.image}
            alt={monster.name}
            className={`w-full h-48 object-cover ${!isCaught ? 'grayscale' : ''}`}
          />
          {isCaught && (
            <div className="absolute top-2 right-2">
              <Badge className="bg-green-500 hover:bg-green-600">Caught!</Badge>
            </div>
          )}
          {!isCaught && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white text-lg font-semibold">???</span>
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className={`text-xl font-bold mb-2 ${isCaught ? 'text-gray-900' : 'text-gray-500'}`}>
            {isCaught ? monster.name : '???'}
          </h3>
          <div className="flex flex-wrap gap-1 mb-2">
            {isCaught ? (
              monster.types.map((type) => (
                <Badge key={type} variant="secondary" className={`bg-${monster.color}-100 text-${monster.color}-800`}>
                  {type}
                </Badge>
              ))
            ) : (
              <Badge variant="secondary" className="bg-gray-200 text-gray-500">Unknown</Badge>
            )}
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>⚡ {isCaught ? monster.power : '???'}</span>
            <span>❤️ {isCaught ? monster.health : '???'}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
