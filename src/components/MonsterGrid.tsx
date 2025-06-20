
import { MonsterCard } from './MonsterCard';
import { monsters } from '@/data/monsters';

interface MonsterGridProps {
  caughtMonsters: string[];
}

export const MonsterGrid = ({ caughtMonsters }: MonsterGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {monsters.map((monster) => (
        <MonsterCard
          key={monster.id}
          monster={monster}
          isCaught={caughtMonsters.includes(monster.id)}
        />
      ))}
    </div>
  );
};
