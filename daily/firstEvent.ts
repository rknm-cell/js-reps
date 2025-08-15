//given events as minutes-from-midnight and now (same units), return the title of the soonest event with start ≥ now; if none, return null.

const events = [
  { title: "standup", start: 540 },   // 9:00
  { title: "1:1",     start: 600 },   // 10:00
  { title: "retro",   start: 900 },    // 15:00
  { title: "happy hour", start: 1100},
];

const now = 601;

// expected: "retro"  // 600 has passed; next is 900```

function findSoonestEvent(now: number, events: Array<{title: string, start: number}>): string | null {
 
    const sortedEvents = events.slice().sort((a, b) => a.start - b.start);
    
    const nextEvent = sortedEvents.find(event => event.start >= now);
    
    return nextEvent ? nextEvent.title : null;
}
console.log(findSoonestEvent(now, events))
