import { useEffect, useState } from 'react';
import { Macros } from '../Services/Types';


const useTrackDailyMacro = (macros?: Macros[], proteinPortions?: number, veggiesPortions?: number, carbsPortions?: number, fatPortions?: number) => {
  let today = new Date();
  const offset = today.getTimezoneOffset()
  today = new Date(today.getTime() - (offset * 60 * 1000))
  const todayString = today.toISOString().split('T')[0]

  const [dailyMacro, setDailyMacro] = useState<Macros>({ date: todayString, protein: [], veggies: [], carbs: [], fat: [] } as Macros);

  useEffect(() => {
    const macro = (macros || []).find(macro => macro.date === todayString)
    if (macro) {
      setDailyMacro(macro)
    }
    else {
      setDailyMacro({
        date: todayString,
        protein: [...Array(proteinPortions)].map(item => false),
        veggies: [...Array(veggiesPortions)].map(item => false),
        carbs: [...Array(carbsPortions)].map(item => false),
        fat: [...Array(fatPortions)].map(item => false),
      })

      // update state with the new macro
    }
  }, [macros, proteinPortions, veggiesPortions, carbsPortions, fatPortions, todayString]);
  return { dailyMacro };
}

export default useTrackDailyMacro;