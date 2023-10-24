import { createContext } from 'react';
import { globType } from '@/script/index';
const globContext = createContext<Record<string, globType> | null>(null);

export default globContext;
