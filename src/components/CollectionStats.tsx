
import { Card, CardContent } from '@/components/ui/card';
import { monsters } from '@/data/monsters';

interface CollectionStatsProps {
  caughtMonsters: string[];
}

export const CollectionStats = ({ caughtMonsters }: CollectionStatsProps) => {
  const totalMonsters = monsters.length;
  const caughtCount = caughtMonsters.length;
  const completionPercentage = Math.round((caughtCount / totalMonsters) * 100);

  return (
    <Card className="mb-8 bg-gradient-to-r from-purple-50 to-cyan-50 border-purple-200">
      <CardContent className="p-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Collection Progress</h2>
          <div className="flex justify-center items-center gap-8 mb-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">{caughtCount}</div>
              <div className="text-sm text-gray-600">Caught</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-600">{totalMonsters}</div>
              <div className="text-sm text-gray-600">Total</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">{completionPercentage}%</div>
              <div className="text-sm text-gray-600">Complete</div>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-purple-500 to-cyan-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${completionPercentage}%` }}
            ></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
