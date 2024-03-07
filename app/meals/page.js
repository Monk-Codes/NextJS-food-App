import { getMeals } from "@/lib/meals";
import MealsGrid from "./meals-grid";
import classes from "./page.module.css";
import Link from "next/link";
import { Suspense } from "react";

async function Meal() {
 const meals = await getMeals();
 return <MealsGrid meals={meals} />;
}

export default function Meals() {
 return (
  <>
   <header className={classes.header}>
    <h1>
     Delicious meals, created {""}
     <span className={classes.highlight}>By you</span>
    </h1>
    <p>Choose your fav recipe and do the magic!</p>
    <p className={classes.cta}>
     <Link href="/meals/share">Share your fav recipe</Link>
    </p>
   </header>
   <main className={classes.main}>
    <Suspense fallback={<p className={classes.loading}>Fetching Meals...</p>}>
     <Meal />
    </Suspense>
   </main>
  </>
 );
}
