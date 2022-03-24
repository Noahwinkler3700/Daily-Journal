const journal = [
    {
        id: 1,
        date: "03/23/2022",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Ok"
    }
    {
        id: 2,
        date: "03/24/2022",
        concept: "Complex Flexbox",
        entry: "I tried to have an element in my Flexbox layout also be another Flexbox layout.",
        mood: "Sad"
    }
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const getJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}