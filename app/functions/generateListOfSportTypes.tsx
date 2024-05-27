import matches from "@/static/matches";

export default function generateListOfSportTypes() {
  try {
    const sportTypes = matches.reduce((acc, current) => {
      if (!acc.includes(current.sport_type)) {
        acc.push(current.sport_type);
      }
      return acc;
    }, []);

    return { success: true, data: sportTypes }
  } catch (e) {
    return { success: false, error: e }
  }
}

