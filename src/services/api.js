export async function getDbStatus() {
  try {
    const res = await fetch('/api/status')
    if (!res.ok) throw new Error('Status request failed')
    return await res.json()
  } catch (e) {
    return { server: 'offline', database: { connected: false, error: e.message } }
  }
}

export async function reconnectDb() {
  const res = await fetch('/api/reconnect', { method: 'POST' })
  return res.json()
}

export async function getMonthSchedules(month) {
  const res = await fetch(`/api/schedules?month=${month}`)
  if (!res.ok) throw new Error('Failed to fetch schedules')
  return res.json()
}

export async function createSchedule(data) {
  const res = await fetch('/api/schedules', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) {
    const err = await res.json()
    throw new Error(err.error || 'Failed to create schedule')
  }
  return res.json()
}

export async function updateSchedule(id, updates) {
  const res = await fetch(`/api/schedules/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates),
  })
  if (!res.ok) throw new Error('Failed to update schedule')
  return res.json()
}

export async function deleteSchedule(id) {
  const res = await fetch(`/api/schedules/${id}`, { method: 'DELETE' })
  if (!res.ok) throw new Error('Failed to delete schedule')
  return res.json()
}

export async function clearCompletedForDate(date) {
  const res = await fetch(`/api/schedules/completed/${date}`, { method: 'DELETE' })
  if (!res.ok) throw new Error('Failed to clear completed schedules')
  return res.json()
}
