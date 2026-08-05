import { db } from '../db/db'

export async function exportProgressJSON(): Promise<string> {
  const data = {
    exportedAt: new Date().toISOString(),
    version: 1,
    lessonProgress: await db.lessonProgress.toArray(),
    flashcardState: await db.flashcardState.toArray(),
    questionAttempts: await db.questionAttempts.toArray(),
    bookmarks: await db.bookmarks.toArray(),
    flaggedQuestions: await db.flaggedQuestions.toArray(),
    mockAttempts: await db.mockAttempts.toArray(),
    studySessions: await db.studySessions.toArray(),
    plannerTasks: await db.plannerTasks.toArray(),
    plannerSettings: await db.plannerSettings.toArray(),
    appSettings: await db.appSettings.toArray()
  }
  return JSON.stringify(data, null, 2)
}

export async function importProgressJSON(json: string): Promise<void> {
  const data = JSON.parse(json)
  await db.transaction('rw', db.tables, async () => {
    if (data.lessonProgress) await db.lessonProgress.bulkPut(data.lessonProgress)
    if (data.flashcardState) await db.flashcardState.bulkPut(data.flashcardState)
    if (data.questionAttempts) await db.questionAttempts.bulkPut(data.questionAttempts)
    if (data.bookmarks) await db.bookmarks.bulkPut(data.bookmarks)
    if (data.flaggedQuestions) await db.flaggedQuestions.bulkPut(data.flaggedQuestions)
    if (data.mockAttempts) await db.mockAttempts.bulkPut(data.mockAttempts)
    if (data.studySessions) await db.studySessions.bulkPut(data.studySessions)
    if (data.plannerTasks) await db.plannerTasks.bulkPut(data.plannerTasks)
    if (data.plannerSettings) await db.plannerSettings.bulkPut(data.plannerSettings)
    if (data.appSettings) await db.appSettings.bulkPut(data.appSettings)
  })
}

export async function resetAllProgress(): Promise<void> {
  await db.transaction('rw', db.tables, async () => {
    await Promise.all(db.tables.map(t => t.clear()))
  })
}

export function downloadTextFile(filename: string, content: string, mime = 'application/json') {
  const blob = new Blob([content], { type: mime })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(url)
}

export async function exportBookmarkedAndIncorrectAsText(
  bookmarkedQuestions: { text: string; options: string[]; explanation: string }[],
  incorrectQuestions: { text: string; options: string[]; explanation: string }[]
): Promise<string> {
  const render = (title: string, items: typeof bookmarkedQuestions) =>
    `${title}\n${'='.repeat(title.length)}\n\n` +
    items.map((q, i) => `${i + 1}. ${q.text}\n${q.options.map((o, j) => `   ${String.fromCharCode(65 + j)}. ${o}`).join('\n')}\n\n   Explanation: ${q.explanation}\n`).join('\n')

  return [render('Bookmarked Questions', bookmarkedQuestions), render('Previously Incorrect Questions', incorrectQuestions)].join('\n\n')
}
